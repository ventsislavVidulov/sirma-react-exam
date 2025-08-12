export const actorQueryKeys = {
    all: ['actors'],
    details: (actorId) => [...actorQueryKeys.all, 'details', actorId],
    update: (actorId) => [...actorQueryKeys.details(actorId), 'update'],
    moviesPlayed: (actorId) => [...actorQueryKeys.details(actorId), 'moviesPlayed'],
    topActors: () => [...actorQueryKeys.all, 'top'],
    // search: (query) => [...actorQueryKeys.all, 'search', query],
};



