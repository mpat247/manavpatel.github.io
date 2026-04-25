import "./HeroComponent.css";
import { BsLinkedin, BsGithub, BsEnvelopeFill } from "react-icons/bs";

export default function HeroComponent() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-main">
        <h2 className="hero-title">Manav&nbsp;Patel</h2>

        <div className="hero-subtitle">
          <p className="hero-role-title">Software Engineer</p>
          <p className="hero-role-tags">
            Backend · Machine Learning · Data · Systems · Cloud
          </p>
        </div>

        <div className="hero-icons">
          <a
            href="https://www.linkedin.com/in/manavpat/"
            target="_blank"
            rel="noreferrer"
            className="hero-icon"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mpat247"
            target="_blank"
            rel="noreferrer"
            className="hero-icon"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:manav1.patel@torontomu.ca"
            className="hero-icon"
            aria-label="Email"
          >
            <BsEnvelopeFill />
          </a>
        </div>
      </div>
    </section>
  );
}
