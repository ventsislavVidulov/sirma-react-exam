import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ActorDetails.module.css";
import { useData } from "../../contexts/DataContextProvider";


const ActorDetails = () => {
    const [actor, setActor] = useState({});
    const [movies, setMovies] = useState([])
    const { actorId } = useParams();
    const { getActorById, error, getMoviesByActor } = useData();

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
    }, [actorId])

    console.log(movies);

    return (
        <>
            {error ? <h1>{error.message}</ h1 >
                : <h1>{actor.FullName}</h1>}
            {
                movies.map(m => {
                    return (
                        <div key={m.movieId}>
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