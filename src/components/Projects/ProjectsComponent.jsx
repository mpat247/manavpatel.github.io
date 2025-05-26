/* ─────────────────────────────────────────────────────────────
   ProjectsComponent
   -------------------------------------------------------------
   - Category filter (All · ML · Full-Stack · Other)
   - Responsive 3-column masonry-like grid
   - Hover overlay + modal pop-up for details
   - NO external libs, only React & CSS
   ─────────────────────────────────────────────────────────── */

import { useState } from "react";
import "./ProjectsComponent.css";

/* ###############  DATA  ################## */
const projectData = [
  {
    id: 12,
    title: "Humor Detection with ConceptNet",
    subtitle: "Neural Information Proc. & Retrieval",
    img: "humor.png",
    category: "ml",
    skills: "PyTorch · Spacy · BERT · NLP",
    date: "Nov 2024",
    github: "https://github.com/mpat247/Enhanced-Humour-Detection",
    description:
      "Leverages ConceptNet and a shared-private BERT architecture to classify humour in text and improve sentiment pipelines.",
  },
  {
    id: 13,
    title: "RDENet Oscillation Block",
    subtitle: "Deep Learning",
    img: "rde.jpg",
    category: "ml",
    skills: "CNNs · ResNet · Image Processing",
    date: "Dec 2024",
    github: "https://github.com/mpat247/RDENet-Oscillation-Block",
    description:
      "Custom oscillation block that boosts poisoned-data robustness when training RDENet for image classification tasks.",
  },
  {
    id: 14,
    title: "Credit Scoring · Anomaly Detection",
    subtitle: "Secure Machine Learning",
    img: "credit.png",
    category: "ml",
    skills: "Random Forest · XGBoost · Data Poisoning",
    date: "Dec 2024",
    github: "https://github.com/mpat247/Credit-Scoring-Model",
    description:
      "Combines classic tabular ML with anomaly-detection defences to harden credit-risk pipelines against poisoning attacks.",
  },
  {
    id: 1,
    title: "Movie Success Predictor",
    subtitle: "Neural Networks",
    img: "movie4.png",
    category: "ml",
    skills: "LSTM · BERT · TensorFlow",
    date: "Jul 2024",
    github: "https://github.com/mpat247/MovieSuccessPredictor",
    description:
      "Predicts box-office success from pre-release signals using BERT embeddings, LSTMs and ensemble baselines.",
  },
  {
    id: 2,
    title: "BiasAware",
    subtitle: "Capstone Project",
    img: "biasaware.png",
    category: "fullstack",
    skills: "React · Node.js · MongoDB",
    date: "Apr 2024",
    github: "https://github.com/mpat247/BiasAware",
    description:
      "Web platform that surfaces demographic bias in ML models via explainability heat-maps and reporting dashboards.",
  },
  {
    id: 4,
    title: "Resort Transportation MS",
    subtitle: "Cloud & Distributed",
    img: "resort.png",
    category: "fullstack",
    skills: "FastAPI · React · AWS",
    date: "Mar 2024",
    github: "https://github.com/mpat247/ResortTransportationManagement",
    description:
      "Micro-service suite that optimises shuttle routes for large resorts; CI/CD via GitHub Actions → EKS.",
  },
  {
    id: 6,
    title: "onTrack",
    subtitle: "Project Management",
    img: "calendar.png",
    category: "fullstack",
    skills: "Express · React · Oracle",
    date: "Nov 2023",
    github: "https://github.com/mpat247/onTrack",
    description:
      "Student PM tool with sprint boards, burndown charts and Gantt view; backend REST API built with Express.",
  },
  {
    id: 9,
    title: "manavpatel.me",
    subtitle: "Personal Portfolio",
    img: "portfolio.png",
    category: "other",
    skills: "HTML · CSS · JavaScript",
    date: "",
    github: "https://github.com/mpat247/manavpatel.github.io",
    description:
      "Static portfolio (the one you’re migrating!) originally crafted with vanilla HTML/CSS/JS and particles.js.",
  },
  {
    id: 15,
    title: "My GitHub",
    subtitle: "",
    img: "github.png",
    category: "all",
    skills: "",
    date: "",
    github: "https://github.com/mpat247",
    description:
      "Browse all repos, issues and OSS contributions on my GitHub profile.",
  },
];

/* ################  COMPONENT ################ */
export default function ProjectsComponent() {
  const [filter, setFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(null);

  const filtered = projectData.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          <strong>Projects</strong>
        </h2>

        {/* ========= Filter Buttons ========= */}
        <div className="filter-btns" data-aos="fade-in">
          {["all", "ml", "fullstack", "other"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "All"
                : cat === "ml"
                ? "Machine Learning"
                : cat === "fullstack"
                ? "Full Stack"
                : "Other"}
            </button>
          ))}
        </div>

        {/* ========= Grid ========= */}
        <div className="projects-grid">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="project-item"
              data-aos="fade-up"
              style={{
                backgroundImage: `url(/images/${proj.img})`,
              }}
              onClick={() => setActiveModal(proj)}
            >
              <div className="project-overlay">
                <h3>{proj.title}</h3>
                {proj.subtitle && <h5>{proj.subtitle}</h5>}
                {proj.skills && <span>{proj.skills}</span>}
                {proj.date && <span>{proj.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========= Modal ========= */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()} /* prevent backdrop click */
          >
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setActiveModal(null)}
            >
              &times;
            </button>

            <img
              src={`/images/${activeModal.img}`}
              alt={activeModal.title}
              className="modal-img"
            />

            <h3>{activeModal.title}</h3>
            {activeModal.subtitle && <h4>{activeModal.subtitle}</h4>}

            <p className="modal-desc">{activeModal.description}</p>

            {activeModal.skills && (
              <p className="modal-skills">
                <strong>Tech:&nbsp;</strong>
                {activeModal.skills}
              </p>
            )}

            {activeModal.github && (
              <p className="modal-link">
                <a
                  href={activeModal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  View on GitHub
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
