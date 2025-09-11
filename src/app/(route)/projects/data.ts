export interface Project {
  slug: string;
  title: {
    en: string;
    ko: string;
  };
  description: {
    en: string;
    ko: string;
  };
  thumbnail: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    slug: "reactjs-portfolio-site",
    title: {
      en: "React.js Personal Portfolio Website",
      ko: "React.js 개인 포트폴리오 웹사이트",
    },
    description: {
      en: "A portfolio website built with React.js and TailwindCSS. Features include responsive UI and multilingual support.",
      ko: "React.js와 TailwindCSS로 제작한 포트폴리오 웹사이트입니다. 반응형 UI를 제공합니다.",
    },
    thumbnail: "/img/projects/profile.png",
    techStack: ["React.js", "JavaScript", "TailwindCSS"],
  },
];

export default projects;
