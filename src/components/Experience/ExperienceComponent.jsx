import { useState } from "react";
import "./ExperienceComponent.css";

const experienceItems = [
  {
    title: "Software Engineer (Full-Time)",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "June 2026 – Present",
    team: "Naval Systems",
    // skills:
    //   "Software Development · Data Integrations · Data Engineering · OneStream ",
  },
  {
    title: "Intermediate Application Developer (Contract)",
    location: "Guelph, Ontario, Canada",
    company: {
      name: "Linamar Corp.",
      url: "https://www.linamar.com//",
    },
    period: "Aug 2025 – May 2026",
    team: "Financial Systems",
    points: [
      "Designed and implemented data integration and ETL pipelines across multiple enterprise systems, consolidating and transforming data into OneStream for downstream financial processing, and optimized workflows through batching and parallelization to reduce runtime by ~92%.",
      "Built an in-house CI/CD and version control solution for OneStream, automating 100% of deployment workflows and eliminating manual release processes.",
      "Designed and implemented a reusable structured logging system for OneStream pipelines, improving observability and enabling faster debugging and issue resolution in production workflows.",
      "Owned end-to-end development of features as the primary developer on the team, driving design, implementation, and deployment of internal systems.",
    ],
    projects: [
      "OneStream ETL Pipeline",
      "OneStream CI/CD Automation",
      "Structured Logging System",
    ],
  },
  {
    title: "ML Research Assistant (Thesis)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "CVIP Lab – Toronto Metropolitan University",
      url: "https://www.torontomu.ca/electrical-computer-biomedical/research/#!accordion-1578519133634-computer-vision-and-image-processing--cvip--laboratory",
    },
    period: "May 2025 – Apr 2026",
    team: "Computer Vision & Image Processing (CVIP) Lab",
    skills:
      "Machine Learning · Image Processing · Computer Vision · Medical Imaging",
    points: [
      "Implemented and enhanced machine learning models for metal artifact reduction in CT imaging, reducing noise and imaging artifacts across multiple medical imaging datasets.",
      "Engineered large-scale data processing pipelines for 100K+ CT image samples, enabling efficient training and evaluation of machine learning models.",
      "Accelerated experimental throughput by optimizing training pipelines through parallel data loading, checkpointing, and logging, achieving up to ~67% faster training across repeated experiments.",
    ],
    projects: ["ContextMAR", "TransMAR-GAN"],
  },
  {
    title: "AI Agent Developer – NLP & Mental Health (Volunteer)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Unity Health Toronto",
      url: "https://unityhealth.to/",
    },
    period: "Oct 2025 – Jan 2026",
    skills: "Data Science · NLP · AI Agents · Mental Health Research",
    points: [
      "Built interpretable ML models (Logistic Regression, Random Forest, XGBoost, LightGBM) on 68K+ survey samples, applying population weighting, compact feature sets, and PR-AUC-driven selection to handle highly imbalanced clinical outcomes.",
      "Developed a reproducible, config-driven ML pipeline for data ingestion, preprocessing, training, calibration, and explainability (SHAP, PDPs), enabling robust evaluation and publication-ready results.",
    ],
  },
  {
    title: "Software Engineer (Part-Time)",
    location: "Oakville, Ontario, Canada",
    company: {
      name: "Cashly Inc.",
      url: "https://gocashly.io/",
    },
    period: "Sept 2024 – Feb 2026",
    team: "Mortgage Tech Services",
    skills:
      "Full-Stack Development · Artificial Intelligence · SaaS · Start-up",
    projects: [
      "CRM Migration & System Rebuild",
      "AI-Driven Communication Platform",
      "Customer Data Processing & Automation Pipelines",
    ],
    points: [
      "Automated data extraction from PDFs, emails, forms, and transcripts by using Python scripts and LangChain in n8n, cutting manual effort by 60%.",
      "Designed and built a multi-channel outreach dialer (phone, email, chat) using Twilio and Gmail APIs, increasing lead contact rates by ~3x.",
      "Migrated legacy CRM to a Next.js + Supabase stack to reduce technical debt; deployed and maintained the production application on AWS EC2.",
      "Implemented CI/CD pipelines using GitHub Actions to automate builds and deployments, reducing release time from ~3 hours to ~2 minutes.",
    ],
  },
  {
    title: "Graduate Teaching Assistant (Part-Time)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Toronto Metropolitan University",
      url: "https://www.torontomu.ca",
    },
    period: "Sep 2024 – Apr 2025",
    skills:
      "SDLC · System Design · Object-Oriented Programming · Full-Stack Engineering · University Teaching · Public Speaking",
    courses: ["Software Systems", "Software Design & Architecture"],
    points: [
      "Led Java OOP and software architecture labs, providing hands-on instruction in debugging, deployment, and best practices using technologies such as Tomcat, MySQL, Kubernetes, Docker, and Google Cloud for 75+ students.",
    ],
  },
  {
    title: ".NET Software Developer (Internship)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "FGF Brands",
      url: "https://www.fgfbrands.com/",
    },
    period: "May 2023 – Aug 2023",
    team: "Enablement Operations",
    skills: "Full Stack Development · DevOps · Automation",
    projects: [
      "Workflow Management Portal (WMP)",
      "Process Execution Platform (PEP)",
    ],
    points: [
      "Enhanced ERP tools for 1,500+ employees across 6 facilities, improving reliability by 30% through optimized APIs and supply chain workflows.",
      "Developed ASP.NET and Kendo UI dashboards, resolving user-reported issues and driving a 25% efficiency gain across internal operations.",
      "Automated dataset refreshes using SQL Server jobs and stored procedures, removing manual syncs and ensuring real-time company reporting.",
    ],
  },
  {
    title: "Backend Developer (Internship)",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "Sep 2022 – Apr 2023",
    team: "Rotary & Mission Systems - Training & Sustainment",
    skills: "Backend Development · Relational Databases · NLP",
    projects: ["Emergency Response Tool", "Training Needs Analysis Platform"],
    points: [
      "Built REST APIs with Express.js and designed PostgreSQL schemas for a submarine emergency response platform and an internal training system.",
      "Designed an NLP pipeline to convert training manuals into structured KSA data, reducing manual parsing and accelerating training development.",
      "Integrated a reinforcement learning model to auto-score KSAs based on skill difficulty, importance, and frequency (DIF), for personalized training.",
    ],
  },
];

export default function ExperienceComponent() {
  const [openRole, setOpenRole] = useState(null);

  const toggleRole = (title) => {
    setOpenRole((current) => (current === title ? null : title));
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-heading">
            <strong>Experience</strong>
          </h2>
        </div>

        <ul className="career-track">
          {experienceItems.map((item) => (
            <li key={item.title} className="career-item" data-aos="fade-up">
              {item.points?.length || item.projects?.length ? (
                <button
                  type="button"
                  className="career-toggle"
                  onClick={() => toggleRole(item.title)}
                  aria-expanded={openRole === item.title}
                >
                  <div className="career-meta">
                    <p className="career-period">{item.period}</p>
                    <h3 className="career-company">
                      <a
                        href={item.company.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.company.name}
                      </a>
                    </h3>
                    <p className="career-location">{item.location}</p>
                  </div>

                  <div className="career-details">
                    <div className="career-title-row">
                      <h4 className="career-title">{item.title}</h4>
                      <span
                        className="career-toggle-indicator"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="career-extra">
                      {item.team ? (
                        <p className="career-extra-row">
                          <strong>Team:&nbsp;</strong>
                          <span>{item.team}</span>
                        </p>
                      ) : null}

                      {item.courses?.length ? (
                        <p className="career-extra-row">
                          <strong>Courses:&nbsp;</strong>
                          <span>{item.courses.join(" · ")}</span>
                        </p>
                      ) : null}

                      {item.skills ? (
                        <p className="career-extra-row">
                          <strong>Skills:&nbsp;</strong>
                          <span>{item.skills}</span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </button>
              ) : (
                <div className="career-toggle career-toggle-static">
                  <div className="career-meta">
                    <p className="career-period">{item.period}</p>
                    <h3 className="career-company">
                      <a
                        href={item.company.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.company.name}
                      </a>
                    </h3>
                    <p className="career-location">{item.location}</p>
                  </div>

                  <div className="career-details">
                    <h4 className="career-title">{item.title}</h4>

                    <div className="career-extra">
                      {item.team ? (
                        <p className="career-extra-row">
                          <strong>Team:&nbsp;</strong>
                          <span>{item.team}</span>
                        </p>
                      ) : null}

                      {item.courses?.length ? (
                        <p className="career-extra-row">
                          <strong>Courses:&nbsp;</strong>
                          <span>{item.courses.join(" · ")}</span>
                        </p>
                      ) : null}

                      {item.skills ? (
                        <p className="career-extra-row">
                          <strong>Skills:&nbsp;</strong>
                          <span>{item.skills}</span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}

              {openRole === item.title ? (
                <div className="career-expanded">
                  {item.points?.length ? (
                    <ul className="career-points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}

                  {item.projects?.length ? (
                    <div className="career-projects">
                      <strong>Key Projects:&nbsp;</strong>
                      <span>{item.projects.join(" · ")}</span>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
