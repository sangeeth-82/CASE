import React, { useState } from 'react';
import { Pill, AlertTriangle, CheckCircle2, XCircle, HelpCircle, Plus, ShieldCheck } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { reconcileMedications } from '../../services/medicationReconciliationEngine';

export const MedicationManager: React.FC = () => {
  const { digitalTwin, updateMedicationStatus, addMedication } = usePatient();
  const [newMedName, setNewMedName] = useState('');
  const [newMedDose, setNewMedDose] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const report = reconcileMedications(digitalTwin.medications, digitalTwin.chiefComplaint.value);

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedName.trim()) return;
    addMedication({
      name: { value: newMedName, source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
      dose: { value: newMedDose || 'As prescribed', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
      frequency: { value: 'Once daily', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() }
    });
    setNewMedName('');
    setNewMedDose('');
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Reconciliation Safety Alerts */}
      {(report.duplicates.length > 0 || report.contraindications.length > 0) && (
        <div className="space-y-3">
          {report.duplicates.map((dup, idx) => (
            <div key={idx} className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-xs text-amber-950 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-900 font-bold">Medication Duplication Alert:</strong>
                <p className="mt-0.5">{dup.reason}</p>
                <div className="mt-1 text-[11px] font-semibold text-amber-800">
                  Flagged: {dup.med1} ↔ {dup.med2}
                </div>
              </div>
            </div>
          ))}

          {report.contraindications.map((contra, idx) => (
            <div key={idx} className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-xl text-xs text-rose-950 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-900 font-bold">{contra.severity.toUpperCase()} ALERT:</strong>
                <p className="mt-0.5">{contra.reason}</p>
                <div className="mt-1 text-[11px] font-semibold text-rose-800">
                  Flagged Drug: {contra.medName}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Medication List Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Pill className="w-5 h-5 text-sky-600" />
              <span>Current Medication Reconciliation</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Confirm whether you are taking each medicine. Never stop prescribed medications without physician guidance.
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3.5 py-2 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-sky-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Medicine</span>
          </button>
        </div>

        {/* Add Med Form */}
        {showAddForm && (
          <form onSubmit={handleAddNew} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Medicine Name (e.g., Telmisartan)"
              value={newMedName}
              onChange={(e) => setNewMedName(e.target.value)}
              className="px-3 py-2 text-xs border rounded-lg bg-white flex-1 min-w-[160px]"
            />
            <input
              type="text"
              placeholder="Dose (e.g., 40 mg)"
              value={newMedDose}
              onChange={(e) => setNewMedDose(e.target.value)}
              className="px-3 py-2 text-xs border rounded-lg bg-white w-28"
            />
            <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-bold hover:bg-sky-700">
              Save
            </button>
          </form>
        )}

        {/* Medicines Grid */}
        <div className="space-y-3">
          {digitalTwin.medications.map((med) => (
            <div key={med.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{med.name.value}</span>
                  <span className="bg-slate-200 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded">
                    {med.dose.value}
                  </span>
                  {med.isDuplicate && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-300">
                      Duplicate Flag
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-500">
                  Frequency: <strong>{med.frequency.value}</strong> • Source: {med.name.source} ({med.name.confidenceLabel})
                </div>
                {med.conflictWarning && (
                  <div className="text-[11px] text-rose-700 font-semibold mt-1">
                    ⚠️ {med.conflictWarning}
                  </div>
                )}
              </div>

              {/* Status and Adherence Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center bg-white rounded-lg border border-slate-200 p-1 text-xs">
                  <button
                    onClick={() => updateMedicationStatus(med.id, 'taking')}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
                      med.status.value === 'taking' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🟢 Taking
                  </button>
                  <button
                    onClick={() => updateMedicationStatus(med.id, 'uncertain')}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
                      med.status.value === 'uncertain' ? 'bg-amber-500 text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🟡 Uncertain
                  </button>
                  <button
                    onClick={() => updateMedicationStatus(med.id, 'stopped')}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
                      med.status.value === 'stopped' ? 'bg-red-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🔴 Stopped
                  </button>
                </div>

                <select
                  value={med.adherence.value}
                  onChange={(e) => updateMedicationStatus(med.id, med.status.value, e.target.value as any)}
                  aria-label="Adherence Status"
                  className="bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                >
                  <option value="yes">Adherent (Regular)</option>
                  <option value="no">Irregular</option>
                  <option value="not_sure">Not sure</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
