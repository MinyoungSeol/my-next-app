'use client';

// components
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {

  return (
    <main className = "mx-auto flex flex-col-reverse md:flex-row md:h-screen w-full items-start justify-center px-4 pt-24 border border-red-200">

      <LeftSection />
      <RightSection />

    </main>
  );
}
