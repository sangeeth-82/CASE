export interface QuestionOption {
  id: string;
  label: string;
  simplifiedLabel?: string;
  value: string;
  isRedFlag?: boolean;
}

export interface QuestionNode {
  id: string;
  step: 'complaint' | 'characterization' | 'associated' | 'history' | 'medications' | 'red_flags' | 'summary';
  prompt: string;
  simplifiedPrompt: string; // Plain language alternative for elderly/communication adaptation
  audioText?: string;
  inputType: 'choice' | 'severity' | 'text' | 'multichoice';
  options?: QuestionOption[];
  targetField: string;
  nextQuestionId: (answer: string, context: Record<string, any>) => string | null;
}

export const QUESTION_NODES: Record<string, QuestionNode> = {
  // 1. Initial Chief Complaint Selection
  'q-complaint': {
    id: 'q-complaint',
    step: 'complaint',
    prompt: "What is the primary health issue or complaint you would like to discuss with the doctor today?",
    simplifiedPrompt: "What is troubling you the most today?",
    inputType: 'choice',
    options: [
      { id: 'opt-cp', label: 'Chest Pain or Discomfort', simplifiedLabel: 'Chest Pain / Heaviness', value: 'chest_pain' },
      { id: 'opt-ap', label: 'Abdominal / Stomach Pain', simplifiedLabel: 'Stomach Pain / Cramps', value: 'abdominal_pain' },
      { id: 'opt-fev', label: 'Fever, Chills or Body Ache', simplifiedLabel: 'High Fever / Shivering', value: 'fever' },
      { id: 'opt-dm', label: 'Diabetes or Blood Pressure Checkup', simplifiedLabel: 'Sugar / BP Checkup', value: 'diabetes' },
      { id: 'opt-other', label: 'Other Chronic Condition / Joint Pain', simplifiedLabel: 'Joint Pain / General Health', value: 'other' }
    ],
    targetField: 'chiefComplaint',
    nextQuestionId: (ans) => {
      if (ans === 'chest_pain') return 'cp-onset';
      if (ans === 'abdominal_pain') return 'ap-location';
      if (ans === 'fever') return 'fev-duration';
      if (ans === 'diabetes') return 'dm-symptoms';
      return 'gen-duration';
    }
  },

  // --- CHEST PAIN BRANCH ---
  'cp-onset': {
    id: 'cp-onset',
    step: 'characterization',
    prompt: "When did this chest discomfort begin, and what were you doing when it started?",
    simplifiedPrompt: "When did the chest pain start? Were you resting or walking?",
    inputType: 'choice',
    options: [
      { id: 'cp-on-1', label: 'Sudden onset within the last 1–3 hours', simplifiedLabel: 'Just 1 to 3 hours ago', value: '1-3 hours ago' },
      { id: 'cp-on-2', label: 'Earlier today (4–12 hours ago)', simplifiedLabel: 'Earlier today', value: '4-12 hours ago' },
      { id: 'cp-on-3', label: 'Coming and going over the last few days', simplifiedLabel: 'Few days ago', value: 'past few days' },
      { id: 'cp-on-4', label: 'Longstanding / chronic recurrent discomfort', simplifiedLabel: 'For weeks or months', value: 'chronic' }
    ],
    targetField: 'symptom.onset',
    nextQuestionId: () => 'cp-character'
  },

  'cp-character': {
    id: 'cp-character',
    step: 'characterization',
    prompt: "How does the chest discomfort feel?",
    simplifiedPrompt: "How does the pain feel inside your chest?",
    inputType: 'choice',
    options: [
      { id: 'cp-ch-1', label: 'Heavy squeezing, tightness, or crushing pressure', simplifiedLabel: 'Heavy weight or tight squeezing', value: 'squeezing_pressure', isRedFlag: true },
      { id: 'cp-ch-2', label: 'Sharp, stabbing or needle-like pain', simplifiedLabel: 'Sharp pin-pricking pain', value: 'sharp_stabbing' },
      { id: 'cp-ch-3', label: 'Burning sensation behind the breastbone', simplifiedLabel: 'Heartburn or gas burning', value: 'burning_substernal' },
      { id: 'cp-ch-4', label: 'Dull ache across the chest wall', simplifiedLabel: 'Dull mild ache', value: 'dull_ache' }
    ],
    targetField: 'symptom.character',
    nextQuestionId: () => 'cp-radiation'
  },

  'cp-radiation': {
    id: 'cp-radiation',
    step: 'characterization',
    prompt: "Does this discomfort spread or radiate to any other parts of your body?",
    simplifiedPrompt: "Does the pain travel to your arm, neck, or back?",
    inputType: 'choice',
    options: [
      { id: 'cp-rad-1', label: 'Yes, radiates to left shoulder, inner arm, or jaw', simplifiedLabel: 'Yes, spreads to left arm or jaw', value: 'left_arm_jaw', isRedFlag: true },
      { id: 'cp-rad-2', label: 'Yes, radiates straight through to the back / shoulder blades', simplifiedLabel: 'Yes, goes to the upper back', value: 'upper_back', isRedFlag: true },
      { id: 'cp-rad-3', label: 'No, stays strictly in one localized spot', simplifiedLabel: 'No, stays in one place', value: 'none' }
    ],
    targetField: 'symptom.radiation',
    nextQuestionId: () => 'cp-severity'
  },

  'cp-severity': {
    id: 'cp-severity',
    step: 'characterization',
    prompt: "On a scale from 1 (mild discomfort) to 10 (unbearable severe pain), how would you rate it?",
    simplifiedPrompt: "How bad is the pain from 1 (mild) to 10 (very severe)?",
    inputType: 'severity',
    options: [
      { id: 'sev-mild', label: '1 - 3 (Mild discomfort)', value: '3' },
      { id: 'sev-mod', label: '4 - 6 (Moderate pain)', value: '5' },
      { id: 'sev-sev', label: '7 - 8 (Severe distressing pain)', value: '8', isRedFlag: true },
      { id: 'sev-crit', label: '9 - 10 (Intolerable emergency pain)', value: '10', isRedFlag: true }
    ],
    targetField: 'symptom.severity',
    nextQuestionId: () => 'cp-associated'
  },

  'cp-associated': {
    id: 'cp-associated',
    step: 'associated',
    prompt: "Are you experiencing any of these accompanying symptoms right now?",
    simplifiedPrompt: "Do you also have cold sweat, breathlessness, or dizziness?",
    inputType: 'multichoice',
    options: [
      { id: 'cp-asc-1', label: 'Cold sweats / heavy perspiration (Diaphoresis)', simplifiedLabel: 'Cold sweating', value: 'cold_sweat', isRedFlag: true },
      { id: 'cp-asc-2', label: 'Shortness of breath / difficulty breathing', simplifiedLabel: 'Trouble breathing', value: 'dyspnea', isRedFlag: true },
      { id: 'cp-asc-3', label: 'Lightheadedness, dizziness, or fainting feeling', simplifiedLabel: 'Dizziness or feeling faint', value: 'dizziness', isRedFlag: true },
      { id: 'cp-asc-4', label: 'Nausea or vomiting sensation', simplifiedLabel: 'Nausea / vomiting', value: 'nausea' },
      { id: 'cp-asc-5', label: 'None of these', simplifiedLabel: 'None of these', value: 'none' }
    ],
    targetField: 'symptom.associated',
    nextQuestionId: () => 'cp-history'
  },

  'cp-history': {
    id: 'cp-history',
    step: 'history',
    prompt: "Do you have any known previous medical conditions such as high blood pressure or heart problems?",
    simplifiedPrompt: "Do you have high BP, diabetes, or previous heart disease?",
    inputType: 'choice',
    options: [
      { id: 'cp-h-1', label: 'Yes, diagnosed with Hypertension (High BP)', simplifiedLabel: 'Yes, High BP', value: 'hypertension' },
      { id: 'cp-h-2', label: 'Yes, prior heart condition / stent / angina', simplifiedLabel: 'Yes, previous heart problem', value: 'cardiac_history', isRedFlag: true },
      { id: 'cp-h-3', label: 'Yes, Diabetes and High Cholesterol', simplifiedLabel: 'Yes, Sugar and Cholesterol', value: 'diabetes_cholesterol' },
      { id: 'cp-h-4', label: 'No previous diagnosed medical conditions', simplifiedLabel: 'No prior conditions', value: 'none' }
    ],
    targetField: 'medicalHistory',
    nextQuestionId: () => 'cp-meds'
  },

  'cp-meds': {
    id: 'cp-meds',
    step: 'medications',
    prompt: "Have you taken any emergency medication or home tablets (like Sorbitrate or Aspirin) for this episode?",
    simplifiedPrompt: "Did you take any medicine like Sorbitrate or Disprin today?",
    inputType: 'choice',
    options: [
      { id: 'cp-m-1', label: 'Yes, took Sorbitrate / sublingual nitrate tablet', simplifiedLabel: 'Yes, placed Sorbitrate under tongue', value: 'sorbitrate' },
      { id: 'cp-m-2', label: 'Yes, took an Aspirin / painkiller tablet', simplifiedLabel: 'Yes, took Aspirin / painkiller', value: 'aspirin' },
      { id: 'cp-m-3', label: 'No, haven\'t taken anything yet', simplifiedLabel: 'No medicines taken yet', value: 'none' }
    ],
    targetField: 'medications',
    nextQuestionId: () => null // triggers summary
  },

  // --- ABDOMINAL PAIN BRANCH ---
  'ap-location': {
    id: 'ap-location',
    step: 'characterization',
    prompt: "Where exactly in your abdomen is the pain felt most prominently?",
    simplifiedPrompt: "Which part of your stomach hurts the most?",
    inputType: 'choice',
    options: [
      { id: 'ap-loc-1', label: 'Right lower side (Right Iliac Fossa)', simplifiedLabel: 'Right lower stomach side', value: 'rlq', isRedFlag: true },
      { id: 'ap-loc-2', label: 'Upper center / epigastric region (below ribcage)', simplifiedLabel: 'Upper center stomach (gas/burning)', value: 'epigastric' },
      { id: 'ap-loc-3', label: 'All over / generalized across the whole belly', simplifiedLabel: 'Entire stomach', value: 'generalized' },
      { id: 'ap-loc-4', label: 'Lower pelvis or bladder area', simplifiedLabel: 'Lower bladder / pelvic area', value: 'pelvic' }
    ],
    targetField: 'symptom.location',
    nextQuestionId: () => 'ap-migration'
  },

  'ap-migration': {
    id: 'ap-migration',
    step: 'characterization',
    prompt: "Did the pain start around the belly button and later move to the right lower side?",
    simplifiedPrompt: "Did the pain start near the navel and then move down to the right side?",
    inputType: 'choice',
    options: [
      { id: 'ap-mig-yes', label: 'Yes, started around navel and shifted to right lower side', simplifiedLabel: 'Yes, moved from navel to right side', value: 'migrated_to_rlq', isRedFlag: true },
      { id: 'ap-mig-no', label: 'No, started right where it is currently felt', simplifiedLabel: 'No, stayed in the same spot', value: 'static' }
    ],
    targetField: 'symptom.radiation',
    nextQuestionId: () => 'ap-severity'
  },

  'ap-severity': {
    id: 'ap-severity',
    step: 'characterization',
    prompt: "How severe is the abdominal pain from 1 to 10?",
    simplifiedPrompt: "How bad is the stomach pain from 1 to 10?",
    inputType: 'severity',
    options: [
      { id: 'ap-sev-1', label: '1 - 3 (Mild cramps)', value: '3' },
      { id: 'ap-sev-2', label: '4 - 6 (Moderate aching)', value: '5' },
      { id: 'ap-sev-3', label: '7 - 8 (Severe pain, hard to walk)', value: '7', isRedFlag: true },
      { id: 'ap-sev-4', label: '9 - 10 (Excruciating agony)', value: '9', isRedFlag: true }
    ],
    targetField: 'symptom.severity',
    nextQuestionId: () => 'ap-associated'
  },

  'ap-associated': {
    id: 'ap-associated',
    step: 'associated',
    prompt: "Which of the following symptoms are present?",
    simplifiedPrompt: "Do you also have vomiting, fever, or pain when coughing?",
    inputType: 'multichoice',
    options: [
      { id: 'ap-asc-1', label: 'Severe nausea or vomiting episodes', simplifiedLabel: 'Nausea or vomiting', value: 'vomiting' },
      { id: 'ap-asc-2', label: 'Pain worsens sharply with coughing or walking', simplifiedLabel: 'Pain jumps when coughing or walking', value: 'rebound_tenderness', isRedFlag: true },
      { id: 'ap-asc-3', label: 'Fever or chills', simplifiedLabel: 'Fever or feeling hot', value: 'fever' },
      { id: 'ap-asc-4', label: 'Blood in stool or black tarry stools', simplifiedLabel: 'Blood in toilet or black stools', value: 'gi_bleed', isRedFlag: true },
      { id: 'ap-asc-5', label: 'None of these', simplifiedLabel: 'None', value: 'none' }
    ],
    targetField: 'symptom.associated',
    nextQuestionId: () => null // finish
  },

  // --- FEVER / GENERAL BRANCH ---
  'fev-duration': {
    id: 'fev-duration',
    step: 'characterization',
    prompt: "How many days have you had this fever?",
    simplifiedPrompt: "How many days has the fever been there?",
    inputType: 'choice',
    options: [
      { id: 'fev-d-1', label: '1 to 2 days (Acute onset)', value: '1-2 days' },
      { id: 'fev-d-2', label: '3 to 5 days (Continuous high fever)', value: '3-5 days', isRedFlag: true },
      { id: 'fev-d-3', label: 'Over 1 week (Prolonged fever)', value: 'over 7 days', isRedFlag: true }
    ],
    targetField: 'symptom.duration',
    nextQuestionId: () => 'fev-associated'
  },

  'fev-associated': {
    id: 'fev-associated',
    step: 'associated',
    prompt: "Do you have retro-orbital pain, severe body aches, or any bleeding signs (like gum bleed or red spots)?",
    simplifiedPrompt: "Do you have pain behind eyes, severe body pain, or gum bleeding?",
    inputType: 'multichoice',
    options: [
      { id: 'fev-asc-1', label: 'Intense eye socket pain (Behind eyes)', simplifiedLabel: 'Pain behind eyes', value: 'retro_orbital' },
      { id: 'fev-asc-2', label: 'Severe muscle/bone tenderness (Breakbone aches)', simplifiedLabel: 'Severe bone / body ache', value: 'breakbone_myalgia' },
      { id: 'fev-asc-3', label: 'Bleeding from gums or red spots on skin', simplifiedLabel: 'Bleeding gums or red skin dots', value: 'bleeding_tendency', isRedFlag: true },
      { id: 'fev-asc-4', label: 'None of these', simplifiedLabel: 'None', value: 'none' }
    ],
    targetField: 'symptom.associated',
    nextQuestionId: () => null
  },

  // --- DIABETES / CHRONIC BRANCH ---
  'dm-symptoms': {
    id: 'dm-symptoms',
    step: 'characterization',
    prompt: "Are you experiencing any numbness or tingling in your feet, or blurry vision?",
    simplifiedPrompt: "Do you have tingling in your feet or blurred vision?",
    inputType: 'choice',
    options: [
      { id: 'dm-s-1', label: 'Yes, pins-and-needles / numbness in feet', simplifiedLabel: 'Yes, feet feel numb or tingling', value: 'paresthesia' },
      { id: 'dm-s-2', label: 'Yes, blurred vision after meals', simplifiedLabel: 'Yes, blurry vision', value: 'blurred_vision' },
      { id: 'dm-s-3', label: 'No new symptoms, just routine checkup', simplifiedLabel: 'No, just routine checkup', value: 'routine' }
    ],
    targetField: 'symptom.character',
    nextQuestionId: () => null
  },

  // --- GENERAL FALLBACK ---
  'gen-duration': {
    id: 'gen-duration',
    step: 'characterization',
    prompt: "Approximately how long have you been dealing with this symptom?",
    simplifiedPrompt: "How long have you had this problem?",
    inputType: 'choice',
    options: [
      { id: 'g-1', label: 'Few days', value: 'few days' },
      { id: 'g-2', label: '1 to 4 weeks', value: '1-4 weeks' },
      { id: 'g-3', label: 'Several months or years', value: 'chronic months/years' }
    ],
    targetField: 'symptom.duration',
    nextQuestionId: () => null
  }
};
