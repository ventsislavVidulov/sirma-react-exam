import './App.css';
import { Navigation } from "./components";
import { Route, Routes } from 'react-router';
import { Actors, Home, Movies } from './pages';
import { ActorDetails } from "./components";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/actors/:actorId' element={<ActorDetails />} />
      </Routes>
    </>
  )
};

export default App;
