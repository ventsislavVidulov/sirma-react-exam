import { createContext, useContext, useEffect, useState } from "react";

import moviesService from "../services/moviesService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";

const MoviesContext = createContext({});

const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
                setMovies(await moviesService.getAll());
                // throw new Error('Test error from MoviesContextProvider');
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        if (!error && !loading) {
            console.log('Movies context loaded');
        }
    }, [movies, error, loading]);

    const contextObject = {
        movies,
        error,
        loading,
        getMovieById: moviesService.getById,
        getActorsByMovie: moviesService.getActorsByMovie
    };

    return (
        <MoviesContext.Provider value={contextObject}>
            {children}
        </MoviesContext.Provider>
    )
};

export const useMovies = () => {
    const context = useContext(MoviesContext);
    return context;
};

export { MoviesContextProvider };