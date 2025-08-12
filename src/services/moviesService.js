import { MOVIES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";
import { getActorsByMovieUtil } from "../utils/getActorsByMovieUtil";
import rolesService from "./rolesService";
import actorsService from "./actorsService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";

let movies = [];

const getAll = async () => {
    if (movies.length === 0) {
        try {
            await simulatedDelay(DELAY_IN_MILISECONDS);
            // throw new Error("Test error from moviesService"); //simulating an error for testing purposes
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
        await simulatedDelay(DELAY_IN_MILISECONDS);
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
    try {
        await simulatedDelay(DELAY_IN_MILISECONDS);
        const actors = await actorsService.getAll();
        const roles = await rolesService.getAll();
        return getActorsByMovieUtil(actors, roles, movieId);
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

const updateMovie = async (movieId, movieData) => {
    try {
        await simulatedDelay(DELAY_IN_MILISECONDS);
        const movieIndex = movies.findIndex(m => m.ID == movieId);
        if (movieIndex === -1) {
            throw new Error("No movie found with this id");
        }
        movies[movieIndex] = { ...movies[movieIndex], ...movieData };
        return { ...movies[movieIndex] }; //returns new reference to avoid mutations
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export default {
    getAll,
    getById,
    getActorsByMovie,
    updateMovie
};