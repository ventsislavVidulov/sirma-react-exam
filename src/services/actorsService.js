import { ACTORS_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";

export default {
    async getAll() {
        const actors = await mapCSVToObject(CSVReaderAsync, ACTORS_FILE_PATH);
        return [...actors]; //returns new reference to avoid mutation
    },

    async getById(actorId) { //returns new reference of the object we are looking for or 'No actor found with this id'
        const actor = (await this.getAll()).find(a => a.ID = actorId);

        if (actor) {
            return {...actor}; //returns new reference to avoid mutations
        } else {
            console.log('No actor found with this id');
            return 'No movie actor with this id';
        }
    }
}