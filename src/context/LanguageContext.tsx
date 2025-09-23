'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import { setLanguage } from "@/actions/setLanguage";

type Lang = 'en' | 'ko';

interface LanguageContextProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children, initialLang }: { children: ReactNode, initialLang: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    setLanguage(newLang); // save to cookie
  }

  const toggleLang = () => setLang(lang === 'en' ? 'ko' : 'en');

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