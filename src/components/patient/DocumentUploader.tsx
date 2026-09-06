import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertTriangle, Loader2, Sparkles, Eye, ShieldAlert, Check, X } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { processDocumentOcr, OcrPipelineStage, ExtractedOcrResult } from '../../services/ocrService';

export const DocumentUploader: React.FC = () => {
  const { digitalTwin, confirmOcrExtraction } = usePatient();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [ocrStages, setOcrStages] = useState<OcrPipelineStage[]>([]);
  const [stagedResult, setStagedResult] = useState<ExtractedOcrResult | null>(null);
  const [showVerifyModal, setShowVerifyModal] = useState<boolean>(false);

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true);
    setStagedResult(null);

    try {
      const result = await processDocumentOcr(file, (stages) => {
        setOcrStages(stages);
      });
      setStagedResult(result);
      setShowVerifyModal(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleConfirmOcr = () => {
    if (stagedResult) {
      confirmOcrExtraction(stagedResult);
      setShowVerifyModal(false);
      setStagedResult(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Box */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleFileDrop}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
          isDragging
            ? 'border-sky-500 bg-sky-50/50 scale-[1.01]'
            : 'border-slate-300 hover:border-sky-400 bg-white'
        }`}
      >
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Upload className="w-8 h-8" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Upload Prescriptions & Lab Reports</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
          Drag and drop PDF files, clinic discharge notes, or mobile camera photos of paper prescriptions.
        </p>

        <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl cursor-pointer shadow-md shadow-sky-600/20 transition-all">
          <Upload className="w-4 h-4" />
          <span>Select Document</span>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>

      {/* Live OCR Progress Pipeline */}
      {isProcessing && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-sky-600 animate-spin" />
              <h4 className="font-bold text-sm text-slate-900">Multi-Stage OCR Extraction Pipeline</h4>
            </div>
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
              Processing Document...
            </span>
          </div>

          <div className="space-y-2">
            {ocrStages.map((stage) => (
              <div key={stage.step} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs border border-slate-200">
                <div className="flex items-center gap-3">
                  {stage.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : stage.status === 'active' ? (
                    <Loader2 className="w-4 h-4 text-sky-600 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                  )}
                  <span className={stage.status === 'completed' ? 'font-bold text-slate-800' : 'text-slate-600'}>
                    Step {stage.step}: {stage.label}
                  </span>
                </div>
                <span className={`text-[10px] font-bold uppercase ${
                  stage.status === 'completed' ? 'text-emerald-700' : stage.status === 'active' ? 'text-sky-700' : 'text-slate-400'
                }`}>
                  {stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Existing Uploaded Documents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h4 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 text-sky-600" />
          <span>Confirmed Clinical Documents ({digitalTwin.documents.length})</span>
        </h4>

        {digitalTwin.documents.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            No medical documents uploaded yet. Upload old prescriptions to auto-fill medications and past history.
          </div>
        ) : (
          <div className="space-y-3">
            {digitalTwin.documents.map((doc) => (
              <div key={doc.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{doc.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()} • Verified by Patient
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mandatory Verification Modal (Never silently trust OCR) */}
      {showVerifyModal && stagedResult && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-sky-700 text-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-200">
                <Sparkles className="w-4 h-4 text-sky-300" />
                <span>Mandatory OCR Verification Gate</span>
              </div>
              <h3 className="text-lg font-bold mt-1">Review Extracted Clinical Entities</h3>
              <p className="text-sky-100 text-xs mt-0.5">
                Never silently trust OCR. Please inspect and confirm that the extracted data matches your document before it is integrated into your digital twin.
              </p>
            </div>

            <div className="p-6 space-y-4 max-h-[420px] overflow-y-auto text-xs text-slate-700">
              {/* Diagnoses */}
              <div>
                <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wide">Extracted Clinical Findings:</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {stagedResult.diagnoses.map((d, i) => (
                    <span key={i} className="bg-sky-50 text-sky-800 px-2.5 py-1 rounded-lg border border-sky-200 font-semibold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Medicines */}
              <div>
                <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wide">Extracted Medications:</span>
                <div className="mt-1 space-y-1.5">
                  {stagedResult.medicines.map((m, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                      <span className="font-bold text-slate-800">{m.name}</span>
                      <span className="text-slate-600 font-medium">{m.dose} • {m.freq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investigations */}
              {stagedResult.investigations && stagedResult.investigations.length > 0 && (
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wide">Extracted Lab Values:</span>
                  <div className="mt-1 space-y-1.5">
                    {stagedResult.investigations.map((inv, i) => (
                      <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                        <span className="font-bold text-slate-800">{inv.name}</span>
                        <span className="font-mono font-bold text-sky-900">{inv.result} {inv.unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowVerifyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200"
              >
                Discard / Cancel
              </button>
              <button
                onClick={handleConfirmOcr}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Confirm & Update Digital Twin</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
