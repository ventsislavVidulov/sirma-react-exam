import { Link } from "react-router-dom";
import styles from "./AddCard.module.css"

const AddCard = ({link, header, imgSrc, imgAlt}) => {
    return (
        <Link to={link} className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <img src={imgSrc} alt={imgAlt} className={styles.image}/>
        </Link>
    )
};

export default AddCard;