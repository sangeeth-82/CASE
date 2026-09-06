import { Medication } from '../types/clinical';

export interface ReconciliationReport {
  duplicates: Array<{ med1: string; med2: string; reason: string }>;
  contraindications: Array<{ medName: string; reason: string; severity: 'critical' | 'warning' }>;
  overallAdherence: 'good' | 'irregular' | 'poor' | 'unknown';
}

export function reconcileMedications(medications: Medication[], activeComplaint: string): ReconciliationReport {
  const duplicates: Array<{ med1: string; med2: string; reason: string }> = [];
  const contraindications: Array<{ medName: string; reason: string; severity: 'critical' | 'warning' }> = [];

  const medNames = medications.map(m => (m.name.value || '').toLowerCase());
  const complaint = activeComplaint.toLowerCase();

  // 1. Detect Metformin duplicate prescription
  const hasMetforminStandalone = medNames.some(n => n.includes('metformin') && !n.includes('gp') && !n.includes('glycomet-gp'));
  const hasMetforminFDC = medNames.some(n => n.includes('glycomet-gp') || (n.includes('metformin') && n.includes('glimepiride')));

  if (hasMetforminStandalone && hasMetforminFDC) {
    duplicates.push({
      med1: "Metformin Hydrochloride (Single)",
      med2: "Glycomet-GP 2 (FDC Combination)",
      reason: "Potential Metformin duplication across two prescriptions. Risk of exceeding maximal daily dosage."
    });
  }

  // 2. Detect NSAIDs in suspected Dengue / Acute Bleeding
  const hasNSAID = medNames.some(n => n.includes('ibuprofen') || n.includes('combiflam') || n.includes('diclofenac') || n.includes('aceclofenac') || n.includes('aspirin'));
  const isDengueOrFebrile = complaint.includes('fever') || complaint.includes('dengue') || complaint.includes('platelet') || complaint.includes('bleed');

  if (hasNSAID && isDengueOrFebrile) {
    contraindications.push({
      medName: "Ibuprofen / NSAID",
      reason: "CRITICAL SAFETY ALERT: NSAIDs strongly discouraged during febrile / suspected dengue illness due to reversible platelet inhibition and mucosal bleeding risks.",
      severity: 'critical'
    });
  }

  // 3. Unmonitored Nitrates
  const hasNitrate = medNames.some(n => n.includes('sorbitrate') || n.includes('nitrate') || n.includes('isosorbide'));
  if (hasNitrate) {
    contraindications.push({
      medName: "Sorbitrate / Sublingual Nitrate",
      reason: "Patient self-administered nitrate at home without baseline 12-lead ECG or blood pressure monitoring.",
      severity: 'warning'
    });
  }

  // Adherence evaluation
  const adheringCount = medications.filter(m => m.adherence.value === 'yes').length;
  let overallAdherence: 'good' | 'irregular' | 'poor' | 'unknown' = 'unknown';
  if (medications.length > 0) {
    const ratio = adheringCount / medications.length;
    if (ratio >= 0.75) overallAdherence = 'good';
    else if (ratio >= 0.4) overallAdherence = 'irregular';
    else overallAdherence = 'poor';
  }

  return {
    duplicates,
    contraindications,
    overallAdherence
  };
}
