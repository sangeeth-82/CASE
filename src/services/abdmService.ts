import { DigitalTwin } from '../types/clinical';

export interface AbhaCard {
  abhaNumber: string;
  abhaAddress: string;
  name: string;
  gender: string;
  yearOfBirth: string;
  state: string;
  status: 'active' | 'demo_sandboxed';
}

export function generateAbhaProfile(twin: DigitalTwin): AbhaCard {
  const idNum = twin.demographics.abhaId?.value || '91-4458-1290-7761';
  const cleanName = twin.demographics.name.value.toLowerCase().replace(/\s+/g, '.');
  return {
    abhaNumber: idNum,
    abhaAddress: `${cleanName}@abdm`,
    name: twin.demographics.name.value,
    gender: twin.demographics.gender.value.toUpperCase(),
    yearOfBirth: String(2026 - (twin.demographics.age.value || 40)),
    state: "Tamil Nadu",
    status: 'demo_sandboxed'
  };
}

export function exportFhirBundle(twin: DigitalTwin) {
  return {
    resourceType: "Bundle",
    type: "document",
    timestamp: new Date().toISOString(),
    identifier: {
      system: "https://healthid.ndhm.gov.in",
      value: twin.patientId
    },
    entry: [
      {
        resource: {
          resourceType: "Patient",
          id: twin.patientId,
          name: [{ text: twin.demographics.name.value }],
          gender: twin.demographics.gender.value,
          telecom: [{ system: "phone", value: twin.demographics.phone.value }]
        }
      },
      {
        resource: {
          resourceType: "Condition",
          clinicalStatus: { coding: [{ code: "active" }] },
          code: { text: twin.chiefComplaint.value }
        }
      },
      ...twin.medications.map((m, idx) => ({
        resource: {
          resourceType: "MedicationStatement",
          id: `med-${idx + 1}`,
          status: m.status.value === 'taking' ? 'active' : 'stopped',
          medicationCodeableConcept: { text: `${m.name.value} ${m.dose.value}` },
          dosage: [{ text: m.frequency.value }]
        }
      })),
      ...twin.investigations.map((inv, idx) => ({
        resource: {
          resourceType: "Observation",
          id: `obs-${idx + 1}`,
          status: "final",
          code: { text: inv.testName.value },
          valueString: inv.result.value
        }
      }))
    ]
  };
}
