'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

//components
import LangToggleBtn from "./LangToggleBtn";
import Nav from "./Nav";

export default function Header() {

    const { lang, toggleLang } = useLanguage();

  return (
    <header className="w-full border-b border-b-gray-200">
    
      <div className="mx-auto flex h-14 max-w-4xl items-center px-4 justify-between">

        {/* Logo */}
        <h1 className="text-lg font-semibold">
          <Link href="/">MiNY</Link>
        </h1>

        {/* Nav */}
        <Nav />

        {/* Language Toggle Button */}
        <LangToggleBtn lang={lang} toggleLang={toggleLang}/>

      </div>

    </header>
  );
}