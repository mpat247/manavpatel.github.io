/* ─────────────────────────────────────────────────────────────
   SkillsComponent
   -------------------------------------------------------------
   Categories: Languages · Frameworks/Libraries · Machine
   Learning · Data · DevOps & Tools
   ─────────────────────────────────────────────────────────── */

import "./SkillsComponent.css";

const skillGroups = [
  {
    title: "Languages",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-code"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    text: "Python · Java · JavaScript · TypeScript · Go · C · C# · SQL · HTML/CSS",
  },
  {
    title: "Frameworks / Libraries",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-layers"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    text: "Express.js · React.js · Next.js · Node.js · FastAPI · Flask · Django · ASP.NET · JUnit · Selenium · TestNG · gRPC",
  },
  {
    title: "Machine Learning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cpu"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    text: "PyTorch · TensorFlow · Keras · NumPy · Pandas · Scikit-learn · Matplotlib · Langchain · Ollama · Hugging Face",
  },
  {
    title: "Data",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        <path d="M3 7c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        <path d="M3 17c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    text: "PostgreSQL · MongoDB · MySQL · SQL Server · Hive · Hadoop · Spark · BigQuery · Elasticsearch · Redis",
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-tool"
      >
        <path d="M14.7 6.3a5.5 5.5 0 0 0-7.4 7.4l-4.2 4.2a2 2 0 0 0 2.8 2.8l4.2-4.2a5.5 5.5 0 0 0 7.4-7.4l-2.1-2.1z" />
      </svg>
    ),
    text: "Docker · Kubernetes · Google Cloud Platform · Amazon Web Services · Azure · GitHub Actions · Git",
  },
];

export default function SkillsComponent() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">
          <strong>Skills</strong>
        </h2>

        <div className="skills-grid">
          {skillGroups.map(({ title, icon, text }) => (
            <div key={title} className="skill-box" data-aos="fade-up">
              <h4>
                {icon}
                {title}
              </h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
