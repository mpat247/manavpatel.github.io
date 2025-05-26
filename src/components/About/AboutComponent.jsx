/* src/components/About/AboutComponent.jsx */
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ── heading ───────────────────────────────────────── */}
        <h2 className="about-heading">
          <strong>About&nbsp;Me</strong>
        </h2>

        {/* ── main text ─────────────────────────────────────── */}
        <div className="about-text">
          <p>
            I’m <strong>Manav&nbsp;Patel</strong>, a recent{" "}
            <a
              href="https://www.torontomu.ca/calendar/2024-2025/programs/feas/computer_eng/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Software&nbsp;Engineering</strong>
            </a>{" "}
            graduate now pursuing an{" "}
            <a
              href="https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>MEng&nbsp;in&nbsp;Artificial&nbsp;Intelligence</strong>
            </a>{" "}
            at Toronto&nbsp;Metropolitan&nbsp;University.
          </p>

          <p>
            I’ve gained over a year of hands-on experience through internships
            at&nbsp;
            <a
              href="https://www.lockheedmartin.com/en-ca/"
              target="_blank"
              rel="noreferrer"
            >
              Lockheed&nbsp;Martin
            </a>{" "}
            and&nbsp;
            <a
              href="https://www.fgfbrands.com/"
              target="_blank"
              rel="noreferrer"
            >
              FGF&nbsp;Brands
            </a>
            . Currently, I’m a Junior Software Engineer at{" "}
            <a
              href="https://www.linkedin.com/company/gocashly/"
              target="_blank"
              rel="noreferrer"
            >
              Cashly&nbsp;Inc.
            </a>
          </p>

          <p>
            I’m actively seeking <em>new-grad/junior/entry-level</em>{" "}
            opportunities in backend development, machine learning, or data
            engineering.
          </p>

          <p>
            Feel free to reach me at&nbsp;
            <a href="mailto:manav1.patel@torontomu.ca">
              manav1.patel@torontomu.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
