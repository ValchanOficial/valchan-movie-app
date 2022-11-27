import { useState } from "react";
import { Movie } from "../MovieCard";
import MovieList from "../MovieList";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&query=${String(query)}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Ex.: Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Buscar
        </button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default SearchMovies;
