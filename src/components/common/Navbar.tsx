import React, { useState, useEffect } from 'react';
import { Stethoscope, User, ShieldCheck, Globe, Activity, CheckCircle2, AlertTriangle, ArrowRightLeft, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { usePatient } from '../../context/PatientContext';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../../data/translations';
import { SupportedLanguage } from '../../types/i18n';

export const Navbar: React.FC = () => {
  const { role, setRole, user } = useAuth();
  const { language, setLanguage, isSimplifiedLanguage, setIsSimplifiedLanguage, digitalTwin } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight transition-colors duration-200">MediKiosk</span>
              <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border border-sky-200 dark:border-sky-800 transition-colors duration-200">
                Copilot
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block transition-colors duration-200">The Doctor Sees the Patient Before the Consultation Begins</p>
          </div>
        </div>

        {/* Middle: Role Switcher Gate */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-700 p-1 rounded-xl border border-slate-200 dark:border-slate-600 transition-colors duration-200">
          <button
            onClick={() => setRole('patient')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              role === 'patient'
                ? 'bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
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
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Doctor Admin</span>
          </button>
        </div>

        {/* Right tools */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Toggle theme"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Simplification indicator toggle */}
          <button
            onClick={() => setIsSimplifiedLanguage(!isSimplifiedLanguage)}
            title="Toggle elderly / simplified plain language adaptation"
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              isSimplifiedLanguage
                ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700 ring-1 ring-amber-400 dark:ring-amber-600'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isSimplifiedLanguage ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
            <span>{isSimplifiedLanguage ? '🟡 Simplified Mode' : '🟢 Standard Mode'}</span>
          </button>

          {/* Multilingual Selector */}
          <div className="relative flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 transition-colors duration-200">
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 mr-1.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              aria-label="Preferred Language"
              className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer pr-1"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-800">
                  {lang.flag} {lang.nativeName}
                </option>
              ))}
            </select>
          </div>

          {/* ABDM Status Badge */}
          <div className="hidden xl:flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors duration-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>ABDM: Sandbox Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};
