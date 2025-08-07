import styles from "./Navigation.module.css";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
      </nav>
      <h1 className={styles.link}>Navigation</h1>
    </>
  )
};

export default Navigation;