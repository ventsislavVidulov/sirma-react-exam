import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { DataContextProvider } from './contexts/DataContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextProvider >
  </StrictMode>
);
