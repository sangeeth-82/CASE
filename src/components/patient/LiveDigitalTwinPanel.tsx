import React from 'react';
import { Activity, ShieldCheck, Heart, AlertTriangle, Pill, FileText, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';

export const LiveDigitalTwinPanel: React.FC = () => {
  const { digitalTwin } = usePatient();
  const triage = digitalTwin.triage;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Panel Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-sky-400" />
          <h3 className="font-bold text-sm tracking-tight">Live Clinical Digital Twin</h3>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" /> Synchronizing
        </span>
      </div>

      {/* Scrollable twin content */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-280px)] text-xs">
        {/* Triage Status Card */}
        <div className={`p-3 rounded-xl border ${
          triage.level === 'emergency' ? 'bg-red-50 border-red-200 text-red-900' :
          triage.level === 'high_priority' ? 'bg-orange-50 border-orange-200 text-orange-900' :
          triage.level === 'needs_attention' ? 'bg-amber-50 border-amber-200 text-amber-900' :
          'bg-emerald-50 border-emerald-200 text-emerald-900'
        }`}>
          <div className="flex items-center justify-between font-extrabold text-xs">
            <span>TRIAGE PRIORITY:</span>
            <span>{triage.badge}</span>
          </div>
          <p className="mt-1 text-[11px] font-medium leading-relaxed">{triage.reason}</p>
          <div className="mt-2 pt-2 border-t border-current/20 flex items-center gap-1 text-[10px] font-semibold opacity-90">
            <ShieldCheck className="w-3 h-3 flex-shrink-0" />
            <span>{triage.disclaimer}</span>
          </div>
        </div>

        {/* Demographics Leaf */}
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 font-bold text-[10px] uppercase">
            <span>Demographics</span>
            <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono text-[9px]">{digitalTwin.patientId}</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between">
            <span className="font-bold text-slate-900 text-sm">{digitalTwin.demographics.name.value}</span>
            <span className="text-slate-600 font-semibold">{digitalTwin.demographics.age.value} yrs • {digitalTwin.demographics.gender.value.toUpperCase()}</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
            <span>Language: {digitalTwin.demographics.preferredLanguage.value}</span>
            <span>•</span>
            <span className="text-sky-700 font-semibold uppercase">{digitalTwin.demographics.consultationType}</span>
          </div>
        </div>

        {/* Chief Complaint */}
        <div className="bg-sky-50/70 p-3 rounded-xl border border-sky-200">
          <div className="flex items-center justify-between text-sky-900 font-bold text-[10px] uppercase">
            <span>Chief Complaint</span>
            <span className="bg-sky-200/80 text-sky-800 px-2 py-0.5 rounded text-[9px]">
              {digitalTwin.chiefComplaint.confidenceLabel}
            </span>
          </div>
          <p className="mt-1 text-slate-800 font-semibold text-xs leading-snug">
            {digitalTwin.chiefComplaint.value || "Awaiting complaint selection..."}
          </p>
        </div>

        {/* Characterized Symptoms */}
        {digitalTwin.symptoms.length > 0 && (
          <div className="space-y-2">
            <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">
              Symptom Characterization
            </div>
            {digitalTwin.symptoms.map((sym, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{sym.name.value}</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                    Severity: {sym.severity.value}/10
                  </span>
                </div>
                {sym.onset.value && <div className="text-slate-600 text-[11px]"><strong>Onset:</strong> {sym.onset.value}</div>}
                {sym.character.value && <div className="text-slate-600 text-[11px]"><strong>Character:</strong> {sym.character.value}</div>}
                {sym.radiation.value && <div className="text-slate-600 text-[11px]"><strong>Radiation:</strong> {sym.radiation.value}</div>}
                {sym.associated.value && sym.associated.value.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {sym.associated.value.map((asc, aIdx) => (
                      <span key={aIdx} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-[10px]">
                        {asc}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Current Medications Leaf */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-slate-500 font-bold text-[10px] uppercase tracking-wider">
            <span>Medication Profile ({digitalTwin.medications.length})</span>
            <Pill className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="space-y-1.5">
            {digitalTwin.medications.map((m) => (
              <div key={m.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800 text-xs">{m.name.value} {m.dose.value}</div>
                  <div className="text-[10px] text-slate-500">{m.frequency.value} • Adherence: {m.adherence.value.toUpperCase()}</div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  m.status.value === 'taking' ? 'bg-emerald-100 text-emerald-800' :
                  m.status.value === 'stopped' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {m.status.value === 'taking' ? '🟢 Taking' : m.status.value === 'stopped' ? '🔴 Stopped' : '🟡 Uncertain'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AYUSH Profile if active */}
        {digitalTwin.demographics.consultationType === 'ayush' && (
          <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 space-y-1.5">
            <div className="text-emerald-900 font-bold text-[10px] uppercase">
              🌿 AYUSH Prakriti Assessment
            </div>
            <div className="font-semibold text-emerald-950 text-xs">
              Dominant: {digitalTwin.ayushProfile.prakriti.value.dominant} (Vata: {digitalTwin.ayushProfile.prakriti.value.vata}%, Pitta: {digitalTwin.ayushProfile.prakriti.value.pitta}%, Kapha: {digitalTwin.ayushProfile.prakriti.value.kapha}%)
            </div>
            <div className="text-emerald-800 text-[10px]">Agni: {digitalTwin.ayushProfile.agni.value}</div>
          </div>
        )}

        {/* Explainable Provenance Stamp */}
        <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between">
          <span>Digital Twin ID: {digitalTwin.patientId}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> Real-time state
          </span>
        </div>
      </div>
    </div>
  );
};
