import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Home.module.css";
import { ActorCard } from "../../components";
import { useActors } from "../../contexts/ActorsContextProvider";

const Home = () => {
    const [topActorsIds, setTopActorsIds] = useState([]);
    const [error, setError] = useState('');
    const [actors, setActors] = useState([]);
    const actorsContext = useActors();
    const location = useLocation();

    useEffect(() => {
        const fetchTopActors = async () => {
            try {
                const topActors = (await actorsContext.getTopActors()).map(ta => ta.pairIds);
                setTopActorsIds(topActors);
                setActors(await actorsContext.actors)
            } catch (error) {
                setError(error.message);
            }
        };
        fetchTopActors();
    }, [location.pathname]);

    return (
        <>
            <h1>Home</h1>
            {actorsContext.loading ?
                    <h1>Loading</h1> :
                    actorsContext.error || error ?
                        <h1>{actorsContext.error}</h1> :
                        <div className={styles.container}>
                            <ActorCard actorName={topActorsIds[0]?.[0]} />
                            <ActorCard actorName={topActorsIds[0]?.[1]} />
                        </div>
            }
        </>
    )
};

export default Home;