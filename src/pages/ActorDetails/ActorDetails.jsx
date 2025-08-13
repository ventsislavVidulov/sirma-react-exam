import { Link, useParams } from "react-router-dom";

import styles from "./ActorDetails.module.css";
import { ActorDetailsHeader, DetailsCard, DetailsCardContainer } from "../../components";

import { useGetActor } from "../../queries/actorsQuery/useGetActor";
import { useGetMoviesByActor } from "../../queries/actorsQuery/useGetMoviesByActor";

const ActorDetails = () => {
    const { actorId } = useParams();
    const { error: actorError, isFetching: isActorFetching, data: actor } = useGetActor(actorId);
    const { error: moviesError, isFetching: areMoviesFetching, data: movies } = useGetMoviesByActor(actorId);

    return (
        <div className={styles.container}>
            {actorError
                ? <h1 className={styles.error}>{actorError.message}</h1>
                : isActorFetching
                    ? <h1>Loading...</h1>
                    : <ActorDetailsHeader details={{
                        title: actor?.FullName,
                        info: actor?.BirthDate,
                        actorId: actor?.ID
                    }}></ActorDetailsHeader>
            }
            <DetailsCardContainer type={"movie"}>
                {moviesError
                    ? <h1 className={styles.error}>{moviesError.message}</h1>
                    : areMoviesFetching
                        ? <h1>Loading...</h1>
                        : movies?.map(m => (
                            <DetailsCard details={m} key={m.movieId} />
                        ))
                }
            </DetailsCardContainer>
        </div>
    )
};

export default ActorDetails;