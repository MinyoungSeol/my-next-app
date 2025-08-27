'use client';

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = 'en' | 'ko';

interface LanguageContextProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ko' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}