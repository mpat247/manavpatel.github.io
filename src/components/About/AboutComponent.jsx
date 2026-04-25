/* src/components/About/AboutComponent.jsx */
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-label-col">
          <h2 className="about-heading">
            <strong>About&nbsp;Me</strong>
          </h2>
        </div>

        <div className="about-text-panel">
          <div className="about-text">
            <p>
              I’m <strong>Manav&nbsp;Patel</strong>, a software engineer with
              hands-on experience across backend systems, machine learning, and
              data-focused engineering. I completed my{" "}
              <a
                href="https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>MEng&nbsp;in&nbsp;Artificial&nbsp;Intelligence</strong>
              </a>{" "}
              at Toronto&nbsp;Metropolitan&nbsp;University. I also completed my{" "}
              <a
                href="https://www.torontomu.ca/programs/undergraduate/computer-engineering/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  BEng&nbsp;in&nbsp;Computer&nbsp;Engineering&nbsp;(Software
                  Engineering)
                </strong>
              </a>{" "}
              at Toronto&nbsp;Metropolitan&nbsp;University, and I’m an incoming{" "}
              <a
                href="https://www.omscs.gatech.edu/specialization-computing-systems"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  MS&nbsp;Computer&nbsp;Science&nbsp;(Computing&nbsp;Systems)
                </strong>
              </a>{" "}
              student at Georgia&nbsp;Tech.
            </p>

            <p>
              Professionally, I’ve worked in software engineering and
              application development roles at&nbsp;
              <a
                href="https://www.lockheedmartin.com/en-ca/"
                target="_blank"
                rel="noreferrer"
              >
                Lockheed&nbsp;Martin
              </a>{" "}
              and&nbsp;
              <a
                href="https://www.linamar.com//"
                target="_blank"
                rel="noreferrer"
              >
                Linamar&nbsp;Corp.
              </a>
              , while also contributing to ML research and applied AI work
              through{" "}
              <a
                href="https://www.torontomu.ca"
                target="_blank"
                rel="noreferrer"
              >
                Toronto&nbsp;Metropolitan&nbsp;University
              </a>{" "}
              and{" "}
              <a
                href="https://unityhealth.to/"
                target="_blank"
                rel="noreferrer"
              >
                Unity&nbsp;Health&nbsp;Toronto
              </a>
              .
            </p>

            <p>
              My focus is building reliable backend services, integrating data
              workflows, and applying ML where it creates practical value.
            </p>

            <p>
              I’m currently open to contract/part-time/casual opportunities and
              collaborations in software engineering, backend development, and
              machine learning.
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
      </div>
    </section>
  );
}
