import { MOVIES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";

export default {
    async getAll() {
        const movies = await mapCSVToObject(CSVReaderAsync, MOVIES_FILE_PATH);
        return [...movies];
    },

    async getById(movieId) { //returns new reference of the object we are looking for or 'No movie found with this id'
        const movie = (await this.getAll()).find(m => m.ID = movieId);

        if (movie) {
            return {...movie};
        } else {
            console.log('No movie found with this id');
            return 'No movie found with this id';
        }
    }
}