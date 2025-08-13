import './App.css';
import { Navigation } from "./components";
import { Navigate, Route, Routes } from 'react-router';
import { Actors, Home, Movies, ActorDetails, MovieDetails, AddMovie, AddActor} from './pages';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/add-movie' element={<AddMovie />} />
        <Route path='/add-actor' element={<AddActor />} />
        <Route path='/actors/:actorId' element={<ActorDetails />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </>
  )
};

export default App;
