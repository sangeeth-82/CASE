import React, { useState } from 'react';
import { Clock, Calendar, Activity, Pill, FileText, AlertCircle, Filter } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';

export const HealthTimeline: React.FC = () => {
  const { digitalTwin } = usePatient();
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = digitalTwin.timeline.filter(t => {
    if (filterType === 'all') return true;
    return t.type === filterType;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-600" />
            <span>Interactive Health Chronology</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Reconstructed timeline uniting past diagnoses, prescriptions, investigations, and recent symptom onset.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
          {['all', 'diagnosis', 'medication', 'investigation', 'symptom'].map(f => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                filterType === f ? 'bg-white text-sky-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-slate-200 ml-4 space-y-6 py-2">
        {filtered.map((item) => (
          <div key={item.id} className="relative pl-6 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-xs ${
              item.type === 'symptom' ? 'bg-red-500 ring-2 ring-red-100' :
              item.type === 'diagnosis' ? 'bg-sky-600 ring-2 ring-sky-100' :
              item.type === 'investigation' ? 'bg-indigo-600 ring-2 ring-indigo-100' : 'bg-emerald-600 ring-2 ring-emerald-100'
            }`} />

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                  {item.type}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-1">{item.title}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              <div className="mt-2 text-[10px] text-slate-400">
                Source: {item.source} • Status: {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
