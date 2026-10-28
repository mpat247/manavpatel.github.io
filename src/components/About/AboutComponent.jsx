/* src/components/About/AboutComponent.jsx */
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-heading">
            <strong>About&nbsp;Me</strong>
          </h2>
        </div>

        <div className="about-text-panel">
          <div className="about-text">
            <p>
              Hi, I’m <strong>Manav</strong>!
            </p>

            <p>
              I’m an{" "}
              <a
                href="https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  MEng&nbsp;in&nbsp;Electrical&nbsp;&amp;&nbsp;Computer&nbsp;Engineering&nbsp;(Artificial&nbsp;Intelligence)
                </strong>
              </a>{" "}
              and{" "}
              <a
                href="https://www.torontomu.ca/programs/undergraduate/computer-engineering/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  BEng&nbsp;in&nbsp;Computer&nbsp;Engineering&nbsp;(Software&nbsp;Engineering)
                </strong>
              </a>{" "}
              graduate from Toronto&nbsp;Metropolitan&nbsp;University (formerly
              Ryerson&nbsp;University), with experience in software engineering and
              applied ML research across the aerospace &amp; defence, healthcare,
              manufacturing, and fintech industries.
            </p>

            <p>
              I’m currently a Software Engineer at{" "}
              <a
                href="https://www.lockheedmartin.com/en-ca/"
                target="_blank"
                rel="noreferrer"
              >
                Lockheed&nbsp;Martin
              </a>{" "}
              and an incoming{" "}
              <a
                href="https://www.omscs.gatech.edu/specialization-computing-systems"
                target="_blank"
                rel="noreferrer"
              >
                <strong>MSCS</strong>
              </a>{" "}
              student at Georgia&nbsp;Tech, specializing in Computing Systems.
            </p>

            <p>
              I’m interested in research opportunities in applied ML/AI,
              particularly multimodal AI, AI agents and LLM applications, and
              trustworthy and secure ML. I’m interested in exploring adjacent
              research areas and applying ML/AI methods and solutions across new
              domains.
            </p>

            <p>
              I’m also open to part-time, hourly, or project-based independent
              contracting opportunities in software engineering, backend/API
              development, ML/AI engineering, data and automation pipelines,
              systems integration, internal tooling, technical R&amp;D, and other
              ad hoc technical work.
            </p>

            <p>
              Please feel free to reach out at&nbsp;
              <a href="mailto:manavpatel.dev@gmail.com">
                manavpatel.dev@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
