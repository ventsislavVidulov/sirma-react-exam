import { createContext, useContext, useEffect, useState } from "react";

import rolesService from "../services/rolesService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";

const RolesContext = createContext({});

const RolesContextProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
                setRoles(await rolesService.getAll());
                // throw new Error('Test error from RolesContextProvider');
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setLoading(false);
            } 
        };
        fetchRoles();
    }, []);

    useEffect(() => {
        if (!error && !loading) {
            console.log('Roles context loaded');
        }
    }, [roles, error, loading]);

    const contextObject = {
        roles,
        error,
        loading,
        getRolesById: rolesService.getById,
    };

    return (
        <RolesContext.Provider value={contextObject}>
            {children}
        </RolesContext.Provider>
    )
};

export const useRoles = () => {
    const context = useContext(RolesContext);
    return context;
};

export { RolesContextProvider };