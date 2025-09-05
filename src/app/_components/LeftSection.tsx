'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export default function LeftSection() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    return (
        <section className="w-full max-w-1/2 min-h-3/4 px-4 py-8 mx-4 flex-1 flex flex-col items-center justify-center border border-gray-200">
            <h2 className = "mb-4 text-3xl font-bold">{content["profile-greeting"]}</h2>
            <h4 className = "mb-2 text-xl font-medium">{content["profile-intro"]}</h4>
        </section>
    );
}