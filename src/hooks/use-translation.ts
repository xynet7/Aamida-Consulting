
"use client";
import { useContext } from 'react';
import { LanguageContext } from '@/components/language-provider';

type TranslationKeys = { [key: string]: string | { [key: string]: string } };

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const t = (key: string, options?: { [key: string]: string | number }) => {
    let translation = context.t(key);

    if (options) {
      Object.keys(options).forEach(optionKey => {
        translation = translation.replace(`{${optionKey}}`, String(options[optionKey]));
      });
    }
    
    return translation;
  }

  return { ...context, t };
};

    