import { useState } from "react";
import "./ExperienceComponent.css";

const experienceItems = [
  {
    id: "lockheed-martin-software-engineer",
    title: "Software Engineer (Full-Time)",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "June 2026 – Present",
    team: "Naval Systems",
    points: [
      "Develop distributed Java backend services and inter-process messaging for CMS 330 on the Canadian Surface Combatant (CSC), spanning combat-system and naval simulation software across ship subsystems.",
      "Validate service interactions through integration testing and system-level verification across system and simulation software.",
      "Maintain code quality and build reliability using GitLab source control, Jenkins CI, SonarQube analysis, and Linux virtual machines.",
      "Create behavioral UML models in CAMEO Systems Modeler, including activity and sequence diagrams, to document software behavior and component interactions.",
    ],
  },
  {
    id: "tmu-cvip-ml-research",
    title: "ML Research Assistant",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "CVIP Lab – Toronto Metropolitan University",
      url: "https://www.torontomu.ca/electrical-computer-biomedical/research/#!accordion-1578519133634-computer-vision-and-image-processing--cvip--laboratory",
    },
    period: "May 2025 – Aug 2026",
    team: "Computer Vision & Image Processing (CVIP) Lab",
    skills: "Machine Learning · Image Processing · Computer Vision · Medical Imaging",
    points: [
      "Engineered HDF5 pipelines for 100K+ CT images, improving experimental throughput ~67% via parallel loading and checkpointing.",
      "Built 2 CT metal artifact-reduction models with CNN, Transformer, and GAN architectures, achieving ~48 dB PSNR and ~0.99 SSIM.",
      "Benchmarked 15+ variants through ablations, quantifying gains from cross-window attention and physics-guided supervision.",
      "Paper 1: ContextMAR: Transformer-Based Multi-Scale Framework for Metal Artifact Reduction in CT Imaging - EUSIPCO 2026",
      "Paper 2: TransMAR-GAN: A Transformer and GAN Framework for High-Fidelity MAR in CT Imaging - IEEE TBME (Under Review)",
    ],
    projects: [
      "ContextMAR",
      "TransMAR-GAN",
    ],
  },
  {
    id: "linamar-application-developer",
    title: "Application Developer",
    location: "Guelph, Ontario, Canada",
    company: {
      name: "Linamar Corp.",
      url: "https://www.linamar.com//",
    },
    period: "Aug 2025 – May 2026",
    team: "Financial Systems",
    points: [
      "Delivered VB.NET and REST API integrations across IFS Cloud, SAP, and OneStream, automating sales imports for 135+ entities.",
      "Automated OneStream business-rule deployments with CI/CD and GitHub source control, eliminating manual deployment steps.",
      "Prototyped a C# and SQL admin dashboard for user permissions, license usage, and workflow submission tracking.",
      "Documented integration rules and led two knowledge-transfer sessions for ongoing maintenance and entity onboarding.",
    ],
    projects: [
      "OneStream ETL Pipeline",
      "OneStream CI/CD Automation",
      "Structured Logging System",
    ],
  },
  {
    id: "unity-health-ai-data-science-research",
    title: "AI/Data Science Research Assistant",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Unity Health Toronto",
      url: "https://unityhealth.to/",
    },
    period: "Sep 2025 – Feb 2026",
    skills: "Data Science · NLP · AI Agents · Mental Health Research",
    points: [
      "Processed 45,000+ adult NSDUH records and 2,300+ variables with recoding, imputation, feature alignment, and leakage controls.",
      "Reduced 2,300+ variables using LASSO, Elastic Net, RFE, and RFECV into compact 6-, 10-, and 19-feature screening tiers.",
      "Trained Logistic Regression, Random Forest, XGBoost, and LightGBM using survey weights, stratified 5-fold CV, and held-out testing.",
      "Optimized screening thresholds for high recall, achieving ROC-AUC ~0.93, sensitivity ~0.91, and NPV ~0.99, and implemented SHAP.",
      "Built a reproducible publication pipeline and co-authored a JAMIA manuscript, currently under peer review.",
    ],
  },
  {
    id: "cashly-software-developer",
    title: "Software Developer",
    location: "Oakville, Ontario, Canada",
    company: {
      name: "Cashly Inc.",
      url: "https://gocashly.io/",
    },
    period: "Sep 2024 – Jan 2026",
    team: "Mortgage Tech Services",
    skills: "Full-Stack Development · Artificial Intelligence · SaaS · Start-up",
    projects: [
      "CRM Migration & System Rebuild",
      "AI-Driven Communication Platform",
      "Customer Data Processing & Automation Pipelines",
    ],
    points: [
      "Modernized a full-stack CRM using Next.js, React, TypeScript, and Supabase/PostgreSQL for sales and outreach workflows.",
      "Integrated Supabase authentication, Google OAuth, and server-side session handling with protected routes.",
      "Orchestrated Kanban, campaign, and dialer workflows with Twilio, Gmail APIs, and WebSockets, driving ~3× lead engagement.",
      "Streamlined document and transcript processing with Python, LangChain, and n8n, reducing manual effort by 60%.",
    ],
  },
  {
    id: "tmu-graduate-teaching-assistant",
    title: "Graduate Teaching Assistant",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Toronto Metropolitan University",
      url: "https://www.torontomu.ca",
    },
    period: "Sep 2024 – Apr 2025",
    skills: "SDLC · System Design · Object-Oriented Programming · Full-Stack Engineering · University Teaching · Public Speaking",
    courses: [
      "Software Systems",
      "Software Design & Architecture",
    ],
    points: [
      "Led tutorials and labs for 100+ students in Software Systems and Software Design & Architecture courses.",
    ],
  },
  {
    id: "fgf-brands-software-developer",
    title: "Software Developer",
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
      "Shipped ASP.NET features and 20+ Kendo UI components across 50+ forms supporting workflows at 12 bakeries.",
      "Created 15+ .NET APIs using C# and SQL Server for an application managing 1,000+ assets, inventory, and orders.",
    ],
  },
  {
    id: "lockheed-martin-software-developer",
    title: "Software Developer",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "Sep 2022 – Apr 2023",
    team: "Rotary & Mission Systems - Training & Sustainment",
    skills: "Backend Development · Relational Databases · NLP",
    projects: [
      "Emergency Response Tool",
      "Training Needs Analysis Platform",
    ],
    points: [
      "Implemented React interfaces and Node.js/Express APIs backed by PostgreSQL for an emergency-response tool for CSC ship.",
      "Engineered an NLP pipeline to extract knowledge, skills, and abilities from 10+ manuals for training-needs analysis.",
      "Built a Jest/Puppeteer regression suite with 60+ automated tests and 90%+ coverage, identifying 15+ defects across core workflows.",
    ],
  },
];

export default function ExperienceComponent() {
  const [openRole, setOpenRole] = useState(null);
  const toggleRole = (id) => setOpenRole((current) => current === id ? null : id);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-heading"><strong>Experience</strong></h2>
        </div>
        <ul className="career-track">
          {experienceItems.map((item) => (
            <li key={item.id} className="career-item">
              <div className="career-summary">
                <div className="career-meta">
                  <p className="career-period">{item.period}</p>
                  <h3 className="career-company">
                    <a href={item.company.url} target="_blank" rel="noreferrer">{item.company.name}</a>
                  </h3>
                  <p className="career-location">{item.location}</p>
                </div>
                <div className="career-details">
                  <h4 className="career-title">{item.title}</h4>
                  <div className="career-extra">
                    {item.team && <p className="career-extra-row"><strong>Team: </strong><span>{item.team}</span></p>}
                    {item.courses?.length > 0 && <p className="career-extra-row"><strong>Courses: </strong><span>{item.courses.join(" · ")}</span></p>}
                    {item.skills && <p className="career-extra-row"><strong>Skills: </strong><span>{item.skills}</span></p>}
                  </div>
                  <button className="career-details-toggle" type="button"
                    onClick={() => toggleRole(item.id)} aria-expanded={openRole === item.id}
                    aria-controls={`details-${item.id}`}>
                    <span>{openRole === item.id ? "Hide details" : "View details"}</span>
                    <span aria-hidden="true">{openRole === item.id ? "−" : "+"}</span>
                  </button>
                </div>
              </div>
              {openRole === item.id && (
                <div className="career-expanded" id={`details-${item.id}`}>
                  {item.points?.length > 0 && <ul className="career-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                  {item.projects?.length > 0 && <div className="career-projects"><strong>Key Projects: </strong><span>{item.projects.join(" · ")}</span></div>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
