import MovieComponent from "./MovieComponent";

const Movie = ({ movie }) => {
  const formatActors = (actors) => {
    const actorsArray = actors.split(", ");
    const lastActorIndex = actorsArray.length - 1;
    if (actorsArray.length > 1) {
      actorsArray[lastActorIndex] = `and ${actorsArray[lastActorIndex]}`;
    }
    return actorsArray.join(", ");
  };

  const cleanReleaseDate = (releaseDate) => {
    if (releaseDate.trim().endsWith("–")) {
      return releaseDate.slice(0, -1).trim();
    }
    return releaseDate;
  };

  const getRandomImage = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <li className="movie" key={movie.imdbID}>
      <img src={getRandomImage(movie.Images)} alt={movie.Title} />
      <div className="cardCopy">
        <h3>{movie.Title}</h3>
        <p>
          <strong>Released:</strong> {cleanReleaseDate(movie.Year)}
        </p>
        <p>
          {" "}
          <strong>Staring: </strong>
          {formatActors(movie.Actors)}.
        </p>
        <p>
          <strong>Rated:</strong> {movie.Rated}
        </p>
      </div>
    </li>
  );
};

export default Movie;
