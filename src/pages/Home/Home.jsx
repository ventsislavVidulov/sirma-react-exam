import styles from "./Home.module.css";
import { ActorCard } from "../../components";
import { useGetTopActors } from "../../queries/actorsQuery/useGetTopActors";

const Home = () => {
    const { isError: error, isFetching: loading, data: topActors, } = useGetTopActors();

    return (
        <section className={styles.page}>
            <h1>Wellcome to the movie database</h1>
            {loading
                ? <h1>Loading...</h1>
                : error
                    ? <h1 className={styles.error}>{actorsContext.error}</h1>
                    : topActors.length === 1
                        ? <h1>Our top actors are</h1>
                        : <h1>We have {topActors.length} top actor pairs</h1>
            }
            {topActors.map(ta =>
            (< div className={styles.container} key={`${ta.pairIds[0]}${ta.pairIds[1]}}`}>
                <ActorCard actorName={ta.pairNames[0]} actorId={ta.pairIds[0]} />
                <ActorCard actorName={ta.pairNames[1]} actorId={ta.pairIds[1]} />
            </div >)
            )}
        </section>
    )
};

export default Home;