import type { Metadata } from "next";

//styles
import "@/styles/globals.css";

//fonts
import { pretendard } from "fonts";

//contexts
import { LanguageProvider } from "@/context/LanguageContext";

//cookies
import { cookies } from "next/headers";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MiNY's Web Page",
  description: "by Next.js 14",
};

export default async function RootLayout({ children, }: Readonly <{ children: React.ReactNode;}>) {

  const cookieStore = await cookies();
  const initialLang = (cookieStore.get('lang')?.value as 'en' | 'ko') || 'en';

  return (
    <html lang="{initialLang}">
      <body className={`${pretendard.variable} font-sans antialiased`}>
        <LanguageProvider initialLang={initialLang}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
