import { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub, BsLinkedin, BsEnvelope, BsList, BsX } from "react-icons/bs";

const sections = [
  ["hero", "Intro"], ["about", "About"], ["experience", "Experience"],
  ["skills", "Skills"], ["education", "Education"],
  ["publications", "Publications"], ["projects", "Projects"], ["contact", "Contact"],
];

export function PortfolioNav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-10% 0px -70% 0px" });
    sections.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="portfolio-nav">
        <a className="nav-brand" href="#hero" aria-label="Manav Patel, home">
          <span className="nav-monogram">mp</span>
          <span className="nav-fullname">Manav Patel</span>
        </a>
        <p className="nav-role">Software Engineer</p>
        <button className="nav-menu" type="button" onClick={() => setOpen(!open)}
          aria-expanded={open} aria-controls="portfolio-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <BsX /> : <BsList />}
        </button>
        <nav id="portfolio-navigation" className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {sections.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className={active === id ? "nav-link active" : "nav-link"}
              aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>
              <span className="nav-number" aria-hidden="true">{String(index).padStart(2, "0")}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a className="nav-mail" href="mailto:manavpatel.dev@gmail.com">Email <BsArrowUpRight /></a>
      </header>
    </>
  );
}

export function PortfolioHero() {
  return (
    <section id="hero" className="portfolio-hero">
      <p className="hero-profession">Software Engineer</p>
      <h1 className="hero-name"><span>Manav</span><span>Patel</span></h1>
      <p className="hero-disciplines">Backend · Machine Learning · Data · Systems · Cloud</p>
      <div className="hero-socials">
        <a href="https://www.linkedin.com/in/manavpat/" target="_blank" rel="noreferrer"><BsLinkedin /><span>LinkedIn</span><BsArrowUpRight /></a>
        <a href="https://github.com/mpat247" target="_blank" rel="noreferrer"><BsGithub /><span>GitHub</span><BsArrowUpRight /></a>
        <a href="mailto:manavpatel.dev@gmail.com"><BsEnvelope /><span>Email</span><BsArrowUpRight /></a>
      </div>
      <a className="hero-scroll" href="#experience">Experience <span aria-hidden="true">↓</span></a>
    </section>
  );
}
