# Sirma Academy exam - Movie database

## UX structure

1. Navigation bar - provides links to **Home**, **Movies** list and **Actors** list pages
2. **Home** page - shwos the top actors pairs (those who acted toghether in most movies)
    - *Actors cards* are clickable and lead to coresponding **Actor details**
3. **Movies** page - list of *Add movie* card and all *Movie cards*
   - *Add movie* card leads to **Add movie** page where the user can add new movie
   - each *Movie card* leads to its coresponding **Movie details** page
4. **Actors** page - same functionality as **Movies* page
5. **Movie details** page displays movie title, release date and all actors played in that movie
   - clicking on *Gear* icon alows user to edit movie tittle and release date
   - clicking on *Save* icon that replaces *Gear* icon saves the new values for title and release date
   - *Delete* icon functionality is not implemented
   - clicking on any of the *Actor card* leads to its coresponding details page
6. **Actors details** page - same as **Movie details++
7. **Add movie** - page looking like **Movie details** edit mode
   - clicking on *Save* icon saves the newly created movie and redirects to its coresponding **Movie details** page
   - clicking on *Delete* icon redirects back to **Movies page**

