import { MOVIES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";
import{ getActorsByMovieUtil } from "../utils/getActorsByMovieUtil";
import rolesService from "./rolesService";
import actorsService from "./actorsService";

let movies = [];

const getAll = async () => {
    if (movies.length === 0) {
        try {
            movies = await mapCSVToObject(CSVReaderAsync, MOVIES_FILE_PATH);
        } catch (error) {
            console.error(error.messge);
            throw new Error(error.message);
        }
    }
    return [...movies]; //returns new reference to avoid mutation
};

const getById = async (movieId) => { //returns new reference of the object we are looking for or 'No movie found with this id'
    try {
        const movie = (await getAll()).find(m => m.ID == movieId);

        if (movie) {
            return { ...movie }; //returns new reference to avoid mutations
        } else {
            throw new Error("No movie found with this id");
        }
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

const getActorsByMovie = async (movieId) => {
    const roles = await rolesService.getAll();
    const actors = await actorsService.getAll();    
    return getActorsByMovieUtil( actors, roles, movieId);
};
    
export default {
    getAll,
    getById,
    getActorsByMovie
};