import React from 'react';
import { Users, Clock, AlertCircle, CheckCircle2, ShieldCheck, Search, Filter } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';
import { DigitalTwin } from '../../types/clinical';

export const PatientQueue: React.FC = () => {
  const {
    queue,
    selectedPatientId,
    selectPatient,
    filterTriage,
    setFilterTriage,
    searchTerm,
    setSearchTerm
  } = useDoctor();

  // Sort queue: Emergency first, then High Priority, Needs Attention, Routine
  const priorityOrder: Record<string, number> = {
    emergency: 1,
    high_priority: 2,
    needs_attention: 3,
    routine: 4
  };

  const sortedQueue = [...queue].sort((a, b) => {
    const pA = priorityOrder[a.triage.level] || 5;
    const pB = priorityOrder[b.triage.level] || 5;
    return pA - pB;
  });

  const filteredQueue = sortedQueue.filter(p => {
    const matchesFilter = filterTriage === 'all' || p.triage.level === filterTriage;
    const matchesSearch =
      p.demographics.name.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.chiefComplaint.value.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Queue Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-600" />
            <h3 className="font-bold text-slate-900 text-sm">Pre-Consultation Patient Queue</h3>
          </div>
          <span className="bg-sky-100 text-sky-800 text-xs font-extrabold px-2.5 py-0.5 rounded-full">
            {filteredQueue.length} Waiting
          </span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search patient name, ID, or complaint..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1 text-[11px] font-bold">
          {[
            { id: 'all', label: 'All' },
            { id: 'emergency', label: '🔴 Emergency' },
            { id: 'high_priority', label: '🟠 High' },
            { id: 'needs_attention', label: '🟡 Attention' },
            { id: 'routine', label: '🟢 Routine' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterTriage(f.id)}
              className={`px-2 py-1 rounded-lg border transition-all ${
                filterTriage === f.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Queue List */}
      <div className="divide-y divide-slate-100 overflow-y-auto max-h-[calc(100vh-280px)]">
        {filteredQueue.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No patients match current filters.
          </div>
        ) : (
          filteredQueue.map((patient) => {
            const isSelected = patient.patientId === selectedPatientId;
            return (
              <button
                key={patient.patientId}
                onClick={() => selectPatient(patient.patientId)}
                className={`w-full text-left p-4 transition-all hover:bg-slate-50 flex flex-col gap-2 ${
                  isSelected ? 'bg-sky-50/80 border-l-4 border-sky-600 shadow-xs' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{patient.demographics.name.value}</span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      ({patient.demographics.age.value}y/{patient.demographics.gender.value.toUpperCase()})
                    </span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                    patient.triage.level === 'emergency' ? 'bg-red-100 text-red-800 border border-red-200' :
                    patient.triage.level === 'high_priority' ? 'bg-orange-100 text-orange-800 border border-orange-200' :
                    patient.triage.level === 'needs_attention' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                    'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {patient.triage.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {patient.chiefComplaint.value}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-500">
                    <Clock className="w-3 h-3" /> Waiting ~{patient.queueWaitMinutes} min
                  </span>
                  <div className="flex items-center gap-1.5">
                    {patient.doctorSummary.isVerified ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    ) : (
                      <span className="text-amber-700 font-medium">Awaiting Review</span>
                    )}
                    <span>•</span>
                    <span className="font-mono">{patient.patientId}</span>
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
