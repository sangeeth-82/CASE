import { DigitalTwin } from '../types/clinical';

export const DEMO_PATIENTS: Record<string, DigitalTwin> = {
  "demo-chest-pain": {
    "patientId": "PT-IN-2026-8801",
    "demographics": {
      "id": "PT-IN-2026-8801",
      "name": {
        "value": "Rajesh Sharma",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "age": {
        "value": 58,
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "gender": {
        "value": "male",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "preferredLanguage": {
        "value": "English",
        "source": "patient_interview",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "phone": {
        "value": "+91 98401 23456",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "abhaId": {
        "value": "91-4458-1290-7761",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "consultationType": "allopathy"
    },
    "chiefComplaint": {
      "value": "Retrosternal chest pressure radiating to left shoulder and jaw with shortness of breath and cold perspiration",
      "source": "patient_interview",
      "confidenceLabel": "Patient reported",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "symptoms": [
      {
        "id": "sym-1",
        "name": {
          "value": "Chest Pain",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "onset": {
          "value": "3 hours ago during brisk walking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "duration": {
          "value": "Continuous for last 180 minutes",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "location": {
          "value": "Retrosternal / Precordial",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "severity": {
          "value": 8,
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "character": {
          "value": "Heavy squeezing, crushing sensation",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "radiation": {
          "value": "Radiating to left shoulder, inner arm, and jaw angle",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "aggravating": {
          "value": "Mild physical exertion, deep breathing",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "relieving": {
          "value": "Resting seated, but pain does not completely subside",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "associated": {
          "value": [
            "Diaphoresis (cold sweats)",
            "Dyspnea (shortness of breath)",
            "Mild dizziness"
          ],
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medicalHistory": [
      {
        "id": "h-1",
        "category": "condition",
        "title": {
          "value": "Hypertension",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Diagnosed 8 years ago; on regular medication",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2018-04",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "h-2",
        "category": "condition",
        "title": {
          "value": "Dyslipidemia",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Elevated LDL treated with Atorvastatin",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2021-08",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "h-3",
        "category": "allergy",
        "title": {
          "value": "Penicillin Allergy",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Erythematous rash reported in youth",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "1992-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medications": [
      {
        "id": "m-1",
        "name": {
          "value": "Telmisartan",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "40 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once daily (morning)",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2019-01-15",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "m-2",
        "name": {
          "value": "Atorvastatin",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "20 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once daily (bedtime)",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2021-09-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "m-3",
        "name": {
          "value": "Sorbitrate (Isosorbide Dinitrate)",
          "source": "patient_interview",
          "confidenceLabel": "Patient reported",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "5 mg sublingual",
          "source": "patient_interview",
          "confidenceLabel": "Needs verification",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "SOS 1 hr ago at home",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Needs verification",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "conflictWarning": "Self-administered nitrate without baseline ECG."
      }
    ],
    "investigations": [
      {
        "id": "i-1",
        "testName": {
          "value": "Blood Pressure",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "vitals",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "158/94 mmHg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "120/80 mmHg",
        "flag": "abnormal"
      },
      {
        "id": "i-2",
        "testName": {
          "value": "Pulse Rate",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "vitals",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "98 bpm (Sinus tachycardia)",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "60-100 bpm",
        "flag": "normal"
      },
      {
        "id": "i-3",
        "testName": {
          "value": "SpO2",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "vitals",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "95% on room air",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "95-100%",
        "flag": "normal"
      }
    ],
    "ayushProfile": {
      "prakriti": {
        "value": {
          "vata": 40,
          "pitta": 45,
          "kapha": 15,
          "dominant": "Pitta-Vata"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "vikriti": {
        "value": "Aggravated Pitta with Vyana Vayu avarana",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "agni": {
        "value": "Tikshna",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "aharaVihara": {
        "value": "High dietary salt, chronic stress",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "dashavidhaPariksha": {
        "value": {
          "dooshya": "Rasa, Rakta, Mamsa",
          "desha": "Sadharana",
          "bala": "Madhyama",
          "kala": "Sharad",
          "anala": "Tikshnagni",
          "prakriti": "Pitta-Vata",
          "vaya": "58 yrs"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "traditionalTreatments": {
        "value": [
          "Arjuna Ksheerapaka",
          "Pranayama"
        ],
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      }
    },
    "documents": [
      {
        "id": "d-1",
        "name": "Echo_Report_2023.pdf",
        "type": "lab_report",
        "uploadedAt": "2026-09-05T08:15:00Z",
        "status": "confirmed",
        "extractedData": {
          "diagnoses": [
            "LVH",
            "LVEF 55%"
          ],
          "dates": [
            "2023-11-12"
          ],
          "medicines": [
            "Telmisartan 40mg"
          ]
        }
      }
    ],
    "timeline": [
      {
        "id": "t-1",
        "date": "2018-04-10",
        "type": "diagnosis",
        "title": "Hypertension Diagnosed",
        "description": "Telmisartan started",
        "source": "historical_record",
        "status": "confirmed"
      },
      {
        "id": "t-2",
        "date": "2023-11-12",
        "type": "investigation",
        "title": "2D Echo (EF 55%)",
        "description": "Preserved systolic function",
        "source": "ocr_document",
        "status": "confirmed"
      },
      {
        "id": "t-3",
        "date": "2026-09-05",
        "type": "symptom",
        "title": "Acute Retrosternal Pain",
        "description": "Heavy squeezing pain with cold sweats",
        "source": "patient_interview",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "emergency",
      "badge": "\ud83d\udd34 EMERGENCY",
      "reason": "Acute retrosternal squeezing chest pain (8/10) with left arm radiation, diaphoresis, dyspnea, and hypertension history.",
      "action": "Immediate clinical evaluation, urgent 12-lead ECG within 10 minutes, cardiac enzymes (hs-cTnI), and continuous vitals monitoring.",
      "redFlagsIdentified": [
        "Retrosternal squeezing pain radiating to left arm/jaw",
        "Diaphoresis and dyspnea",
        "Age > 55 with cardiovascular risk factors"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T11:00:00Z"
    },
    "informationGaps": [
      "12-lead ECG pending to rule out STEMI.",
      "Time of exact symptom onset vs peak.",
      "Last dose timing of Telmisartan today."
    ],
    "patientConcerns": {
      "value": "Patient is anxious about having a heart attack like his brother.",
      "source": "historical_record",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "doctorSummary": {
      "content": "58-year-old hypertensive male presenting with 3-hour history of acute retrosternal squeezing pain radiating to left arm and jaw with diaphoresis and dyspnea. Triage: EMERGENCY.",
      "hpi": "Pain started during brisk walking 3 hours ago, 8/10 severity, continuous. Associated with cold sweating and shortness of breath.",
      "relevantHistory": "Essential Hypertension (8 yrs), Dyslipidemia. Penicillin allergy.",
      "medicationIntelligence": "Telmisartan 40mg, Atorvastatin 20mg. Self-administered sublingual Sorbitrate 1 hr ago.",
      "missingInfo": [
        "STAT 12-lead ECG",
        "hs-cTnI Cardiac Troponin",
        "Serial Blood Pressure"
      ],
      "isVerified": false
    },
    "lastUpdated": "2026-09-05T11:02:00Z",
    "consentGiven": true,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 4
  },
  "demo-abdominal-pain": {
    "patientId": "PT-IN-2026-8802",
    "demographics": {
      "id": "PT-IN-2026-8802",
      "name": {
        "value": "Priya Sundaram",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "age": {
        "value": 31,
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "gender": {
        "value": "female",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "preferredLanguage": {
        "value": "English",
        "source": "patient_interview",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "phone": {
        "value": "+91 97910 88231",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "abhaId": {
        "value": "91-3829-4410-1120",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "consultationType": "allopathy"
    },
    "chiefComplaint": {
      "value": "Severe progressive right lower quadrant abdominal pain with nausea, anorexia, and low-grade fever",
      "source": "patient_interview",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "symptoms": [
      {
        "id": "sym-2",
        "name": {
          "value": "Abdominal Pain",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "onset": {
          "value": "Started 16 hours ago periumbilically, migrated to right lower quadrant 6 hours ago",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "duration": {
          "value": "Progressively worsening over 16 hours",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "location": {
          "value": "Right lower quadrant (McBurney point region)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "severity": {
          "value": 7,
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "character": {
          "value": "Sharp, persistent focal ache with tenderness",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "radiation": {
          "value": "Localised to right iliac fossa",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "aggravating": {
          "value": "Coughing, walking, transit bumps",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "relieving": {
          "value": "Lying in fetal position with right hip flexed",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "associated": {
          "value": [
            "Anorexia",
            "Nausea with 2 vomiting episodes",
            "Low-grade fever"
          ],
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medicalHistory": [
      {
        "id": "h-201",
        "category": "condition",
        "title": {
          "value": "PCOS",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Polycystic Ovary Syndrome diagnosed in 2022",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2022-03",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medications": [
      {
        "id": "m-201",
        "name": {
          "value": "Drotaverine (Drotin)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "80 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Single dose 4 hrs ago",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "not_sure",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "conflictWarning": "Antispasmodic taken without relief."
      }
    ],
    "investigations": [
      {
        "id": "i-201",
        "testName": {
          "value": "Oral Temperature",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "vitals",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "100.2\u00b0F (37.9\u00b0C)",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "98.6\u00b0F",
        "flag": "abnormal"
      }
    ],
    "ayushProfile": {
      "prakriti": {
        "value": {
          "vata": 30,
          "pitta": 50,
          "kapha": 20,
          "dominant": "Pitta"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "vikriti": {
        "value": "Pitta-Vata prakopa in Pakwashaya",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "agni": {
        "value": "Manda",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "aharaVihara": {
        "value": "Skipped meals, spicy street food",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "dashavidhaPariksha": {
        "value": {
          "dooshya": "Rasa, Rakta",
          "desha": "Anupa",
          "bala": "Madhyama",
          "kala": "Varsha",
          "anala": "Mandagni",
          "prakriti": "Pitta-Vata",
          "vaya": "31 yrs"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "traditionalTreatments": {
        "value": [
          "Jeeraka water"
        ],
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      }
    },
    "documents": [],
    "timeline": [
      {
        "id": "t-201",
        "date": "2026-09-04 20:00",
        "type": "symptom",
        "title": "Periumbilical ache",
        "description": "Dull discomfort around navel",
        "source": "patient_interview",
        "status": "confirmed"
      },
      {
        "id": "t-202",
        "date": "2026-09-05 06:00",
        "type": "symptom",
        "title": "Migration to RIF",
        "description": "Sharp pain localized to McBurney point",
        "source": "patient_interview",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "high_priority",
      "badge": "\ud83d\udfe0 HIGH PRIORITY",
      "reason": "Migratory right lower quadrant pain with nausea, anorexia, and fever suggestive of acute appendicitis or gynecological emergency.",
      "action": "Urgent surgical evaluation, abdominal ultrasound, CBC (leukocytosis), and beta-hCG/UPT to rule out ectopic pregnancy.",
      "redFlagsIdentified": [
        "Migratory RLQ abdominal pain",
        "Rebound tenderness / motion pain",
        "Fever and bilious vomiting in female of reproductive age"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T11:15:00Z"
    },
    "informationGaps": [
      "Last Menstrual Period (LMP) date confirmation",
      "Urine Pregnancy Test (UPT) result pending",
      "Pelvic ultrasound report"
    ],
    "patientConcerns": {
      "value": "Worried about emergency laparoscopic surgery vs ovarian cyst.",
      "source": "historical_record",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "doctorSummary": {
      "content": "31-year-old female with 16-hour progressive migratory right lower quadrant abdominal pain, nausea, and low-grade pyrexia (100.2\u00b0F). Triage: HIGH PRIORITY acute abdomen.",
      "hpi": "Pain started periumbilically, shifted to RIF with nausea and vomiting. Worsened by walking and coughing.",
      "relevantHistory": "PCOS. Virgin abdomen. No known drug allergies.",
      "medicationIntelligence": "Self-medicated with Drotaverine 80mg without relief.",
      "missingInfo": [
        "LMP & STAT UPT result",
        "CBC with differential count",
        "Abdominal / pelvic ultrasound"
      ],
      "isVerified": false
    },
    "lastUpdated": "2026-09-05T11:20:00Z",
    "consentGiven": true,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 8
  },
  "demo-diabetes-followup": {
    "patientId": "PT-IN-2026-8803",
    "demographics": {
      "id": "PT-IN-2026-8803",
      "name": {
        "value": "Venkat Raman",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "age": {
        "value": 64,
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "gender": {
        "value": "male",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "preferredLanguage": {
        "value": "English",
        "source": "patient_interview",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "phone": {
        "value": "+91 94440 55123",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "abhaId": {
        "value": "91-8841-9923-3345",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "consultationType": "allopathy"
    },
    "chiefComplaint": {
      "value": "Routine quarterly review for Type 2 Diabetes and Hypertension; mild foot numbness and blurred vision",
      "source": "patient_interview",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "symptoms": [
      {
        "id": "sym-3",
        "name": {
          "value": "Peripheral Paresthesia",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "onset": {
          "value": "2 months ago",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "duration": {
          "value": "Intermittent in evenings",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "location": {
          "value": "Bilateral toes and distal soles",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "severity": {
          "value": 3,
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "character": {
          "value": "Pins and needles, burning sensation",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "radiation": {
          "value": "Distal feet",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "aggravating": {
          "value": "Prolonged standing",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "relieving": {
          "value": "Elevation and rest",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "associated": {
          "value": [
            "Nocturia x3",
            "Increased thirst"
          ],
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medicalHistory": [
      {
        "id": "h-301",
        "category": "condition",
        "title": {
          "value": "Type 2 Diabetes Mellitus",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Diagnosed 11 years ago; HbA1c 8.2%",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2015-02",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "h-302",
        "category": "condition",
        "title": {
          "value": "Essential Hypertension",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Controlled on Amlodipine 5mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2017-06",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medications": [
      {
        "id": "m-301",
        "name": {
          "value": "Metformin Hydrochloride",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "500 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Twice daily with meals",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2015-02-10",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "isDuplicate": true,
        "conflictWarning": "DUPLICATE: Prescribed standalone Metformin and combination Glycomet-GP 2."
      },
      {
        "id": "m-302",
        "name": {
          "value": "Glycomet-GP 2 (Glimepiride 2mg + Metformin 500mg)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "Fixed Dose Combination",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once daily morning",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2026-07-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "isDuplicate": true
      },
      {
        "id": "m-303",
        "name": {
          "value": "Amlodipine",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "5 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once daily morning",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2017-06-15",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "investigations": [
      {
        "id": "i-301",
        "testName": {
          "value": "Fasting Blood Sugar",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "blood",
        "date": {
          "value": "2026-08-28",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "168 mg/dL",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "70-100 mg/dL",
        "flag": "abnormal"
      },
      {
        "id": "i-302",
        "testName": {
          "value": "HbA1c",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "blood",
        "date": {
          "value": "2026-08-28",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "8.2%",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "< 7.0%",
        "flag": "abnormal"
      }
    ],
    "ayushProfile": {
      "prakriti": {
        "value": {
          "vata": 25,
          "pitta": 30,
          "kapha": 45,
          "dominant": "Kapha"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "vikriti": {
        "value": "Kaphaja Prameha with Medo-dhatvagni mandya",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "agni": {
        "value": "Manda",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "aharaVihara": {
        "value": "Sedentary lifestyle, high carbohydrate diet",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "dashavidhaPariksha": {
        "value": {
          "dooshya": "Meda, Kleda",
          "desha": "Sadharana",
          "bala": "Madhyama",
          "kala": "Hemanta",
          "anala": "Mandagni",
          "prakriti": "Kapha",
          "vaya": "64 yrs"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "traditionalTreatments": {
        "value": [
          "Methi seeds soaked in water",
          "Vijaysar extracts"
        ],
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      }
    },
    "documents": [],
    "timeline": [
      {
        "id": "t-301",
        "date": "2015-02-10",
        "type": "diagnosis",
        "title": "T2DM Diagnosed",
        "description": "Metformin initiated",
        "source": "historical_record",
        "status": "confirmed"
      },
      {
        "id": "t-302",
        "date": "2026-08-28",
        "type": "investigation",
        "title": "HbA1c 8.2%",
        "description": "Suboptimal glycemic control",
        "source": "ocr_document",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "routine",
      "badge": "\ud83d\udfe2 ROUTINE",
      "reason": "Chronic stable Type 2 Diabetes and Hypertension follow-up with suboptimal control (HbA1c 8.2%) and duplicate medication alert.",
      "action": "Medication reconciliation to resolve Metformin duplication, foot monofilament exam, and ophthalmology referral.",
      "redFlagsIdentified": [
        "Duplicate Metformin prescription",
        "Suboptimal glycemic control (HbA1c 8.2%)",
        "Early peripheral sensory neuropathy"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T09:30:00Z"
    },
    "informationGaps": [
      "Urine microalbumin/creatinine ratio",
      "Date of last dilated retinal exam"
    ],
    "patientConcerns": {
      "value": "Wants to avoid insulin injections; worried about foot ulcer risks.",
      "source": "historical_record",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "doctorSummary": {
      "content": "64-year-old male with 11-year history of T2DM and HTN presenting for quarterly follow-up. HbA1c 8.2%. Duplicate Metformin flagged. Triage: ROUTINE.",
      "hpi": "Reports toe tingling and mild nocturia. No chest discomfort or claudication.",
      "relevantHistory": "T2DM, HTN. Preserved kidney function (eGFR 72).",
      "medicationIntelligence": "DUPLICATE: Standalone Metformin 500mg BD plus Glycomet-GP 2. Total daily dose needs clinician rationalization.",
      "missingInfo": [
        "Urine Microalbumin/Creatinine",
        "Dilated Funduscopy report",
        "Monofilament exam"
      ],
      "isVerified": false
    },
    "lastUpdated": "2026-09-05T09:35:00Z",
    "consentGiven": true,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 14
  },
  "demo-fever": {
    "patientId": "PT-IN-2026-8804",
    "demographics": {
      "id": "PT-IN-2026-8804",
      "name": {
        "value": "Ananya Patel",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "age": {
        "value": 24,
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "gender": {
        "value": "female",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "preferredLanguage": {
        "value": "English",
        "source": "patient_interview",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "phone": {
        "value": "+91 98200 44901",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "abhaId": {
        "value": "91-6621-0092-4412",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "consultationType": "allopathy"
    },
    "chiefComplaint": {
      "value": "High fever for 5 days with retro-orbital headache, breakbone aches, and mild gum bleed on brushing",
      "source": "patient_interview",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "symptoms": [
      {
        "id": "sym-4",
        "name": {
          "value": "High Fever & Severe Myalgia",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "onset": {
          "value": "5 days ago with chills",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "duration": {
          "value": "5 days, peaking at 103\u00b0F",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "location": {
          "value": "Generalized body ache and retro-orbital",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "severity": {
          "value": 8,
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "character": {
          "value": "Breakbone bone/muscle ache and throbbing head pain",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "radiation": {
          "value": "Occiput and lumbar spine",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "aggravating": {
          "value": "Eye movements, bright light",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "relieving": {
          "value": "Cold forehead sponging",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "associated": {
          "value": [
            "Severe retro-orbital eye pain",
            "Nausea",
            "Mild gum bleed on brushing"
          ],
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medicalHistory": [],
    "medications": [
      {
        "id": "m-401",
        "name": {
          "value": "Paracetamol (Dolo 650)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "650 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "TDS x 4 days",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2026-09-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "m-402",
        "name": {
          "value": "Ibuprofen (Combiflam)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "Single dose yesterday",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2026-09-04",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "stopped",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "no",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "conflictWarning": "STOP NSAID: NSAIDs contra-indicated in suspected dengue due to platelet inhibition and hemorrhage risk."
      }
    ],
    "investigations": [
      {
        "id": "i-401",
        "testName": {
          "value": "Platelet Count",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "blood",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "68,000 /uL (Thrombocytopenia)",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "150,000 - 450,000",
        "flag": "critical"
      },
      {
        "id": "i-402",
        "testName": {
          "value": "Dengue NS1 Antigen",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "blood",
        "date": {
          "value": "2026-09-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "POSITIVE",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "Negative",
        "flag": "critical"
      }
    ],
    "ayushProfile": {
      "prakriti": {
        "value": {
          "vata": 35,
          "pitta": 45,
          "kapha": 20,
          "dominant": "Pitta"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "vikriti": {
        "value": "Sannipata Jwara with Pitta-Rakta vitiation",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "agni": {
        "value": "Manda",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "aharaVihara": {
        "value": "Electrolyte sips, loss of appetite",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "dashavidhaPariksha": {
        "value": {
          "dooshya": "Rasa, Rakta",
          "desha": "Sadharana",
          "bala": "Hina",
          "kala": "Sharad",
          "anala": "Mandagni",
          "prakriti": "Pitta",
          "vaya": "24 yrs"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "traditionalTreatments": {
        "value": [
          "Nilavembu Kudineer",
          "Papaya leaf extract"
        ],
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      }
    },
    "documents": [],
    "timeline": [
      {
        "id": "t-401",
        "date": "2026-09-01",
        "type": "symptom",
        "title": "High Fever & Chills",
        "description": "Fever up to 102.5\u00b0F",
        "source": "patient_interview",
        "status": "confirmed"
      },
      {
        "id": "t-402",
        "date": "2026-09-05",
        "type": "investigation",
        "title": "Dengue NS1 Positive (Platelets 68K)",
        "description": "Confirmed thrombocytopenia",
        "source": "ocr_document",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "high_priority",
      "badge": "\ud83d\udfe0 HIGH PRIORITY",
      "reason": "Dengue NS1 positive, Day 5 critical window, platelets 68,000/uL, and mucosal gum bleed warning sign.",
      "action": "Immediate clinician review for IV fluid resuscitation, serial 12-hour CBC, and strict avoidance of NSAIDs.",
      "redFlagsIdentified": [
        "Dengue in critical phase (Day 5)",
        "Platelets < 100,000 (68,000)",
        "Mucosal gum bleed",
        "Prior NSAID consumption"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T10:00:00Z"
    },
    "informationGaps": [
      "24-hour oral fluid intake and urine output volume",
      "Warning signs: persistent vomiting or abdominal pain"
    ],
    "patientConcerns": {
      "value": "Very anxious about platelet drop and transfusion.",
      "source": "historical_record",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "doctorSummary": {
      "content": "24-year-old female on Day 5 febrile illness. Dengue NS1 positive, platelets 68K, gum bleed. NSAID stopped. Triage: HIGH PRIORITY.",
      "hpi": "Fever 103\u00b0F with breakbone myalgia and retro-orbital pain. Fever receding into critical defervescence phase.",
      "relevantHistory": "No chronic comorbidities.",
      "medicationIntelligence": "CONTRAINDICATION: Discontinue all NSAIDs (Ibuprofen). Maintain Paracetamol SOS only.",
      "missingInfo": [
        "Fluid intake/output chart",
        "Repeat CBC in 12 hrs",
        "Signs of plasma leakage"
      ],
      "isVerified": false
    },
    "lastUpdated": "2026-09-05T10:05:00Z",
    "consentGiven": true,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 5
  },
  "demo-elderly-ayush": {
    "patientId": "PT-IN-2026-8805",
    "demographics": {
      "id": "PT-IN-2026-8805",
      "name": {
        "value": "Lakshmi Ammal",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "age": {
        "value": 72,
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "gender": {
        "value": "female",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "preferredLanguage": {
        "value": "Tamil",
        "source": "patient_interview",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "phone": {
        "value": "+91 94441 90218",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "abhaId": {
        "value": "91-7729-1102-8831",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "consultationType": "ayush"
    },
    "chiefComplaint": {
      "value": "Chronic bilateral knee pain and stiffness for 3 years; seeking integrated Ayurvedic care alongside BP medicines",
      "source": "patient_interview",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "symptoms": [
      {
        "id": "sym-5",
        "name": {
          "value": "Bilateral Knee Pain (Sandhigata Vata)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "onset": {
          "value": "3 years duration, worse over last month",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "duration": {
          "value": "Daily morning and evening",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "location": {
          "value": "Bilateral knee joints",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "severity": {
          "value": 6,
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "character": {
          "value": "Deep aching, crepitus, stiffness",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "radiation": {
          "value": "Upper calf muscles",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "aggravating": {
          "value": "Stairs, squatting, cold weather",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "relieving": {
          "value": "Warm oil massage and hot pack",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "associated": {
          "value": [
            "Crepitus (joint cracking)",
            "Morning stiffness (25 mins)",
            "Mild ankle edema"
          ],
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medicalHistory": [
      {
        "id": "h-501",
        "category": "condition",
        "title": {
          "value": "Bilateral Knee Osteoarthritis",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Grade 3 Kellgren-Lawrence on X-ray",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2024-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "h-502",
        "category": "condition",
        "title": {
          "value": "Systemic Hypertension",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Enalapril 5mg daily for 12 years",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2014-05",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "h-503",
        "category": "condition",
        "title": {
          "value": "GERD / Gastric Acidity",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "details": {
          "value": "Dyspepsia with NSAIDs",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "approximateDate": {
          "value": "2020-09",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "chronic",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "medications": [
      {
        "id": "m-501",
        "name": {
          "value": "Enalapril",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "5 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Once daily morning",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2014-05-20",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "m-502",
        "name": {
          "value": "Shallaki Capsules (Boswellia)",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "500 mg",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Twice daily after meals",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2025-06-01",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      },
      {
        "id": "m-503",
        "name": {
          "value": "Mahanarayana Taila",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "dose": {
          "value": "External massage",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "frequency": {
          "value": "Daily morning",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "startDate": {
          "value": "2024-03-10",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "status": {
          "value": "taking",
          "source": "patient_interview",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "adherence": {
          "value": "yes",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        }
      }
    ],
    "investigations": [
      {
        "id": "i-501",
        "testName": {
          "value": "Knee X-Ray (Weight Bearing)",
          "source": "ocr_document",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "category": "imaging",
        "date": {
          "value": "2024-01-18",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "result": {
          "value": "Medial space reduction, KL Grade 3",
          "source": "historical_record",
          "confidenceLabel": "Confirmed",
          "verificationStatus": "unverified",
          "timestamp": "2026-09-05T11:00:00Z"
        },
        "referenceRange": "Normal",
        "flag": "abnormal"
      }
    ],
    "ayushProfile": {
      "prakriti": {
        "value": {
          "vata": 55,
          "pitta": 25,
          "kapha": 20,
          "dominant": "Vata"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "vikriti": {
        "value": "Sandhigata Vata (Asthi-Dhatu kshaya janya)",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "agni": {
        "value": "Vishama",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "aharaVihara": {
        "value": "Traditional vegetarian, decreased winter fluids, fall fear",
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "dashavidhaPariksha": {
        "value": {
          "dooshya": "Asthi, Sandhi",
          "desha": "Jangala",
          "bala": "Avara",
          "kala": "Shishira",
          "anala": "Vishamagni",
          "prakriti": "Vata",
          "vaya": "72 yrs"
        },
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      },
      "traditionalTreatments": {
        "value": [
          "Janu Basti with Sahacharadi Taila",
          "Yogaraja Guggulu",
          "Sukshma Vyayama"
        ],
        "source": "historical_record",
        "confidenceLabel": "Confirmed",
        "verificationStatus": "unverified",
        "timestamp": "2026-09-05T11:00:00Z"
      }
    },
    "documents": [],
    "timeline": [
      {
        "id": "t-501",
        "date": "2014-05-20",
        "type": "diagnosis",
        "title": "Hypertension",
        "description": "Enalapril started",
        "source": "historical_record",
        "status": "confirmed"
      },
      {
        "id": "t-502",
        "date": "2024-01-18",
        "type": "diagnosis",
        "title": "Knee Osteoarthritis",
        "description": "X-ray confirmed Grade 3 OA",
        "source": "ocr_document",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "needs_attention",
      "badge": "\ud83d\udfe1 NEEDS ATTENTION",
      "reason": "Elderly patient (72) with severe osteoarthritis, mobility impairment, high fall risk, and polypharmacy needing AYUSH-Allopathic alignment without NSAIDs.",
      "action": "Joint stabilization, fall prevention therapy, Janu Basti guidance, and BP check.",
      "redFlagsIdentified": [
        "Age 72 with high fall risk",
        "GERD history (avoid oral NSAIDs)",
        "Polypharmacy: combining ACE-i with herbal Shallaki"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T08:45:00Z"
    },
    "informationGaps": [
      "Standing orthostatic BP check",
      "DEXA osteoporosis scan"
    ],
    "patientConcerns": {
      "value": "Wants natural pain relief without stomach burning; avoids knee replacement.",
      "source": "historical_record",
      "confidenceLabel": "Confirmed",
      "verificationStatus": "unverified",
      "timestamp": "2026-09-05T11:00:00Z"
    },
    "doctorSummary": {
      "content": "72-year-old Tamil-speaking female with 3-year bilateral knee osteoarthritis and hypertension for integrated AYUSH review. Triage: NEEDS ATTENTION with fall risk.",
      "hpi": "Pain 6/10 with morning stiffness. Uses warm Mahanarayana Taila and Shallaki alongside Enalapril 5mg. NSAIDs caused severe acidity previously.",
      "relevantHistory": "HTN (12 yrs), Osteoarthritis (3 yrs), GERD.",
      "medicationIntelligence": "Compliant with Enalapril. Shallaki tolerated. Avoid oral NSAIDs due to GERD and renal protection.",
      "missingInfo": [
        "Orthostatic blood pressure",
        "DEXA scan",
        "Gait & fall risk assessment"
      ],
      "isVerified": false
    },
    "lastUpdated": "2026-09-05T08:50:00Z",
    "consentGiven": true,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 22
  }
};
