import { ROLES_FILE_PATH } from "../constants";
import { mapCSVToObject } from "../utils/objectCSVMapper";
import { CSVReaderAsync } from "../utils/CSVParser";

let roles = [];

export default {
    async getAll() {
        if (roles.length === 0) {
            try {
                roles = await mapCSVToObject(CSVReaderAsync, ROLES_FILE_PATH);
            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        }
        return [...roles]; //returns new reference to avoid mutation
    },

    async getById(roleId) { //returns new reference of the object we are looking for or 'No role found with this id'
        try {
            const role = (await this.getAll()).find(r => r.ID = roleId);
            if (role) {
                return { ...role }; //returns new reference to avoid mutations
            } else {
                throw new Error('No role found with this id');
            }
        } catch (error) {
            console.error(error.message);
            throw new Error(error.message);
        }
    },
}