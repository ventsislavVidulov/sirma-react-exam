# 🎬 Sirma Academy Exam – Movie Database

A movie database web application built as part of the **Sirma Academy** exam.  
It features movies, actors, and detailed views with editing capabilities.

---

## 📚 Libraries Used
- **React + Vite**
- **React Router DOM**
- **React Query**

---

## 🖥 UX Structure

### 1. Navigation Bar
Provides links to:
- **Home**
- **Movies** list
- **Actors** list

### 2. Home Page
- Displays the **top actor pairs** (actors who acted together in the most movies).
- **Actor cards** are clickable and lead to the corresponding **Actor Details** page.

### 3. Movies Page
- Shows an **Add Movie** card and all **Movie cards**.
- **Add Movie** card → leads to the **Add Movie** page.
- Each **Movie card** → leads to its corresponding **Movie Details** page.

### 4. Actors Page
- Same functionality as the **Movies** page.

### 5. Movie Details Page
- Displays:
  - Movie title
  - Release date
  - List of all actors in the movie
- Actions:
  - **Gear icon** → edit movie title and release date
  - **Save icon** → saves new values (replaces the Gear icon when editing)
  - **Delete icon** → *not implemented*
  - Clicking on an **Actor card** → leads to the corresponding **Actor Details** page

### 6. Actor Details Page
- Same functionality as the **Movie Details** page.

### 7. Add Movie Page
- Layout similar to **Movie Details** in edit mode.
- **Save icon** → saves the new movie and redirects to its **Movie Details** page.
- **Delete icon** → redirects back to the **Movies** page.

### 8. Add Actor Page
- Same as the **Add Movie** page.

### 9. Error & Loading States
- Error and loading states are displayed where relevant.
- Loading interval can be adjusted in constants.

### 10. Responsive layout
- All pages have respovsive layout
---

## 📂 Folder Structure

This project follows an **atomic-like design** pattern:

| Folder       | Description |
|--------------|-------------|
| `public`     | Csv and image files
| `components` | Components that hold state or are composed of smaller UI elements |
| `constants`  | Application constants such as routes and simulated delay values |
| `contexts`   | *(Deprecated)* |
| `pages`      | Full-page views |
| `queries`    | React Query hooks and configurations |
| `services`   | Simulated server interaction logic |
| `ui`         | Presentational ("dumb") components |
| `utils`      | Pure functions for CSV parsing, mapping, calculating top actors, etc. |

---

## 🙏 Acknowledgments
I want to thank the **Sirma Academy Team** for the knowledge acquired and the great time enjoyed during this learning experience.

