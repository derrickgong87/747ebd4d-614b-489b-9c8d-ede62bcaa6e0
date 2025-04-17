
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
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

// Load saved language preference from localStorage if available
const getSavedLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'zh') ? savedLanguage : 'zh';
  }
  return 'zh';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  const translations = language === 'zh' ? zhTranslations : enTranslations;

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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
