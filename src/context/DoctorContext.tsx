import React, { createContext, useContext, useState, useEffect } from 'react';
import { DigitalTwin, TriageLevel } from '../types/clinical';
import { DEMO_PATIENTS } from '../data/demoPatients';
import { usePatient } from './PatientContext';

interface DoctorContextType {
  queue: DigitalTwin[];
  selectedPatientId: string;
  selectedPatient: DigitalTwin;
  selectPatient: (patientId: string) => void;
  verifyCurrentPatient: (notes?: string) => void;
  filterTriage: string;
  setFilterTriage: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  updateDoctorNotes: (notes: string) => void;
  askPatientQuestion: (question: string) => void;
}

const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { digitalTwin: currentActiveTwin, doctorVerifySummary } = usePatient();

  const [queue, setQueue] = useState<DigitalTwin[]>(() => {
    return Object.values(DEMO_PATIENTS);
  });

  const [selectedPatientId, setSelectedPatientId] = useState<string>('PT-IN-2026-8801');
  const [filterTriage, setFilterTriage] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Keep active digital twin in sync with queue
  useEffect(() => {
    setQueue(prev => {
      const idx = prev.findIndex(p => p.patientId === currentActiveTwin.patientId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = currentActiveTwin;
        return next;
      }
      return [currentActiveTwin, ...prev];
    });
  }, [currentActiveTwin]);

  const selectPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
  };

  const selectedPatient = queue.find(p => p.patientId === selectedPatientId) || queue[0] || currentActiveTwin;

  const verifyCurrentPatient = (notes?: string) => {
    doctorVerifySummary(notes);
    setQueue(prev =>
      prev.map(p => {
        if (p.patientId === selectedPatientId) {
          return {
            ...p,
            doctorSummary: {
              ...p.doctorSummary,
              isVerified: true,
              verifiedBy: 'Dr. Anand Raman, MD',
              verifiedAt: new Date().toISOString(),
              doctorNotes: notes || p.doctorSummary.doctorNotes
            }
          };
        }
        return p;
      })
    );
  };

  const updateDoctorNotes = (notes: string) => {
    setQueue(prev =>
      prev.map(p => {
        if (p.patientId === selectedPatientId) {
          return {
            ...p,
            doctorSummary: {
              ...p.doctorSummary,
              doctorNotes: notes
            }
          };
        }
        return p;
      })
    );
  };

  const askPatientQuestion = (question: string) => {
    setQueue(prev =>
      prev.map(p => {
        if (p.patientId === selectedPatientId) {
          return {
            ...p,
            informationGaps: [`[Doctor Follow-up Query]: ${question}`, ...p.informationGaps]
          };
        }
        return p;
      })
    );
  };

  return (
    <DoctorContext.Provider
      value={{
        queue,
        selectedPatientId,
        selectedPatient,
        selectPatient,
        verifyCurrentPatient,
        filterTriage,
        setFilterTriage,
        searchTerm,
        setSearchTerm,
        updateDoctorNotes,
        askPatientQuestion
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => {
  const ctx = useContext(DoctorContext);
  if (!ctx) throw new Error('useDoctor must be used within DoctorProvider');
  return ctx;
};
