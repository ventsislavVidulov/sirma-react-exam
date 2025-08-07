import styles from "./Navigation.module.css";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <>
      <h1>Navigation</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
          <Link to={"/actors"}>Actors</Link>
      </nav>
    </>
  )
};

export default Navigation;