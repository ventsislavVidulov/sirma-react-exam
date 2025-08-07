import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import moviesService from './services/moviesService';
import rolesService from './services/rolesService';
import actorsService from './services/actorsService';
import { getTheActorsThatActedToghetherInMostMovies } from './utils/getTheActorsThatActedToghetherInmostMovies';
import { Navigation } from "./components";
import { Route, Routes } from 'react-router';
import { Actors, Home, Movies } from './pages';

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      await getTheActorsThatActedToghetherInMostMovies();
      const allMovies = await moviesService.getAll();
      setMovies(allMovies)
    }
    loadMovies();
  }, []);

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/actors' element={<Actors/>}/>
      </Routes>
    </>
  )
};

export default App;
