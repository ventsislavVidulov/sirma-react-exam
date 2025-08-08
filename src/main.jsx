import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { ActorsContextProvider } from './contexts/ActorContextProvider.jsx';
import { MoviesContextProvider } from './contexts/MoviesContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesContextProvider>
      <ActorsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ActorsContextProvider >
    </MoviesContextProvider>
  </StrictMode>
);
