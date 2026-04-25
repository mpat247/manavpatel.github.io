import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  BsList,
  BsX,
  BsHouseDoor,
  BsPerson,
  BsBriefcase,
  BsMortarboard,
  BsCodeSlash,
  BsFolder,
  BsJournalText,
  BsEnvelope,
} from "react-icons/bs";
import "./SidebarNav.css";

const links = [
  { id: "hero", label: "Intro", icon: <BsHouseDoor /> },
  { id: "about", label: "About", icon: <BsPerson /> },
  { id: "experience", label: "Experience", icon: <BsBriefcase /> },
  { id: "education", label: "Education", icon: <BsMortarboard /> },
  { id: "skills", label: "Skills", icon: <BsCodeSlash /> },
  { id: "projects", label: "Projects", icon: <BsFolder /> },
  { id: "publications", label: "Publications", icon: <BsJournalText /> },
  { id: "contact", label: "Contact", icon: <BsEnvelope /> },
];

export default function SidebarNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <button
        className="mobile-menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <BsX /> : <BsList />}
      </button>

      <nav className={`side-nav ${mobileOpen ? "open" : ""}`}>
        <div className="side-identity">
          <h1>Manav Patel</h1>
          <p>Software Engineer</p>
        </div>

        <div className="side-links">
          {links.map(({ id, label, icon }) => (
            <Link
              key={id}
              to={id}
              spy
              smooth
              offset={-20}
              duration={450}
              className="side-link"
              activeClass="active"
              onClick={() => setMobileOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
