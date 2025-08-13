import styles from "./DetailsCard.module.css";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ details }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (details.actorId) {
            navigate(`/actors/${details.actorId}`);
        } else if (details.movieId) {
            navigate(`/movies/${details.movieId}`);
        }
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <h2 className={styles.cardTitle}>{details.movieTitle ? details.movieTitle : details.actorName}</h2>
            <p className={styles.role}>Role: {details.role}</p>
        </div>
    );
}

export default DetailsCard;