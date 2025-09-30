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
    thumbnail: "/img/prj-nextjs-portfolio-site.webp",
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
      ko: "React.js 환경에서 JavaScript로 작성된 저의 두 번째 포트폴리오 웹사이트입니다. TailwindCSS로 스타일을 적용하였습니다. 반응형 UI를 지원합니다.",
    },
    solution: {
      en: [
        "Implemented dynamic content rendering using React's useState, props, and map functions.",
        "Used a cute color scheme and overall rounded corner design and visual elements.",
        "Applied various animation effects to the Projects page for an engaging user experience."
      ],
      ko: [
        "React의 useState, props, map 함수를 활용하여 동적인 콘텐츠 렌더링을 구현하였습니다.",
        "귀여운 색감과 전체적으로 둥근 모서리 디자인과 시각적 요소를 사용하였습니다.",
        "Projects 페이지에 다양한 애니메이션 효과를 적용하여 흥미로운 사용자 경험을 제공하였습니다."
      ]
    },
    thumbnail: "/img/prj-reactjs-portfolio-site.webp",
    techStack: ["React.js", "JavaScript", "TailwindCSS", "npm packages"],
    github: "https://github.com/MinyoungSeol/MinyoungSeol.github.io.git",
    demo: "https://minyoungseol.github.io/",
  },

  // JavaScript game - 'Candy Catchy' Page
  {
    slug: "jsgame-candy-catchy",
    title: {
      en: "JavaScript Mini Game",
      ko: "자바스크립트로 만든 미니 게임",
    },
    date: "2022",
    description: {
      en: "The goal is to catch as many candies as possible that appear and disappear at random locations. The candies move faster as the score increases. Try to beat your high score!",
      ko: "랜덤한 위치에 나타났다 사라지는 사탕을 최대한 많이 잡는 게임입니다. 점수가 쌓일수록 사탕이 더 빨리 움직입니다. 신기록에 도전해보세요!",
    },
    solution: {
      en: [
        "Built using only basic web technologies: HTML, CSS, and JavaScript.",
        "Utilized the HTML canvas element to render the game screen.",
        "Implemented candy position changes at regular intervals using setInterval and clearInterval, and increased the score when the user clicks on a candy.",
        "Added a reset button to allow users to reset the game speed.",
        "Used pixel art style graphics and high-contrast colors to make it look like a retro game."
      ],
      ko: [
        "HTML, CSS, JavaScript로 기본적인 웹 기술만을 사용하여 제작하였습니다.",
        "HTML의 canvas 요소를 활용하여 게임 화면을 구현하였습니다.",
        "setInterval과 clearInterval을 사용하여 일정 시간마다 사탕의 위치를 변경하고, 사용자가 사탕을 클릭하면 점수가 올라가도록 구현하였습니다.",
        "reset 버튼을 추가하여 게임 속도를 초기화할 수 있도록 하였습니다.",
        "픽셀 아트 스타일의 그래픽과 고대비의 색상을 사용하여 레트로 게임 느낌을 살렸습니다."
      ]
    },
    thumbnail: "/img/prj-jsgame-candy-catchy.webp",
    techStack: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/MinyoungSeol/Project_CandyCatchy",
    demo: "https://minyoungseol.github.io/Project_CandyCatchy/",
  },
  
];

export default projects;
