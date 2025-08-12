export const actorQueryKeys = {
    all: ['actors'],
    details: (actorId) => [...actorQueryKeys.all, 'details', actorId],
    // search: (query) => [...actorQueryKeys.all, 'search', query],
    update: (actorId) => [...actorQueryKeys.details(actorId), 'update'],
    topActors: () => [...actorQueryKeys.all, 'top'],
};



