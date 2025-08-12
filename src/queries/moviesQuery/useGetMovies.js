import { useQuery } from "@tanstack/react-query";
import { movieQueryKeys } from "./movieQueryKeys";
import moviesService from "../../services/moviesService";

export const useGetMovies = () => {
    return useQuery({
        queryKey: movieQueryKeys.all,
        queryFn: moviesService.getAll,
        staleTime: 1000 * 60 * 5, // time the data is considered fresh
        cacheTime: 1000 * 60 * 10, // time the data is kept in cache after it becomes stale
        refetchOnWindowFocus: false,
    });
};