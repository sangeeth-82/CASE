import React, { useState } from 'react';
import { Stethoscope, User, Lock, Phone, ArrowRight, ShieldCheck, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { usePatient } from '../../context/PatientContext';

export const LoginPage: React.FC = () => {
  const { loginPatient, loginDoctor, loadDemoMode } = useAuth();
  const { loadPatientTwin } = usePatient();
  const [activeTab, setActiveTab] = useState<'patient' | 'doctor'>('patient');

  // Patient inputs
  const [phone, setPhone] = useState('+91 98401 23456');
  const [otp, setOtp] = useState('123456');
  const [patientName, setPatientName] = useState('Rajesh Sharma');

  // Doctor inputs
  const [staffId, setStaffId] = useState('doc.raman@hospital.org');
  const [password, setPassword] = useState('doctor2026');

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginPatient(phone, patientName, false);
  };

  const handleGuestSubmit = () => {
    loginPatient('+91 90000 00000', 'New Patient', true);
  };

  const handleDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginDoctor(staffId, 'Dr. Anand Raman, MD');
  };

  const handleDemoJump = (demoKey: string, role: 'patient' | 'doctor') => {
    loadPatientTwin(demoKey);
    loadDemoMode(demoKey, role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-slate-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-sky-500/20">
          <Stethoscope className="w-9 h-9" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          MediKiosk Clinical Copilot
        </h1>
        <p className="text-xs sm:text-sm text-sky-200">
          "The Doctor Sees the Patient Before the Consultation Begins."
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white text-slate-900 py-8 px-6 sm:px-10 rounded-3xl shadow-2xl border border-slate-100 space-y-6">
          {/* Role Segmented Tabs */}
          <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('patient')}
              className={`py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'patient'
                  ? 'bg-white text-sky-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Patient (User)</span>
            </button>
            <button
              onClick={() => setActiveTab('doctor')}
              className={`py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'doctor'
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Doctor (Admin)</span>
            </button>
          </div>

          {/* Patient Form */}
          {activeTab === 'patient' ? (
            <form onSubmit={handlePatientSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mobile Phone / Patient ID</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-700">Verification OTP</label>
                  <button
                    type="button"
                    onClick={() => setOtp('123456')}
                    className="text-[10px] text-sky-600 hover:underline font-semibold"
                  >
                    Auto-fill Demo OTP (123456)
                  </button>
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Enter Pre-Consultation Kiosk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleGuestSubmit}
                  className="text-xs text-slate-500 hover:text-sky-600 font-semibold"
                >
                  Continue as Guest / New Walk-in Patient &rarr;
                </button>
              </div>
            </form>
          ) : (
            /* Doctor Form */
            <form onSubmit={handleDoctorSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Clinician Staff Email / ID</label>
                <input
                  type="text"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div className="bg-sky-50 p-3 rounded-xl text-[11px] text-sky-800 border border-sky-200">
                <strong>Hospital Role:</strong> Attending Physician (Queue Management & Triage Verification permissions granted).
              </div>

              <button
                type="submit"
                className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-3 rounded-xl shadow-lg shadow-sky-700/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Login to Doctor Triage Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Judges 1-Click Evaluation Jump Bar */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <PlayCircle className="w-4 h-4 text-emerald-600" />
              <span>Judges' 1-Click Fast Track:</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button
                onClick={() => handleDemoJump('demo-chest-pain', 'patient')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 text-left"
              >
                <span className="font-bold text-red-600 block">🔴 Chest Pain</span>
                <span className="text-slate-500">Patient View</span>
              </button>
              <button
                onClick={() => handleDemoJump('demo-chest-pain', 'doctor')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 text-left"
              >
                <span className="font-bold text-sky-700 block">🩺 Doctor Queue</span>
                <span className="text-slate-500">Admin View</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
