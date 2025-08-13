import { useMutation, useQueryClient  } from "@tanstack/react-query";
import { actorQueryKeys } from "./actorQueryKeys";
import actorService from "../../services/actorsService";

export const useAddActor  =  () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (actorData) => actorService.addActor(actorData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: actorQueryKeys.all });
        }
    });
};