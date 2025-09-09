'use client';

// components
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {

  return (
    <main className = "mx-auto h-screen w-full max-w-7xl flex flex-row items-start justify-center px-4 pt-24 border border-red-200">

      <LeftSection />
      <RightSection />

    </main>
  );
}
