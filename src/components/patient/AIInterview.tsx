import React, { useState, useEffect, useRef } from 'react';
import { Bot, Mic, MicOff, Volume2, Send, Sparkles, AlertCircle, ArrowRight, RotateCcw, Check, User } from 'lucide-react';
import { usePatient } from '../../context/PatientContext';
import { QUESTION_NODES, QuestionNode } from '../../data/questionnaireGraph';
import { speechService } from '../../services/speechService';
import { detectCommunicationNeeds } from '../../services/adaptationEngine';
import { TRANSLATIONS } from '../../data/translations';
import { LiveDigitalTwinPanel } from './LiveDigitalTwinPanel';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'patient';
  text: string;
  timestamp: string;
  isRedFlag?: boolean;
}

export const AIInterview: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const {
    digitalTwin,
    updateChiefComplaint,
    addOrUpdateSymptom,
    isSimplifiedLanguage,
    setIsSimplifiedLanguage,
    language
  } = usePatient();
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const [currentNodeId, setCurrentNodeId] = useState<string>('q-complaint');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [showTwinSidebar, setShowTwinSidebar] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentNode: QuestionNode = QUESTION_NODES[currentNodeId] || QUESTION_NODES['q-complaint'];

  // Initialize first AI question
  useEffect(() => {
    if (messages.length === 0) {
      const promptText = isSimplifiedLanguage ? currentNode.simplifiedPrompt : currentNode.prompt;
      setMessages([
        {
          id: `msg-0`,
          sender: 'ai',
          text: promptText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [currentNodeId, isSimplifiedLanguage]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handlePatientAnswer = (answerValue: string, displayLabel: string, isFlagged?: boolean) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Add patient message
    const newPatientMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'patient',
      text: displayLabel,
      timestamp: time,
      isRedFlag: isFlagged
    };

    // 2. Communication adaptation check
    const prevPatientTexts = messages.filter(m => m.sender === 'patient').map(m => m.text);
    const adaptResult = detectCommunicationNeeds(displayLabel, prevPatientTexts, digitalTwin.demographics.age.value);
    if (adaptResult.isSimplified && !isSimplifiedLanguage) {
      setIsSimplifiedLanguage(true);
    }

    // 3. Update digital twin fields based on targetField
    if (currentNode.targetField === 'chiefComplaint') {
      updateChiefComplaint(displayLabel);
    } else if (currentNode.targetField.startsWith('symptom.')) {
      const fieldKey = currentNode.targetField.split('.')[1];
      addOrUpdateSymptom({ [fieldKey]: answerValue });
    }

    // 4. Progress to next node
    const nextId = currentNode.nextQuestionId(answerValue, {});

    if (nextId && QUESTION_NODES[nextId]) {
      setCurrentNodeId(nextId);
      const nextNode = QUESTION_NODES[nextId];
      const nextPrompt = (isSimplifiedLanguage || adaptResult.isSimplified) ? nextNode.simplifiedPrompt : nextNode.prompt;

      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          newPatientMsg,
          {
            id: `msg-${Date.now() + 1}`,
            sender: 'ai',
            text: nextPrompt,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 400);
    } else {
      // Completed interview branch
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          newPatientMsg,
          {
            id: `msg-${Date.now() + 1}`,
            sender: 'ai',
            text: "Thank you. I have mapped your clinical history into your digital profile. Your doctor will review this structured record before meeting you.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        if (onComplete) onComplete();
      }, 500);
    }

    setInputText('');
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
    } else {
      const started = speechService.startListening(
        language,
        (text, isFinal) => {
          setInputText(text);
          if (isFinal) {
            setIsListening(false);
            handlePatientAnswer(text, text);
          }
        },
        () => {
          setIsListening(false);
        }
      );
      setIsListening(started);
    }
  };

  const handleReadAloud = (text: string) => {
    speechService.speakText(text, language);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
      {/* Main Conversation Area (7 cols on desktop) */}
      <div className="lg:col-span-8 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[620px]">
        {/* Chat Header */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-slate-900 text-sm">AI Clinical Interview Engine</h2>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Dialogue
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Step: <span className="font-semibold uppercase text-sky-700">{currentNode.step}</span> • Clinical Reasoning Graph
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle simplified indicator */}
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
              isSimplifiedLanguage ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}>
              {isSimplifiedLanguage ? '🟡 Simplified Mode' : '🟢 Standard Language'}
            </span>
          </div>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[440px] bg-gradient-to-b from-slate-50/50 to-white">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-4 shadow-sm text-sm ${
                  m.sender === 'patient'
                    ? 'bg-sky-600 text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${m.sender === 'patient' ? 'text-sky-100' : 'text-slate-400'}`}>
                    {m.sender === 'patient' ? 'Patient' : 'Clinical Copilot'}
                  </span>
                  <div className="flex items-center gap-2">
                    {m.sender === 'ai' && (
                      <button
                        onClick={() => handleReadAloud(m.text)}
                        title="Read question aloud"
                        className="text-slate-400 hover:text-sky-600 transition-colors"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className={`text-[10px] ${m.sender === 'patient' ? 'text-sky-200' : 'text-slate-400'}`}>{m.timestamp}</span>
                  </div>
                </div>
                <p className="leading-relaxed font-medium">{m.text}</p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Touch Options / Buttons */}
        {currentNode.options && currentNode.options.length > 0 && (
          <div className="p-3 bg-slate-50 border-t border-slate-200">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
              <span>One-Tap Quick Choices:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentNode.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handlePatientAnswer(opt.value, isSimplifiedLanguage && opt.simplifiedLabel ? opt.simplifiedLabel : opt.label, opt.isRedFlag)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all text-left flex items-center gap-2 ${
                    opt.isRedFlag
                      ? 'bg-rose-50 border-rose-200 text-rose-900 hover:bg-rose-100'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-sky-500 hover:bg-sky-50 shadow-xs'
                  }`}
                >
                  <ArrowRight className="w-3 h-3 text-sky-600 flex-shrink-0" />
                  <span>{isSimplifiedLanguage && opt.simplifiedLabel ? opt.simplifiedLabel : opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar with Voice Button & Textarea */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
          <button
            onClick={handleVoiceToggle}
            className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
              isListening
                ? 'bg-red-600 text-white animate-pulse shadow-md shadow-red-500/30'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-sky-600" />}
            <span className="hidden sm:inline">{isListening ? t.listening : t.speakButton}</span>
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputText.trim()) {
                handlePatientAnswer(inputText, inputText);
              }
            }}
            placeholder="Type your answer or speak with the microphone..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 placeholder:text-slate-400"
          />

          <button
            onClick={() => {
              if (inputText.trim()) handlePatientAnswer(inputText, inputText);
            }}
            disabled={!inputText.trim()}
            className="bg-sky-600 hover:bg-sky-700 disabled:opacity-40 text-white p-2.5 rounded-xl transition-all shadow-md shadow-sky-600/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Side Panel: Live Clinical Digital Twin (4 cols on desktop) */}
      <div className="lg:col-span-4 h-full">
        <LiveDigitalTwinPanel />
      </div>
    </div>
  );
};
