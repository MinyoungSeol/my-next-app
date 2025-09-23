'use client';

import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

import { Icon } from '@iconify/react';
import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import emailIcon from "@iconify/icons-mdi/email";

export default function Footer() {
    const { lang } = useLanguage();
    const content = lang === 'en' ? en : ko;

    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="w-full px-8 py-12 border-t border-t-gray-200">

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">MiNY</h3>
                    <p className="text-muted-foreground text-sm text-gray-600 whitespace-pre-line break-keep">
                        {content["footer-brand"]}
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-semibold">{content["footer-quicklink"]}</h4>
                    <nav aria-label="Footer navigation">
                    <ul className="space-y-2">
                        <li>
                        <a 
                            href="/" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        >
                            {content["footer-quicklink-profile"]}
                        </a>
                        </li>
                        <li>
                        <a 
                            href="/projects" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        >
                            {content["footer-quicklink-projects"]}
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                {/* Connect Info */}
                <div className="space-y-4">
                    <h4 className="font-semibold">{content["footer-connect"]}</h4>
                    <div className="flex gap-4">
                        <a
                        href="https://github.com/MinyoungSeol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black"
                        aria-label="This cute little cat icon links to my GitHub profile. Click if you want to visit!"
                        >
                        <Icon icon={githubIcon} width="24" height="24" />
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
                </div>

            </div>

        </footer>
    );

}