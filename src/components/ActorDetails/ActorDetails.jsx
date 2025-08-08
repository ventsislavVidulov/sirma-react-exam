import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ActorDetails.module.css";
import { useActors } from "../../contexts/ActorContextProvider";


const ActorDetails = () => {
    const [actor, setActor] = useState({});
    const [movies, setMovies] = useState([])
    const { actorId } = useParams();
    const { getActorById, error, getMoviesByActor } = useActors();

    useEffect(() => {
        const fetchActor = async () => {
            try {
                setActor(await getActorById(actorId));
                setMovies(await getMoviesByActor(actorId));
            } catch (err) {
                console.log(err);
            }
        }
        fetchActor();
    }, [actorId]);

    return (
        <>
            {error ? <h1>{error.message}</ h1 >
                : <h1>{actor.FullName}</h1>}
            {
                movies.map(m => {
                    return (
                        <div className={styles.container} key={m.movieId}>
                            <div>{m.movieTitle}</div>
                            <div>{m.role}</div>
                        </div>
                    )
                })
            }
        </>
    )
};
export default ActorDetails;