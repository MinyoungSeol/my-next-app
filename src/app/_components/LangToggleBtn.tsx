'use client';

import { Icon } from '@iconify/react';
import langIcon from "@iconify/icons-mdi/translate";

interface LangToggleProps {
  lang: 'en' | 'ko';
  toggleLang: () => void;
}

export default function LangToggle({ lang, toggleLang }: LangToggleProps) {
  return (
    <button onClick={toggleLang} className="w-auto max-w-min flex flex-row items-center px-3 py-1 cursor-pointer border border-gray-400 rounded">
      <Icon icon={langIcon} width={18} height={18} className="inline-block mr-1 md:mr-2" />
      <span className='text-sm'>{lang === 'en' ? 'KOR' : 'ENG'}</span>
    </button>
  );
}
