/* ─────────────────────────────────────────────────────────────
   ResumesComponent  –  FINAL
   -------------------------------------------------------------
   • Two tabs (SWE / ML & Data)
   • Canvas-only PDF → no duplicated text
   • Responsive, no side padding / black bars
   ─────────────────────────────────────────────────────────── */

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./ResumesComponent.css";

/* ---------- DATA ---------- */
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

/* PDF worker (required for react-pdf) */
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumesComponent() {
  /* state */
  const [active, setActive] = useState(resumes[0].id);
  const [width, setWidth] = useState(900);
  const [error, setError] = useState(null);

  /* responsive width */
  useEffect(() => {
    const resize = () => setWidth(Math.min(900, window.innerWidth * 0.96));
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const current = resumes.find((r) => r.id === active);

  return (
    <section id="resumes" className="resumes-section">
      <div className="resumes-container">
        <h2 className="resumes-heading">
          <strong>Resumes</strong>
        </h2>

        {/* ── tabs ───────────────────────────────── */}
        <ul className="resume-tabs">
          {resumes.map((r) => (
            <li key={r.id}>
              <button
                className={`tab-btn ${active === r.id ? "active" : ""}`}
                onClick={() => {
                  setActive(r.id);
                  setError(null);
                }}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ── viewer ─────────────────────────────── */}
        <div className="pdf-frame">
          {current?.file ? (
            <Document
              file={`/files/${current.file}`}
              onLoadError={(e) => setError(e.message)}
              loading="Loading PDF…"
              className="pdf-document"
            >
              <Page
                pageNumber={1}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          ) : (
            <p className="error-text">Resume unavailable.</p>
          )}

          {error && <p className="error-text">Failed to load: {error}</p>}
        </div>

        {/* ── download ───────────────────────────── */}
        {current?.file && (
          <p className="download-wrap">
            <a
              href={`/files/${current.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download&nbsp;PDF
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
