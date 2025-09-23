'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

//image
import Image from "next/image";

//icons(lucide-react)
import { Phone, GraduationCap, Mail, Languages } from "lucide-react";

export default function RightSection() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    return (
        <section className="w-full md:max-w-2/5 min-h-3/4 px-4 py-8 flex-1 flex flex-col items-center justify-start border border-gray-200">

            {/* Profile Pic */}
            <div className="flex items-center justify-center mb-6">
                <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gray-100">
                    <Image src="/img/profile.png" alt="profile image" fill priority className="object-cover pointer-events-none" />
                </div>
            </div>

            {/* Name */}
            <p className = "mb-10 text-xl font-bold">{content["profile-name"]}</p>

            {/* Profile information */}
            <ul className = "space-y-2">
                <li className="flex items-center gap-3 mb-3">
                    <Phone size={16} color="gray" aria-label="Contact information(phone)"/>
                    <p className = "text-center text-base text-gray-700">{content["profile-contact"]}</p>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-2 items-center mb-3">
                    <GraduationCap size={16} color="gray" aria-label="Education information" />
                    <p className = "text-base text-gray-700">Centennial College, ON</p>
                    <p className = "col-start-2 text-sm text-gray-700">Software Engineering Technology - Artificial Intelligence</p>
                    <p className = "col-start-2 text-xs text-gray-700">GPA: 4.3 / 4.5</p>
                    <p className = "col-start-2 text-xs text-gray-700">Graduated with High Honours</p>
                </li>
                <li className="flex items-center gap-3 mb-3">
                    <Mail size={16} color="gray" aria-label="Contact information(email)"/>
                    <p className = "text-center text-base text-gray-700">{content["profile-email"]}</p>
                </li>
                <li className="flex items-center gap-3 mb-3">
                    <Languages size={16} color="gray" aria-label="Language information" />
                    <p className = "text-center text-base text-gray-700">{content["profile-language"]}</p>
                </li>
            </ul>
            
        </section>
    );
}