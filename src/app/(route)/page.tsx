'use client';

// import { useLanguage } from "@/context/LanguageContext";
// import en from "@/locales/en.json";
// import ko from "@/locales/ko.json";

// components
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {

  // const { lang } = useLanguage();
  // const content = lang === 'en' ? en : ko;

  return (
    <main className = "mx-auto h-screen max-w-4xl flex flex-row items-center justify-center px-4 border border-red-200">

      {/* <h2 className = "mb-4 text-3xl font-bold">{content.greeting}</h2>
      <p className = "text-center text-lg text-gray-700">{content.intro}</p> */}

      <LeftSection />
      <RightSection />

    </main>
  );
}
