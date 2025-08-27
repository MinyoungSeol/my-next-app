import type { Metadata } from "next";

//styles
import "@/styles/globals.css";

//fonts
import { pretendard } from "fonts";

//contexts
import { LanguageProvider } from "@/context/LanguageContext";

//components
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MiNY's Web Page",
  description: "by Next.js 14",
};

export default function RootLayout({ children, }: Readonly <{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
