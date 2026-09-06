import React from 'react';
import { Stethoscope, Leaf, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';

export const UnifiedProfileView: React.FC = () => {
  const { digitalTwin } = usePatient();
  const ayush = digitalTwin.ayushProfile;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h3 className="text-base font-bold text-slate-900">Unified Complementary Health Profile</h3>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Bridging modern evidence-based Allopathy and holistic AYUSH perspectives in one unified, non-conflicting profile.
        </p>
      </div>

      {/* Two-Column Complementary View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Allopathic Clinical Lens */}
        <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-200 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-sky-200">
            <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
              <Stethoscope className="w-5 h-5 text-sky-600" />
              <span>Allopathic Clinical View</span>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-800">
              Evidence-Based Triage
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-sky-950 uppercase tracking-wide">Chief Clinical Complaint:</span>
            <p className="text-xs text-slate-800 font-medium mt-1 leading-relaxed">
              {digitalTwin.chiefComplaint.value}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-bold text-sky-950 uppercase tracking-wide">Triage Priority & Reason:</span>
            <div className="mt-1 p-3 rounded-xl bg-white border border-sky-200 text-xs text-slate-800">
              <div className="font-bold text-slate-900 mb-1">{digitalTwin.triage.badge}</div>
              <p className="text-slate-600">{digitalTwin.triage.reason}</p>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-sky-950 uppercase tracking-wide">Standard Medical History:</span>
            <div className="mt-1 space-y-1">
              {digitalTwin.medicalHistory.map((h) => (
                <div key={h.id} className="text-xs text-slate-700 bg-white p-2 rounded-lg border border-sky-100 flex items-center justify-between">
                  <span className="font-semibold">{h.title.value}</span>
                  <span className="text-[10px] text-slate-500">{h.approximateDate.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: AYUSH Holistic Lens */}
        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span>AYUSH / Traditional View</span>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-800">
              Holistic Constitution
            </span>
          </div>

          {/* Prakriti Breakdown */}
          <div>
            <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Prakriti (Dosha Constitution):</span>
            <div className="mt-1 p-3 rounded-xl bg-white border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Dominant: {ayush.prakriti.value.dominant}</span>
                <span className="text-emerald-700 font-semibold">Tri-dosha Balance</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-amber-50 p-2 rounded-lg border border-amber-200">
                  <div className="text-[10px] text-slate-500 font-bold">VATA</div>
                  <div className="font-bold text-amber-900">{ayush.prakriti.value.vata}%</div>
                </div>
                <div className="bg-red-50 p-2 rounded-lg border border-red-200">
                  <div className="text-[10px] text-slate-500 font-bold">PITTA</div>
                  <div className="font-bold text-red-900">{ayush.prakriti.value.pitta}%</div>
                </div>
                <div className="bg-sky-50 p-2 rounded-lg border border-sky-200">
                  <div className="text-[10px] text-slate-500 font-bold">KAPHA</div>
                  <div className="font-bold text-sky-900">{ayush.prakriti.value.kapha}%</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Agni & Ahara-Vihara (Diet & Lifestyle):</span>
            <div className="mt-1 p-3 rounded-xl bg-white border border-emerald-200 text-xs text-slate-800 space-y-1">
              <div><strong>Digestive Fire (Agni):</strong> {ayush.agni.value}</div>
              <div className="text-slate-600 mt-1">{ayush.aharaVihara.value}</div>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Complementary Traditional Treatments:</span>
            <div className="mt-1 space-y-1">
              {ayush.traditionalTreatments.value.map((treat, idx) => (
                <div key={idx} className="text-xs text-emerald-900 bg-white p-2 rounded-lg border border-emerald-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{treat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
