import { useParams } from "react-router-dom";
import { useState } from "react";

import styles from "./ActorDetails.module.css";
import { ActorDetailsHeader, DetailsCard, DetailsCardContainer } from "../../components";

import { useGetActor } from "../../queries/actorsQuery/useGetActor";
import { useGetMoviesByActor } from "../../queries/actorsQuery/useGetMoviesByActor";
import { useGetMovies } from "../../queries/moviesQuery/useGetMovies";

const ActorDetails = () => {
    const { actorId } = useParams();
    const [editing, setEditing] = useState(false);
    const { error: actorError, isFetching: isActorFetching, data: actor } = useGetActor(actorId);
    const { error: moviesByActorError, isFetching: areMoviesByActorFetching, data: moviesByActor } = useGetMoviesByActor(actorId); //may be extracted by all movies query
    const { error: allMoviesError, isFetching: areAllMoviesFetching, data: allMovies } = useGetMovies();

    const editingHandler = () => {
        setEditing(!editing);
    };

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
                    }}
                        editingHandler={editingHandler}
                        editing={editing}
                    ></ActorDetailsHeader>
            }
            <DetailsCardContainer type={"movie"}>
                {moviesByActorError || allMoviesError
                    ? <h1 className={styles.error}>{moviesByActorError?.message || allMoviesError?.message}</h1>
                    : areMoviesByActorFetching || areAllMoviesFetching
                    ? <h1>Loading...</h1>
                    : moviesByActor?.map(m => (
                        <DetailsCard details={m} key={m.movieId} editing={editing} selectOptions={allMovies} />
                        ))
                }
            </DetailsCardContainer>
        </div>
    )
};

export default ActorDetails;