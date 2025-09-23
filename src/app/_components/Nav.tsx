'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

//Data-Driven Nav Structure
const navLinks = [
  { href: "/", label: { en: "Profile", ko: "소개" } },
  { href: "/projects", label: { en: "Projects", ko: "작업물" } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return(
    <nav className="w-full border border-gray-700">
        <ul className="flex flex-col md:flex-row space-x-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                    <li key={link.href} className={`w-full md:w-auto rounded-md ${isActive ? "bg-gray-100 md:bg-transparent" : "" } transition-colors duration-200`}>
                        <Link 
                            href={link.href} 
                            className={`block px-3 py-2 rounded-md text-sm text-center font-medium ${isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                        >
                            {link.label[lang]}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
  )
}