import styles from "./Home.module.css";
import { ActorCard } from "../../components";
import { useActors } from "../../contexts/ActorsContextProvider";
import { useEffect, useState } from "react";

const Home = () => {
    const [topActors, setTopActors] = useState([]);
    const [actors, setActors] = useState([]);
    const actorsContext = useActors();

    useEffect(() => {
        const fetchTopActors = async () => {
            try {
                setTopActors(await actorsContext.getTopActors());
                // console.log(await actorsContext.actors);
                setActors(await actorsContext.actors)
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchTopActors();
    }, [])
 
    return (
        <>
            <h1>Home</h1>
            {actorsContext.loading ?
                <h1>Loading</h1> :
                <div className={styles.container}>
                    <ActorCard />
                    <ActorCard />
                </div>
            }
        </>
    )
};

export default Home;