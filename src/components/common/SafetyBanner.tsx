import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { TRANSLATIONS } from '../../data/translations';

export const SafetyBanner: React.FC = () => {
  const { language } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs md:text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-50 shadow-sm">
      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
      <span className="text-center">
        <strong>Clinical Notice:</strong> {t.safetyDisclaimer}
      </span>
      <span className="hidden lg:inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[11px] px-2 py-0.5 rounded-full font-semibold border border-amber-300">
        <ShieldCheck className="w-3 h-3" /> ABDM Compliant Architecture
      </span>
    </div>
  );
};
