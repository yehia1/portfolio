import ThemeToggle from "@/components/general/portfolio-theme-toggle";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Database,
  GitBranch,
  Layers,
  MapPin,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
} from "lucide-react";

const resume = "/files/Yehia%20Hossam%20DE.pdf";
const projects = [
  {
    n: "01",
    image: "/images/nyc-architecture.png",
    title: "NYC taxi data pipeline",
    type: "Cloud · Orchestration · Analytics",
    description:
      "An end-to-end flow from API ingestion to cloud storage, warehouse modeling, and reporting.",
    flow: ["API", "Mage AI", "GCS", "BigQuery", "dbt", "Looker"],
    tools: "Python / Docker / GCP / SQL",
    href: "https://github.com/yehia1/nyc-taxi-analysis",
  },
  {
    n: "02",
    image: "/images/kafka-architecture.png",
    title: "Server metrics streaming",
    type: "Streaming · Distributed processing",
    description:
      "Java agents simulate 10 servers and a load balancer. Kafka routes metrics to MySQL and logs to Spark for five-minute aggregations in HDFS.",
    flow: ["Java agents", "Kafka", "MySQL / Spark", "HDFS"],
    tools: "Kafka / Spark / Hadoop / Docker",
    href: "https://github.com/yehia1/Server-metrics-with-kafka",
  },
  {
    n: "03",
    image: "/images/ecommerce-architecture.png",
    title: "E-commerce data warehouse",
    type: "Warehouse · Data modeling",
    description:
      "A Kimball-style warehouse that turns e-commerce data into a dimensional model for business analysis.",
    flow: ["E-commerce data", "Python", "MySQL", "Star schema"],
    tools: "MySQL / Python / pandas / Kimball",
    href: "https://github.com/yehia1/e-commerce-dwh",
  },
  {
    n: "04",
    image: "/images/Dashboard1.png",
    title: "Bike sales data mart",
    type: "ETL · Business intelligence",
    description:
      "A sales data mart with fact and dimension tables, SSIS transformations, and a Power BI reporting layer.",
    flow: ["Sales data", "SSIS", "SQL Server", "Power BI"],
    tools: "SSIS / SQL Server / Data modeling",
    href: "https://github.com/yehia1/Sales-Data-Mart",
  },
];
const certifications = [
  {
    code: "DP-700",
    name: "Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "Mar 2026",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/yehiahossam-6064/C662EEE9F5335CC?sharingId",
  },
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Jun 2025",
    href: "https://learn.microsoft.com/en-us/users/yehiahossam-6064/credentials/48f1ee860adaa16c",
  },
  {
    code: "AWS",
    name: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2025",
    href: "https://drive.google.com/file/d/1U0btdH06PbX7sWKaVOje1YGuKTj8ZZbN/view",
  },
  {
    code: "AIRFLOW",
    name: "Apache Airflow 3 Fundamentals",
    issuer: "Apache Airflow",
    date: "Jun 2025",
    href: "https://www.credly.com/badges/5574a43b-8b51-4349-a4e2-ab65ffa984fe/linked_in_profile",
  },
  {
    code: "ALX",
    name: "Data Science",
    issuer: "ALX",
    date: "Aug 2024",
    href: "https://savanna.alxafrica.com/certificates/3R72rSYZh9",
  },
  {
    code: "SQL",
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Jan 2023",
    href: "https://www.hackerrank.com/certificates/142a80f51ed9",
  },
];
export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Yehia Hossam home">
          yh<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#credentials">Credentials</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DATA ENGINEER · CAIRO, EGYPT
            </p>
            <h1>
              Good decisions start
              <br />
              with <span>reliable data.</span>
            </h1>
            <p className="intro">
              I’m Yehia Hossam. I build the pipelines, warehouses, and data
              layers that help teams turn complex sources into something useful.
            </p>
            <p className="hero-note">
              Currently at Teradata. Open to mid-to-senior roles and freelance
              collaborations.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button secondary" href={resume} download>
                Download resume <Download size={16} />
              </a>
            </div>
            <div className="hero-links">
              <a
                href="https://github.com/yehia1"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/yehia-hossam"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <aside className="portrait-card" aria-label="About Yehia Hossam">
            <div className="portrait-frame">
              <Image
                src="/images/yehia-hossam.png"
                alt="Yehia Hossam"
                width={1500}
                height={2000}
                priority
                sizes="(max-width: 700px) 90vw, 430px"
              />
            </div>
            <div className="portrait-caption">
              <div>
                <strong>Yehia Hossam</strong>
                <p>Data Engineer at Teradata</p>
              </div>
              <span className="status-dot" />
            </div>
          </aside>
        </section>
        <div className="metrics wrap">
          <div>
            <strong>
              3+ <span>years</span>
            </strong>
            <p>Across analytics & data engineering</p>
          </div>
          <div>
            <strong>40+</strong>
            <p>Governmental sources integrated</p>
          </div>
          <div>
            <strong>
              25% <span>faster</span>
            </strong>
            <p>Data ingestion at Teradata</p>
          </div>
          <div>
            <strong>
              50% <span>less time</span>
            </strong>
            <p>Data delivery at Marketeers</p>
          </div>
        </div>
        <section id="experience" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / EXPERIENCE</p>
              <h2>Engineering with impact.</h2>
            </div>
            <p>
              From analytics foundations to
              <br />
              enterprise-scale data integration.
            </p>
          </div>
          <article className="experience">
            <div className="experience-meta">
              <span className="current">CURRENT ROLE</span>
              <img
                className="teradata-logo"
                src="/images/logos/teradata.svg"
                alt="Teradata logo"
              />
              <h3>Teradata</h3>
              <p>Dec 2025 — Present</p>
              <p>Cairo, Egypt</p>
            </div>
            <div className="experience-content">
              <h3>Data Engineer</h3>
              <p className="role-summary">
                Currently using Apache NiFi and Apache Airflow for data
                workflows. Enterprise integration and warehouse engineering for
                the Administrative Control Authority (ACA).
              </p>
              <ul>
                <li>
                  Engineered workflows that consolidate 40+ governmental data
                  sources into a unified Teradata data warehouse.
                </li>
                <li>
                  Reworked legacy SQL and ETL transformations to improve
                  ingestion speed and pipeline efficiency by 25%.
                </li>
                <li>
                  Built stored procedures for backend API integrations and
                  managed validation and production data loads.
                </li>
                <li>
                  Resolved production issues with Managed Services and Data
                  Modeling teams, and delivered data layers for BI, NLP, and
                  data-matching models.
                </li>
              </ul>
              <div className="tags">
                <span>Teradata SQL</span>
                <span>Apache NiFi</span>
                <span>Apache Airflow</span>
                <span>ETL</span>
                <span>Stored procedures</span>
                <span>Production operations</span>
              </div>
            </div>
          </article>
          <article className="experience">
            <div className="experience-meta">
              <img
                className="company-logo"
                src="/images/logos/marketeers_research_fze_logo.svg"
                alt="Marketeers Research logo"
              />
              <h3>Marketeers Research</h3>
              <p>May 2023 — Nov 2025</p>
              <p>Cairo, Egypt</p>
            </div>
            <div className="experience-content">
              <h3>Data Analytics Engineer</h3>
              <p className="role-summary">
                Built the warehouse foundation and automated the path from raw
                data to reporting.
              </p>
              <ul>
                <li>
                  Designed a star-schema sales warehouse from scratch with MySQL
                  and AWS RDS.
                </li>
                <li>
                  Integrated e-commerce and retail API data using Python,
                  expanding the warehouse to support new sources.
                </li>
                <li>
                  Refactored ETL and automation scripts to cut data delivery
                  time by 50% and improve reporting reliability.
                </li>
                <li>
                  Automated reporting with Python, Google Forms API, and Excel;
                  improved maintainability and query performance through clean
                  code and indexing.
                </li>
              </ul>
              <div className="tags">
                <span>Python</span>
                <span>MySQL</span>
                <span>AWS RDS</span>
                <span>Dimensional modeling</span>
              </div>
            </div>
          </article>
        </section>
        <section id="projects" className="section projects-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / SELECTED PROJECTS</p>
                <h2>The work behind the skills.</h2>
              </div>
              <a
                className="text-link"
                href="https://github.com/yehia1"
                target="_blank"
                rel="noreferrer"
              >
                All repositories <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="projects-grid">
              {projects.map((p) => (
                <article className="project" key={p.n}>
                  <a
                    className="project-preview"
                    href={p.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} architecture image`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} architecture and project preview`}
                      width={1400}
                      height={800}
                      sizes="(max-width: 700px) 90vw, 540px"
                    />
                  </a>
                  <div className="project-top">
                    <span>{p.n} /</span>
                    <p>{p.type}</p>
                  </div>
                  <h3>
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {p.title}
                      <ArrowUpRight size={20} />
                    </a>
                  </h3>
                  <p className="project-description">{p.description}</p>
                  <div
                    className="project-flow"
                    aria-label="Project architecture"
                  >
                    {p.flow.map((s, i) => (
                      <span key={s}>
                        {i > 0 && <ArrowRight size={12} />}
                        <b>{s}</b>
                      </span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>{p.tools}</span>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>A practical engineering stack.</h2>
            </div>
            <p>Tools I use across the data lifecycle.</p>
          </div>
          <div className="logo-grid">
            <div className="tech-logo">
              <img src="/images/logos/nifi.svg" alt="" loading="lazy" />
              <span>Apache NiFi</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/airflow.svg" alt="" loading="lazy" />
              <span>Apache Airflow</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/python-logo.svg" alt="" loading="lazy" />
              <span>Python</span>
            </div>
            <div className="tech-logo">
              <img
                src="/images/logos/sql-server-logo.svg"
                alt=""
                loading="lazy"
              />
              <span>SQL Server</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/Dbt-logo.svg" alt="" loading="lazy" />
              <span>dbt</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/docker-logo.svg" alt="" loading="lazy" />
              <span>Docker</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/aws-logo.svg" alt="" loading="lazy" />
              <span>AWS</span>
            </div>
            <div className="tech-logo">
              <img
                src="/images/logos/bigquery-logo.svg"
                alt=""
                loading="lazy"
              />
              <span>BigQuery</span>
            </div>
            <div className="tech-logo">
              <img
                src="/images/logos/google-storage-logo.svg"
                alt=""
                loading="lazy"
              />
              <span>Cloud Storage</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/Mage-logo.svg" alt="" loading="lazy" />
              <span>Mage AI</span>
            </div>
            <div className="tech-logo">
              <img
                src="/images/logos/Power_BI-logo.svg"
                alt=""
                loading="lazy"
              />
              <span>Power BI</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/looker-logo.svg" alt="" loading="lazy" />
              <span>Looker Studio</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/Pandas-logo.svg" alt="" loading="lazy" />
              <span>pandas</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/icon-git.svg" alt="" loading="lazy" />
              <span>Git</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/icon-mongodb.svg" alt="" loading="lazy" />
              <span>MongoDB</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/tableau-logo.svg" alt="" loading="lazy" />
              <span>Tableau</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/excel-logo.svg" alt="" loading="lazy" />
              <span>Excel</span>
            </div>
            <div className="tech-logo">
              <img src="/images/logos/r-logo.svg" alt="" loading="lazy" />
              <span>R</span>
            </div>
          </div>
          <div className="skills-grid">
            {[
              [
                "Pipelines & orchestration",
                "Python, SQL, Apache NiFi, Airflow, SSIS, dbt, Mage AI",
              ],
              [
                "Warehousing & modeling",
                "Teradata, MySQL, SQL Server, BigQuery, MongoDB, star schemas",
              ],
              [
                "Cloud & distributed data",
                "AWS, GCP, Docker, Kafka, Spark, Hadoop",
              ],
              [
                "Analytics & collaboration",
                "Power BI, Tableau, Looker Studio, pandas, Git, Linux",
              ],
            ].map(([title, tools], i) => (
              <div className="skill" key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{tools}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="credentials" className="section credentials-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / CERTIFICATIONS</p>
                <h2>Experience, backed by learning.</h2>
              </div>
              <p>
                Data engineering, cloud foundations,
                <br />
                and advanced SQL.
              </p>
            </div>
            <div className="credentials-grid">
              {certifications.map((c) => (
                <a
                  className="credential"
                  href={c.href}
                  key={c.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="credential-code">{c.code}</span>
                  <div>
                    <p>
                      {c.issuer} <span>· {c.date}</span>
                    </p>
                    <h3>{c.name}</h3>
                  </div>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
            <div className="education">
              <div>
                <p className="eyebrow">EDUCATION</p>
                <h3>B.Sc. Computer and Systems Engineering</h3>
                <p>Zagazig University · 2017–2022</p>
              </div>
              <p>
                Overall grade: 81%
                <br />
                Graduation project: A+
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="section wrap contact">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO THE NEXT CHALLENGE
            </p>
            <h2>
              Let’s build your
              <br />
              next data foundation.
            </h2>
            <p>
              Hiring a data engineer or need help with a pipeline, warehouse, or
              data integration project? Let’s talk.
            </p>
            <a className="contact-email" href="mailto:yehiahosam34@gmail.com">
              yehiahosam34@gmail.com <ArrowUpRight size={24} />
            </a>
          </div>
          <aside>
            <h3>Ways we can work together</h3>
            <p>
              <CheckCircle2 size={17} /> Mid-to-senior data engineering roles
            </p>
            <p>
              <CheckCircle2 size={17} /> Freelance data engineering projects
            </p>
            <a className="text-link" href={resume} download>
              Download my resume <Download size={16} />
            </a>
            <span className="location">
              <MapPin size={15} /> Cairo, Egypt · Arabic & English
            </span>
          </aside>
        </section>
      </main>
      <footer className="wrap footer">
        <a className="wordmark" href="#home">
          yh<span>.</span>
        </a>
        <p>Yehia Hossam · Data Engineer</p>
        <div>
          <a href="mailto:yehiahosam34@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/yehia1" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yehia-hossam"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
