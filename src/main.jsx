import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ActorsContextProvider } from './contexts/ActorsContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActorsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActorsContextProvider >
  </StrictMode>
);
