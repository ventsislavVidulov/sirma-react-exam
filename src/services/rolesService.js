import { ROLES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";

export default {
    async getAll() {
        const roles = await mapCSVToObject(CSVReaderAsync, ROLES_FILE_PATH);
        return [...roles]; //returns new reference to avoid mutation
    },

    async getById(roleId) { //returns new reference of the object we are looking for or 'No role found with this id'
        const role = (await this.getAll()).find(r => r.ID = roleId);

        if (role) {
            return { ...role }; //returns new reference to avoid mutations
        } else {
            console.log('No role found with this id');
            return 'No role found with this id';
        }
    }
}