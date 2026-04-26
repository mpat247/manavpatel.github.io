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
              Hi, I’m <strong>Manav</strong>, a software engineer with hands-on
              experience in backend systems, machine learning, and data-focused
              engineering. I completed my{" "}
              <a
                href="https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  MEng&nbsp;in&nbsp;Electrical&nbsp;&amp;&nbsp;Computer
                  &nbsp;Engineering&nbsp;(Artificial&nbsp;Intelligence)
                </strong>
              </a>{" "}
              and my{" "}
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
              at Toronto&nbsp;Metropolitan&nbsp;University. I’m an incoming{" "}
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
              I’m currently a Software Engineer at &nbsp;
              <a
                href="https://www.lockheedmartin.com/en-ca/"
                target="_blank"
                rel="noreferrer"
              >
                Lockheed&nbsp;Martin
              </a>{" "}
              , and I also contribute to ML research and applied AI work through{" "}
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
              I’m open to contract, freelance, part-time, or casual
              opportunities, as well as collaborations in software engineering,
              backend development, and machine learning.
            </p>

            <p>
              Feel free to reach out at&nbsp;
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
