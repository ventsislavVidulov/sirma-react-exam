import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ActorsContextProvider } from './contexts/ActorsContextProvider.jsx';
import { RolesContextProvider } from './contexts/RolesContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RolesContextProvider>
      <ActorsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ActorsContextProvider >
    </RolesContextProvider>
  </StrictMode>
);
