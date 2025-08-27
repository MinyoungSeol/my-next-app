'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-b-gray-200">

    {/* Logo */}
      <div className="mx-auto flex h-14 max-w-4xl items-center px-4">
        <h1 className="text-lg font-semibold">
          <Link href="/">MiNY</Link>
        </h1>
      </div>

    </header>
  );
}