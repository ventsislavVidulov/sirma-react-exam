import actorsService from "../services/actorsService";
import rolesService from "../services/rolesService";
import moviesService from "../services/moviesService";

export const getTheActorsThatActedToghetherInMostMovies = async () => {
    const roles = await rolesService.getAll();
    const actors = await actorsService.getAll();
    const movies = await moviesService.getAll();
    roles.forEach(r => {
        const curnetMovie = movies.find(m => m.ID === r.MovieID);
        curnetMovie.hasOwnProperty('actors') ? curnetMovie.actors.push(r.ActorID) : curnetMovie.actors = [r.ActorID];
    });
    console.log(movies[10]);

    const actorPairs = [];
    movies.forEach(m => {
        if (m.actors) {
            const currentActorsArray = [...m.actors];
            for (let i = 0; i < currentActorsArray.length - 1; i++) {
                for (let j = i + 1; j < currentActorsArray.length; j++) {
                    if (Number(currentActorsArray[i]) > Number(currentActorsArray[j])) {
                        const currentActorPair = actorPairs.find(ap => ap.pair === `${currentActorsArray[j]},${currentActorsArray[i]}`);
                        if (currentActorPair) {
                            currentActorPair.count++;
                            currentActorPair.commonMovies.push(m.ID);
                        } else {
                            actorPairs.push({ pair: `${currentActorsArray[j]},${currentActorsArray[i]}`, count: 1, commonMovies: [m.ID] });
                        }
                    } else {
                        const currentActorPair = actorPairs.find(ap => ap.pair === `${currentActorsArray[i]},${currentActorsArray[j]}`);
                        if (currentActorPair) {
                            console.log(m.ID);
                            currentActorPair.count++;
                            currentActorPair.commonMovies.push(m.ID);
                        } else {
                            actorPairs.push({ pair: `${currentActorsArray[i]},${currentActorsArray[j]}`, count: 1, commonMovies: [m.ID] });
                        }
                    }
                }
            }
        }
    });
    actorPairs.sort((a, b) => b.count - a.count);
    actorPairs.forEach(ap => console.log(ap));
};
