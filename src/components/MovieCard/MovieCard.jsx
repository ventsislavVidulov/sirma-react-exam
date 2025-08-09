import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

const MovieCard = ({movieId, movieName}) => {
 return (
        <Link to={`/movies/${movieId}`} className={styles.container}>
            <h1>{movieName}</h1>
            <img src="/film-movie-reel-icon.svg" alt="Movie poster" className={styles.image}/>
        </Link>
    )
}

export default MovieCard