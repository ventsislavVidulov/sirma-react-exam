import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import { MovieCard } from "../../components";
import { useMovies } from "../../contexts/MoviesContextProvider";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const moviesContext = useMovies();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setMovies(await moviesContext.movies);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovies();
  }, [moviesContext.loading, moviesContext.error]);

  return (
    <section className={styles.page}>
      <h1>Movies</h1>
      {moviesContext.loading
        ? <h1>Loading...</h1>
        : moviesContext.error
          ? <h1 className={styles.error}>{moviesContext.error}</h1>
          : <div className={styles.container}>
            {movies.map(m => <MovieCard movieId={m.ID} movieName={m.Title} key={m.ID}/>)}
          </div>
      }
    </section>
  )
};

export default Movies;