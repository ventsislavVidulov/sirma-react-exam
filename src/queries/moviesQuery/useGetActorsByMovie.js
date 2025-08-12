import { movieQueryKeys } from "./movieQueryKeys";
import moviesService from "../../services/moviesService";
import { useQuery } from "@tanstack/react-query";

export const useGetActorsByMovie = (movieId) => {
    return useQuery({
        queryKey: movieQueryKeys.actorsInMovie(movieId),
        queryFn: () => moviesService.getActorsByMovie(movieId),
    });
};