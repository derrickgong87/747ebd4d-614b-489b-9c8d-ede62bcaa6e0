
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="flex items-center gap-1"
      aria-label={t('language.switch')}
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'zh' ? 'EN' : '中文'}</span>
    </Button>
  );
}
