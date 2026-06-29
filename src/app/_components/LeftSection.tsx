'use client';

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

//icons
import { Icon } from '@iconify/react';
import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import emailIcon from "@iconify/icons-mdi/email";
import downloadIcon from "@iconify/icons-mdi/tray-download";

export default function LeftSection() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    return (
        <section className="w-full md:max-w-3/5 min-h-3/4 px-10 py-8 flex-1 flex flex-col items-left justify-center">

            <h1 className = "mb-4 text-3xl font-bold">{content["profile-greeting"]}</h1>
            <h2 className = "mb-2 text-lg font-medium">{content["profile-intro"]}</h2>
            <p className = "text-left text-base text-gray-700 whitespace-pre-line mt-4 max-w-4/5 break-keep">{content["profile-summary"]}</p>

            <p className = "mt-10 text-lg font-bold">{content["profile-opentojob"]}</p>
            <a href={lang === 'en' ? '/Minyoung_Resume.pdf' : '/Minyoung_Resume_KR.pdf'} download className="inline-block w-fit bg-gray-800 text-white px-6 py-3 my-4 rounded-lg hover:bg-gray-700 transition">
                <Icon icon={downloadIcon} width="20" height="20" className="inline-block mr-2 -mt-1"/>
                {content["profile-resume"]}
            </a>

            {/* social icons */}
            <div className="mt-4 flex space-x-6">
            <a
                href="https://github.com/MinyoungSeol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
                aria-label="This cute little cat icon links to my GitHub profile. Click if you want to visit!"
                >
                <Icon icon={githubIcon} width="24" height="24"/>
            </a>
            <a
                href="https://www.linkedin.com/in/minyoung-seol-43bb4a250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
                aria-label="This blue icon links to my LinkedIn profile. Click if you want to visit!"
                >
                <Icon icon={linkedinIcon} width="24" height="24" />
            </a>
            <a
                href="mailto:minyoungseol.dev@gmail.com"
                className="text-gray-600 hover:text-red-600"
                aria-label="This red icon opens your email client to send me an email. Click if you want to contact me!"
                >
                <Icon icon={emailIcon} width="24" height="24" />
            </a>
            </div>

        </section>
    );
}