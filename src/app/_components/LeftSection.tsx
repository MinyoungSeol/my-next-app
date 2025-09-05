'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export default function LeftSection() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    return (
        <section className="w-full max-w-3/5 min-h-3/4 px-10 py-8 flex-1 flex flex-col items-left justify-center border border-gray-200">

            <h1 className = "mb-4 text-3xl font-bold">{content["profile-greeting"]}</h1>
            <h2 className = "mb-2 text-lg font-medium">{content["profile-intro"]}</h2>
            <p className = "text-left text-base text-gray-700 whitespace-pre-line mt-4 max-w-4/5 break-keep">{content["profile-summary"]}</p>

        </section>
    );
}