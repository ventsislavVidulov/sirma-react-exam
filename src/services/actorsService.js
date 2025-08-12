import { ACTORS_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";
import { getTopActorsUtil } from "../utils/getTopActorsUtil";
import { getMoviesByActorUtil } from "../utils/getMoviesByActorUtil";
import rolesService from "./rolesService";
import moviesService from "./moviesService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";

let actors = [];

const getAll = async () => {
    if (actors.length === 0) {
        try {
            // throw new Error("`Test error from actorsService`"); //simulating an error for testing purposes
            await simulatedDelay(DELAY_IN_MILISECONDS);
            actors = await mapCSVToObject(CSVReaderAsync, ACTORS_FILE_PATH);
        } catch (error) {
            console.error(error.message);
            throw new Error(error.message);
        }
    }
    return [...actors]; //returns new reference to avoid mutation
};

const getById = async (actorId) => { //returns new reference of the object we are looking for or 'No actor found with this id'
    try {
        await simulatedDelay(DELAY_IN_MILISECONDS);
        const actor = (await getAll()).find(a => a.ID == actorId);
        if (actor) {
            // throw new Error('Test error'); //simulating an error for testing purposes
            return { ...actor }; //returns new reference to avoid mutations
        } else {
            throw new Error('No actor found with this id')
        }
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

const getTopActors = async () => {
    try {
        await simulatedDelay(DELAY_IN_MILISECONDS);
        const [actors, roles, movies] = await Promise.all([
            getAll(),
            rolesService.getAll(),
            moviesService.getAll()
        ]);
        const topActors = getTopActorsUtil(movies, roles, actors);
        return topActors;
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message);
    }
};

const getMoviesByActor = async (actorId) => {
    try {
        await simulatedDelay(DELAY_IN_MILISECONDS);
        const [movies, roles] = await Promise.all([
            moviesService.getAll(), 
            rolesService.getAll()
        ]);
        return getMoviesByActorUtil(movies, roles, actorId);
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

const updateActor = async (actorId, updatedActor) => {
    try {
        // await simulatedDelay(DELAY_IN_MILISECONDS);
        const actorsList = await getAll();
        const actorIndex = actorsList.findIndex(a => a.ID == actorId);
        if (actorIndex === -1) {
            throw new Error('No actor found with this id');
        }
        actorsList[actorIndex] = { ...actorsList[actorIndex], ...updatedActor };
        actors = actorsList; // update the cached actors list
        return { ...actorsList[actorIndex] }; // return the updated actor
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

export default {
    getAll,
    getById,
    getTopActors,
    getMoviesByActor,
    updateActor,
};