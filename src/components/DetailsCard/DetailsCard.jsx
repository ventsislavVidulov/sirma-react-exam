import styles from "./DetailsCard.module.css";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ details, selectOptions, disabled, editing }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (details.actorId) {
            navigate(`/actors/${details.actorId}`);
        } else if (details.movieId) {
            navigate(`/movies/${details.movieId}`);
        }
    };

    const selectedTitle = details.movieTitle || details.actorName;

    return (
        <>
            {!editing ? (
                <div className={styles.card} onClick={handleClick}>
                    <div className={styles.cardTitle}>{selectedTitle}</div>
                    <div className={styles.role}>Role: {details.role}</div>
                </div>
            ) : (
                <div className={styles.card}>
                    <select
                        className={styles.cardTitle}
                        disabled={disabled}
                        value={selectedTitle}
                        onChange={() => {}} 
                    >
                        {selectOptions?.map((option) => (
                            <option key={option.ID} value={option.Title}>
                                {option.Title}
                            </option>
                        ))}
                    </select>
                    <input
                        className={styles.role}
                        value={`Role: ${details.role}`}
                    />
                </div>
            )}
        </>
    );
};

export default DetailsCard;