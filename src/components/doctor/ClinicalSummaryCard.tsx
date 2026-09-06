import React from 'react';
import { Stethoscope, AlertTriangle, ShieldCheck, Heart, Pill, FileText, HelpCircle, Activity, Sparkles, User, Info } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';

export const ClinicalSummaryCard: React.FC = () => {
  const { selectedPatient } = useDoctor();
  const triage = selectedPatient.triage;
  const summary = selectedPatient.doctorSummary;

  return (
    <div className="space-y-6">
      {/* Priority Banner */}
      <div className={`p-5 rounded-2xl border ${
        triage.level === 'emergency' ? 'bg-red-500/10 border-red-500/30 text-red-950' :
        triage.level === 'high_priority' ? 'bg-orange-500/10 border-orange-500/30 text-orange-950' :
        triage.level === 'needs_attention' ? 'bg-amber-500/10 border-amber-500/30 text-amber-950' :
        'bg-emerald-500/10 border-emerald-500/30 text-emerald-950'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base">
            <span>🚨 TRIAGE PRIORITY:</span>
            <span>{triage.badge}</span>
          </div>
          <span className="text-[11px] font-semibold bg-white/80 px-2.5 py-1 rounded-full border border-current/20 shadow-xs">
            Assessed: {new Date(triage.calculatedAt).toLocaleTimeString()}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <strong className="text-slate-900 font-bold uppercase text-[10px] tracking-wide block mb-1">
              Explainable Triage Rationale:
            </strong>
            <p className="leading-relaxed text-slate-700">{triage.reason}</p>
          </div>
          <div>
            <strong className="text-slate-900 font-bold uppercase text-[10px] tracking-wide block mb-1">
              Recommended Clinical Action:
            </strong>
            <p className="leading-relaxed text-slate-700">{triage.action}</p>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-current/20 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
          <Info className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
          <span>{triage.disclaimer}</span>
        </div>
      </div>

      {/* Main Clinical Summary Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        {/* Header with Safety Seal */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Pre-Consultation Clinical Digest</h3>
            <p className="text-xs text-slate-500 mt-0.5">Synthesized from patient dialogue, historical EHR, and uploaded OCR documents</p>
          </div>
          <span className="bg-sky-50 text-sky-800 border border-sky-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>AI-generated — requires clinician verification</span>
          </span>
        </div>

        {/* High-density grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-800">
          {/* Section 1: Chief Complaint & HPI */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider text-sky-800 border-b pb-1">
              1. Chief Complaint & HPI
            </h4>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
              <div>
                <strong>Presenting Complaint:</strong>
                <p className="text-slate-700 mt-0.5">{selectedPatient.chiefComplaint.value}</p>
              </div>
              {summary.hpi && (
                <div className="pt-2 border-t border-slate-200">
                  <strong>History of Present Illness:</strong>
                  <p className="text-slate-700 mt-0.5">{summary.hpi}</p>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Relevant Medical History */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider text-sky-800 border-b pb-1">
              2. Medical History & Comorbidities
            </h4>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
              {selectedPatient.medicalHistory.length === 0 ? (
                <div className="text-slate-500 italic">No significant prior medical conditions recorded.</div>
              ) : (
                selectedPatient.medicalHistory.map(h => (
                  <div key={h.id} className="flex items-center justify-between pb-1 border-b border-slate-200 last:border-0 last:pb-0">
                    <span className="font-semibold">{h.title.value} ({h.status.value})</span>
                    <span className="text-slate-500">{h.approximateDate.value}</span>
                  </div>
                ))
              )}
              {summary.relevantHistory && (
                <p className="pt-1 text-slate-600 font-medium">{summary.relevantHistory}</p>
              )}
            </div>
          </div>

          {/* Section 3: Medication Intelligence */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider text-sky-800 border-b pb-1">
              3. Medication Intelligence & Reconciled Drugs
            </h4>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
              <div className="space-y-1">
                {selectedPatient.medications.map(m => (
                  <div key={m.id} className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                    <div>
                      <span className="font-bold text-slate-900">{m.name.value} {m.dose.value}</span>
                      <span className="text-slate-500 ml-1">({m.frequency.value})</span>
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      m.status.value === 'taking' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {m.status.value}
                    </span>
                  </div>
                ))}
              </div>
              {summary.medicationIntelligence && (
                <div className="pt-2 border-t border-slate-200 text-slate-700">
                  <strong className="text-amber-800">Intelligence Note:</strong> {summary.medicationIntelligence}
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Investigations & Vitals */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider text-sky-800 border-b pb-1">
              4. Key Investigations & Vitals
            </h4>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
              {selectedPatient.investigations.length === 0 ? (
                <div className="text-slate-500 italic">No previous investigations on record.</div>
              ) : (
                selectedPatient.investigations.map(inv => (
                  <div key={inv.id} className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                    <span className="font-semibold text-slate-800">{inv.testName.value}</span>
                    <span className={`font-mono font-bold ${
                      inv.flag === 'critical' ? 'text-red-600' : inv.flag === 'abnormal' ? 'text-amber-600' : 'text-slate-700'
                    }`}>
                      {inv.result.value}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Red Flags & Information Gaps Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Red Flags */}
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-950 space-y-2">
            <div className="font-bold text-red-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Identified Red Flags:</span>
            </div>
            <ul className="list-disc pl-4 space-y-1">
              {triage.redFlagsIdentified.map((flag, idx) => (
                <li key={idx} className="font-medium">{flag}</li>
              ))}
            </ul>
          </div>

          {/* Information Gaps */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="font-bold text-amber-900 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Information Gaps (Unconfirmed / Missing):</span>
            </div>
            <ul className="list-disc pl-4 space-y-1">
              {selectedPatient.informationGaps.map((gap, idx) => (
                <li key={idx} className="font-medium">{gap}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Patient's Own Concerns */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
          <strong className="text-slate-900">Patient's Stated Anxieties / Concerns:</strong>
          <p className="mt-0.5 text-slate-600 italic">"{selectedPatient.patientConcerns.value}"</p>
        </div>

        {/* Doctor Verification Notes if exists */}
        {summary.doctorNotes && (
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
            <strong className="text-emerald-900">Physician Verified Note:</strong>
            <p className="mt-0.5">{summary.doctorNotes}</p>
          </div>
        )}
      </div>
    </div>
  );
};
