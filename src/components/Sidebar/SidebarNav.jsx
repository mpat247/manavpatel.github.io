/* ─────────────────────────────────────────────────────────────
   Sidebar navigation, appears after hero, collapsible.
   ----------------------------------------------------------- */

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  BsPerson,
  BsBriefcase,
  BsMortarboard,
  BsCodeSlash,
  BsFolder,
  BsFileEarmarkText,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import "./SidebarNav.css";

const links = [
  { id: "about", label: "About", icon: <BsPerson /> },
  { id: "experience", label: "Experience", icon: <BsBriefcase /> },
  { id: "education", label: "Education", icon: <BsMortarboard /> },
  { id: "skills", label: "Skills", icon: <BsCodeSlash /> },
  { id: "projects", label: "Projects", icon: <BsFolder /> },
  { id: "resumes", label: "Resumes", icon: <BsFileEarmarkText /> },
];

export default function SidebarNav() {
  const [visible, setVisible] = useState(false);
  //   const [collapsed, setCollapsed] = useState(false);

  /* show sidebar once we’ve scrolled past (viewport height – 100) */
  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight - 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* helper for toggling collapse */

  return (
    <nav className={`side-nav ${visible ? "show" : ""}`}>
      {links.map(({ id, label, icon }) => (
        <Link
          key={id}
          to={id}
          spy
          smooth
          offset={-70}
          duration={500}
          className="side-link"
          activeClass="active"
        >
          {icon}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
