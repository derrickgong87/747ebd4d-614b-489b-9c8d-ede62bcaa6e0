
import React, { createContext, useState, useContext, ReactNode } from 'react';
import enTranslations from '@/translations/en';
import zhTranslations from '@/translations/zh';

type Language = 'zh' | 'en';
type TranslationsType = typeof zhTranslations;

interface LanguageContextType {
  language: Language;
  t: (key: keyof typeof zhTranslations) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const translations = language === 'zh' ? zhTranslations : enTranslations;

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  const t = (key: keyof typeof zhTranslations): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
