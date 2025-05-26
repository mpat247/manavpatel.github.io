import React from "react";
import { Link } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./HeaderBar.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resumes", label: "Resumes" },
];

export default function HeaderBar() {
  return (
    <header className="header-bar">
      {/* 1️⃣  Name / logo */}
      <span className="header-title">Manav&nbsp;Patel</span>

      {/* 2️⃣  Navigation */}
      <ul className="header-nav">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <Link
              to={id}
              spy
              smooth
              offset={-70}
              duration={500}
              activeClass="active"
              className="nav-link"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 3️⃣  Social icons */}
      <div className="header-icons">
        <a
          href="https://www.linkedin.com/in/manavpat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/mpat247"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="icon" />
        </a>
      </div>
    </header>
  );
}
