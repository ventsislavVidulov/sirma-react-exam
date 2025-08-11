import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./ActorDetails.module.css";
import { useActors } from "../../contexts/ActorsContextProvider";
import { CustomButton, FaGear } from "../../ui";
import { DetailsHeader } from "../../components";

const ActorDetails = () => {
    const [actor, setActor] = useState({});
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const { actorId } = useParams();
    const actorsContext = useActors();

    useEffect(() => {
        const fetchActor = async () => {
            try {
                if (actorsContext.error) {
                    throw new Error(actorsContext.error.message);
                }
                setActor(await actorsContext.getActorById(actorId));
                setMovies(await actorsContext.getMoviesByActor(actorId));
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
                : 
                    <DetailsHeader details={{
                        title: actor.FullName,
                        info: `Actor birth date: ${new Date(actor.BirthDate).toDateString()}`,
                        actorId: actor.ID
                    }}></DetailsHeader>
            }
            <div className={styles.moviesList}>
                {movies.map(m => (
                    <Link to={`/movies/${m.movieId}`} className={styles.movieCard} key={m.movieId}>
                        <div className={styles.movieTitle}>{m.movieTitle}</div>
                        <div className={styles.role}>Role: {m.role}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default ActorDetails;