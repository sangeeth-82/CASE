import React, { useState } from 'react';
import { ShieldCheck, Download, Copy, Check, QrCode, FileCode, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';
import { generateAbhaProfile, exportFhirBundle } from '../../services/abdmService';

export const AbdmModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { selectedPatient } = useDoctor();
  const [activeTab, setActiveTab] = useState<'card' | 'fhir' | 'audit'>('card');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const abhaCard = generateAbhaProfile(selectedPatient);
  const fhirBundle = exportFhirBundle(selectedPatient);
  const fhirJson = JSON.stringify(fhirBundle, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(fhirJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([fhirJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FHIR_Bundle_${selectedPatient.patientId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-bold text-base">ABDM Interoperability Hub</h3>
              <p className="text-xs text-emerald-200">Ayushman Bharat Digital Mission (M1/M2/M3 Sandboxed Mock)</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 p-3 bg-slate-50 border-b border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab('card')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'card' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ABHA Health ID Card
          </button>
          <button
            onClick={() => setActiveTab('fhir')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'fhir' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            FHIR R4 JSON Bundle
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'audit' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Consent & Audit Trail
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {activeTab === 'card' && (
            <div className="space-y-4">
              {/* Simulated ABHA ID Card */}
              <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl border-2 border-emerald-500/30 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                      ID
                    </div>
                    <span className="font-extrabold text-sm tracking-wider">NATIONAL HEALTH AUTHORITY</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    ABHA Verified
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Patient Full Name</div>
                    <div className="text-base font-extrabold text-white mt-0.5">{abhaCard.name}</div>
                    <div className="text-xs text-slate-300 mt-1 font-mono">{abhaCard.abhaAddress}</div>

                    <div className="mt-4 grid grid-cols-2 gap-4 text-[11px]">
                      <div>
                        <span className="text-slate-400">ABHA Number:</span>
                        <div className="font-mono font-bold text-emerald-300">{abhaCard.abhaNumber}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">YOB / Gender:</span>
                        <div className="font-bold">{abhaCard.yearOfBirth} / {abhaCard.gender}</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center shadow-inner">
                    <QrCode className="w-20 h-20 text-slate-900" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>HIP: MediKiosk Hospital Triage</span>
                  <span>Sandbox Mock ID</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fhir' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-semibold">Standard HL7/FHIR Document Bundle:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-bold flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-[11px] font-mono overflow-x-auto max-h-[360px]">
                {fhirJson}
              </pre>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Consent Artifact ID: CA-{selectedPatient.patientId}</div>
                <div className="text-slate-500">Purpose: Medical Pre-Consultation Triage Preparation</div>
                <div className="text-slate-500">Status: GRANTED by Patient ({new Date(selectedPatient.consentTimestamp || '').toLocaleString()})</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-900">Access Audit Log:</div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px]">
                  <span>RECORD_ACCESSED: Dr. Anand Raman (Doctor Portal)</span>
                  <span className="text-slate-400">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px]">
                  <span>OCR_DOCUMENT_EXTRACTED: Automated Pipeline</span>
                  <span className="text-slate-400">Verified by Patient</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px]">
                  <span>CONSENT_LOGGED: Cryptographic Timestamp</span>
                  <span className="text-slate-400">ABDM Registry Sync</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
