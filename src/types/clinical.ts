export type ConfidenceLabel =
  | 'Confirmed'
  | 'Patient reported'
  | 'Extracted from document'
  | 'Needs verification'
  | 'Uncertain';

export type SourceType =
  | 'patient_interview'
  | 'ocr_document'
  | 'doctor_verified'
  | 'historical_record';

export type VerificationStatus =
  | 'unverified'
  | 'verified_by_doctor'
  | 'flagged_by_doctor';

export interface LeafField<T> {
  value: T;
  source: SourceType;
  confidenceLabel: ConfidenceLabel;
  verificationStatus: VerificationStatus;
  timestamp: string;
  notes?: string;
}

export type TriageLevel = 'emergency' | 'high_priority' | 'needs_attention' | 'routine';

export interface TriageAssessment {
  level: TriageLevel;
  badge: string; // e.g., '🔴 EMERGENCY'
  reason: string;
  action: string;
  redFlagsIdentified: string[];
  disclaimer: string;
  calculatedAt: string;
}

export interface Demographics {
  id: string;
  name: LeafField<string>;
  age: LeafField<number>;
  gender: LeafField<'male' | 'female' | 'other'>;
  preferredLanguage: LeafField<string>;
  phone: LeafField<string>;
  abhaId?: LeafField<string>;
  consultationType: 'allopathy' | 'ayush';
}

export interface Symptom {
  id: string;
  name: LeafField<string>;
  onset: LeafField<string>;
  duration: LeafField<string>;
  location: LeafField<string>;
  severity: LeafField<number>; // 1-10
  character: LeafField<string>;
  radiation: LeafField<string>;
  aggravating: LeafField<string>;
  relieving: LeafField<string>;
  associated: LeafField<string[]>;
}

export interface MedicalHistoryItem {
  id: string;
  category: 'condition' | 'surgery' | 'hospitalization' | 'allergy' | 'family' | 'lifestyle';
  title: LeafField<string>;
  details: LeafField<string>;
  approximateDate: LeafField<string>;
  status: LeafField<'active' | 'resolved' | 'chronic'>;
}

export interface Medication {
  id: string;
  name: LeafField<string>;
  dose: LeafField<string>;
  frequency: LeafField<string>;
  startDate: LeafField<string>;
  status: LeafField<'taking' | 'uncertain' | 'stopped'>; // 🟢 Taking, 🟡 Uncertain, 🔴 Stopped
  adherence: LeafField<'yes' | 'no' | 'not_sure'>;
  sourceDocName?: string;
  isDuplicate?: boolean;
  conflictWarning?: string;
  discontinuedReason?: string;
}

export interface Investigation {
  id: string;
  testName: LeafField<string>;
  category: 'blood' | 'imaging' | 'ecg' | 'vitals' | 'other';
  date: LeafField<string>;
  result: LeafField<string>;
  referenceRange?: string;
  flag?: 'normal' | 'abnormal' | 'critical';
}

export interface AyushProfile {
  prakriti: LeafField<{ vata: number; pitta: number; kapha: number; dominant: string }>;
  vikriti: LeafField<string>;
  agni: LeafField<'Sama' | 'Vishama' | 'Tikshna' | 'Manda'>;
  aharaVihara: LeafField<string>;
  dashavidhaPariksha: LeafField<{
    dooshya?: string;
    desha?: string;
    bala?: string;
    kala?: string;
    anala?: string;
    prakriti?: string;
    vaya?: string;
    sattva?: string;
    satmya?: string;
    ahara?: string;
  }>;
  traditionalTreatments: LeafField<string[]>;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: 'prescription' | 'lab_report' | 'discharge_summary' | 'scan';
  uploadedAt: string;
  status: 'uploaded' | 'processing' | 'extracted' | 'confirmed';
  extractedData?: {
    medicines?: string[];
    diagnoses?: string[];
    dates?: string[];
    tests?: string[];
    rawSnippets?: string[];
  };
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'diagnosis' | 'medication' | 'investigation' | 'hospitalization' | 'symptom';
  title: string;
  description: string;
  source: SourceType;
  status: 'confirmed' | 'needs_verification';
}

export interface DigitalTwin {
  patientId: string;
  demographics: Demographics;
  chiefComplaint: LeafField<string>;
  symptoms: Symptom[];
  medicalHistory: MedicalHistoryItem[];
  medications: Medication[];
  investigations: Investigation[];
  ayushProfile: AyushProfile;
  documents: DocumentItem[];
  timeline: TimelineEvent[];
  triage: TriageAssessment;
  informationGaps: string[];
  patientConcerns: LeafField<string>;
  doctorSummary: {
    content: string;
    hpi: string;
    relevantHistory: string;
    medicationIntelligence: string;
    missingInfo: string[];
    isVerified: boolean;
    verifiedBy?: string;
    verifiedAt?: string;
    doctorNotes?: string;
  };
  lastUpdated: string;
  consentGiven: boolean;
  consentTimestamp?: string;
  statusInQueue: 'waiting' | 'in_review' | 'completed';
  queueWaitMinutes: number;
}
