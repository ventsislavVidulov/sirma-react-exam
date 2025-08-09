import styles from "./Navigation.module.css";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <Link className={[styles.link]} to={"/"}>Home</Link>
      <Link className={styles.link} to={"/movies"}>Movies</Link>
      <Link className={styles.link} to={"/actors"}>Actors</Link>
    </nav>
  )
};

export default Navigation;