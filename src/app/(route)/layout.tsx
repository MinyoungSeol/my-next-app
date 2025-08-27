import type { Metadata } from "next";

import "@/styles/globals.css";

import { pretendard } from "fonts";
// import { LangProvider } from '@/context/LangContext';

export const metadata: Metadata = {
  title: "MiNY's Web Page",
  description: "by Next.js 14",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>

        {children}

      </body>
    </html>
  );
}
