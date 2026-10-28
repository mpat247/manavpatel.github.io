import "./ProjectsComponent.css";

export default function ProjectsComponent() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-heading">
            <strong>Projects</strong>
          </h2>
        </div>

        <div className="projects-revamp">
          <div className="projects-revamp-content">
            <span className="projects-revamp-badge">
              <span aria-hidden="true" />
              A fresh look is in the works
            </span>
            <h3>Under Revamp</h3>
            <p>
              Explore my work on GitHub in the meantime.
            </p>
            <a
              href="https://github.com/mpat247"
              target="_blank"
              rel="noreferrer"
              className="projects-revamp-link"
            >
              Explore GitHub
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="projects-revamp-art" aria-hidden="true">
            <div className="projects-revamp-window">
              <div className="projects-revamp-window-bar">
                <span />
                <span />
                <span />
              </div>
              <svg
                viewBox="0 0 120 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m36 22-18 18 18 18M84 22l18 18-18 18M69 14 51 66" />
              </svg>
              <div className="projects-revamp-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
