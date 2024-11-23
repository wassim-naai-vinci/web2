import Movie from "../type";

interface displayMovieProps {
  movie: Movie;
}

const DisplayMovie = ({ movie }: displayMovieProps) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      {movie.url && <img src={movie.url} alt={movie.title} />}
      <p>
        <strong>Réalisateur : {movie.director}</strong>
      </p>
      <p>
        <strong>Durée : {movie.during}</strong>
      </p>
      {movie.budget && (
        <p>
          <strong>Budget : {movie.budget} Millions</strong>
        </p>
      )}
      {movie.description && (
        <p>
          <strong>Description : {movie.description}</strong>
        </p>
      )}
    </div>
  );
};

export default DisplayMovie;
