import { TriageAssessment, TriageLevel } from '../types/clinical';

export interface TriageInput {
  complaint: string;
  symptoms: Array<{
    name: string;
    severity?: number;
    character?: string;
    radiation?: string;
    associated?: string[];
  }>;
  medicalHistory: string[];
  medications: Array<{ name: string; conflictWarning?: string }>;
  investigations: Array<{ testName: string; result: string; flag?: string }>;
  age?: number;
}

export function evaluateDeterministicTriage(input: TriageInput): TriageAssessment {
  const redFlags: string[] = [];
  const textCorpus = [
    input.complaint,
    ...input.symptoms.map(s => `${s.name} ${s.character || ''} ${s.radiation || ''} ${(s.associated || []).join(' ')}`),
    ...input.medicalHistory,
    ...input.investigations.map(i => `${i.testName} ${i.result} ${i.flag || ''}`)
  ].join(' ').toLowerCase();

  // Rule 1: Cardiac Emergency Rules
  const hasChestPain = textCorpus.includes('chest') || textCorpus.includes('retrosternal') || textCorpus.includes('angina');
  const hasRadiation = textCorpus.includes('radiation') || textCorpus.includes('left arm') || textCorpus.includes('jaw') || textCorpus.includes('shoulder');
  const hasDiaphoresisOrDyspnea = textCorpus.includes('sweat') || textCorpus.includes('diaphoresis') || textCorpus.includes('breath') || textCorpus.includes('dyspnea');
  const highPain = input.symptoms.some(s => (s.severity || 0) >= 7);

  if (hasChestPain && (hasRadiation || hasDiaphoresisOrDyspnea || highPain)) {
    redFlags.push("Acute retrosternal discomfort with radiation and/or autonomic signs (sweating/breathlessness)");
  }

  // Rule 2: Acute Abdomen / Appendicitis / Peritoneal Signs
  const hasAbdominalPain = textCorpus.includes('abdominal') || textCorpus.includes('stomach') || textCorpus.includes('rlq') || textCorpus.includes('iliac fossa');
  const hasReboundOrMigration = textCorpus.includes('migrated') || textCorpus.includes('rebound') || textCorpus.includes('cough') || textCorpus.includes('mcburney');
  const hasFeverOrVomiting = textCorpus.includes('vomit') || textCorpus.includes('fever') || textCorpus.includes('anorexia');

  if (hasAbdominalPain && (hasReboundOrMigration || (hasFeverOrVomiting && highPain))) {
    redFlags.push("Focal or migratory right lower quadrant abdominal pain with peritoneal irritation signs");
  }

  // Rule 3: Severe Tropical / Hemorrhagic / Thrombocytopenia
  const hasThrombocytopenia = textCorpus.includes('thrombocytopenia') || textCorpus.includes('68,000') || textCorpus.includes('platelet') && (textCorpus.includes('critical') || textCorpus.includes('low'));
  const hasBleeding = textCorpus.includes('bleed') || textCorpus.includes('gum') || textCorpus.includes('petechiae') || textCorpus.includes('mucosal');
  const hasDengue = textCorpus.includes('dengue') || textCorpus.includes('ns1');

  if (hasDengue || (hasThrombocytopenia && hasBleeding)) {
    redFlags.push("Arboviral / Dengue critical phase indicator with thrombocytopenia and mucosal bleeding risk");
  }

  // Rule 4: Dangerous medication conflicts
  const hasNSAIDConflict = input.medications.some(m => (m.conflictWarning || '').toLowerCase().includes('nsaid'));
  if (hasNSAIDConflict) {
    redFlags.push("Inappropriate NSAID consumption during suspected febrile/dengue phase");
  }

  // Rule 5: Fall Risk / Frailty in Elderly
  const isElderly = (input.age || 0) >= 70;
  const severeMobility = textCorpus.includes('stairs') || textCorpus.includes('squatting') || textCorpus.includes('stiffness') || textCorpus.includes('osteoarthritis');
  if (isElderly && severeMobility && !hasChestPain && !hasAbdominalPain) {
    redFlags.push("Advanced age with severe functional mobility restriction and high fall vulnerability");
  }

  // Determine Triage Level
  let level: TriageLevel = 'routine';
  let badge = '🟢 ROUTINE';
  let reason = "Stable medical condition or routine follow-up with standard clinical assessment required.";
  let action = "Standard pre-consultation review, routine vitals check, and physician consultation.";

  if (hasChestPain && (hasRadiation || hasDiaphoresisOrDyspnea)) {
    level = 'emergency';
    badge = '🔴 EMERGENCY';
    reason = "Potential acute coronary syndrome or critical cardiopulmonary event detected based on chest discomfort, radiation, and associated autonomic symptoms.";
    action = "Immediate medical evaluation, STAT 12-lead ECG within 10 minutes, troponin assessment, and continuous monitoring.";
  } else if (hasAbdominalPain && (hasReboundOrMigration || hasFeverOrVomiting) || (hasDengue && hasBleeding)) {
    level = 'high_priority';
    badge = '🟠 HIGH PRIORITY';
    reason = "Potential acute surgical abdomen or high-risk febrile illness with hemorrhagic warning signs requiring prioritized clinical evaluation.";
    action = "Urgent clinician examination, focused ultrasound or blood counts, and close clinical surveillance.";
  } else if (isElderly || input.symptoms.some(s => (s.severity || 0) >= 5) || input.medications.some(m => m.conflictWarning)) {
    level = 'needs_attention';
    badge = '🟡 NEEDS ATTENTION';
    reason = "Symptoms or polypharmacy interactions warranting close clinical attention before standard queue progression.";
    action = "Detailed medication reconciliation, functional examination, and clinician review.";
  }

  return {
    level,
    badge,
    reason,
    action,
    redFlagsIdentified: redFlags,
    disclaimer: "Risk level is a triage support indicator, not a medical diagnosis.",
    calculatedAt: new Date().toISOString()
  };
}
