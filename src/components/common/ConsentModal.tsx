import React from 'react';
import { ShieldAlert, CheckCircle, XCircle, Lock, FileText, Stethoscope } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { TRANSLATIONS } from '../../data/translations';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose, onAgree }) => {
  const { language } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-6 text-white">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
            <ShieldAlert className="w-7 h-7 text-sky-100" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">{t.consentTitle}</h2>
          <p className="text-sky-100 text-xs mt-1">
            Compliant with ABDM Health Data Management Policy & Ethical AI Triage Standards
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-slate-700 text-sm">
          <p className="font-semibold text-slate-900">{t.consentBody}</p>

          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">1. Pre-Consultation Preparation:</strong>
                <p className="text-xs text-slate-600 mt-0.5">{t.consentPoint1}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Stethoscope className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">2. Non-Diagnostic Guarantee:</strong>
                <p className="text-xs text-slate-600 mt-0.5">{t.consentPoint2}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">3. Privacy & Confined Sharing:</strong>
                <p className="text-xs text-slate-600 mt-0.5">{t.consentPoint3}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-xs text-blue-900">
            <strong>Emergency Clause:</strong> If you are suffering from acute crushing chest pain, extreme breathlessness, sudden speech paralysis, or major bleeding, please alert hospital triage staff immediately.
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            {t.cancel}
          </button>
          <button
            onClick={onAgree}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{t.iAgree}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
