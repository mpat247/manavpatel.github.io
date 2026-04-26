import { useEffect, useRef, useState } from "react";
import "./PublicationsComponent.css";

const publications = [
  {
    title:
      "ContextMAR: Transformer-Based Multi-Scale Framework for Metal Artifact Reduction in CT Imaging",
    authorship: "1st Author",
    venue: "EUSiPCO 2026",
    venueUrl: "https://eusipco2026.org/",
    year: "2026",
    status: "Submitted · In Review",
    expandable: true,
    previewImage: "/images/contextmar.png",
    previewAlt: "ContextMAR project preview",
    repoUrl: "https://github.com/mpat247/contextmar",
  },
  {
    title:
      "TransMAR-GAN: A Transformer and GAN Framework for High-Fidelity MAR in CT Imaging",
    authorship: "1st Author",
    venue: "IEEE TBME",
    venueUrl: "https://www.embs.org/tbme/",
    year: "2026",
    status: "Submitted · In Review",
    expandable: true,
    previewImage: "/images/transmar.png",
    previewAlt: "TransMAR-GAN project preview",
    repoUrl: "https://github.com/mpat247/transmar-gan",
  },
];

export default function PublicationsComponent() {
  const [openPublicationTitle, setOpenPublicationTitle] = useState(null);
  const [expandedImageTitle, setExpandedImageTitle] = useState(null);
  const expandedImageRef = useRef(null);

  useEffect(() => {
    if (!expandedImageTitle) return;

    const handleOutsideClick = (event) => {
      if (
        expandedImageRef.current &&
        !expandedImageRef.current.contains(event.target)
      ) {
        setExpandedImageTitle(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [expandedImageTitle]);

  const togglePublicationDetails = (title) => {
    if (openPublicationTitle === title) {
      setOpenPublicationTitle(null);
      setExpandedImageTitle(null);
      return;
    }

    setOpenPublicationTitle(title);
    setExpandedImageTitle(null);
  };

  const toggleImageExpand = (title) => {
    setExpandedImageTitle((prev) => (prev === title ? null : title));
  };

  return (
    <section id="publications" className="publications-section">
      <div className="publications-container">
        <div className="publications-header">
          <h2 className="publications-heading">
            <strong>Publications</strong>
          </h2>
        </div>

        <div className="publications-list">
          {publications.map((publication) => (
            <article key={publication.title} className="publication-item">
              <h3 className="publication-title">{publication.title}</h3>

              <p className="publication-meta">
                <strong>{publication.authorship}</strong>
                {" · "}
                <a href={publication.venueUrl} target="_blank" rel="noreferrer">
                  {publication.venue}
                </a>
                {", "}
                {publication.year}
              </p>

              <p className="publication-status">{publication.status}</p>

              {publication.expandable ? (
                <div className="publication-expand">
                  <button
                    type="button"
                    className="publication-expand-toggle"
                    onClick={() => togglePublicationDetails(publication.title)}
                  >
                    View More
                  </button>

                  {openPublicationTitle === publication.title ? (
                    <div className="publication-expand-content">
                      <div
                        className={`publication-preview-wrap ${expandedImageTitle === publication.title ? "expanded" : ""}`}
                        ref={
                          expandedImageTitle === publication.title
                            ? expandedImageRef
                            : null
                        }
                      >
                        <button
                          type="button"
                          className="publication-image-button"
                          onClick={() => toggleImageExpand(publication.title)}
                          aria-label="Expand publication image"
                        >
                          <img
                            src={publication.previewImage}
                            alt={publication.previewAlt}
                            className="publication-preview-image"
                          />
                        </button>
                      </div>
                      <a
                        href={publication.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="publication-repo-link"
                      >
                        github.com/mpat247/transmar-gan
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
