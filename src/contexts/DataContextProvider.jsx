// import { createContext, useContext, useEffect, useState } from "react";

// import actorsService from "../services/actorsService";
// import { simulatedDelay } from "../utils/simulatedDelay";
// import { DELAY_IN_MILISECONDS } from "../constants";
// import rolesService from "../services/rolesService";
// import moviesService from "../services/moviesService";

// const ActorsContext = createContext({});

// const ActorsContextProvider = ({ children }) => {
//     const [actors, setActors] = useState([]);
//     const [roles, setRoles] = useState([]);
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchActors = async () => {
//             try {
//                 await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
//                 setActors(await actorsService.getAll());
//                 // throw new Error('Test error from ActorsContextProvider');
//             } catch (error) {
//                 setError(error.message);
//                 console.error(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchActors();
//     }, []);

//     useEffect(() => {
//         const fetchRoles = async () => {
//             try {
//                 await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
//                 setRoles(await rolesService.getAll());
//             } catch (error) {
//                 setError(error.message);
//                 console.error(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchRoles();
//     }, []);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
//                 setMovies(await moviesService.getAll());
//             } catch (error) {
//                 setError(error.message);
//                 console.error(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchMovies();
//     }, []);

//     useEffect(() => {
//         if (!error && !loading) {
//             console.log('Actors context loaded');
//         }
//     }, [actors, roles, movies, error, loading]);

//     const contextObject = {
//         actors,
//         error,
//         loading,
//         getActorById: actorsService.getById,
//         getTopActors: (movies, roles) => actorsService.getTopActors(movies, roles)
//     };
//     console.log(movies);
//     console.log(roles);
//     console.log(actors);


//     return (
//         <ActorsContext.Provider value={contextObject}>
//             {children}
//         </ActorsContext.Provider>
//     )
// };

// export const useActors = () => {
//     const context = useContext(ActorsContext);
//     return context;
// };

// export { ActorsContextProvider };

import { createContext, useContext, useEffect, useState } from "react";
import actorsService from "../services/actorsService";
import { simulatedDelay } from "../utils/simulatedDelay";
import { DELAY_IN_MILISECONDS } from "../constants";
import rolesService from "../services/rolesService";
import moviesService from "../services/moviesService";

const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
    const [actors, setActors] = useState([]);
    const [roles, setRoles] = useState([]);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                setError('');

                await simulatedDelay(DELAY_IN_MILISECONDS); //custom delay simulation for loading ui testing
                const [actorsData, rolesData, moviesData] = await Promise.all([
                    actorsService.getAll(),
                    rolesService.getAll(),
                    moviesService.getAll()
                ]);

                setActors(actorsData);
                setRoles(rolesData);
                setMovies(moviesData);
            } catch (error) {
                setError(error.message);
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    useEffect(() => {
        if (!error && !loading) {
            console.log('Actors context loaded');
        }
    }, [actors, roles, movies, error, loading]);

    const getTopActors = async () => {

        return actorsService.getTopActors(movies, roles, actors);
    };

    const contextObject = {
        actors,
        roles,
        movies,
        error,
        loading,
        getActorById: actorsService.getById,
        getTopActors
    };

    return (
        <DataContext.Provider value={contextObject}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useActors must be used within an ActorsContextProvider');
    }
    return context;
};

export { DataContextProvider };