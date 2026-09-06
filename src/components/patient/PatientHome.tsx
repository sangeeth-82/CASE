import React, { useState } from 'react';
import { Bot, FileText, Pill, Clock, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Stethoscope, Leaf } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { AIInterview } from './AIInterview';
import { DocumentUploader } from './DocumentUploader';
import { MedicationManager } from './MedicationManager';
import { HealthTimeline } from './HealthTimeline';
import { UnifiedProfileView } from './UnifiedProfileView';
import { PreConsultationReport } from './PreConsultationReport';
import { ConsentModal } from '../common/ConsentModal';

export const PatientHome: React.FC = () => {
  const { digitalTwin, setConsultationType, confirmConsent } = usePatient();
  const [activeTab, setActiveTab] = useState<'interview' | 'documents' | 'medications' | 'timeline' | 'unified' | 'report'>('interview');
  const [showConsentModal, setShowConsentModal] = useState<boolean>(!digitalTwin.consentGiven);

  // Calculate pre-consultation readiness percentage
  const calculateProgress = () => {
    let score = 20; // demographics
    if (digitalTwin.chiefComplaint.value) score += 25;
    if (digitalTwin.symptoms.length > 0) score += 20;
    if (digitalTwin.medications.length > 0) score += 20;
    if (digitalTwin.documents.length > 0 || digitalTwin.timeline.length > 0) score += 15;
    return Math.min(score, 100);
  };

  const progress = calculateProgress();

  const handleConsentAgree = () => {
    confirmConsent();
    setShowConsentModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Consent Gate Modal */}
      <ConsentModal
        isOpen={showConsentModal}
        onClose={() => setShowConsentModal(false)}
        onAgree={handleConsentAgree}
      />

      {/* Hero Welcome & Quick Stats */}
      <div className="bg-gradient-to-r from-sky-700 via-sky-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-sm border border-white/10">
              <Sparkles className="w-3.5 h-3.5" /> MediKiosk Intelligent Pre-Consultation
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome, {digitalTwin.demographics.name.value}
            </h1>
            <p className="text-sky-100 text-xs sm:text-sm leading-relaxed">
              Help your doctor make the best clinical decisions. Your AI copilot structures your symptoms, past prescriptions, and health timeline before your appointment starts.
            </p>
          </div>

          {/* Consultation Type Selector & Progress */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-3 min-w-[260px]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-sky-200">Consultation Pathway:</span>
              <span className="font-bold text-white uppercase">{digitalTwin.demographics.consultationType}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setConsultationType('allopathy')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  digitalTwin.demographics.consultationType === 'allopathy'
                    ? 'bg-white text-sky-900 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Allopathy</span>
              </button>

              <button
                onClick={() => setConsultationType('ayush')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  digitalTwin.demographics.consultationType === 'ayush'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>AYUSH</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="pt-2 border-t border-white/10 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-semibold text-sky-200">
                <span>Profile Readiness:</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation Navigation Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('interview')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'interview'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>AI Clinical Interview</span>
        </button>

        <button
          onClick={() => setActiveTab('documents')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'documents'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Documents & OCR ({digitalTwin.documents.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('medications')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'medications'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Pill className="w-4 h-4" />
          <span>Medications ({digitalTwin.medications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'timeline'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Health Timeline ({digitalTwin.timeline.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('unified')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'unified'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Allopathy + AYUSH</span>
        </button>

        <button
          onClick={() => setActiveTab('report')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ml-auto ${
            activeTab === 'report'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Send to Doctor &rarr;</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === 'interview' && (
          <AIInterview onComplete={() => setActiveTab('report')} />
        )}
        {activeTab === 'documents' && <DocumentUploader />}
        {activeTab === 'medications' && <MedicationManager />}
        {activeTab === 'timeline' && <HealthTimeline />}
        {activeTab === 'unified' && <UnifiedProfileView />}
        {activeTab === 'report' && <PreConsultationReport />}
      </div>
    </div>
  );
};
