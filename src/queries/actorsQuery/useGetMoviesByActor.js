import { useQuery } from '@tanstack/react-query';
import { actorQueryKeys } from './actorQueryKeys';
import actorsService from '../../services/actorsService';;

export const useGetMoviesByActor = (actorId) => {
    return useQuery({
        queryKey: actorQueryKeys.moviesPlayed(actorId),
        queryFn: () => actorsService.getMoviesByActor(actorId),
    });
};