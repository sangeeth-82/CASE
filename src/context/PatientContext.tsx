import React, { createContext, useContext, useState, useEffect } from 'react';
import { DigitalTwin, LeafField, Medication } from '../types/clinical';
import { SupportedLanguage } from '../types/i18n';
import { DEMO_PATIENTS } from '../data/demoPatients';
import { evaluateDeterministicTriage } from '../services/triageEngine';

interface PatientContextType {
  digitalTwin: DigitalTwin;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  isSimplifiedLanguage: boolean;
  setIsSimplifiedLanguage: (val: boolean) => void;
  setConsultationType: (type: 'allopathy' | 'ayush') => void;
  confirmConsent: () => void;
  loadPatientTwin: (patientIdOrKey: string) => void;
  updateChiefComplaint: (complaint: string) => void;
  addOrUpdateSymptom: (symptomData: Partial<DigitalTwin['symptoms'][0]>) => void;
  addMedication: (med: Partial<Medication>) => void;
  updateMedicationStatus: (medId: string, status: 'taking' | 'uncertain' | 'stopped', adherence?: 'yes' | 'no' | 'not_sure') => void;
  confirmOcrExtraction: (data: {
    fileName: string;
    diagnoses: string[];
    medicines: Array<{ name: string; dose: string; freq: string }>;
    investigations: Array<{ name: string; result: string; unit?: string; flag?: 'normal' | 'abnormal' | 'critical' }>;
  }) => void;
  submitToDoctorQueue: () => void;
  doctorVerifySummary: (doctorNotes?: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [digitalTwin, setDigitalTwin] = useState<DigitalTwin>(() => {
    const saved = localStorage.getItem('medikiosk_active_twin');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEMO_PATIENTS['demo-chest-pain'];
  });

  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    return (localStorage.getItem('medikiosk_lang') as SupportedLanguage) || 'en';
  });

  const [isSimplifiedLanguage, setIsSimplifiedLanguage] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('medikiosk_active_twin', JSON.stringify(digitalTwin));
  }, [digitalTwin]);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('medikiosk_lang', lang);
  };

  const confirmConsent = () => {
    setDigitalTwin(prev => ({
      ...prev,
      consentGiven: true,
      consentTimestamp: new Date().toISOString()
    }));
  };

  const setConsultationType = (type: 'allopathy' | 'ayush') => {
    setDigitalTwin(prev => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        consultationType: type
      }
    }));
  };

  const loadPatientTwin = (key: string) => {
    const found = DEMO_PATIENTS[key];
    if (found) {
      setDigitalTwin({ ...found });
      if (key === 'demo-elderly-ayush') {
        setIsSimplifiedLanguage(true);
      }
    }
  };

  const updateChiefComplaint = (complaint: string) => {
    setDigitalTwin(prev => {
      const updated: DigitalTwin = {
        ...prev,
        chiefComplaint: {
          value: complaint,
          source: 'patient_interview',
          confidenceLabel: 'Patient reported',
          verificationStatus: 'unverified',
          timestamp: new Date().toISOString()
        }
      };
      // re-evaluate triage
      const triage = evaluateDeterministicTriage({
        complaint: complaint,
        symptoms: updated.symptoms.map(s => ({
          name: s.name.value,
          severity: s.severity.value,
          character: s.character.value,
          radiation: s.radiation.value,
          associated: s.associated.value
        })),
        medicalHistory: updated.medicalHistory.map(h => h.title.value),
        medications: updated.medications.map(m => ({ name: m.name.value, conflictWarning: m.conflictWarning })),
        investigations: updated.investigations.map(i => ({ testName: i.testName.value, result: i.result.value, flag: i.flag })),
        age: updated.demographics.age.value
      });
      return { ...updated, triage, lastUpdated: new Date().toISOString() };
    });
  };

  const addOrUpdateSymptom = (data: any) => {
    setDigitalTwin(prev => {
      const existing = prev.symptoms[0] || {
        id: 'sym-active',
        name: { value: prev.chiefComplaint.value, source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        onset: { value: 'Recent', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        duration: { value: 'Ongoing', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        location: { value: 'Generalized', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        severity: { value: 5, source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        character: { value: '', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        radiation: { value: 'None', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        aggravating: { value: '', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        relieving: { value: '', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        associated: { value: [], source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() }
      };

      const updatedSymptom = { ...existing };
      if (data.onset) updatedSymptom.onset = { ...updatedSymptom.onset, value: data.onset };
      if (data.duration) updatedSymptom.duration = { ...updatedSymptom.duration, value: data.duration };
      if (data.location) updatedSymptom.location = { ...updatedSymptom.location, value: data.location };
      if (data.severity !== undefined) updatedSymptom.severity = { ...updatedSymptom.severity, value: Number(data.severity) };
      if (data.character) updatedSymptom.character = { ...updatedSymptom.character, value: data.character };
      if (data.radiation) updatedSymptom.radiation = { ...updatedSymptom.radiation, value: data.radiation };
      if (data.associated) updatedSymptom.associated = { ...updatedSymptom.associated, value: data.associated };

      const updated: DigitalTwin = {
        ...prev,
        symptoms: [updatedSymptom]
      };

      const triage = evaluateDeterministicTriage({
        complaint: updated.chiefComplaint.value,
        symptoms: updated.symptoms.map(s => ({
          name: s.name.value,
          severity: s.severity.value,
          character: s.character.value,
          radiation: s.radiation.value,
          associated: s.associated.value
        })),
        medicalHistory: updated.medicalHistory.map(h => h.title.value),
        medications: updated.medications.map(m => ({ name: m.name.value, conflictWarning: m.conflictWarning })),
        investigations: updated.investigations.map(i => ({ testName: i.testName.value, result: i.result.value, flag: i.flag })),
        age: updated.demographics.age.value
      });

      return { ...updated, triage, lastUpdated: new Date().toISOString() };
    });
  };

  const addMedication = (med: Partial<Medication>) => {
    setDigitalTwin(prev => {
      const newMed: Medication = {
        id: `med-${Date.now()}`,
        name: { value: med.name?.value || 'New Medicine', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        dose: { value: med.dose?.value || 'Standard', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        frequency: { value: med.frequency?.value || 'Once daily', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        startDate: { value: new Date().toISOString().split('T')[0], source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        status: { value: (med.status?.value as any) || 'taking', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        adherence: { value: (med.adherence?.value as any) || 'yes', source: 'patient_interview', confidenceLabel: 'Patient reported', verificationStatus: 'unverified', timestamp: new Date().toISOString() }
      };
      return {
        ...prev,
        medications: [...prev.medications, newMed],
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const updateMedicationStatus = (medId: string, status: 'taking' | 'uncertain' | 'stopped', adherence?: 'yes' | 'no' | 'not_sure') => {
    setDigitalTwin(prev => ({
      ...prev,
      medications: prev.medications.map(m => {
        if (m.id === medId) {
          return {
            ...m,
            status: { ...m.status, value: status, verificationStatus: 'verified_by_doctor', timestamp: new Date().toISOString() },
            adherence: adherence ? { ...m.adherence, value: adherence } : m.adherence
          };
        }
        return m;
      })
    }));
  };

  const confirmOcrExtraction = (data: any) => {
    setDigitalTwin(prev => {
      const newMeds: Medication[] = data.medicines.map((m: any, idx: number) => ({
        id: `ocr-m-${Date.now()}-${idx}`,
        name: { value: m.name, source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        dose: { value: m.dose, source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        frequency: { value: m.freq, source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        startDate: { value: 'Recent', source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        status: { value: 'taking' as const, source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() },
        adherence: { value: 'yes' as const, source: 'ocr_document', confidenceLabel: 'Extracted from document', verificationStatus: 'unverified', timestamp: new Date().toISOString() }
      }));

      const newTimelineEvents = data.diagnoses.map((d: string, idx: number) => ({
        id: `ocr-tl-${Date.now()}-${idx}`,
        date: new Date().toISOString().split('T')[0],
        type: 'investigation' as const,
        title: `Document Extracted: ${data.fileName}`,
        description: `Verified clinical findings: ${d}`,
        source: 'ocr_document' as const,
        status: 'confirmed' as const
      }));

      return {
        ...prev,
        medications: [...prev.medications, ...newMeds],
        timeline: [...newTimelineEvents, ...prev.timeline],
        documents: [
          ...prev.documents,
          {
            id: `doc-${Date.now()}`,
            name: data.fileName,
            type: 'lab_report',
            uploadedAt: new Date().toISOString(),
            status: 'confirmed',
            extractedData: {
              diagnoses: data.diagnoses,
              medicines: data.medicines.map((m: any) => `${m.name} ${m.dose}`)
            }
          }
        ]
      };
    });
  };

  const submitToDoctorQueue = () => {
    setDigitalTwin(prev => ({
      ...prev,
      statusInQueue: 'waiting',
      queueWaitMinutes: 1,
      lastUpdated: new Date().toISOString()
    }));
  };

  const doctorVerifySummary = (doctorNotes?: string) => {
    setDigitalTwin(prev => ({
      ...prev,
      doctorSummary: {
        ...prev.doctorSummary,
        isVerified: true,
        verifiedBy: 'Dr. Anand Raman, MD',
        verifiedAt: new Date().toISOString(),
        doctorNotes: doctorNotes || prev.doctorSummary.doctorNotes
      }
    }));
  };

  return (
    <PatientContext.Provider
      value={{
        digitalTwin,
        language,
        setLanguage,
        isSimplifiedLanguage,
        setIsSimplifiedLanguage,
        setConsultationType,
        confirmConsent,
        loadPatientTwin,
        updateChiefComplaint,
        addOrUpdateSymptom,
        addMedication,
        updateMedicationStatus,
        confirmOcrExtraction,
        submitToDoctorQueue,
        doctorVerifySummary
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const ctx = useContext(PatientContext);
  if (!ctx) throw new Error('usePatient must be used within PatientProvider');
  return ctx;
};
