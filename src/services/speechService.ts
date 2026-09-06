export interface SpeechRecognitionResult {
  transcript: string;
  isFinal: boolean;
}

export class VoiceInteractionService {
  private recognition: any = null;
  public isSupported = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.isSupported = true;
      }
    }
  }

  public startListening(
    langCode: string,
    onResult: (text: string, isFinal: boolean) => void,
    onError: (err: any) => void
  ): boolean {
    if (!this.recognition) return false;

    // map app lang to standard bcp47
    const langMap: Record<string, string> = {
      en: 'en-IN',
      ta: 'ta-IN',
      hi: 'hi-IN',
      te: 'te-IN',
      ml: 'ml-IN',
      kn: 'kn-IN'
    };

    this.recognition.lang = langMap[langCode] || 'en-IN';

    this.recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      onResult(finalTranscript || interimTranscript, !!finalTranscript);
    };

    this.recognition.onerror = (event: any) => {
      onError(event.error);
    };

    try {
      this.recognition.start();
      return true;
    } catch (e) {
      return false;
    }
  }

  public stopListening() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
  }

  public speakText(text: string, langCode: string = 'en') {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const langMap: Record<string, string> = {
      en: 'en-IN',
      ta: 'ta-IN',
      hi: 'hi-IN',
      te: 'te-IN',
      ml: 'ml-IN',
      kn: 'kn-IN'
    };
    utterance.lang = langMap[langCode] || 'en-IN';
    utterance.rate = 0.95; // gentle, accessible speaking rate
    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speechService = new VoiceInteractionService();
