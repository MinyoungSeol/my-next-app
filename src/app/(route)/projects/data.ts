export interface Project {
  slug: string;
  title: {
    en: string;
    ko: string;
  };
  date: string;
  description: {
    en: string;
    ko: string;
  };
  problemHeading?:{
    en: string;
    ko: string;
  };
  problem?: {
    en: string[];
    ko: string[];
  };
  solution?: {
    en: string[];
    ko: string[];
  };
  thumbnail: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [

  // Next.js Portfolio Site(this site)
  {
    slug: "nextjs-portfolio-site",
    title: {
      en: "Next.js Personal Portfolio Website",
      ko: "Next.js 포트폴리오 웹사이트",
    },
    date: "2025",
    description: {
      en: "A portfolio website built with Next.js, TypeScript and TailwindCSS. Features include responsive UI and multilingual support.",
      ko: "Next.js 환경에서 TypeScript로 작성된 저의 세 번째 포트폴리오 웹사이트입니다. TailwindCSS로 스타일을 적용하였습니다. 반응형 UI와 영어/한국어 두 언어를 완벽하게 지원합니다.",
    },
    problemHeading: {
      en: "My second portfolio website, built with React.js, featured a modern design and responsive layout, but revealed several limitations in real-world operation and maintenance.",
      ko: "React.js로 제작된 저의 두 번째 포트폴리오 웹사이트는 세련된 디자인과 반응형 구조를 갖추고 있었지만, 실제 운영과 유지 보수 과정에서 여러 한계가 드러났습니다."
    },
    problem: {
      en: [
        "Structural complexity: Code structure too complex for easy maintenance.",
        "Accessibility issues: Poor contrast, font readability, missing aria-labels.",
        "Security vulnerabilities: Weak authentication and data handling.",
        "Performance issues: Unoptimized visuals slowed page load."
      ],
      ko: [
        "구조 복잡성: 유지보수가 어려운 코드 구조.",
        "접근성 문제: 낮은 색상 대비, 폰트 가독성, aria-label 부재.",
        "보안 취약점: 취약한 인증과 데이터 처리.",
        "성능 문제: 최적화되지 않은 시각 요소로 느린 로딩."
      ]
    },
    solution: {
      en: [
        "Simplified structure: Modular code for easier maintenance.",
        "Improved accessibility: Proper contrast, readable fonts, aria-labels added.",
        "Enhanced security: HTTPS, security headers, CORS policies applied.",
        "Performance optimized: Fonts, images, and animations optimized.",
        "Feature enhancement: Implemented multilingual support using React Context API."
      ],
      ko: [
        "구조 단순화: 모듈화로 유지보수 용이.",
        "접근성 개선: 색상 대비, 폰트, aria-label 적용.",
        "보안 강화: HTTPS, 보안 헤더, CORS 적용.",
        "성능 최적화: 폰트, 이미지, 애니메이션 최적화.",
        "기능 강화: React Context API로 다국어 지원 구현"
      ]
    },
    thumbnail: "/img/profile.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "npm packages"],
    github: "https://github.com/MinyoungSeol/my-next-app.git",
  },

  // React.js Portfolio Site
  {
    slug: "reactjs-portfolio-site",
    title: {
      en: "React.js Personal Portfolio Website",
      ko: "React.js 포트폴리오 웹사이트",
    },
    date: "2023",
    description: {
      en: "A portfolio website built with React.js, JavaScript and TailwindCSS. Features include responsive UI and multilingual support.",
      ko: "임시",
    },
    problemHeading: {
      en: "temp",
      ko: "임시"
    },
    problem: {
      en: [
        "-",
        "-",
      ],
      ko: [
        "가나다",
        "라면먹고싶당."
      ]
    },
    solution: {
      en: [
        "-",
        "-",
      ],
      ko: [
        "불닭볶음먄",
        "후 루룩 치즈싸앇"
      ]
    },
    thumbnail: "/img/profile.png",
    techStack: ["React.js", "JavaScript", "TailwindCSS", "npm packages"],
    github: "https://github.com/MinyoungSeol/MinyoungSeol.github.io.git",
    demo: "https://minyoungseol.github.io/",
  },
  
];

export default projects;
