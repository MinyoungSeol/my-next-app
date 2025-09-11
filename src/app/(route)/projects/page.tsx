"use client";

import Link from "next/link";
import projects from "./data";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { lang } = useLanguage(); // "en" | "ko"

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "en" ? "Projects" : "프로젝트"}
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img
                src={project.thumbnail}
                alt={project.title[lang]}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{project.title[lang]}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
