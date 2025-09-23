'use client';

// components
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {

  return (
    <main className = "w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row h-max w-full items-start justify-center px-4 py-8 md:pt-24">

      <LeftSection />
      <RightSection />

    </main>
  );
}
