import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import {
  BsLinkedin,
  BsGithub,
  BsFileEarmarkText,
  BsEnvelopeFill,
} from "react-icons/bs";
import "./HeroComponent.css";

export default function HeroComponent() {
  /* initialise the tsParticles engine once */
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // or loadFull(engine) if you prefer
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null; // avoid flash of un-styled content

  /* one-to-one port of your old particlesJS config → v3 syntax */
  const particlesOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    detectRetina: true,

    particles: {
      number: {
        value: 180,
        density: { enable: true, area: 700 },
      },

      color: { value: "#ffffff" },

      shape: { type: "circle" },

      opacity: {
        value: 0.3,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },

      size: {
        value: 3,
        random: { enable: true, minimumValue: 1 },
        animation: { enable: false },
      },

      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" }, // same as old “out_mode: out”
        bounce: false,
      },
    },

    interactivity: {
      events: {
        onHover: { enable: false, mode: "repulse" },
        onClick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 200, duration: 0.4 },
        push: { quantity: 4 }, // identical to old config
      },
    },
  };

  return (
    <section id="hero" className="hero-section">
      {/* ─── animated particles background ─── */}
      <Particles
        id="tsparticles"
        className="particles-canvas"
        options={particlesOptions}
      />

      <h1 className="hero-title">Manav&nbsp;Patel</h1>

      <h3 className="hero-roles">
        <Typewriter
          words={[
            "Machine Learning Engineer",
            "Software Engineer",
            "Graduate Student",
            "Teaching Assistant",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={65}
          deleteSpeed={35}
          delaySpeed={1500}
        />
      </h3>

      <div className="hero-icons">
        <a
          href="https://www.linkedin.com/in/manavpat/"
          target="_blank"
          rel="noreferrer"
          className="hero-icon"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mpat247"
          target="_blank"
          rel="noreferrer"
          className="hero-icon"
        >
          <BsGithub />
        </a>
        <a href="#resumes" className="hero-icon">
          <BsFileEarmarkText />
        </a>
        <a href="mailto:manav1.patel@torontomu.ca" className="hero-icon">
          <BsEnvelopeFill />
        </a>
      </div>

      {/* ↓  scroll-down chevron  ↓ */}
      <button
        className="scroll-down"
        aria-label="Scroll to About"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 15.5l-7-7h14l-7 7z" />
        </svg>
      </button>
    </section>
  );
}
