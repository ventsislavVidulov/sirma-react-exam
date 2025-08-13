import { Link, useParams } from "react-router-dom";

import { useGetMovie } from "./../../queries/moviesQuery/useGetMovie";
import { useGetActorsByMovie } from "./../../queries/moviesQuery/useGetActorsByMovie";
import styles from "./MovieDetails.module.css";
import { DetailsCard, MovieDetailsHeader } from "../../components";

const MovieDetails = () => {
    const { movieId } = useParams();
    const { error: movieError, isFetching: isMovieFetching, data: movie } = useGetMovie(movieId);
    const { error: actorsError, isFetching: areActorsFetching, data: actors } = useGetActorsByMovie(movieId);

    return (
        <div className={styles.container}>
            {movieError
                ? <h1 className={styles.error}>{movieError.message}</h1>
                : isMovieFetching
                    ? <h1>Loading...</h1>
                    : <MovieDetailsHeader details={{
                        title: movie?.Title,
                        info: movie?.ReleaseDate,
                        movieId: movie?.ID
                    }}></MovieDetailsHeader>
            }
            <div className={styles.actorsList}>
                {actorsError
                    ? <h1 className={styles.error}>{actorsError.message}</h1>
                    : areActorsFetching
                        ? <h1>Loading...</h1>
                        : actors?.map(a => (
                            <DetailsCard details={a} key={a.actorId} />
                        ))}
            </div>
        </div>
    )
};

export default MovieDetails;