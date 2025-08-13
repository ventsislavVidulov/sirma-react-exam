import { Link } from "react-router-dom";
import styles from "./AddCard.module.css"

const AddCard = ({link}) => {
    return (
        <Link to={link} className={styles.container}>
            <h1 className={styles.header}>Add movie</h1>
            <img src="/add-symbol.svg" alt="Add movie plus symbol" className={styles.image}/>
        </Link>
    )
};

export default AddCard;