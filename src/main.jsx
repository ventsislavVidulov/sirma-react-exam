import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import App from './App.jsx';
import { ActorsContextProvider } from './contexts/ActorsContextProvider.jsx';
import { MoviesContextProvider } from './contexts/MoviesContextProvider.jsx';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <MoviesContextProvider>
        <ActorsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ActorsContextProvider >
      </MoviesContextProvider>

    </QueryClientProvider>
  </StrictMode>
);
