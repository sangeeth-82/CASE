import React, { useState } from 'react';
import { FileCheck, Send, CheckCircle, ShieldCheck, Printer, Download, Sparkles, User, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { usePatient } from '../../context/PatientContext';
import { useAuth } from '../../context/AuthContext';

export const PreConsultationReport: React.FC = () => {
  const { digitalTwin, submitToDoctorQueue } = usePatient();
  const { setRole } = useAuth();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    submitToDoctorQueue();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-sky-600" />
            <span>Pre-Consultation Clinical Summary</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Review your structured clinical digital twin before transmitting it to your doctor.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-600/20 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit to Doctor Queue</span>
            </button>
          ) : (
            <button
              onClick={() => setRole('doctor')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>View in Doctor Queue &rarr;</span>
            </button>
          )}
        </div>
      </div>

      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <strong className="font-bold text-emerald-900">Successfully Transmitted to Doctor Queue!</strong>
              <p className="mt-0.5">Your clinical twin is now waiting for Dr. Anand Raman in the hospital triage queue.</p>
            </div>
          </div>
          <button
            onClick={() => setRole('doctor')}
            className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs hover:bg-emerald-700"
          >
            Open Doctor Portal
          </button>
        </div>
      )}

      {/* Printable Report Sheet */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 print:shadow-none print:border-none">
        {/* Header Branding */}
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">MediKiosk Clinical Pre-Consultation Profile</h1>
            <p className="text-xs text-slate-500 mt-0.5">The Doctor Sees the Patient Before the Consultation Begins</p>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs font-bold text-slate-800">{digitalTwin.patientId}</div>
            <div className="text-[10px] text-slate-500">Generated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* Patient Vitals & Demographics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div>
            <span className="text-slate-500 font-semibold text-[10px] uppercase">Patient Name</span>
            <div className="font-bold text-slate-900 mt-0.5">{digitalTwin.demographics.name.value}</div>
          </div>
          <div>
            <span className="text-slate-500 font-semibold text-[10px] uppercase">Age / Gender</span>
            <div className="font-bold text-slate-900 mt-0.5">{digitalTwin.demographics.age.value} yrs / {digitalTwin.demographics.gender.value}</div>
          </div>
          <div>
            <span className="text-slate-500 font-semibold text-[10px] uppercase">Phone / ABHA</span>
            <div className="font-bold text-slate-900 mt-0.5">{digitalTwin.demographics.phone.value}</div>
          </div>
          <div>
            <span className="text-slate-500 font-semibold text-[10px] uppercase">Triage Assessment</span>
            <div className="font-bold text-rose-700 mt-0.5">{digitalTwin.triage.badge}</div>
          </div>
        </div>

        {/* Chief Complaint & HPI */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1">
            1. Chief Complaint & History of Present Illness
          </h4>
          <p className="text-sm font-medium text-slate-800 leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-200">
            {digitalTwin.chiefComplaint.value}
          </p>
        </div>

        {/* Symptoms Breakdown */}
        {digitalTwin.symptoms.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1">
              2. Symptom Characterization
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {digitalTwin.symptoms.map((s) => (
                <div key={s.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{s.name.value} (Severity: {s.severity.value}/10)</div>
                  <div><strong>Onset:</strong> {s.onset.value}</div>
                  <div><strong>Character:</strong> {s.character.value}</div>
                  <div><strong>Radiation:</strong> {s.radiation.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reconciled Medications */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1">
            3. Active Reconciled Medications
          </h4>
          <div className="space-y-1.5 text-xs">
            {digitalTwin.medications.map((m) => (
              <div key={m.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800">{m.name.value} {m.dose.value}</span>
                  <span className="text-slate-500 ml-2">({m.frequency.value})</span>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                  {m.status.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Red Flags & Information Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-950 space-y-1.5">
            <strong className="font-bold text-red-900">Potential Red Flags Detected:</strong>
            <ul className="list-disc pl-4 space-y-1">
              {digitalTwin.triage.redFlagsIdentified.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
            <strong className="font-bold text-amber-900">Identified Information Gaps:</strong>
            <ul className="list-disc pl-4 space-y-1">
              {digitalTwin.informationGaps.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div className="border-t border-slate-200 pt-4 text-center text-[11px] text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">
            AI-generated pre-consultation summary. Requires verification by a qualified healthcare professional.
          </p>
          <p>
            This system does not diagnose or prescribe. ABDM compliant health data exchange.
          </p>
        </div>
      </div>
    </div>
  );
};
