import { createContext, useContext, useEffect, useState } from "react";
import actorsService from "../services/actorsService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";

const ActorsContext = createContext({});

const ActorsContextProvider = ({ children }) => {
    const [actors, setActors] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActors = async () => {
            try {
                await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
                setActors(await actorsService.getAll());
                // throw new Error('Test error from ActorsContextProvider');
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setLoading(false);
            } 
        };
        fetchActors();
    }, []);

    useEffect(() => {
        if (!error && !loading) {
            console.log('Actors context loaded');
        }
    }, [actors, error, loading]);

    const contextObject = {
        actors,
        error,
        loading,
        getActorById: actorsService.getById,
        getTopActors: actorsService.getTopActors
    };

    return (
        <ActorsContext.Provider value={contextObject}>
            {children}
        </ActorsContext.Provider>
    )
};

export const useActors = () => {
    const context = useContext(ActorsContext);
    return context;
};

export { ActorsContextProvider };