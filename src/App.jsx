import AboutComponent from "./components/About/AboutComponent";
import ExperienceComponent from "./components/Experience/ExperienceComponent";
import EducationComponent from "./components/Education/EducationComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import ProjectsComponent from "./components/Projects/ProjectsComponent";
import PublicationsComponent from "./components/Publications/PublicationsComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import { PortfolioNav, PortfolioHero } from "./PortfolioChrome";
import "./Portfolio.css";
import "./Theme.css";

export default function App() {
  return (
    <div className="portfolio-site">
      <PortfolioNav />
      <main id="main" tabIndex={-1} className="portfolio-main">
        <PortfolioHero />
        <AboutComponent />
        <ExperienceComponent />
        <SkillsComponent />
        <EducationComponent />
        <PublicationsComponent />
        <ProjectsComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </div>
  );
}
