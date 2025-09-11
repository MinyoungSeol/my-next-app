"use client";

import Link from "next/link";
import projects from "../data";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  params: { slug: string };
}

export default function ProjectDetail({ params }: Props) {
  const { lang } = useLanguage();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          {lang === "en" ? "Home" : "홈"}
        </Link>{" "}
        /{" "}
        <Link href="/projects" className="hover:underline">
          {lang === "en" ? "Projects" : "프로젝트"}
        </Link>{" "}
        / {project.title[lang]}
      </nav>

      <h1 className="text-3xl font-bold mb-4">{project.title[lang]}</h1>
      <img
        src={project.thumbnail}
        alt={project.title[lang]}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="mb-6">{project.description[lang]}</p>
    </main>
  );
}
