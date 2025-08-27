import type { Metadata } from "next";

//styles
import "@/styles/globals.css";

//fonts
import { pretendard } from "fonts";

//components
import Header from "@/components/Header";
// import { LangProvider } from '@/context/LangContext';

export const metadata: Metadata = {
  title: "MiNY's Web Page",
  description: "by Next.js 14",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>

        <Header />

        {children}

      </body>
    </html>
  );
}
