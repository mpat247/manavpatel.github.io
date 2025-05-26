/* ─────────────────────────────────────────────────────────────
   FooterComponent
   -------------------------------------------------------------
   • Social icons (LinkedIn / GitHub / Resume)
   • Copyright line
   • “Back to Top” FAB appears after you scroll ~300 px
   • No external libs beyond react-icons
   ─────────────────────────────────────────────────────────── */

import { useEffect, useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFileEarmarkText,
  BsChevronUp,
} from "react-icons/bs";
import "./FooterComponent.css";

export default function FooterComponent() {
  /* show / hide back-to-top button */
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      {/* ─── Social icons ─── */}
      <ul className="footer-social">
        <li>
          <a
            href="https://www.linkedin.com/in/manavpat/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>

        <li>
          <a href="https://github.com/mpat247" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>

        <li>
          <a href="#resumes">
            <BsFileEarmarkText />
          </a>
        </li>
      </ul>

      {/* ─── Copyright ─── */}
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Manav Patel.
      </p>

      {/* ─── Back-to-top button ─── */}
      {showTop && (
        <button
          className="back-to-top"
          aria-label="Back to top"
          onClick={scrollTop}
        >
          <BsChevronUp />
        </button>
      )}
    </footer>
  );
}
