import { Link } from "react-router-dom";
import styles from "./ActorCard.module.css"

const ActorCard = ({ actorName, actorId }) => {
    return (
        <Link to={`/actors/${actorId}`} className={styles.container}>
            <h1 className={styles.header}>{actorName}</h1>
            <img src="/culture-cinema-icon.svg" alt="Image of the actor" className={styles.image}/>
        </Link>
    )
};

export default ActorCard;