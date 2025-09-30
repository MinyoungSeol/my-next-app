"use client";

import Link from "next/link";
import Image from "next/image";
import projects from "./data";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { lang } = useLanguage(); // "en" | "ko"

  return (
    <main className="px-8 pb-24 max-w-6xl mx-auto">

      {/* Project main page heading */}
      <h1 className="text-3xl font-bold my-16 text-center">
        {lang === "en" ? "Selected Projects" : "작업물"}
      </h1>

      {/* Project grid tiles */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">

            <div className="border rounded-lg border-gray-200 overflow-hidden hover:shadow-lg transition">
              <Image
                src={project.thumbnail}
                alt={project.title[lang]}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">{project.title[lang]}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>

          </Link>
        ))}

      </div>
    </main>
  );
}
