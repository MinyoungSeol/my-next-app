"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../data";
import { useLanguage } from "@/context/LanguageContext";

import { Icon } from '@iconify/react';
import arrowBack from "@iconify/icons-mdi/arrow-back";

// interface Props {
//   params: { slug: string };
// }

export default function ProjectDetail({
  // const project = projects.find((p) => p.slug === params.slug);
  // if (!project) return <div className="p-8 my-20 text-center">Project not found</div>;
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { lang } = useLanguage();
  //Unwrap params with React.use(): future-safe fix for further Next.js versions
  const { slug } = React.use(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="w-full max-w-3/5 mx-auto p-8 my-20 text-center">
        <p className="max-w-3/5 mx-auto text-lg whitespace-pre-line">{lang === "en" ? "Oops!\nProject not found" : "작업물이 존재하지 않습니다."}</p>
        <Link href="/projects" className="inline-flex items-center gap-2 py-2 text-sm font-medium hover:text-gray-600 transition mt-6">
          <Icon icon={arrowBack} width="20" height="20" />
          {lang === "en" ? "Back to Projects" : "작업물 페이지로 돌아가기"}
        </Link>
      </div>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">

      {/* Back btn */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 py-2 text-sm font-medium hover:text-gray-600 transition"
        >
          <Icon icon={arrowBack} width="20" height="20" />
          {lang === "ko" ? "뒤로가기" : "Back"}
        </Link>
      </div>

      {/* Breadcrumb navigation */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          {lang === "en" ? "Home" : "홈"}
        </Link>{" "}
        /{" "}
        <Link href="/projects" className="hover:underline">
          {lang === "en" ? "Projects" : "작업물"}
        </Link>{" "}
        / {project.title[lang]}
      </nav>

      {/* Project title */}
      <h1 className="text-3xl font-bold mb-4">{project.title[lang]}</h1>

      {/* Project date */}
      <span className="text-sm text-gray-500">{lang === "en" ? "Project worked in: " : "작업 시기: "}</span>
      <span className="text-sm text-gray-500">{project.date}</span>

      {/* Project image */}
      <Image
        src={project.thumbnail}
        alt={project.title[lang]}
        className="w-full h-80 object-cover rounded mb-6"
      />

      {/* Project description */}
      <p className="mb-6">{project.description[lang]}</p>

      {/* Tech Stack */}
      <p className="mb-2 font-semibold">{lang === "en" ? "Tech Stack:" : "기술 스택:"}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-gray-100 px-3 py-1 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      <section className="mb-8 flex flex-col lg:flex-row gap-8">
        {/* Problems */}
        {project.problemHeading && (
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">
              {lang === "ko" ? "문제점" : "Problems"}
            </h2>
            <p className="text-gray-700 mb-4">{project.problemHeading[lang]}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {project.problem?.[lang]?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Solutions */}
        {project.solution && (
          <div
            className={`${
              project.problemHeading ? "lg:w-1/2" : "lg:w-full"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-3">
              {lang === "ko" ? "해결 방안" : "Solutions"}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {project.solution?.[lang]?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>


      <section className="mb-8">
        {/* Github code */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            {lang === "en" ? "GitHub Code" : "GitHub 코드"}
          </a>
        )}
        {/* Demo link */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition ml-4"
          >
            {lang === "en" ? "Live Demo" : "페이지 보기"}
          </a>
        )}
      </section>
      

    </main>
  );
}
