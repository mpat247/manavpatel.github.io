import "./App.css";
import SidebarNav from "./components/Sidebar/SidebarNav";
import HeroComponent from "./components/Hero/HeroComponent";
import AboutComponent from "./components/About/AboutComponent";
import ExperienceComponent from "./components/Experience/ExperienceComponent";
import EducationComponent from "./components/Education/EducationComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import ProjectsComponent from "./components/Projects/ProjectsComponent";
import PublicationsComponent from "./components/Publications/PublicationsComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/Footer/FooterComponent";

export default function App() {
  return (
    <div className="app-shell">
      <SidebarNav />
      <main className="dashboard-main">
        <HeroComponent />
        <AboutComponent />
        <ExperienceComponent />
        <EducationComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <PublicationsComponent />
        {/* <ResumesComponent /> */}
        <ContactComponent />
        <FooterComponent />
      </main>
    </div>
  );
}
