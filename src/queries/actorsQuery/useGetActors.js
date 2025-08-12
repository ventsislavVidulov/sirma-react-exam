import { useQuery } from "@tanstack/react-query";
import { actorQueryKeys } from "./actorQueryKeys";
import actorsService from "../../services/actorsService";

export const useGetActors = () => {
    return useQuery({
        queryKey: actorQueryKeys.all,
        queryFn: actorsService.getAll,
        staleTime: 1000 * 60 * 5, //time the data is considered fresh
        cacheTime: 1000 * 60 * 10, //time the data is kept in cache after it becomes stal
        refetchOnWindowFocus: false,
    });
};

