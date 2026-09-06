export interface AdaptationState {
  isSimplified: boolean;
  triggerReason?: string;
  detectedSimplicityScore: number; // 0 to 1
}

export function detectCommunicationNeeds(userResponse: string, previousResponses: string[], patientAge?: number): AdaptationState {
  const text = userResponse.trim().toLowerCase();
  
  // 1. Check if patient explicitly requested clarification or expressed confusion
  const confusionTriggers = [
    "i don't understand", "dont understand", "what does this mean",
    "can't understand", "puriyala", "samajh nahi aaya", "ardham kaledu",
    "too complicated", "simple please", "what?", "explain please"
  ];
  const hasConfusion = confusionTriggers.some(trigger => text.includes(trigger));

  // 2. Short / one-word pattern repeatedly
  const isShortAnswer = text.split(/\s+/).length <= 2;
  const recentShorts = previousResponses.slice(-2).filter(r => r.trim().split(/\s+/).length <= 2).length;

  // 3. Elderly age factor
  const isElderly = (patientAge || 0) >= 68;

  if (hasConfusion) {
    return {
      isSimplified: true,
      triggerReason: "Confusion phrase detected",
      detectedSimplicityScore: 0.9
    };
  }

  if (isElderly && (isShortAnswer || recentShorts >= 1)) {
    return {
      isSimplified: true,
      triggerReason: "Elderly user preference & concise responses",
      detectedSimplicityScore: 0.8
    };
  }

  if (recentShorts >= 2) {
    return {
      isSimplified: true,
      triggerReason: "Repeated concise responses",
      detectedSimplicityScore: 0.7
    };
  }

  return {
    isSimplified: false,
    detectedSimplicityScore: 0.2
  };
}
