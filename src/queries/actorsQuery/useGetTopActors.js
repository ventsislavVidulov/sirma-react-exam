import { useQuery } from "@tanstack/react-query";
import { actorQueryKeys } from "./actorQueryKeys";
import actorsService from "../../services/actorsService";

export const useGetTopActors = () => {
    return useQuery({
        queryKey: actorQueryKeys.topActors(),
        queryFn: () => actorsService.getTopActors(),
    });
};