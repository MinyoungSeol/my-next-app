'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export default function RightSection() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    return (
        <section className="w-full max-w-2/5 min-h-3/4 px-4 py-8 flex-1 flex flex-col items-center justify-center border border-gray-200">
            <p className = "mb-4 text-3xl font-bold">{content["profile-name"]}</p>
            <p className = "text-center text-lg text-gray-700">{content["profile-contact"]}</p>
        </section>
    );
}