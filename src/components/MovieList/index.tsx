import MovieCard, { Movie } from "../MovieCard";

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="card-list">
      {movies
        .filter((movie: Movie) => movie.poster_path)
        .map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
