import { Github, Twitter, Linkedin } from "lucide-react";

import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoPython from "/public/images/logos/python-logo.svg";
import LogoPowerBI from "/public/images/logos/Power_BI-logo.svg";
import LogoExcel from "/public/images/logos/excel-logo.svg";
import LogoR from "/public/images/logos/r-logo.svg";
import LogoPandas from "/public/images/logos/Pandas-logo.svg";
import LogoSQLServer from "/public/images/logos/sql-server-logo.svg";
import LogoTableau from "/public/images/logos/tableau-logo.svg";
import LogoSklearn from "/public/images/logos/scikit-learn-logo.svg";

import MarketeersResearchLogo from "/public/images/logos/marketeers_research_fze_logo.svg";

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
  GITHUB: "https://github.com/yehia1",
  GITHUB_REPO: "https://github.com/yehia1",
  TWITTER: "https://twitter.com/0xramadan",
  LINKEDIN: "https://www.linkedin.com/in/yehia-hossam/",
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
    url: "https://github.com/yehia1",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yehia-hossam/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "PowerBI",
    logo: LogoPowerBI,
    url: "https://powerbi.microsoft.com/en-us/desktop/",
  },
  {
    label: "SQLServer",
    logo: LogoSQLServer,
    url: "https://www.microsoft.com/en-ie/sql-server/sql-server-downloads",
  },
  {
    label: "Pandas",
    logo: LogoPandas,
    url: "https://pandas.pydata.org/",
  },
  {
    label: "Excel",
    logo: LogoExcel,
    url: "https://www.microsoft.com/en-ie/microsoft-365/excel",
  },
  {
    label: "Tableau",
    logo: LogoTableau,
    url: "https://www.tableau.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'R',
    logo: LogoR,
    url: 'https://www.r-project.org/',
  },
  {
    label: 'Sklearn',
    logo: LogoSklearn,
    url: 'https://scikit-learn.org/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: MarketeersResearchLogo,
    logoAlt: "Marketeers Research logo",
    position: "Data Analyst",
    startDate: new Date(2023, 4),
    // endDate: new Date(2024, 12),
    currentlyWorkHere: true,
    summary: [
      "Developing automated data cleaning modules using Python to streamline data processing, ensuring accuracy,and enhancing efficiency in data manipulation tasks.",
      "Leveraging MS Excel and Python to create and implement an automation system for handling large datasets,thereby improving data management and analysis processes..",
      "Creating impactful PowerPoint presentations to communicate data-driven findings and recommendations to stakeholders, facilitating effective decision-making and driving business growth.",
      "Improving the process by 50% making an automation python script to write the text file for the ETL application.",
      "Improving the essential codes by implementing clean code concepts."
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
      "I've had the pleasure of collaborating with Yehia on several frontend projects, and I can't imagine a better teammate. His passion for learning and dedication to creating delightful experiences shine through in everything they do.",
  },
  {
    personName: "Mahmoud Bebars",
    personAvatar: AvatarBebars,
    title: "Data Analyst @ Silicon Expert",
    testimonial:
      "Having Yehia as a colleague has been a game-changer for our team. Not only is he incredibly skilled in frontend development, but he also bring a level of enthusiasm and positivity that's contagious. Whenever we hit a roadblock, Rmdn is the first to crack a joke or offer words of encouragement, keeping morale high and motivation strong.",
  },
  {
    personName: "Ziad Emad",
    personAvatar: AvatarDummy,
    title: "Senior Software Engineer @ Suplyed",
    testimonial:
      "Watching Yehia evolve has been inspiring. From his early days to now, his dedication to learning is clear. Always eager to embrace new skills, Ramadan drives both personal growth and team success. His passion knows no bounds, and I'm excited to see where he go next.",
  },
];
