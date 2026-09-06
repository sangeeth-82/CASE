import json

def leaf(val, src="historical_record", conf="Confirmed", ver="unverified"):
    return {
        "value": val,
        "source": src,
        "confidenceLabel": conf,
        "verificationStatus": ver,
        "timestamp": "2026-09-05T11:00:00Z"
    }

patients = {}
patients["demo-chest-pain"] = {
    "patientId": "PT-IN-2026-8801",
    "demographics": {
      "id": "PT-IN-2026-8801",
      "name": leaf("Rajesh Sharma"),
      "age": leaf(58),
      "gender": leaf("male"),
      "preferredLanguage": leaf("English", "patient_interview"),
      "phone": leaf("+91 98401 23456"),
      "abhaId": leaf("91-4458-1290-7761"),
      "consultationType": "allopathy"
    },
    "chiefComplaint": leaf("Retrosternal chest pressure radiating to left shoulder and jaw with shortness of breath and cold perspiration", "patient_interview", "Patient reported"),
    "symptoms": [
      {
        "id": "sym-1",
        "name": leaf("Chest Pain", "patient_interview"),
        "onset": leaf("3 hours ago during brisk walking", "patient_interview"),
        "duration": leaf("Continuous for last 180 minutes", "patient_interview"),
        "location": leaf("Retrosternal / Precordial", "patient_interview"),
        "severity": leaf(8, "patient_interview"),
        "character": leaf("Heavy squeezing, crushing sensation", "patient_interview"),
        "radiation": leaf("Radiating to left shoulder, inner arm, and jaw angle", "patient_interview"),
        "aggravating": leaf("Mild physical exertion, deep breathing", "patient_interview"),
        "relieving": leaf("Resting seated, but pain does not completely subside", "patient_interview"),
        "associated": leaf(["Diaphoresis (cold sweats)", "Dyspnea (shortness of breath)", "Mild dizziness"], "patient_interview")
      }
    ],
    "medicalHistory": [
      { "id": "h-1", "category": "condition", "title": leaf("Hypertension"), "details": leaf("Diagnosed 8 years ago; on regular medication"), "approximateDate": leaf("2018-04"), "status": leaf("chronic") },
      { "id": "h-2", "category": "condition", "title": leaf("Dyslipidemia"), "details": leaf("Elevated LDL treated with Atorvastatin"), "approximateDate": leaf("2021-08"), "status": leaf("chronic") },
      { "id": "h-3", "category": "allergy", "title": leaf("Penicillin Allergy"), "details": leaf("Erythematous rash reported in youth"), "approximateDate": leaf("1992-01"), "status": leaf("chronic") }
    ],
    "medications": [
      { "id": "m-1", "name": leaf("Telmisartan"), "dose": leaf("40 mg"), "frequency": leaf("Once daily (morning)"), "startDate": leaf("2019-01-15"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") },
      { "id": "m-2", "name": leaf("Atorvastatin"), "dose": leaf("20 mg"), "frequency": leaf("Once daily (bedtime)"), "startDate": leaf("2021-09-01"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") },
      { "id": "m-3", "name": leaf("Sorbitrate (Isosorbide Dinitrate)", "patient_interview", "Patient reported"), "dose": leaf("5 mg sublingual", "patient_interview", "Needs verification"), "frequency": leaf("SOS 1 hr ago at home", "patient_interview"), "startDate": leaf("2026-09-05"), "status": leaf("taking", "patient_interview", "Needs verification"), "adherence": leaf("yes"), "conflictWarning": "Self-administered nitrate without baseline ECG." }
    ],
    "investigations": [
      { "id": "i-1", "testName": leaf("Blood Pressure", "ocr_document"), "category": "vitals", "date": leaf("2026-09-05"), "result": leaf("158/94 mmHg"), "referenceRange": "120/80 mmHg", "flag": "abnormal" },
      { "id": "i-2", "testName": leaf("Pulse Rate", "ocr_document"), "category": "vitals", "date": leaf("2026-09-05"), "result": leaf("98 bpm (Sinus tachycardia)"), "referenceRange": "60-100 bpm", "flag": "normal" },
      { "id": "i-3", "testName": leaf("SpO2", "patient_interview"), "category": "vitals", "date": leaf("2026-09-05"), "result": leaf("95% on room air"), "referenceRange": "95-100%", "flag": "normal" }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 40, "pitta": 45, "kapha": 15, "dominant": "Pitta-Vata"}),
      "vikriti": leaf("Aggravated Pitta with Vyana Vayu avarana"),
      "agni": leaf("Tikshna"),
      "aharaVihara": leaf("High dietary salt, chronic stress"),
      "dashavidhaPariksha": leaf({"dooshya": "Rasa, Rakta, Mamsa", "desha": "Sadharana", "bala": "Madhyama", "kala": "Sharad", "anala": "Tikshnagni", "prakriti": "Pitta-Vata", "vaya": "58 yrs"}),
      "traditionalTreatments": leaf(["Arjuna Ksheerapaka", "Pranayama"])
    },
    "documents": [
      { "id": "d-1", "name": "Echo_Report_2023.pdf", "type": "lab_report", "uploadedAt": "2026-09-05T08:15:00Z", "status": "confirmed", "extractedData": {"diagnoses": ["LVH", "LVEF 55%"], "dates": ["2023-11-12"], "medicines": ["Telmisartan 40mg"]} }
    ],
    "timeline": [
      { "id": "t-1", "date": "2018-04-10", "type": "diagnosis", "title": "Hypertension Diagnosed", "description": "Telmisartan started", "source": "historical_record", "status": "confirmed" },
      { "id": "t-2", "date": "2023-11-12", "type": "investigation", "title": "2D Echo (EF 55%)", "description": "Preserved systolic function", "source": "ocr_document", "status": "confirmed" },
      { "id": "t-3", "date": "2026-09-05", "type": "symptom", "title": "Acute Retrosternal Pain", "description": "Heavy squeezing pain with cold sweats", "source": "patient_interview", "status": "confirmed" }
    ],
    "triage": {
      "level": "emergency",
      "badge": "🔴 EMERGENCY",
      "reason": "Acute retrosternal squeezing chest pain (8/10) with left arm radiation, diaphoresis, dyspnea, and hypertension history.",
      "action": "Immediate clinical evaluation, urgent 12-lead ECG within 10 minutes, cardiac enzymes (hs-cTnI), and continuous vitals monitoring.",
      "redFlagsIdentified": ["Retrosternal squeezing pain radiating to left arm/jaw", "Diaphoresis and dyspnea", "Age > 55 with cardiovascular risk factors"],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T11:00:00Z"
    },
    "informationGaps": ["12-lead ECG pending to rule out STEMI.", "Time of exact symptom onset vs peak.", "Last dose timing of Telmisartan today."],
    "patientConcerns": leaf("Patient is anxious about having a heart attack like his brother."),
    "doctorSummary": {
      "content": "58-year-old hypertensive male presenting with 3-hour history of acute retrosternal squeezing pain radiating to left arm and jaw with diaphoresis and dyspnea. Triage: EMERGENCY.",
      "hpi": "Pain started during brisk walking 3 hours ago, 8/10 severity, continuous. Associated with cold sweating and shortness of breath.",
      "relevantHistory": "Essential Hypertension (8 yrs), Dyslipidemia. Penicillin allergy.",
      "medicationIntelligence": "Telmisartan 40mg, Atorvastatin 20mg. Self-administered sublingual Sorbitrate 1 hr ago.",
      "missingInfo": ["STAT 12-lead ECG", "hs-cTnI Cardiac Troponin", "Serial Blood Pressure"],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T11:02:00Z",
    "consentGiven": True,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 4
}
patients["demo-abdominal-pain"] = {
    "patientId": "PT-IN-2026-8802",
    "demographics": {
      "id": "PT-IN-2026-8802",
      "name": leaf("Priya Sundaram"),
      "age": leaf(31),
      "gender": leaf("female"),
      "preferredLanguage": leaf("English", "patient_interview"),
      "phone": leaf("+91 97910 88231"),
      "abhaId": leaf("91-3829-4410-1120"),
      "consultationType": "allopathy"
    },
    "chiefComplaint": leaf("Severe progressive right lower quadrant abdominal pain with nausea, anorexia, and low-grade fever", "patient_interview"),
    "symptoms": [
      {
        "id": "sym-2",
        "name": leaf("Abdominal Pain", "patient_interview"),
        "onset": leaf("Started 16 hours ago periumbilically, migrated to right lower quadrant 6 hours ago", "patient_interview"),
        "duration": leaf("Progressively worsening over 16 hours", "patient_interview"),
        "location": leaf("Right lower quadrant (McBurney point region)", "patient_interview"),
        "severity": leaf(7, "patient_interview"),
        "character": leaf("Sharp, persistent focal ache with tenderness", "patient_interview"),
        "radiation": leaf("Localised to right iliac fossa", "patient_interview"),
        "aggravating": leaf("Coughing, walking, transit bumps", "patient_interview"),
        "relieving": leaf("Lying in fetal position with right hip flexed", "patient_interview"),
        "associated": leaf(["Anorexia", "Nausea with 2 vomiting episodes", "Low-grade fever"], "patient_interview")
      }
    ],
    "medicalHistory": [
      { "id": "h-201", "category": "condition", "title": leaf("PCOS"), "details": leaf("Polycystic Ovary Syndrome diagnosed in 2022"), "approximateDate": leaf("2022-03"), "status": leaf("chronic") }
    ],
    "medications": [
      { "id": "m-201", "name": leaf("Drotaverine (Drotin)", "patient_interview"), "dose": leaf("80 mg"), "frequency": leaf("Single dose 4 hrs ago"), "startDate": leaf("2026-09-05"), "status": leaf("taking", "patient_interview"), "adherence": leaf("not_sure"), "conflictWarning": "Antispasmodic taken without relief." }
    ],
    "investigations": [
      { "id": "i-201", "testName": leaf("Oral Temperature", "patient_interview"), "category": "vitals", "date": leaf("2026-09-05"), "result": leaf("100.2°F (37.9°C)"), "referenceRange": "98.6°F", "flag": "abnormal" }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 30, "pitta": 50, "kapha": 20, "dominant": "Pitta"}),
      "vikriti": leaf("Pitta-Vata prakopa in Pakwashaya"),
      "agni": leaf("Manda"),
      "aharaVihara": leaf("Skipped meals, spicy street food"),
      "dashavidhaPariksha": leaf({"dooshya": "Rasa, Rakta", "desha": "Anupa", "bala": "Madhyama", "kala": "Varsha", "anala": "Mandagni", "prakriti": "Pitta-Vata", "vaya": "31 yrs"}),
      "traditionalTreatments": leaf(["Jeeraka water"])
    },
    "documents": [],
    "timeline": [
      { "id": "t-201", "date": "2026-09-04 20:00", "type": "symptom", "title": "Periumbilical ache", "description": "Dull discomfort around navel", "source": "patient_interview", "status": "confirmed" },
      { "id": "t-202", "date": "2026-09-05 06:00", "type": "symptom", "title": "Migration to RIF", "description": "Sharp pain localized to McBurney point", "source": "patient_interview", "status": "confirmed" }
    ],
    "triage": {
      "level": "high_priority",
      "badge": "🟠 HIGH PRIORITY",
      "reason": "Migratory right lower quadrant pain with nausea, anorexia, and fever suggestive of acute appendicitis or gynecological emergency.",
      "action": "Urgent surgical evaluation, abdominal ultrasound, CBC (leukocytosis), and beta-hCG/UPT to rule out ectopic pregnancy.",
      "redFlagsIdentified": ["Migratory RLQ abdominal pain", "Rebound tenderness / motion pain", "Fever and bilious vomiting in female of reproductive age"],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T11:15:00Z"
    },
    "informationGaps": ["Last Menstrual Period (LMP) date confirmation", "Urine Pregnancy Test (UPT) result pending", "Pelvic ultrasound report"],
    "patientConcerns": leaf("Worried about emergency laparoscopic surgery vs ovarian cyst."),
    "doctorSummary": {
      "content": "31-year-old female with 16-hour progressive migratory right lower quadrant abdominal pain, nausea, and low-grade pyrexia (100.2°F). Triage: HIGH PRIORITY acute abdomen.",
      "hpi": "Pain started periumbilically, shifted to RIF with nausea and vomiting. Worsened by walking and coughing.",
      "relevantHistory": "PCOS. Virgin abdomen. No known drug allergies.",
      "medicationIntelligence": "Self-medicated with Drotaverine 80mg without relief.",
      "missingInfo": ["LMP & STAT UPT result", "CBC with differential count", "Abdominal / pelvic ultrasound"],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T11:20:00Z",
    "consentGiven": True,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 8
}
patients["demo-diabetes-followup"] = {
    "patientId": "PT-IN-2026-8803",
    "demographics": {
      "id": "PT-IN-2026-8803",
      "name": leaf("Venkat Raman"),
      "age": leaf(64),
      "gender": leaf("male"),
      "preferredLanguage": leaf("English", "patient_interview"),
      "phone": leaf("+91 94440 55123"),
      "abhaId": leaf("91-8841-9923-3345"),
      "consultationType": "allopathy"
    },
    "chiefComplaint": leaf("Routine quarterly review for Type 2 Diabetes and Hypertension; mild foot numbness and blurred vision", "patient_interview"),
    "symptoms": [
      {
        "id": "sym-3",
        "name": leaf("Peripheral Paresthesia", "patient_interview"),
        "onset": leaf("2 months ago", "patient_interview"),
        "duration": leaf("Intermittent in evenings", "patient_interview"),
        "location": leaf("Bilateral toes and distal soles", "patient_interview"),
        "severity": leaf(3, "patient_interview"),
        "character": leaf("Pins and needles, burning sensation", "patient_interview"),
        "radiation": leaf("Distal feet", "patient_interview"),
        "aggravating": leaf("Prolonged standing", "patient_interview"),
        "relieving": leaf("Elevation and rest", "patient_interview"),
        "associated": leaf(["Nocturia x3", "Increased thirst"], "patient_interview")
      }
    ],
    "medicalHistory": [
      { "id": "h-301", "category": "condition", "title": leaf("Type 2 Diabetes Mellitus"), "details": leaf("Diagnosed 11 years ago; HbA1c 8.2%"), "approximateDate": leaf("2015-02"), "status": leaf("chronic") },
      { "id": "h-302", "category": "condition", "title": leaf("Essential Hypertension"), "details": leaf("Controlled on Amlodipine 5mg"), "approximateDate": leaf("2017-06"), "status": leaf("chronic") }
    ],
    "medications": [
      { "id": "m-301", "name": leaf("Metformin Hydrochloride", "ocr_document"), "dose": leaf("500 mg"), "frequency": leaf("Twice daily with meals"), "startDate": leaf("2015-02-10"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes"), "isDuplicate": True, "conflictWarning": "DUPLICATE: Prescribed standalone Metformin and combination Glycomet-GP 2." },
      { "id": "m-302", "name": leaf("Glycomet-GP 2 (Glimepiride 2mg + Metformin 500mg)", "patient_interview"), "dose": leaf("Fixed Dose Combination"), "frequency": leaf("Once daily morning"), "startDate": leaf("2026-07-01"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes"), "isDuplicate": True },
      { "id": "m-303", "name": leaf("Amlodipine"), "dose": leaf("5 mg"), "frequency": leaf("Once daily morning"), "startDate": leaf("2017-06-15"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") }
    ],
    "investigations": [
      { "id": "i-301", "testName": leaf("Fasting Blood Sugar", "ocr_document"), "category": "blood", "date": leaf("2026-08-28"), "result": leaf("168 mg/dL"), "referenceRange": "70-100 mg/dL", "flag": "abnormal" },
      { "id": "i-302", "testName": leaf("HbA1c", "ocr_document"), "category": "blood", "date": leaf("2026-08-28"), "result": leaf("8.2%"), "referenceRange": "< 7.0%", "flag": "abnormal" }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 25, "pitta": 30, "kapha": 45, "dominant": "Kapha"}),
      "vikriti": leaf("Kaphaja Prameha with Medo-dhatvagni mandya"),
      "agni": leaf("Manda"),
      "aharaVihara": leaf("Sedentary lifestyle, high carbohydrate diet"),
      "dashavidhaPariksha": leaf({"dooshya": "Meda, Kleda", "desha": "Sadharana", "bala": "Madhyama", "kala": "Hemanta", "anala": "Mandagni", "prakriti": "Kapha", "vaya": "64 yrs"}),
      "traditionalTreatments": leaf(["Methi seeds soaked in water", "Vijaysar extracts"])
    },
    "documents": [],
    "timeline": [
      { "id": "t-301", "date": "2015-02-10", "type": "diagnosis", "title": "T2DM Diagnosed", "description": "Metformin initiated", "source": "historical_record", "status": "confirmed" },
      { "id": "t-302", "date": "2026-08-28", "type": "investigation", "title": "HbA1c 8.2%", "description": "Suboptimal glycemic control", "source": "ocr_document", "status": "confirmed" }
    ],
    "triage": {
      "level": "routine",
      "badge": "🟢 ROUTINE",
      "reason": "Chronic stable Type 2 Diabetes and Hypertension follow-up with suboptimal control (HbA1c 8.2%) and duplicate medication alert.",
      "action": "Medication reconciliation to resolve Metformin duplication, foot monofilament exam, and ophthalmology referral.",
      "redFlagsIdentified": ["Duplicate Metformin prescription", "Suboptimal glycemic control (HbA1c 8.2%)", "Early peripheral sensory neuropathy"],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T09:30:00Z"
    },
    "informationGaps": ["Urine microalbumin/creatinine ratio", "Date of last dilated retinal exam"],
    "patientConcerns": leaf("Wants to avoid insulin injections; worried about foot ulcer risks."),
    "doctorSummary": {
      "content": "64-year-old male with 11-year history of T2DM and HTN presenting for quarterly follow-up. HbA1c 8.2%. Duplicate Metformin flagged. Triage: ROUTINE.",
      "hpi": "Reports toe tingling and mild nocturia. No chest discomfort or claudication.",
      "relevantHistory": "T2DM, HTN. Preserved kidney function (eGFR 72).",
      "medicationIntelligence": "DUPLICATE: Standalone Metformin 500mg BD plus Glycomet-GP 2. Total daily dose needs clinician rationalization.",
      "missingInfo": ["Urine Microalbumin/Creatinine", "Dilated Funduscopy report", "Monofilament exam"],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T09:35:00Z",
    "consentGiven": True,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 14
}
patients["demo-fever"] = {
    "patientId": "PT-IN-2026-8804",
    "demographics": {
      "id": "PT-IN-2026-8804",
      "name": leaf("Ananya Patel"),
      "age": leaf(24),
      "gender": leaf("female"),
      "preferredLanguage": leaf("English", "patient_interview"),
      "phone": leaf("+91 98200 44901"),
      "abhaId": leaf("91-6621-0092-4412"),
      "consultationType": "allopathy"
    },
    "chiefComplaint": leaf("High fever for 5 days with retro-orbital headache, breakbone aches, and mild gum bleed on brushing", "patient_interview"),
    "symptoms": [
      {
        "id": "sym-4",
        "name": leaf("High Fever & Severe Myalgia", "patient_interview"),
        "onset": leaf("5 days ago with chills", "patient_interview"),
        "duration": leaf("5 days, peaking at 103°F", "patient_interview"),
        "location": leaf("Generalized body ache and retro-orbital", "patient_interview"),
        "severity": leaf(8, "patient_interview"),
        "character": leaf("Breakbone bone/muscle ache and throbbing head pain", "patient_interview"),
        "radiation": leaf("Occiput and lumbar spine", "patient_interview"),
        "aggravating": leaf("Eye movements, bright light", "patient_interview"),
        "relieving": leaf("Cold forehead sponging", "patient_interview"),
        "associated": leaf(["Severe retro-orbital eye pain", "Nausea", "Mild gum bleed on brushing"], "patient_interview")
      }
    ],
    "medicalHistory": [],
    "medications": [
      { "id": "m-401", "name": leaf("Paracetamol (Dolo 650)", "patient_interview"), "dose": leaf("650 mg"), "frequency": leaf("TDS x 4 days"), "startDate": leaf("2026-09-01"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") },
      { "id": "m-402", "name": leaf("Ibuprofen (Combiflam)", "patient_interview"), "dose": leaf("Single dose yesterday"), "frequency": leaf("Once"), "startDate": leaf("2026-09-04"), "status": leaf("stopped", "patient_interview"), "adherence": leaf("no"), "conflictWarning": "STOP NSAID: NSAIDs contra-indicated in suspected dengue due to platelet inhibition and hemorrhage risk." }
    ],
    "investigations": [
      { "id": "i-401", "testName": leaf("Platelet Count", "ocr_document"), "category": "blood", "date": leaf("2026-09-05"), "result": leaf("68,000 /uL (Thrombocytopenia)"), "referenceRange": "150,000 - 450,000", "flag": "critical" },
      { "id": "i-402", "testName": leaf("Dengue NS1 Antigen", "ocr_document"), "category": "blood", "date": leaf("2026-09-05"), "result": leaf("POSITIVE"), "referenceRange": "Negative", "flag": "critical" }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 35, "pitta": 45, "kapha": 20, "dominant": "Pitta"}),
      "vikriti": leaf("Sannipata Jwara with Pitta-Rakta vitiation"),
      "agni": leaf("Manda"),
      "aharaVihara": leaf("Electrolyte sips, loss of appetite"),
      "dashavidhaPariksha": leaf({"dooshya": "Rasa, Rakta", "desha": "Sadharana", "bala": "Hina", "kala": "Sharad", "anala": "Mandagni", "prakriti": "Pitta", "vaya": "24 yrs"}),
      "traditionalTreatments": leaf(["Nilavembu Kudineer", "Papaya leaf extract"])
    },
    "documents": [],
    "timeline": [
      { "id": "t-401", "date": "2026-09-01", "type": "symptom", "title": "High Fever & Chills", "description": "Fever up to 102.5°F", "source": "patient_interview", "status": "confirmed" },
      { "id": "t-402", "date": "2026-09-05", "type": "investigation", "title": "Dengue NS1 Positive (Platelets 68K)", "description": "Confirmed thrombocytopenia", "source": "ocr_document", "status": "confirmed" }
    ],
    "triage": {
      "level": "high_priority",
      "badge": "🟠 HIGH PRIORITY",
      "reason": "Dengue NS1 positive, Day 5 critical window, platelets 68,000/uL, and mucosal gum bleed warning sign.",
      "action": "Immediate clinician review for IV fluid resuscitation, serial 12-hour CBC, and strict avoidance of NSAIDs.",
      "redFlagsIdentified": ["Dengue in critical phase (Day 5)", "Platelets < 100,000 (68,000)", "Mucosal gum bleed", "Prior NSAID consumption"],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T10:00:00Z"
    },
    "informationGaps": ["24-hour oral fluid intake and urine output volume", "Warning signs: persistent vomiting or abdominal pain"],
    "patientConcerns": leaf("Very anxious about platelet drop and transfusion."),
    "doctorSummary": {
      "content": "24-year-old female on Day 5 febrile illness. Dengue NS1 positive, platelets 68K, gum bleed. NSAID stopped. Triage: HIGH PRIORITY.",
      "hpi": "Fever 103°F with breakbone myalgia and retro-orbital pain. Fever receding into critical defervescence phase.",
      "relevantHistory": "No chronic comorbidities.",
      "medicationIntelligence": "CONTRAINDICATION: Discontinue all NSAIDs (Ibuprofen). Maintain Paracetamol SOS only.",
      "missingInfo": ["Fluid intake/output chart", "Repeat CBC in 12 hrs", "Signs of plasma leakage"],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T10:05:00Z",
    "consentGiven": True,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 5
}
patients["demo-elderly-ayush"] = {
    "patientId": "PT-IN-2026-8805",
    "demographics": {
      "id": "PT-IN-2026-8805",
      "name": leaf("Lakshmi Ammal"),
      "age": leaf(72),
      "gender": leaf("female"),
      "preferredLanguage": leaf("Tamil", "patient_interview"),
      "phone": leaf("+91 94441 90218"),
      "abhaId": leaf("91-7729-1102-8831"),
      "consultationType": "ayush"
    },
    "chiefComplaint": leaf("Chronic bilateral knee pain and stiffness for 3 years; seeking integrated Ayurvedic care alongside BP medicines", "patient_interview"),
    "symptoms": [
      {
        "id": "sym-5",
        "name": leaf("Bilateral Knee Pain (Sandhigata Vata)", "patient_interview"),
        "onset": leaf("3 years duration, worse over last month", "patient_interview"),
        "duration": leaf("Daily morning and evening", "patient_interview"),
        "location": leaf("Bilateral knee joints", "patient_interview"),
        "severity": leaf(6, "patient_interview"),
        "character": leaf("Deep aching, crepitus, stiffness", "patient_interview"),
        "radiation": leaf("Upper calf muscles", "patient_interview"),
        "aggravating": leaf("Stairs, squatting, cold weather", "patient_interview"),
        "relieving": leaf("Warm oil massage and hot pack", "patient_interview"),
        "associated": leaf(["Crepitus (joint cracking)", "Morning stiffness (25 mins)", "Mild ankle edema"], "patient_interview")
      }
    ],
    "medicalHistory": [
      { "id": "h-501", "category": "condition", "title": leaf("Bilateral Knee Osteoarthritis"), "details": leaf("Grade 3 Kellgren-Lawrence on X-ray"), "approximateDate": leaf("2024-01"), "status": leaf("chronic") },
      { "id": "h-502", "category": "condition", "title": leaf("Systemic Hypertension"), "details": leaf("Enalapril 5mg daily for 12 years"), "approximateDate": leaf("2014-05"), "status": leaf("chronic") },
      { "id": "h-503", "category": "condition", "title": leaf("GERD / Gastric Acidity"), "details": leaf("Dyspepsia with NSAIDs"), "approximateDate": leaf("2020-09"), "status": leaf("chronic") }
    ],
    "medications": [
      { "id": "m-501", "name": leaf("Enalapril"), "dose": leaf("5 mg"), "frequency": leaf("Once daily morning"), "startDate": leaf("2014-05-20"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") },
      { "id": "m-502", "name": leaf("Shallaki Capsules (Boswellia)", "patient_interview"), "dose": leaf("500 mg"), "frequency": leaf("Twice daily after meals"), "startDate": leaf("2025-06-01"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") },
      { "id": "m-503", "name": leaf("Mahanarayana Taila", "patient_interview"), "dose": leaf("External massage"), "frequency": leaf("Daily morning"), "startDate": leaf("2024-03-10"), "status": leaf("taking", "patient_interview"), "adherence": leaf("yes") }
    ],
    "investigations": [
      { "id": "i-501", "testName": leaf("Knee X-Ray (Weight Bearing)", "ocr_document"), "category": "imaging", "date": leaf("2024-01-18"), "result": leaf("Medial space reduction, KL Grade 3"), "referenceRange": "Normal", "flag": "abnormal" }
    ],
    "ayushProfile": {
      "prakriti": leaf({"vata": 55, "pitta": 25, "kapha": 20, "dominant": "Vata"}),
      "vikriti": leaf("Sandhigata Vata (Asthi-Dhatu kshaya janya)"),
      "agni": leaf("Vishama"),
      "aharaVihara": leaf("Traditional vegetarian, decreased winter fluids, fall fear"),
      "dashavidhaPariksha": leaf({"dooshya": "Asthi, Sandhi", "desha": "Jangala", "bala": "Avara", "kala": "Shishira", "anala": "Vishamagni", "prakriti": "Vata", "vaya": "72 yrs"}),
      "traditionalTreatments": leaf(["Janu Basti with Sahacharadi Taila", "Yogaraja Guggulu", "Sukshma Vyayama"])
    },
    "documents": [],
    "timeline": [
      { "id": "t-501", "date": "2014-05-20", "type": "diagnosis", "title": "Hypertension", "description": "Enalapril started", "source": "historical_record", "status": "confirmed" },
      { "id": "t-502", "date": "2024-01-18", "type": "diagnosis", "title": "Knee Osteoarthritis", "description": "X-ray confirmed Grade 3 OA", "source": "ocr_document", "status": "confirmed" }
    ],
    "triage": {
      "level": "needs_attention",
      "badge": "🟡 NEEDS ATTENTION",
      "reason": "Elderly patient (72) with severe osteoarthritis, mobility impairment, high fall risk, and polypharmacy needing AYUSH-Allopathic alignment without NSAIDs.",
      "action": "Joint stabilization, fall prevention therapy, Janu Basti guidance, and BP check.",
      "redFlagsIdentified": ["Age 72 with high fall risk", "GERD history (avoid oral NSAIDs)", "Polypharmacy: combining ACE-i with herbal Shallaki"],
      "disclaimer": "Risk level is a triage support indicator, not a medical diagnosis.",
      "calculatedAt": "2026-09-05T08:45:00Z"
    },
    "informationGaps": ["Standing orthostatic BP check", "DEXA osteoporosis scan"],
    "patientConcerns": leaf("Wants natural pain relief without stomach burning; avoids knee replacement."),
    "doctorSummary": {
      "content": "72-year-old Tamil-speaking female with 3-year bilateral knee osteoarthritis and hypertension for integrated AYUSH review. Triage: NEEDS ATTENTION with fall risk.",
      "hpi": "Pain 6/10 with morning stiffness. Uses warm Mahanarayana Taila and Shallaki alongside Enalapril 5mg. NSAIDs caused severe acidity previously.",
      "relevantHistory": "HTN (12 yrs), Osteoarthritis (3 yrs), GERD.",
      "medicationIntelligence": "Compliant with Enalapril. Shallaki tolerated. Avoid oral NSAIDs due to GERD and renal protection.",
      "missingInfo": ["Orthostatic blood pressure", "DEXA scan", "Gait & fall risk assessment"],
      "isVerified": False
    },
    "lastUpdated": "2026-09-05T08:50:00Z",
    "consentGiven": True,
    "statusInQueue": "waiting",
    "queueWaitMinutes": 22
}

output = "import { DigitalTwin } from '../types/clinical';\n\nexport const DEMO_PATIENTS: Record<string, DigitalTwin> = " + json.dumps(patients, indent=2) + ";\n"

with open("src/data/demoPatients.ts", "w", encoding="utf-8") as f:
    f.write(output)

print("SUCCESS: src/data/demoPatients.ts generated!")
