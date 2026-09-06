import { SupportedLanguage, LanguageOption } from '../types/i18n';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' }
];

export interface TranslationDictionary {
  appTitle: string;
  tagline: string;
  subline: string;
  safetyDisclaimer: string;
  patientLogin: string;
  doctorLogin: string;
  demoMode: string;
  quickDemo: string;
  startPreConsultation: string;
  doctorPortal: string;
  consentTitle: string;
  consentBody: string;
  consentPoint1: string;
  consentPoint2: string;
  consentPoint3: string;
  iAgree: string;
  cancel: string;
  allopathy: string;
  allopathyDesc: string;
  ayush: string;
  ayushDesc: string;
  startInterview: string;
  speakButton: string;
  listening: string;
  readAloud: string;
  simplifiedMode: string;
  normalMode: string;
  sendToDoctor: string;
  medications: string;
  documents: string;
  timeline: string;
  digitalTwin: string;
  doctorQueue: string;
  verifySummary: string;
  editSummary: string;
  askPatient: string;
  redFlagsDetected: string;
  informationGaps: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    appTitle: "AI Clinical Pre-Consultation Copilot",
    tagline: "The Doctor Sees the Patient Before the Consultation Begins.",
    subline: "An AI-powered pre-consultation clinical copilot that transforms conversations, medical records and patient history into a structured, explainable clinical profile.",
    safetyDisclaimer: "This system provides pre-consultation support and triage flags. It does NOT diagnose medical conditions or replace a healthcare professional.",
    patientLogin: "Patient Login",
    doctorLogin: "Doctor Login (Admin)",
    demoMode: "Demo Mode (Instant Evaluation)",
    quickDemo: "Select Sample Patient",
    startPreConsultation: "Start Pre-Consultation",
    doctorPortal: "Doctor Queue & Workspace",
    consentTitle: "Patient Privacy & Clinical Pre-Consultation Consent",
    consentBody: "Before we begin your pre-consultation interview, please review the clinical consent agreement:",
    consentPoint1: "This tool organizes your symptoms, documents, and medical history so your doctor has complete context before meeting you.",
    consentPoint2: "This system does NOT diagnose diseases, prescribe medication, or replace doctor judgment.",
    consentPoint3: "All information is securely stored under ABDM health data standards and shared only with your attending clinician.",
    iAgree: "I Agree & Consent",
    cancel: "Cancel",
    allopathy: "Allopathic Medicine",
    allopathyDesc: "Modern evidence-based medical consultation with specialized triage.",
    ayush: "AYUSH / Integrated",
    ayushDesc: "Ayurveda, Yoga, Unani, Siddha, Homeopathy with Prakriti & Agni assessment.",
    startInterview: "Start AI Clinical Interview",
    speakButton: "Speak Answer",
    listening: "Listening carefully...",
    readAloud: "Read Question Aloud",
    simplifiedMode: "Simplified Language Active",
    normalMode: "Standard Clinical Language",
    sendToDoctor: "Submit to Doctor Queue",
    medications: "Medication Reconciliation",
    documents: "Document Upload & OCR",
    timeline: "Health Timeline",
    digitalTwin: "Live Clinical Digital Twin",
    doctorQueue: "Patient Queue",
    verifySummary: "Verify Summary",
    editSummary: "Edit Record",
    askPatient: "Ask Follow-up Question",
    redFlagsDetected: "Potential Red Flag Detected",
    informationGaps: "Identified Information Gaps"
  },
  ta: {
    appTitle: "AI மருத்துவ முன்-ஆலோசனை உதவியாளர்",
    tagline: "மருத்துவ ஆலோசனை தொடங்கும் முன்பே மருத்துவர் நோயாளியை முழுமையாக அறிகிறார்.",
    subline: "உரையாடல்கள், மருந்து சீட்டுகள் மற்றும் மருத்துவ வரலாற்றை மருத்துவர் உடனே புரிந்துகொள்ளும் விரிவான மருத்துவ சுயவிவரமாக மாற்றும் AI அமைப்பு.",
    safetyDisclaimer: "இந்த அமைப்பு முன்-ஆலோசனை தயாரிப்பிற்கு மட்டுமே. இது எந்த நோயையும் உறுதி செய்யாது, மருத்துவருக்கு மாற்றாகாது.",
    patientLogin: "நோயாளி உள்நுழைவு",
    doctorLogin: "மருத்துவர் உள்நுழைவு",
    demoMode: "மாதிரி நோயாளி செயல்விளக்கம்",
    quickDemo: "மாதிரி நோயாளியைத் தேர்வு செய்க",
    startPreConsultation: "முன்-ஆலோசனையைத் தொடங்கு",
    doctorPortal: "மருத்துவர் வரிசை & பணிமனை",
    consentTitle: "நோயாளி தனியுரிமை மற்றும் முன்-ஆலோசனை ஒப்புதல்",
    consentBody: "நாங்கள் தொடங்குவதற்கு முன், உங்கள் மருத்துவ தகவல்களை ஒழுங்குபடுத்த ஒப்புதல் வழங்கவும்:",
    consentPoint1: "உங்கள் அறிகுறிகள் மற்றும் பழைய மருந்துச் சீட்டுகளை மருத்துவர் எளிதில் பார்க்க இது உதவுகிறது.",
    consentPoint2: "இந்த அமைப்பு எந்த நோயையும் உறுதிப்படுத்தாது அல்லது மருந்து எழுதாது.",
    consentPoint3: "உங்கள் தகவல்கள் பாதுகாப்பாக உங்கள் மருத்துவரிடம் மட்டுமே சமர்ப்பிக்கப்படும்.",
    iAgree: "நான் ஒப்புக்கொள்கிறேன்",
    cancel: "ரத்து செய்",
    allopathy: "அலோபதி மருத்துவம்",
    allopathyDesc: "நவீன மருத்துவ முறைகளுக்கான பிரத்யேக முன் தயாரிப்பு.",
    ayush: "ஆயுஷ் / பாரம்பரிய மருத்துவம்",
    ayushDesc: "ஆயுர்வேதம், சித்தா, பிரகிருதி மற்றும் அக்னி உடல்நிலை விவரக்குறிப்பு.",
    startInterview: "AI மருத்துவ நேர்காணலைத் தொடங்கு",
    speakButton: "குரல் மூலம் பேசுங்கள்",
    listening: "கேட்கிறது...",
    readAloud: "கேள்வியை வாசிக்கவும்",
    simplifiedMode: "எளிய மொழி முறை செயலில் உள்ளது",
    normalMode: "வழக்கமான மருத்துவ மொழி",
    sendToDoctor: "மருத்துவருக்கு அனுப்புங்கள்",
    medications: "மருந்து விவரங்கள்",
    documents: "ஆவணங்கள் பதிவேற்றம்",
    timeline: "மருத்துவ காலவரிசை",
    digitalTwin: "நேரடி மருத்துவ டிஜிட்டல் ட்வின்",
    doctorQueue: "நோயாளி காத்திருப்பு வரிசை",
    verifySummary: "சுருக்கத்தை உறுதிசெய்",
    editSummary: "திருத்து",
    askPatient: "நோயாளிடம் கூடுதல் கேள்வி கேள்",
    redFlagsDetected: "முக்கிய எச்சரிக்கை அறிகுறி கண்டறியப்பட்டது",
    informationGaps: "விடுபட்ட மருத்துவ தகவல்கள்"
  },
  hi: {
    appTitle: "एआई क्लिनिकल प्री-कंसल्टेशन कोपायलट",
    tagline: "परामर्श शुरू होने से पहले ही डॉक्टर मरीज को पूरी तरह समझ लेते हैं।",
    subline: "मरीज की बातचीत, पर्चियों और मेडिकल इतिहास को एक व्यवस्थित, स्पष्ट क्लिनिकल प्रोफाइल में बदलने वाला एआई कोपायलट।",
    safetyDisclaimer: "यह प्रणाली पूर्व-परामर्श सहायता और प्राथमिकता जांच के लिए है। यह बीमारी का निदान नहीं करती और न ही डॉक्टर का विकल्प है।",
    patientLogin: "मरीज लॉगिन",
    doctorLogin: "डॉक्टर लॉगिन (एडमिन)",
    demoMode: "डेमो मोड (नमूना डेटा)",
    quickDemo: "नमूना मरीज चुनें",
    startPreConsultation: "पूर्व-परामर्श शुरू करें",
    doctorPortal: "डॉक्टर कतार और कार्यक्षेत्र",
    consentTitle: "मरीज गोपनीयता एवं पूर्व-परामर्श सहमति",
    consentBody: "बातचीत शुरू करने से पहले, कृपया क्लिनिकल सहमति विवरण की समीक्षा करें:",
    consentPoint1: "यह उपकरण आपके लक्षणों और मेडिकल रिकॉर्ड को व्यवस्थित करता है ताकि डॉक्टर का समय बच सके।",
    consentPoint2: "यह सिस्टम कोई बीमारी तय नहीं करता और न ही दवा लिखता है।",
    consentPoint3: "आपकी जानकारी पूरी तरह सुरक्षित है और केवल आपके डॉक्टर के साथ साझा की जाएगी।",
    iAgree: "मैं सहमत हूँ",
    cancel: "रद्द करें",
    allopathy: "एलोपैथी (आधुनिक चिकित्सा)",
    allopathyDesc: "विशिष्ट ट्रायज के साथ आधुनिक साक्ष्य-आधारित चिकित्सा परामर्श।",
    ayush: "आयुष / एकीकृत चिकित्सा",
    ayushDesc: "आयुर्वेद, योग, सिद्धा, होम्योपैथी - प्रकृति और अग्नि विश्लेषण के साथ।",
    startInterview: "एआई इंटरव्यू शुरू करें",
    speakButton: "बोलकर बताएं",
    listening: "सुन रहे हैं...",
    readAloud: "सवाल सुनें",
    simplifiedMode: "सरल भाषा मोड चालू है",
    normalMode: "मानक क्लिनिकल भाषा",
    sendToDoctor: "डॉक्टर को भेजें",
    medications: "दवाइयां और सामंजस्य",
    documents: "दस्तावेज़ अपलोड",
    timeline: "स्वास्थ्य समयरेखा",
    digitalTwin: "लाइव क्लिनिकल डिजिटल ट्विन",
    doctorQueue: "मरीज कतार",
    verifySummary: "सारांश सत्यापित करें",
    editSummary: "संपादित करें",
    askPatient: "मरीज से पूछें",
    redFlagsDetected: "संभावित रेड-फ्लैग चेतावनी",
    informationGaps: "अपुष्ट जानकारी की सूची"
  },
  te: {
    appTitle: "AI క్లినికల్ ప్రీ-కన్సల్టేషన్ కోపైలట్",
    tagline: "కన్సల్టేషన్ ప్రారంభం కావడానికి ముందే డాక్టర్ పేషెంట్‌ను పూర్తిగా అర్థం చేసుకుంటారు.",
    subline: "పేషెంట్ సంభాషణలు, పాత ప్రిస్క్రిప్షన్లు మరియు వ్యాధి చరిత్రను స్పష్టమైన క్లినికల్ ప్రొఫైల్‌గా మార్చే AI సహాయకుడు.",
    safetyDisclaimer: "ఈ వ్యవస్థ ముందస్తు సంప్రదింపుల తయారీకి మాత్రమే. ఇది వ్యాధిని నిర్ధారించదు లేదా వైద్యుడికి ప్రత్యామ్నాయం కాదు.",
    patientLogin: "పేషెంట్ లాగిన్",
    doctorLogin: "డాక్టర్ లాగిన్",
    demoMode: "డెమో మోడ్",
    quickDemo: "నమూనా పేషెంట్‌ను ఎంచుకోండి",
    startPreConsultation: "ప్రీ-కన్సల్టేషన్ ప్రారంభించండి",
    doctorPortal: "డాక్టర్ క్యూ & వర్క్‌స్పేస్",
    consentTitle: "పేషెంట్ గోప్యత మరియు ముందస్తు సమ్మతి",
    consentBody: "మేము ప్రారంభించే ముందు దయచేసి నియమాలను సమీక్షించండి:",
    consentPoint1: "మీరు డాక్టర్‌ను కలిసే ముందు మీ లక్షణాలు మరియు పత్రాలను సక్రమంగా నిర్వహించడానికి ఇది ఉపయోగపడుతుంది.",
    consentPoint2: "ఈ సిస్టమ్ ఎటువంటి మందులను సిఫారసు చేయదు లేదా రోగాన్ని నిర్ధారించదు.",
    consentPoint3: "మీ సమాచారం భద్రంగా ఉంటుంది మరియు మీ వైద్యుడికి మాత్రమే పంపబడుతుంది.",
    iAgree: "నేను అంగీకరిస్తున్నాను",
    cancel: "రద్దు చేయి",
    allopathy: "అల్లోపతి వైద్యం",
    allopathyDesc: "ఆధునిక శాస్త్రీయ వైద్య సలహా మరియు అత్యవసర ప్రాధాన్యత.",
    ayush: "ఆయుష్ / సాంప్రదాయ వైద్యం",
    ayushDesc: "ఆయుర్వేద, ప్రకృతి, అగ్ని మరియు ఆహార-విహార విశ్లేషణ.",
    startInterview: "AI ఇంటర్వ్యూ ప్రారంభించండి",
    speakButton: "వాయిస్ ద్వారా మాట్లాడండి",
    listening: "వింటోంది...",
    readAloud: "ప్రశ్న వినండి",
    simplifiedMode: "సరళమైన భాషా విధానం",
    normalMode: "ప్రామాణిక వైద్య భాష",
    sendToDoctor: "డాక్టర్‌కు సమర్పించండి",
    medications: "మందుల వివరాలు",
    documents: "పత్రాల అప్‌లోడ్",
    timeline: "ఆరోగ్య టైమ్‌లైన్",
    digitalTwin: "లైవ్ క్లినికల్ డిజిటల్ ట్విన్",
    doctorQueue: "పేషెంట్ క్యూ",
    verifySummary: "ధృవీకరించండి",
    editSummary: "సవరించండి",
    askPatient: "మరిన్ని వివరాలు అడగండి",
    redFlagsDetected: "ముఖ్య హెచ్చరిక సంకేతం",
    informationGaps: "అసంపూర్తి సమాచారం"
  },
  ml: {
    appTitle: "AI ക്ലിനിക്കൽ പ്രീ-കൺസൾട്ടേഷൻ കോപൈലറ്റ്",
    tagline: "കൺസൾട്ടേഷൻ തുടങ്ങുന്നതിന് മുൻപ് തന്നെ ഡോക്ടർ രോഗിയെ തിരിച്ചറിയുന്നു.",
    subline: "രോഗിയുടെ സംഭാഷണങ്ങൾ, മെഡിക്കൽ രേഖകൾ എന്നിവയെ പൂർണ്ണമായ ക്ലിനിക്കൽ പ്രൊഫൈലാക്കി മാറ്റുന്ന AI സംവിധാനം.",
    safetyDisclaimer: "ഈ സംവിധാനം ഒരു രോഗനിർണയമോ ഡോക്ടർക്ക് പകരമോ അല്ല. മുൻകൂട്ടിയുള്ള തയ്യാറെടുപ്പിന് വേണ്ടിയുള്ളതാണ്.",
    patientLogin: "രോഗി ലോഗിൻ",
    doctorLogin: "ഡോക്ടർ ലോഗിൻ",
    demoMode: "ഡെമോ മോഡ്",
    quickDemo: "സാമ്പിൾ രോഗിയെ തിരഞ്ഞെടുക്കുക",
    startPreConsultation: "ആരംഭിക്കുക",
    doctorPortal: "ഡോക്ടർ ക്യൂ",
    consentTitle: "രോഗിയുടെ സ്വകാര്യതയും സമ്മതപത്രവും",
    consentBody: "തുടങ്ങുന്നതിനുമുമ്പ് നിബന്ധനകൾ വായിക്കുക:",
    consentPoint1: "ഡോക്ടറെ കാണുന്നതിന് മുൻപ് വിവരങ്ങൾ ചിട്ടയായി ക്രമീകരിക്കാൻ സഹായിക്കുന്നു.",
    consentPoint2: "ഇത് രോഗനിർണ്ണയം നടത്തുകയോ മരുന്നുകൾ നിർദ്ദേശിക്കുകയോ ചെയ്യുന്നില്ല.",
    consentPoint3: "നിങ്ങളുടെ വിവരങ്ങൾ സുരക്ഷിതമായി ഡോക്ടർക്ക് മാത്രമേ ലഭ്യമാക്കൂ.",
    iAgree: "ഞാൻ സമ്മതിക്കുന്നു",
    cancel: "റദ്ദാക്കുക",
    allopathy: "അലോപ്പതി",
    allopathyDesc: "ആധുനിക മെഡിക്കൽ കൺസൾട്ടേഷൻ.",
    ayush: "ആയുഷ് / ആയുർവേദം",
    ayushDesc: "പ്രകൃതി, അഗ്നി, ആഹാര-വിഹാര വിലയിരുത്തലുകൾ ഉൾപ്പെടെ.",
    startInterview: "AI അഭിമുഖം ആരംഭിക്കുക",
    speakButton: "സംസാരിക്കുക",
    listening: "കേൾക്കുന്നു...",
    readAloud: "ചോദ്യം വായിക്കുക",
    simplifiedMode: "ലളിതമായ ഭാഷാ മോഡ്",
    normalMode: "സാധാരണ മെഡിക്കൽ ഭാഷ",
    sendToDoctor: "ഡോക്ടർക്ക് അയക്കുക",
    medications: "മരുന്നുകളുടെ പട്ടിക",
    documents: "രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക",
    timeline: "ടൈംലൈൻ",
    digitalTwin: "ലൈവ് ഡിജിറ്റൽ ട്വിൻ",
    doctorQueue: "രോഗികളുടെ ക്യൂ",
    verifySummary: "സ്ഥിരീകരിക്കുക",
    editSummary: "തിരുത്തുക",
    askPatient: "ചോദ്യങ്ങൾ ചോദിക്കുക",
    redFlagsDetected: "പ്രധാന അപായ സൂചന",
    informationGaps: "വ്യക്തമല്ലാത്ത വിവരങ്ങൾ"
  },
  kn: {
    appTitle: "AI ಕ್ಲಿನಿಕಲ್ ಪೂರ್ವ ಸಮಾಲೋಚನೆ ಕೋಪೈಲಟ್",
    tagline: "ಸಮಾಲೋಚನೆ ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲೇ ವೈದ್ಯರು ರೋಗಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
    subline: "ಸಂಭಾಷಣೆಗಳು, ವೈದ್ಯಕೀಯ ಚೀಟಿಗಳು ಮತ್ತು ಇತಿಹಾಸವನ್ನು ಸಮಗ್ರ ಕ್ಲಿನಿಕಲ್ ಪ್ರೊಫೈಲ್ ಆಗಿ ಪರಿವರ್ತಿಸುವ AI ವ್ಯವಸ್ಥೆ.",
    safetyDisclaimer: "ಈ ವ್ಯವಸ್ಥೆಯು ಯಾವುದೇ ರೋಗವನ್ನು ನಿರ್ಣಯಿಸುವುದಿಲ್ಲ ಅಥವಾ ವೈದ್ಯರಿಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
    patientLogin: "ರೋಗಿ ಲಾಗಿನ್",
    doctorLogin: "ವೈದ್ಯರ ಲಾಗಿನ್",
    demoMode: "ಡೆಮೊ ಮೋಡ್",
    quickDemo: "ಮಾದರಿ ರೋಗಿಯನ್ನು ಆರಿಸಿ",
    startPreConsultation: "ಪೂರ್ವ ಸಮಾಲೋಚನೆ ಪ್ರಾರಂಭಿಸಿ",
    doctorPortal: "ವೈದ್ಯರ ಕ್ಯೂ & ವರ್ಕ್‌ಸ್ಪೇಸ್",
    consentTitle: "ಗೌಪ್ಯತೆ ಮತ್ತು ಪೂರ್ವ ಸಮಾಲೋಚನೆ ಒಪ್ಪಿಗೆ",
    consentBody: "ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:",
    consentPoint1: "ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡುವ ಮುನ್ನ ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ಜೋಡಿಸಲು ಇದು ನೆರವಾಗುತ್ತದೆ.",
    consentPoint2: "ಈ ವ್ಯವಸ್ಥೆ ಯಾವುದೇ ರೋಗ ನಿರ್ಣಯಿಸುವುದಿಲ್ಲ ಅಥವಾ ಔಷಧ ಸೂಚಿಸುವುದಿಲ್ಲ.",
    consentPoint3: "ನಿಮ್ಮ ವಿವರಗಳು ಸುರಕ್ಷಿತವಾಗಿ ನಿಮ್ಮ ವೈದ್ಯರೊಂದಿಗೆ ಮಾತ್ರ ಹಂಚಿಕೊಳ್ಳಲ್ಪಡುತ್ತವೆ.",
    iAgree: "ನಾನು ಒಪ್ಪುತ್ತೇನೆ",
    cancel: "ರದ್ದುಮಾಡಿ",
    allopathy: "ಅಲೋಪಥಿ",
    allopathyDesc: "ಆಧುನಿಕ ಪುರಾವೆ ಆಧಾರಿತ ಚಿಕಿತ್ಸೆ.",
    ayush: "ಆಯುಷ್ / ಆಯುರ್ವೇದ",
    ayushDesc: "ಪ್ರಕೃತಿ, ಅಗ್ನಿ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ.",
    startInterview: "AI ಸಂದರ್ಶನ ಪ್ರಾರಂಭಿಸಿ",
    speakButton: "ಮಾತನಾಡಿ",
    listening: "ಆಲಿಸುತ್ತಿದೆ...",
    readAloud: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
    simplifiedMode: "ಸರಳ ಭಾಷಾ ಮೋಡ್",
    normalMode: "ಸಾಮಾನ್ಯ ಕ್ಲಿನಿಕಲ್ ಭಾಷೆ",
    sendToDoctor: "ವೈದ್ಯರಿಗೆ ಕಳುಹಿಸಿ",
    medications: "ಔಷಧ ವಿವರಗಳು",
    documents: "ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್",
    timeline: "ಟೈಮ್‌ಲೈನ್",
    digitalTwin: "ಲೈವ್ ಡಿಜಿಟಲ್ ಟ್ವಿನ್",
    doctorQueue: "ರೋಗಿಗಳ ಸರದಿ",
    verifySummary: "ದೃಢೀಕರಿಸಿ",
    editSummary: "ತಿದ್ದುಪಡಿ ಮಾಡಿ",
    askPatient: "ರೋಗಿಯನ್ನು ಕೇಳಿ",
    redFlagsDetected: "ಪ್ರಮುಖ ಮುನ್ನೆಚ್ಚರಿಕೆ ಚಿಹ್ನೆ",
    informationGaps: "ಅಪೂರ್ಣ ಮಾಹಿತಿ"
  }
};
