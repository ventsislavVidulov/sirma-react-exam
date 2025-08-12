import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useMovies } from "../../contexts/MoviesContextProvider";
import styles from "./MovieDetails.module.css";
import { MovieDetailsHeader } from "../../components";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState([]);
    const [error, setError] = useState('');
    const { movieId } = useParams();
    const moviesContext = useMovies();

    useEffect(() => {
        const fetchActor = async () => {
            try {
                if (moviesContext.error) {
                    throw new Error(moviesContext.error.message);
                }
                setMovie(await moviesContext.getMovieById(movieId));
                setActors(await moviesContext.getActorsByMovie(movieId));
            } catch (err) {
                setError(err.message);
            }
        }
        fetchActor();
    }, []);

    return (
        <div className={styles.container}>
            {error
                ? <h1 className={styles.error}>{error}</h1>
                :   <MovieDetailsHeader details={{
                        title: movie.Title,
                        info: `Movie release date: ${new Date(movie.ReleaseDate).toDateString()}`,
                        movieId: movie.ID
                    }}></MovieDetailsHeader>
            }
            <div className={styles.actorsList}>
                {actors.map(a => (
                    <Link to={`/actors/${a.actorId}`} className={styles.actorCard} key={a.actorId}>
                        <div className={styles.actorTitle}>{a.actorName}</div>
                        <div className={styles.role}>Role: {a.role}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default MovieDetails;