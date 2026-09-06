import React from 'react';
import { Share2, ArrowRight, Activity, Pill, Stethoscope, FileText } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';

export const RelationshipGraph: React.FC = () => {
  const { selectedPatient } = useDoctor();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-600" />
            <span>Clinical Evidence Relationship Map</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Non-causal correlation map linking active symptoms, historical comorbidities, medications, and investigations.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[600px] gap-4">
          {/* Node 1: Symptom */}
          <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-200 text-center space-y-1 shadow-xs">
            <span className="text-[10px] font-bold text-red-700 uppercase">Active Symptom</span>
            <div className="font-bold text-xs text-slate-900">
              {selectedPatient.symptoms[0]?.name.value || selectedPatient.chiefComplaint.value.slice(0, 25)}
            </div>
            <div className="text-[10px] text-red-600">Severity {selectedPatient.symptoms[0]?.severity.value || 8}/10</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />

          {/* Node 2: Comorbidity */}
          <div className="flex-1 bg-sky-50 p-4 rounded-xl border border-sky-200 text-center space-y-1 shadow-xs">
            <span className="text-[10px] font-bold text-sky-700 uppercase">Prior Diagnosis</span>
            <div className="font-bold text-xs text-slate-900">
              {selectedPatient.medicalHistory[0]?.title.value || "None Reported"}
            </div>
            <div className="text-[10px] text-sky-600">Chronic Background</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />

          {/* Node 3: Medication */}
          <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center space-y-1 shadow-xs">
            <span className="text-[10px] font-bold text-emerald-700 uppercase">Reconciled Drug</span>
            <div className="font-bold text-xs text-slate-900">
              {selectedPatient.medications[0]?.name.value || "No Meds"}
            </div>
            <div className="text-[10px] text-emerald-600">Status: {selectedPatient.medications[0]?.status.value || "Taking"}</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />

          {/* Node 4: Investigation */}
          <div className="flex-1 bg-indigo-50 p-4 rounded-xl border border-indigo-200 text-center space-y-1 shadow-xs">
            <span className="text-[10px] font-bold text-indigo-700 uppercase">Diagnostic Test</span>
            <div className="font-bold text-xs text-slate-900">
              {selectedPatient.investigations[0]?.testName.value || "Vitals / ECG"}
            </div>
            <div className="text-[10px] text-indigo-600">{selectedPatient.investigations[0]?.result.value || "Pending"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
