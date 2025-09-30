// components/FadeWrapper.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FadeWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  return (
    <div
      key={lang}
      className="transition-opacity duration-300 opacity-0 animate-fade-in"
    >
      {children}
    </div>
  );
}
