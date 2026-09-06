import React from 'react';
import { useAuth } from './context/AuthContext';
import { SafetyBanner } from './components/common/SafetyBanner';
import { DemoBar } from './components/common/DemoBar';
import { Navbar } from './components/common/Navbar';
import { LoginPage } from './components/common/LoginPage';
import { PatientHome } from './components/patient/PatientHome';
import { DoctorDashboard } from './components/doctor/DoctorDashboard';

export const App: React.FC = () => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Layer 1: Demo Quick Jump Bar */}
      <DemoBar />

      {/* Top Layer 2: Clinical Safety Disclaimer */}
      <SafetyBanner />

      {/* Top Layer 3: Navigation Header & Role Switcher */}
      <Navbar />

      {/* Main Role-Based Route View */}
      <main className="flex-1 pb-16">
        {role === 'patient' ? <PatientHome /> : <DoctorDashboard />}
      </main>

      {/* Persistent Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          AI Clinical Pre-Consultation Copilot (MediKiosk Platform)
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Designed for High-Volume Healthcare Environments • ABDM FHIR R4 Ready • Non-Diagnostic Triage Support
        </p>
      </footer>
    </div>
  );
};
export default App;
