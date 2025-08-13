import styles from "./AddMovie.module.css";
import { AddMovieHeader } from "../../components";

const AddMovie = () => {
    return (
        <div className={styles.container}>
            <AddMovieHeader />
        </div>
    )
};

export default AddMovie;