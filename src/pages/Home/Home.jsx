import { ActorCard } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div className={styles.container}>
                <ActorCard />
                <ActorCard />
            </div>
        </>
    )
};

export default Home;