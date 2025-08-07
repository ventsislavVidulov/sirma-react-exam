import actorsService from "../services/actorsService";
import rolesService from "../services/rolesService";
import moviesService from "../services/moviesService";

export const getTheActorsThatActedToghetherInMostMovies = async () => {
    const roles = await rolesService.getAll();
    const actors = await actorsService.getAll();
    const movies = await moviesService.getAll();
    roles.forEach(r => { //add property actors: string[] with the ids of the actors played in that movie
        const curnetMovie = movies.find(m => m.ID === r.MovieID);
        curnetMovie.hasOwnProperty('actors') ? curnetMovie.actors.push(r.ActorID) : curnetMovie.actors = [r.ActorID];
    });

    const actorPairs = []; //array for all unique actor pairs of type {pairIds: '1,2', commonMoviesCount: 2, commonMovies: [3, 15]}
    movies.forEach(m => {
        if (m.actors) {
            const currentActorsIdsArray = [...m.actors] //convert ids to numbers and sort them to avoid duplicating of "type" '2,4' and '4,2'
            .map(aId => Number(aId))
            .sort((a, b) => a - b);
            for (let i = 0; i < currentActorsIdsArray.length - 1; i++) {
                for (let j = i + 1; j < currentActorsIdsArray.length; j++) {
                    const firstActorId = currentActorsIdsArray[i];
                    const secondActorId = currentActorsIdsArray[j];
                    const currentActorPair = actorPairs.find(ap => ap.pairIds === `${firstActorId},${secondActorId}`);
                    if (currentActorPair) {
                        currentActorPair.commonMoviesCount++;
                        currentActorPair.commonMovies.push(m.ID);
                    } else {
                        actorPairs.push({ pairIds: `${firstActorId},${secondActorId}`, commonMoviesCount: 1, commonMovies: [m.ID] });
                    }
                }
            }
        }
    });
    actorPairs.sort((a, b) => b.commonMoviesCount - a.commonMoviesCount); //sort the actor pairs common movies count in descending order
    const topActorsPairMoviesCount = actorPairs[0].commonMoviesCount; 
    const topActorPairs = []; //returning array of top actors pairs if they are more than one
    actorPairs.forEach(ap => ap.count === topActorsPairMoviesCount ? topActorPairs.push(ap) : null)
    return topActorPairs;
};
