import { ACTORS_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";
import { getTheActorsThatActedToghetherInMostMovies } from "../utils/getTheActorsThatActedToghetherInmostMovies";

let actors = [];

const getAll = async () => {
    if (actors.length === 0) {
        try {
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
        const actor = (await getAll()).find(a => a.ID == actorId);
        if (actor) {
            return { ...actor }; //returns new reference to avoid mutations
        } else {
            throw new Error('No actor found with this id')
        }
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

const getTopActors = async (actors, roles, movies) => {
    try {
        const topActors = getTheActorsThatActedToghetherInMostMovies(actors, roles, movies);
        return topActors;
    } catch (error) {
        console.error(error.message)
        throw new Error(error.message);
    }
};

export default {
    getAll,
    getById,
    getTopActors
};