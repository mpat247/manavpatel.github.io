/* ─────────────────────────────────────────────────────────────
   ResumesComponent
   -------------------------------------------------------------
   • Three-tab selector (General · Machine Learning · SWE)
   • Displays a PDF in an <iframe>
   • Download button
   • Fully responsive, no external UI libs
   ─────────────────────────────────────────────────────────── */

import { useState } from "react";
import "./ResumesComponent.css";

/* ----------   DATA   ---------- */
const resumes = [
  {
    id: "swe",
    label: "Software Engineering",
    file: "Manav_Patel_Resume_SWE.pdf",
  },
  {
    id: "ml",
    label: "Machine Learning & Data",
    file: "Manav_Patel_Resume_MLData.pdf",
  },
];

export default function ResumesComponent() {
  const [active, setActive] = useState("general");
  const current = resumes.find((r) => r.id === active) || resumes[0];

  return (
    <section id="resumes" className="resumes-section">
      <div className="resumes-container">
        <h2 className="resumes-heading">
          <strong>Resumes</strong>
        </h2>

        {/* ── TAB STRIP ─────────────────── */}
        <ul className="resume-tabs">
          {resumes.map((r) =>
            r?.label ? (
              <li key={r.id}>
                <button
                  className={`tab-btn ${active === r.id ? "active" : ""}`}
                  onClick={() => setActive(r.id)}
                >
                  {r.label}
                </button>
              </li>
            ) : null
          )}
        </ul>

        {/* ── IFRAME + DOWNLOAD ─────────── */}
        <div className="resume-frame-wrap">
          {current?.file ? (
            <iframe
              title={current.label}
              src={`/files/${current.file}`}
              className="resume-frame"
              allowFullScreen
            />
          ) : (
            <p className="error-text">Resume file not available.</p>
          )}
        </div>

        {current?.file && (
          <p className="download-wrap">
            <a
              href={`/files/${current.file}`}
              target="_blank"
              rel="noreferrer"
              className="download-btn"
            >
              Download Resume
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
