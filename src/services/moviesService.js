import { MOVIES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";

let movies = [];

export default {
    async getAll() {
        if (movies.length === 0) {
            try {
                movies = await mapCSVToObject(CSVReaderAsync, MOVIES_FILE_PATH);
            } catch (error) {
                console.error(error.messge);
                throw new Error(error.message)
            }
            console.log(movies)
        }
        return [...movies]; //returns new reference to avoid mutation
    },

    async getById(movieId) { //returns new reference of the object we are looking for or 'No movie found with this id'
        try {
            const movie = (await this.getAll()).find(m => m.ID = movieId);
            if (movie) {
                return { ...movie }; //returns new reference to avoid mutations
            } else {
                throw new Error("No movie found with this id");
            }
        } catch (error) {
            console.error(error.message);
            throw new Error(error.message);
        }

    }
}