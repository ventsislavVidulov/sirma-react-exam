import styles from "./Actors.module.css";
import { ActorCard } from "../../components";
import { useGetActors } from "../../queries/actorsQuery/useGetActors";

const Actors = () => {
  const { data: actors, isError: error, isFetching: loading } = useGetActors();

  return (
    <section className={styles.page}>
      <h1>Actors</h1>
      {loading
        ? <h1>Loading...</h1>
        : error ?
          <h1 className={styles.error}>{actorsQuery.error}</h1>
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