export interface Movie {
  id: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseDateFormatted = new Date(movie.release_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card">
      <img
        className="card--image"
        src={posterUrl}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small className="card--release-date">
            Release Date: {releaseDateFormatted}
          </small>
        </p>
        <p>
          <small className="card--score">Score: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
