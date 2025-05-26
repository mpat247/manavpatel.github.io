import HeaderBar from "./components/Header/HeaderBar";
import SidebarNav from "./components/Sidebar/SidebarNav";
import HeroComponent from "./components/Hero/HeroComponent";
import AboutComponent from "./components/About/AboutComponent";
import ExperienceComponent from "./components/Experience/ExperienceComponent";
import EducationComponent from "./components/Education/EducationComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import ProjectsComponent from "./components/Projects/ProjectsComponent";
import ResumesComponent from "./components/Resumes/ResumesComponnent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/Footer/FooterComponent";

export default function App() {
  return (
    <>
      <HeaderBar />
      <SidebarNav />
      <main>
        <HeroComponent />
        <AboutComponent />
        <ExperienceComponent />
        <EducationComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <ResumesComponent />
        <ContactComponent />
      </main>
      <FooterComponent />
    </>
  );
}
