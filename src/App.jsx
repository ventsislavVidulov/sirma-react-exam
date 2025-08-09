import './App.css';
import { Navigation } from "./components";
import { Route, Routes } from 'react-router';
import { Actors, Home, Movies, ActorDetails, MovieDetails} from './pages';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/actors/:actorId' element={<ActorDetails />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    </>
  )
};

export default App;
