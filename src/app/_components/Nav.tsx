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
    <nav>
        <ul className="flex space-x-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                    <li key={link.href}>
                        <Link 
                            href={link.href} 
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
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