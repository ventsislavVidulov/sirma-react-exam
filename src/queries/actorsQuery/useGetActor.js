import { useQuery } from "@tanstack/react-query";
import { actorQueryKeys } from "./actorQueryKeys";
import actorsService from "../../services/actorsService";

export const useGetActor = (actorId) => {
    return useQuery({
        queryKey: actorQueryKeys.details(actorId),
        queryFn: () => actorsService.getById(actorId),
    });
};