'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export default function Home() {

  const { lang } = useLanguage();
  const content = lang === 'en' ? en : ko;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1>{content.greeting}</h1>
        <p>{content.intro}</p>
        
      </main>

    </div>
  );
}
