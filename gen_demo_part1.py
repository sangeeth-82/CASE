import json

def leaf(val, src="patient_interview", conf="Patient reported", ver="unverified"):
    return {
        "value": val,
        "source": src,
        "confidenceLabel": conf,
        "verificationStatus": ver,
        "timestamp": "2026-09-05T11:00:00Z"
    }

patients = {
  "demo-chest-pain": {
    "patientId": "PT-IN-2026-8801",
    "demographics": {
      "id": "PT-IN-2026-8801",
      "name": leaf("Rajesh Sharma", "historical_record", "Confirmed"),
      "age": leaf(58, "historical_record", "Confirmed"),
      "gender": leaf("male", "historical_record", "Confirmed"),
      "preferredLanguage": leaf("English", "patient_interview", "Confirmed"),
      "phone": leaf("+91 98401 23456", "historical_record", "Confirmed"),
      "abhaId": leaf("91-4458-1290-7761", "historical_record", "Confirmed"),
      "consultationType": "allopathy"
    },
    "chiefComplaint": leaf("Retrosternal chest pressure radiating to left shoulder and jaw with shortness of breath and cold perspiration"),
    "symptoms": [
      {
        "id": "sym-1",
        "name": leaf("Chest Pain"),
        "onset": leaf("3 hours ago during brisk walking"),
        "duration": leaf("Continuous for last 180 minutes"),
        "location": leaf("Retrosternal / Precordial"),
        "severity": leaf(8),
        "character": leaf("Heavy squeezing, crushing sensation"),
        "radiation": leaf("Radiating to left shoulder, inner arm, and jaw angle"),
        "aggravating": leaf("Mild physical exertion, deep breathing"),
        "relieving": leaf("Resting seated, but pain does not completely subside"),
        "associated": leaf(["Diaphoresis (cold sweats)", "Dyspnea (shortness of breath)", "Mild dizziness"])
      }
    ],
    "medicalHistory": [
      {
        "id": "hist-1",
        "category": "condition",
        "title": leaf("Hypertension"),
        "details": leaf("Diagnosed 8 years ago; on regular anti-hypertensive medication"),
        "approximateDate": leaf("2018-04"),
        "status": leaf("chronic")
      },
      {
        "id: "hist-2",
        "category": "condition",
        "title": leaf("Dyslipidemia"),
        "details": leaf("Elevated LDL cholesterol treated with Atorvastatin"),
        "approximateDate": leaf("2021-08"),
        "status": leaf("chronic")
      },
      {
        "id": "hist-3",
        "category": "allergy",
        "title": leaf("Penicillin Allergy"),
        "details": leaf("Erythematous rash and urticaria reported in youth"),
        "approximateDate": leaf("1992-01"),
        "status": leaf("chronic")
      }
    ],
    "medications": [
      {
        "id": "med-1",
        "name": leaf("Telmisartan", "historical_record", "Confirmed"),
        "dose": leaf("40 mg", "historical_record", "Confirmed"),
        "frequency": leaf("Once daily (morning)", "historical_record", "Confirmed"),
        "startDate": leaf("2019-01-15", "historical_record", "Confirmed"),
        "status": leaf("taking", "patient_interview", "Confirmed"),
        "adherence": leaf("yes")
      },
      {
        "id": "med-2",
        "name": leaf("Atorvastatin", "historical_record", "Confirmed"),
        "dose": leaf("20 mg", "historical_record", "Confirmed"),
        "frequency": leaf("Once daily (bedtime)", "historical_record", "Confirmed"),
        "startDate": leaf("2021-09-01", "historical_record", "Confirmed"),
        "status": leaf("taking", "patient_interview", "Confirmed"),
        "adherence": leaf("yes")
      },
      {
        "id": "med-3",
        "name": leaf("Sorbitrate (Isosorbide Dinitrate)", "patient_interview", "Patient reported"),
        "dose": leaf("5 mg sublingual", "patient_interview", "Needs verification"),
        "frequency": leaf("As needed (taken 1 hr ago at home with partial relief)", "patient_interview", "Patient reported"),
        "startDate": leaf("2026-09-05", "patient_interview", "Patient reported"),
        "status": leaf("taking", "patient_interview", "Needs verification"),
        "adherence": leaf("yes"),
        "conflictWarning": "Patient self-administered nitrate without baseline ECG or blood pressure monitoring."
      }
    ],
    "investigations": [
      {
        "id": "inv-1",
        "testName": leaf("Point-of-Care Blood Pressure", "patient_interview", "Extracted from document"),
        "category": "vitals",
        "date": leaf("2026-09-05 (Arrival)"),
        "result": leaf("158/94 mmHg"),
        "referenceRange": "120/80 mmHg",
        "flag": "abnormal"
      },
      {
        "id": "inv-2",
        "testName": leaf("Pulse / Heart Rate", "patient_interview", "Extracted from document"),
        "category": "vitals",
        "date": leaf("2026-09-05 (Arrival)"),
        "result": leaf("98 bpm (Sinus tachycardia)"),
        "referenceRange": "60-100 bpm",
        "flag": "normal"
      },
      {
        "id": "inv-3",
        "testName": leaf("SpO2 (Pulse Oximetry)", "patient_interview", "Confirmed"),
        "category": "vitals",
        "date": leaf("2026-09-05 (Arrival)"),
        "result": leaf("95% on room air"),
        "referenceRange": "95-100%",
        "flag": "normal"
      }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 40, "pitta": 45, "kapha": 15, "dominant": "Pitta-Vata"}),
      "vikriti": leaf("Aggravated Pitta with Vyana Vayu avarana causing thoracic congestion"),
      "agni": leaf("Tikshna"),
      "aharaVihara": leaf("Irregular meal timings, high dietary salt and processed fats; chronic workplace stress"),
      "dashavidhaPariksha": leaf({
        "dooshya": "Rasa, Rakta, Mamsa",
        "desha": "Sadharana (Urban metropolitan)",
        "bala": "Madhyama",
        "kala": "Sharad / Afternoon",
        "anala": "Tikshnagni",
        "prakriti": "Pitta-Vata",
        "vaya": "Madhyama (58 years)"
      }),
      "traditionalTreatments": leaf(["Arjuna Ksheerapaka previously taken for cardiac strength", "Pranayama"])
    },
    "documents": [
      {
        "id": "doc-1",
        "name": "Echo_Report_Cardiology_2023.pdf",
        "type": "lab_report",
        "uploadedAt": "2026-09-05T08:15:00Z",
        "status": "confirmed",
        "extractedData": {
          "diagnoses": ["Concentric LVH", "LVEF 55%"],
          "dates": ["2023-11-12"],
          "medicines": ["Telmisartan 40mg", "Atorvastatin 20mg"]
        }
      }
    ],
    "timeline": [
      {
        "id": "tl-1",
        "date": "2018-04-10",
        "type": "diagnosis",
        "title": "Essential Hypertension Diagnosed",
        "description": "Initiated on lifestyle modification and Telmisartan 40mg daily.",
        "source": "historical_record",
        "status": "confirmed"
      },
      {
        "id": "tl-2",
        "date: "2023-11-12",
        "type": "investigation",
        "title": "2D Echocardiography",
        "description": "Normal LV systolic function (EF 55%), mild concentric left ventricular hypertrophy.",
        "source": "ocr_document",
        "status": "confirmed"
      },
      {
        "id": "tl-3",
        "date": "2026-09-05 10:45",
        "type": "symptom",
        "title": "Acute Onset Retrosternal Angina",
        "description": "Heavy crushing chest pain radiating to left arm and neck accompanied by diaphoresis.",
        "source": "patient_interview",
        "status": "confirmed"
      }
    ],
    "triage": {
      "level": "emergency",
      "badge": "🔴 EMERGENCY",
      "reason": "Acute severe retrosternal squeezing pain (8/10) with radiation to left arm/jaw, cold diaphoresis, dyspnea, and background cardiovascular risk profile.",
      "action": "Immediate clinical evaluation, urgent 12-lead ECG within 10 minutes, cardiac enzymes (High-Sensitivity Troponin I), and vitals monitoring.",
      "redFlagsIdentified": [
        "Acute retrosternal crushing pain with radiation to left upper extremity and jaw",
        "Associated diaphoresis (cold clammy sweating) and dyspnea",
        "History of chronic hypertension, dyslipidemia, and age > 55",
        "Nitrate taken without medical supervision"
      ],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T11:00:00Z"
    },
    "informationGaps": [
      "Current 12-lead ECG is pending (crucial to rule out ST-segment elevation myocardial infarction).",
      "Exact time of symptom peak vs plateau requires clinician confirmation.",
      "Last dose timing of Telmisartan and whether taken today before pain onset."
    ],
    "patientConcerns": leaf("Patient is anxious about having a heart attack like his elder brother; fears cardiac catheterization."),
    "doctorSummary": {
      "content": "58-year-old hypertensive male presenting with a 3-hour history of acute retrosternal squeezing chest pain radiating to the left shoulder and jaw, accompanied by diaphoresis and dyspnea. Prior echocardiogram showed preserved ejection fraction (55%). Self-administered sublingual Sorbitrate with incomplete relief. Triage status: EMERGENCY requiring immediate 12-lead ECG and Troponin evaluation.",
      "hpi": "Pain began abruptly while walking 3 hours ago, described as 8/10 pressure-like squeezing sensation. Does not vary with positional changes or respiration. Accompanied by cold sweating and shortness of breath.",
      "relevantHistory": "Essential Hypertension (8 yrs), Dyslipidemia (5 yrs), Penicillin allergy. Family history of premature coronary artery disease in elder sibling.",
      "medicationIntelligence": "Compliant on Telmisartan 40mg and Atorvastatin 20mg. Self-administered sublingual nitrate 1 hr ago. No active duplicate prescription identified.",
      "missingInfo": [
        "Urgent STAT 12-lead ECG confirmation",
        "Cardiac biomarkers (hs-cTnI / CK-MB)",
        "Serial blood pressure monitoring"
      ],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T11:02:00Z",
    "consentGiven": True,
    "consentTimestamp": "2026-09-05T10:40:00Z",
    "statusInQueue": "waiting",
    "queueWaitMinutes": 4
  }
}
