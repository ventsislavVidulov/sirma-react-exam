import { useGetMovies } from "../../queries/moviesQuery/useGetMovies";
import styles from "./Movies.module.css";
import { MovieCard, AddCard } from "../../components";

const Movies = () => {
  const { isError, error, isFetching: loading, data: movies } = useGetMovies();

  return (
    <section className={styles.page}>
      <h1>Movies</h1>
      {isError
        ? <h1 className={styles.error}>{error.message}</h1>
        : loading
          ? <h1>Loading...</h1>
          : <div className={styles.container}>
            <AddCard link={'/add-movie'} />
            {movies?.map(m => <MovieCard movieId={m.ID} movieName={m.Title} key={m.ID} />)}
          </div>
      }
    </section>
  )
};

export default Movies;