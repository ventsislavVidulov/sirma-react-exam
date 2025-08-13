// ID,FullName,BirthDate
// ID,ActorID,MovieID,RoleName

export const getActorsByMovieUtil = (actors, roles, movieId) => {
    const actorsByMovie = [];
    roles.forEach(r => {
        if (r.MovieID == movieId) {
            const actorName = actors.find(a => a.ID == r.ActorID).FullName;
            if (actorName) {
                actorsByMovie.push({ actorName, role: r.RoleName == 'NULL' ? 'Unnamed' : r.RoleName, actorId: r.ActorID });
            }
        }
    });
    
    return actorsByMovie;
}