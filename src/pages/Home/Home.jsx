import { useEffect, useState } from "react";

import styles from "./Home.module.css";
import { ActorCard } from "../../components";
import { useActors} from "../../contexts/ActorContextProvider";

const Home = () => {
    const [topActors, setTopActors] = useState([]);
    const { loading, error, getTopActors } = useActors();

    useEffect(() => {
        if (!loading && !error) {
            const fetchTopActors = async () => {
                try {
                    setTopActors(await getTopActors());
                } catch (err) {
                    console.error(err.message);
                }
            };
            fetchTopActors();
        }
    }, [loading, error, getTopActors]);

    return (
        <>
            <h1>Home</h1>
            {loading ?
                <h1>Loading...</h1> :
                error ?
                    <h1>{actorsContext.error}</h1> :
                    topActors.map(ta =>
                    (< div className={styles.container} key={`${ta.pairIds[0]}${ta.pairIds[1]}}`}>
                        <ActorCard actorName={ta.pairNames[0]} actorId={ta.pairIds[0]} />
                        <ActorCard actorName={ta.pairNames[1]} actorId={ta.pairIds[1]} />
                    </div >)
                    )
            }
        </>
    )
};

export default Home;