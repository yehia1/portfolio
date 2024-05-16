import { Github, Twitter, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";

import LogoGit from "/public/images/logos/icon-git.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";

import GizaSystemsLogo from "/public/images/logos/logo-giza-systems.svg";

import ProjectPageForm from "/public/images/ProjectPageForm.png";
import ProjectGameHub from "/public/images/ProjectGameHub.png";

import AvatarAlfy from "/public/images/avatar-alfy.png";
import AvatarBebars from "/public/images/avatar-bebars.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/0xramadan",
  GITHUB_REPO: "https://github.com/0xramadan",
  TWITTER: "https://twitter.com/0xramadan",
  LINKEDIN: "https://linkedin.com/in/0xramadan",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/0xramadan",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/0xramadan",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/0xramadan",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  // {
  //   label: 'Node.js',
  //   logo: LogoNodejs,
  //   url: 'https://nodejs.org/en',
  // },
  // {
  //   label: 'Express.js',
  //   logo: LogoExpress,
  //   darkModeLogo: LogoExpressLight,
  //   url: 'https://expressjs.com/',
  // },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  // {
  //   label: 'MongoDB',
  //   logo: LogoMongoDB,
  //   url: 'https://www.mongodb.com/',
  // },
  // {
  //   label: 'Sass/Scss',
  //   logo: LogoSass,
  //   url: 'https://sass-lang.com/',
  // },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "AWS",
    logo: LogoAWS,
    url: "https://aws.amazon.com/",
  },
  // {
  //   label: 'Figma',
  //   logo: LogoFigma,
  //   url: 'https://www.figma.com/',
  // },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: GizaSystemsLogo,
    logoAlt: "Giza Systems logo",
    position: "Application Support Engineer",
    startDate: new Date(2024, 1),
    // endDate: new Date(2024, 12),
    currentlyWorkHere: true,
    summary: [
      "Resolving technical tickets promptly, ensuring optimal application functionality.",
      "Monitoring performance and server health and mitigating latency issues for seamless operation.",
      "Delivered weekly reports to management, detailing application performance metrics.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "PageForm",
    description:
      "A Platform by which you can build forms in drag-and-drop way, fully customizable. you also can share the form with others and view the stats visits/submissions, deployed on Vercel.",
    url: "https://form-builder-0xramadan.vercel.app/",
    previewImage: ProjectPageForm,
    technologies: [
      "Nextjs 14",
      "Typescript",
      "Tailwind/ Shadcn UI",
      "Prisma as ORM",
      "Vercel postgreSQL",
      "Dnd-kit library",
    ],
  },
  {
    name: "GameHub",
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    url: "https://game-hub-by-ramadan.vercel.app/",
    previewImage: ProjectGameHub,
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "ChakraUI",
      "Zustand",
      "React Query",
      "React Router",
      "axios",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Mahmoud Al-Alfy",
    personAvatar: AvatarAlfy,
    title: "Full stack developer @ viakonnect",
    testimonial:
      "I've had the pleasure of collaborating with Ramadan on several frontend projects, and I can't imagine a better teammate. His passion for learning and dedication to creating delightful experiences shine through in everything they do.",
  },
  {
    personName: "Mahmoud Bebars",
    personAvatar: AvatarBebars,
    title: "Data Analyst @ Silicon Expert",
    testimonial:
      "Having Ramadan as a colleague has been a game-changer for our team. Not only is he incredibly skilled in frontend development, but he also bring a level of enthusiasm and positivity that's contagious. Whenever we hit a roadblock, Rmdn is the first to crack a joke or offer words of encouragement, keeping morale high and motivation strong.",
  },
  {
    personName: "Ziad Emad",
    personAvatar: AvatarDummy,
    title: "Senior Software Engineer @ Suplyed",
    testimonial:
      "Watching Ramadan evolve has been inspiring. From his early days to now, his dedication to learning is clear. Always eager to embrace new skills, Ramadan drives both personal growth and team success. His passion knows no bounds, and I'm excited to see where he go next.",
  },
];
