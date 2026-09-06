export interface OcrPipelineStage {
  step: number;
  label: string;
  status: 'pending' | 'active' | 'completed' | 'failed';
  detail?: string;
}

export interface ExtractedOcrResult {
  fileName: string;
  docType: 'prescription' | 'lab_report' | 'discharge_summary';
  diagnoses: string[];
  dates: string[];
  medicines: Array<{ name: string; dose: string; freq: string }>;
  investigations: Array<{ name: string; result: string; unit?: string; flag?: 'normal' | 'abnormal' | 'critical' }>;
  rawSnippets: string[];
}

export async function processDocumentOcr(
  file: File,
  onProgress: (stages: OcrPipelineStage[], currentStageIndex: number) => void
): Promise<ExtractedOcrResult> {
  const stages: OcrPipelineStage[] = [
    { step: 1, label: "Document detected & format verified", status: 'pending', detail: `${file.name} (${Math.round(file.size / 1024)} KB)` },
    { step: 2, label: "OCR text extraction & optical preprocessing", status: 'pending' },
    { step: 3, label: "Clinical entities & taxonomy identified", status: 'pending' },
    { step: 4, label: "Clinical dates & chronology resolved", status: 'pending' },
    { step: 5, label: "Prescription medications & dosages parsed", status: 'pending' },
    { step: 6, label: "Diagnostic investigation values extracted", status: 'pending' },
    { step: 7, label: "Digital twin timeline candidate generated", status: 'pending' }
  ];

  for (let i = 0; i < stages.length; i++) {
    stages[i].status = 'active';
    onProgress([...stages], i);
    await new Promise(r => setTimeout(r, 450));
    stages[i].status = 'completed';
    onProgress([...stages], i);
  }

  // Simulated structured extraction based on filename or default
  const lowerName = file.name.toLowerCase();
  if (lowerName.includes('lab') || lowerName.includes('blood') || lowerName.includes('cbc')) {
    return {
      fileName: file.name,
      docType: 'lab_report',
      diagnoses: ['Uncontrolled Hyperglycemia / Elevated Glycated Hemoglobin'],
      dates: ['2026-08-28'],
      medicines: [
        { name: 'Metformin Hydrochloride', dose: '500 mg', freq: 'Twice daily' },
        { name: 'Amlodipine', dose: '5 mg', freq: 'Once daily' }
      ],
      investigations: [
        { name: 'Glycated Hemoglobin (HbA1c)', result: '8.2', unit: '%', flag: 'abnormal' },
        { name: 'Fasting Blood Sugar', result: '168', unit: 'mg/dL', flag: 'abnormal' },
        { name: 'Serum Creatinine', result: '1.1', unit: 'mg/dL', flag: 'normal' }
      ],
      rawSnippets: [
        "Patient ID: LAB-29188 | Sample Date: 28-Aug-2026",
        "HbA1c: 8.2% (Ref: < 5.7% Non-Diabetic)",
        "Glucose Fasting: 168 mg/dL | Serum Creatinine: 1.1 mg/dL"
      ]
    };
  }

  // Default prescription extraction
  return {
    fileName: file.name,
    docType: 'prescription',
    diagnoses: ['Essential Hypertension', 'Cardiovascular Risk Stratification'],
    dates: ['2026-09-02'],
    medicines: [
      { name: 'Telmisartan', dose: '40 mg', freq: 'Once daily morning' },
      { name: 'Atorvastatin', dose: '20 mg', freq: 'Once daily bedtime' }
    ],
    investigations: [
      { name: 'Resting Blood Pressure', result: '144/88', unit: 'mmHg', flag: 'abnormal' }
    ],
    rawSnippets: [
      "Rx: Tab. Telmisartan 40mg 1-0-0 x 30 days",
      "Tab. Atorvastatin 20mg 0-0-1 x 30 days",
      "Advice: Salt restricted diet, review after 3 months"
    ]
  };
}
