import React, { useState } from 'react';
import { Users, Activity, FileText, Clock, Share2, ShieldCheck, CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';
import { usePatient } from '../../context/PatientContext';
import { TRANSLATIONS } from '../../data/translations';
import { PatientQueue } from './PatientQueue';
import { ClinicalSummaryCard } from './ClinicalSummaryCard';
import { DoctorVerificationBar } from './DoctorVerificationBar';
import { RelationshipGraph } from './RelationshipGraph';
import { AbdmModal } from './AbdmModal';

export const DoctorDashboard: React.FC = () => {
  const { selectedPatient } = useDoctor();
  const { language } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  
  const [activeTab, setActiveTab] = useState<'summary' | 'graph' | 'documents'>('summary');
  const [showAbdmModal, setShowAbdmModal] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* ABDM Modal */}
      <AbdmModal isOpen={showAbdmModal} onClose={() => setShowAbdmModal(false)} />

      {/* Doctor Portal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-md">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white transition-colors duration-200">
                {t.doctorPortal}
              </h1>
              <span className="bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                Admin Mode
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Attending: <strong>Dr. Anand Raman, MD</strong> • Internal Medicine & Acute Triage
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAbdmModal(true)}
            className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-200 transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ABHA & FHIR Hub</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Layout: Left Column = Queue (4 cols), Right Column = Patient Profile (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 4 Cols: Queue */}
        <div className="lg:col-span-4 h-full">
          <PatientQueue />
        </div>

        {/* Right 8 Cols: Selected Patient Clinical Detail */}
        <div className="lg:col-span-8 space-y-6">
          {/* Top Verification Controls */}
          <DoctorVerificationBar />

          {/* Subtabs for Detail */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'summary'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              AI Clinical Profile
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'graph'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Relationship Evidence Map
            </button>
          </div>

          {/* Tab Views */}
          {activeTab === 'summary' && <ClinicalSummaryCard />}
          {activeTab === 'graph' && <RelationshipGraph />}
        </div>
      </div>
    </div>
  );
};
