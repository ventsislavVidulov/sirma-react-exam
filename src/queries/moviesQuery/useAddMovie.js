import { useMutation, useQueryClient  } from "@tanstack/react-query";
import { movieQueryKeys } from "./movieQueryKeys";
import moviesService from "../../services/moviesService";

export const useAddMovie =  () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (movieData) => moviesService.addMovie(movieData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: movieQueryKeys.all });
        }
    });
};