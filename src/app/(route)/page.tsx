'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export default function Home() {

  const { lang } = useLanguage();
  const content = lang === 'en' ? en : ko;

  return (
    <main className = "mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4">

      <h2 className = "mb-4 text-3xl font-bold">{content.greeting}</h2>
      <p className = "text-center text-lg text-gray-700">{content.intro}</p>

    </main>
  );
}
