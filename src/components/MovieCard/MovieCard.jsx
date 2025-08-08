import styles from "./MovieCard.module.css";

const MovieCard = () => {
 return (
        <Link to={`/movies/${movieId}`} className={styles.container}>
            <h1>{movieName}</h1>
            <img src="/film-movie-reel-icon" alt="Movie poster" className={styles.image}/>
        </Link>
    )
}

export default MovieCard