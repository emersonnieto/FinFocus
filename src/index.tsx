import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './hooks/auth';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
