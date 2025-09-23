'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

import { Icon } from '@iconify/react';
import menuIcon from "@iconify/icons-mdi/menu";
import closeIcon from "@iconify/icons-mdi/close";

//components
import LangToggleBtn from "./LangToggleBtn";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-b-gray-200">

      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <h1 className="text-lg font-semibold">
          <Link href="/">MiNY</Link>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Nav />
        </div>

        {/* Desktop Lang Toggle */}
        <div className="hidden md:block">
          <LangToggleBtn lang={lang} toggleLang={toggleLang} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <Icon icon={closeIcon} width={24} /> : <Icon icon={menuIcon} width={24} />}
        </button>
      </div>

      {/* Mobile Dropdown → 헤더 영역 밀어내는 방식 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-4 py-3">
          <Nav />
        </div>

        {/* Mobile Btn Group */}
        <div className="flex justify-end px-4 my-3">
          <LangToggleBtn lang={lang} toggleLang={toggleLang} />
        </div>
        
      </div>

    </header>
  );
}
