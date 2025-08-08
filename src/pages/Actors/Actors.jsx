import { useEffect, useState } from "react";
import styles from "./Actors.module.css";
import { useActors } from "../../contexts/ActorContextProvider";
import { ActorCard } from "../../components";

const Actors = () => {
  const [actors, setActors] = useState([[]]);
  const actorsContext = useActors();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setActors(await actorsContext.actors);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchActors();
  }, [actorsContext.loading, actorsContext.error])
  
  return (
    <>
      <h1>Actors</h1>
      {actorsContext.loading
        ? <h1>Loading...</h1>
        : <div className={styles.container}>
          {actors.map(a => (
            <ActorCard key={Math.random()} actorName={a.FullName} actorId={a.ID}>
              <div>{a.ID}</div>
              <div>{a.FullName}</div>
              <div>{a.BirthDate}</div>
            </ActorCard>
          ))}
        </div>
      }
    </>
  )
};

export default Actors;