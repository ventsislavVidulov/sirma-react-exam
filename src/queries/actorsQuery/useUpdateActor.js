import { useMutation, useQueryClient} from "@tanstack/react-query";
import { actorQueryKeys } from "./actorQueryKeys";
import actorsService from "../../services/actorsService";

export const useUpdateActor = (actorId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: actorQueryKeys.update(actorId),
        mutationFn: (actorData) => actorsService.updateActor(actorId, actorData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: actorQueryKeys.details(actorId) });
            queryClient.invalidateQueries({ queryKey: actorQueryKeys.all })
        },
    });
} 