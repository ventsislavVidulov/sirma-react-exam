import { useQuery } from "@tanstack/react-query";
import { movieQueryKeys } from "./movieQueryKeys";
import moviesService from "../../services/moviesService";

export const useGetMovie= (movieId) => {
    return useQuery({
        queryKey: movieQueryKeys.details(movieId),
        queryFn: () => moviesService.getById(movieId),
    })
};