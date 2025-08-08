import { useEffect, useState } from "react";
import styles from "./Actors.module.css";
import { useActors } from "../../contexts/ActorContextProvider";

const Actors = () => {
  const [actors, setActors] = useState([[]]);
  const actorsContext = useActors();

  useEffect(() => {

  }, [])

  return (
    <h1>Actors</h1>
  )
};

export default Actors;