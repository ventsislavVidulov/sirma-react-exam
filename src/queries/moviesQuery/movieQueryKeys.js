export const movieQueryKeys = {
    all: ['movies'],
    details: (movieId) => [...movieQueryKeys.all, 'details', movieId],
    // search: (query) => [...movieQueryKeys.all, 'search', query],
    update: (movieId) => [...movieQueryKeys.details(movieId), 'update'],
    actorsInMovie: (movieId) => [...movieQueryKeys.details(movieId), 'actors'],
};



