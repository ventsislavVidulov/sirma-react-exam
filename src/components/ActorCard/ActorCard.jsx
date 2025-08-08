import styles from "./ActorCard.module.css"

const ActorCard = ({ actorName }) => {
    return (
        <div className={styles.container}>
            <h1>{actorName}</h1>
            <img src="/culture-cinema-icon.svg" alt="Image of the actor" />
        </div>
    )
};

export default ActorCard;