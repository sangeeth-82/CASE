import React from 'react';
import { PlayCircle, UserCheck } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { useAuth } from '../../context/AuthContext';

export const DemoBar: React.FC = () => {
  const { loadPatientTwin, digitalTwin } = usePatient();
  const { loadDemoMode, role } = useAuth();

  const demoOptions = [
    { id: 'demo-chest-pain', label: '1. Chest Pain (Emergency)', badge: '🔴 58M', color: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' },
    { id: 'demo-abdominal-pain', label: '2. Abdominal Pain (High Priority)', badge: '🟠 31F', color: 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100' },
    { id: 'demo-diabetes-followup', label: '3. Diabetes + Duplicate Meds', badge: '🟢 64M', color: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100' },
    { id: 'demo-fever', label: '4. Fever / Dengue Warning', badge: '🟠 24F', color: 'bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100' },
    { id: 'demo-elderly-ayush', label: '5. Elderly OA + AYUSH (Tamil)', badge: '🟡 72F', color: 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100' }
  ];

  const handleSelect = (id: string) => {
    loadPatientTwin(id);
    loadDemoMode(id, role);
  };

  return (
    <div className="bg-slate-900 text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <PlayCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
        <span className="font-bold tracking-wide text-slate-200 uppercase text-[11px]">
          Hackathon Demo Fast-Track:
        </span>
        <span className="text-slate-400 hidden sm:inline">Click to load pre-populated patient digital twins:</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {demoOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              digitalTwin.patientId.includes(opt.badge.split(' ')[1]) || digitalTwin.demographics.name.value.includes(opt.label.split(' ')[1])
                ? 'ring-2 ring-sky-400 bg-white text-slate-900 font-bold shadow'
                : opt.color
            }`}
          >
            <span>{opt.badge}</span>
            <span className="hidden md:inline">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
