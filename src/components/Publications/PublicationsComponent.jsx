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
  },
  {
    title:
      "TransMAR-GAN: A Transformer and GAN Framework for High-Fidelity MAR in CT Imaging",
    authorship: "1st Author",
    venue: "IEEE TBME",
    venueUrl: "https://www.embs.org/tbme/",
    year: "2026",
    status: "Submitted · In Review",
  },
];

export default function PublicationsComponent() {
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
                <a
                  href={publication.venueUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {publication.venue}
                </a>
                {", "}
                {publication.year}
              </p>

              <p className="publication-status">{publication.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
