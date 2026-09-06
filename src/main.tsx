import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { PatientProvider } from './context/PatientContext';
import { DoctorProvider } from './context/DoctorContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <PatientProvider>
        <DoctorProvider>
          <App />
        </DoctorProvider>
      </PatientProvider>
    </AuthProvider>
  </React.StrictMode>
);
