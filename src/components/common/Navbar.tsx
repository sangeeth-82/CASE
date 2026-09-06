import React from 'react';
import { Stethoscope, User, ShieldCheck, Globe, Activity, CheckCircle2, AlertTriangle, ArrowRightLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { usePatient } from '../../context/PatientContext';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../../data/translations';
import { SupportedLanguage } from '../../types/i18n';

export const Navbar: React.FC = () => {
  const { role, setRole, user } = useAuth();
  const { language, setLanguage, isSimplifiedLanguage, setIsSimplifiedLanguage, digitalTwin } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-8 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">MediKiosk</span>
              <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border border-sky-200">
                Copilot
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">The Doctor Sees the Patient Before the Consultation Begins</p>
          </div>
        </div>

        {/* Middle: Role Switcher Gate */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setRole('patient')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              role === 'patient'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Patient Portal</span>
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              role === 'doctor'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Doctor Admin</span>
          </button>
        </div>

        {/* Right tools */}
        <div className="flex items-center gap-2.5">
          {/* Language Simplification indicator toggle */}
          <button
            onClick={() => setIsSimplifiedLanguage(!isSimplifiedLanguage)}
            title="Toggle elderly / simplified plain language adaptation"
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              isSimplifiedLanguage
                ? 'bg-amber-50 text-amber-800 border-amber-300 ring-1 ring-amber-400'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isSimplifiedLanguage ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
            <span>{isSimplifiedLanguage ? '🟡 Simplified Mode' : '🟢 Standard Mode'}</span>
          </button>

          {/* Multilingual Selector */}
          <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
            <Globe className="w-3.5 h-3.5 text-slate-500 mr-1.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              aria-label="Preferred Language"
              className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer pr-1"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.nativeName}
                </option>
              ))}
            </select>
          </div>

          {/* ABDM Status Badge */}
          <div className="hidden xl:flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>ABDM: Sandbox Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};
