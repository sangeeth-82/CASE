import React, { useState } from 'react';
import { CheckCircle2, Edit3, MessageSquarePlus, ShieldCheck, AlertCircle } from 'lucide-react';
import { useDoctor } from '../../context/DoctorContext';

export const DoctorVerificationBar: React.FC = () => {
  const { selectedPatient, verifyCurrentPatient, updateDoctorNotes, askPatientQuestion } = useDoctor();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedNotes, setEditedNotes] = useState<string>(selectedPatient.doctorSummary.doctorNotes || '');
  const [showAskModal, setShowAskModal] = useState<boolean>(false);
  const [followUpQuestion, setFollowUpQuestion] = useState<string>('');

  const handleVerify = () => {
    verifyCurrentPatient(editedNotes);
    setIsEditing(false);
  };

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!followUpQuestion.trim()) return;
    askPatientQuestion(followUpQuestion);
    setFollowUpQuestion('');
    setShowAskModal(false);
  };

  return (
    <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className={`w-3.5 h-3.5 rounded-full ${selectedPatient.doctorSummary.isVerified ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-amber-400 ring-4 ring-amber-400/20 animate-pulse'}`} />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">Clinician Verification Status:</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
              selectedPatient.doctorSummary.isVerified
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {selectedPatient.doctorSummary.isVerified ? '✓ VERIFIED RECORD OF TRUTH' : 'PENDING CLINICIAN REVIEW'}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {selectedPatient.doctorSummary.isVerified
              ? `Verified by ${selectedPatient.doctorSummary.verifiedBy} on ${new Date(selectedPatient.doctorSummary.verifiedAt || '').toLocaleTimeString()}`
              : 'All AI-generated sections require explicit clinician verification before filing into EHR.'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowAskModal(true)}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all border border-slate-700 flex items-center gap-1.5"
        >
          <MessageSquarePlus className="w-4 h-4 text-sky-400" />
          <span>Ask Patient</span>
        </button>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all border border-slate-700 flex items-center gap-1.5"
        >
          <Edit3 className="w-4 h-4 text-amber-400" />
          <span>{isEditing ? 'Cancel Edit' : 'Edit Summary'}</span>
        </button>

        <button
          onClick={handleVerify}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{selectedPatient.doctorSummary.isVerified ? 'Re-Verify Record' : 'Verify & Lock Record'}</span>
        </button>
      </div>

      {/* Edit Notes Drawer / Expandable */}
      {isEditing && (
        <div className="w-full pt-3 border-t border-slate-800 space-y-2 text-xs">
          <label className="font-bold text-slate-300">Doctor Clinical Addendum / Corrections:</label>
          <textarea
            value={editedNotes}
            onChange={(e) => setEditedNotes(e.target.value)}
            placeholder="Add physician corrections or official consultation directives..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            rows={3}
          />
        </div>
      )}

      {/* Ask Patient Modal */}
      {showAskModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-slate-900 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2 text-slate-900">
              <MessageSquarePlus className="w-5 h-5 text-sky-600" />
              <span>Send Pre-Consultation Question to Patient</span>
            </h3>
            <p className="text-xs text-slate-600">
              Add a targeted clarification query to {selectedPatient.demographics.name.value}'s mobile portal while they wait.
            </p>
            <form onSubmit={handleAskSubmit} className="space-y-4">
              <textarea
                value={followUpQuestion}
                onChange={(e) => setFollowUpQuestion(e.target.value)}
                placeholder="e.g., Have you felt this exact pain during rest, or only during physical exertion?"
                className="w-full border border-slate-300 rounded-xl p-3 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                rows={3}
                required
              />
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAskModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700"
                >
                  Send Query
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
