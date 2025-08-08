export const getMoviesByActorUtil = (movies, roles, actorId) => {
    console.log(movies, roles, actorId);
    
    const moviesByActor = [];
    roles.forEach(r => {
        if (r.ActorID == actorId) {
            const movieTitle = movies.find(m => m.ID == r.MovieID).Title;
            if (movieTitle) {
                moviesByActor.push({movieTitle: movieTitle, role: r.RoleName == 'null' ? 'Unnamed' : r.RoleName});
            }
        }
    });
    
    return moviesByActor;
};