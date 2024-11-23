import Movie from "../type";
import DisplayMovie from "./displayMovie";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul>
        <li>
          {movies.map((movie) => (
            <DisplayMovie key={movie.title} movie={movie} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MovieList;
