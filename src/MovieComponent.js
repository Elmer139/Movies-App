import { movies } from "./data/movies.js";
import Movie from "./Movie.js";
import "./movies.css";

const fetchMovieData = () => {
  return movies;
};

const MovieComponent = () => {
  const movieData = fetchMovieData();
  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
