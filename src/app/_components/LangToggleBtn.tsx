'use client';

interface LangToggleProps {
  lang: 'en' | 'ko';
  toggleLang: () => void;
}

export default function LangToggle({ lang, toggleLang }: LangToggleProps) {
  return (
    <button onClick={toggleLang} className="px-3 py-1 border rounded">
      {lang.toUpperCase()}
    </button>
  );
}
