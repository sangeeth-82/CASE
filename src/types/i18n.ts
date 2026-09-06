export type SupportedLanguage = 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}
