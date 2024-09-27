import { Github, Twitter, Linkedin, Import } from "lucide-react";

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
import LogoSelenium from "/public/images/logos/selenium-logo.svg";
import LogoDbt from "/public/images/logos/Dbt-logo.svg";
import LogoDocker from "/public/images/logos/docker-logo.svg";
import LogoGoogleStorage from "/public/images/logos/google-storage-logo.svg";
import LogoBigQuery from "/public/images/logos/bigquery-logo.svg";
import LogoLookerStudio from "/public/images/logos/looker-logo.svg"
import LogoMage from"/public/images/logos/Mage-logo.svg"
import LogoAWS from "/public/images/logos/aws-logo.svg"

import MarketeersResearchLogo from "/public/images/logos/marketeers_research_fze_logo.svg";

import CoffeeSalesDashboard from "/public/images/Dashboard.png";
import DataMartDashboard from "/public/images/Dashboard1.png";
import Wuzzefwebsite from "/public/images/Wuzeef.png";

import AvatarReda from "/public/images/avatar-reda.png";
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
  {
    label: 'Selenium',
    logo: LogoSelenium,
    url: 'https://www.selenium.de',
  },
  {
    label: 'Dbt',
    logo: LogoDbt,
    url: 'https://www.getdbt.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Google Storage',
    logo: LogoGoogleStorage,
    url: 'https://cloud.google.com/storage?hl=en',
  },

  {
    label: 'Google Bigquery',
    logo: LogoBigQuery,
    url: 'https://cloud.google.com/bigquery/?hl=en',
  },

  {
    label: 'Looker Studio',
    logo: LogoLookerStudio,
    url: 'https://lookerstudio.google.com/',
  },
  
  {
    label: 'Mage AI',
    logo: LogoMage,
    url: 'https://www.mage.ai/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    url: 'https://aws.amazon.com/',
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
    name: "Sales Data Mart Design and Dashboard",
    description:
      "A Design of Sales Datamart using SSIS ETL application to after designing it using star schema then making a Sales Dashboard Using PowerBI",
    url: "https://github.com/yehia1/Sales-Data-Mart",
    previewImage: DataMartDashboard,
    technologies: [
      "Power BI",
      "SSIS",
      "SQL Server",
      "SCD",
      "Visual Studio",
      "SSMS",
    ],
  },
  {
    name: "Excel Coffee Sales Dashboard",
    description:
      "Desiging an interactive coffee sales dashboard in excel using data modeling,pivots tables, vloopup, match and index to get valuable insights from the data ",
    url: "https://github.com/yehia1/Coffee-Sales-Dashboard",
    previewImage: CoffeeSalesDashboard,
    technologies: [
      "Excel",
      "Power Pivot",
      "pivot tables",
      "Xlookup",
      "Vlookup",
      "Match and index",
      "Dashboard",
      "Data Modeling",
    ],
  },
  {
    name: "Wuzeef Daily data scraper",
    description:
      "Writing a code to scrape data from wuzzef.org for a given positions for the last 24 hours and saves the result in Excel file",
    url: "https://github.com/yehia1/Wuzzef-daily-data-scrapper",
    previewImage: Wuzzefwebsite,
    technologies: [
      "Python",
      "Selenium",
      "Pandas",
      "Visual code",
      "Excel",
      "Bash Script",
      "Data Scraping",
      "Data Gathering",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Mahmoud Reda",
    personAvatar: AvatarReda,
    title: "AI Engineer @ Aixplane",
    testimonial:
      "One of best team mate I have worked with, he is intelligent active person who always seeking to learn and improve himself, He always focusing on details and how to solve problems , also he is professional and willing to be a leader when it needs.",
  },
  {
    personName: "Mahmoud Bebars",
    personAvatar: AvatarBebars,
    title: "Data Analyst @ Silicon Expert",
    testimonial:
      "Witnessed Yehia Hossam's growth as a data analyst in recent years. His strong foundation in computer and systems engineering fuels his expertise in Excel, SQL, Python, and data visualization tools (PowerBI, Tableau).  Beyond technical prowess, Yehia's collaborative spirit and problem-solving skills make him a valuable asset who strengthens any data team.",
  },
  {
    personName: "Ziad Emad",
    personAvatar: AvatarDummy,
    title: "Senior Software Engineer @ Suplyed",
    testimonial:
      "Watching Yehia evolve has been inspiring. From his early days to now, his dedication to learning is clear. Always eager to embrace new skills, Yehia drives both personal growth and team success. His passion knows no bounds, and I'm excited to see where he go next.",
  },
];
