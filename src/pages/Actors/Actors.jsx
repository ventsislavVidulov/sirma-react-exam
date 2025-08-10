import { useEffect, useState } from "react";
import styles from "./Actors.module.css";
import { useActors } from "../../contexts/ActorsContextProvider";
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
    <section className={styles.page}>
      <h1>Actors</h1>
      {actorsContext.loading
        ? <h1>Loading...</h1>
        : actorsContext.error ? 
        <h1 className={styles.error}>{actorsContext.error}</h1>
        : <div className={styles.container}>
          {actors.map(a => (
            <ActorCard key={Number(a.ID)} actorName={a.FullName} actorId={a.ID} />
          ))}
        </div>
      }
    </section>
  )
};

export default Actors;