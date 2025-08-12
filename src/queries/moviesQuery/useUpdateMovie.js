import { useMutation, useQueryClient } from "@tanstack/react-query"
import { movieQueryKeys } from "./movieQueryKeys";
import moviesService from "../../services/moviesService";

export const useUpdateMovie = (movieId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (movieData) => moviesService.updateMovie(movieId, movieData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: movieQueryKeys.details(movieId) });
            queryClient.invalidateQueries({ queryKey: movieQueryKeys.all });
        },
    });
};