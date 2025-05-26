/* ─────────────────────────────────────────────────────────────
   EducationComponent
   -------------------------------------------------------------
   Shows two education cards (MEng + BEng) and a tabbed grid of
   “Relevant Courses” (All · MEng · BEng).
   The tab system is a tiny React useState – no Bootstrap needed.
   ─────────────────────────────────────────────────────────── */

import { useState } from "react";
import "./EducationComponent.css";

/* ――― data -------------------------------------------------- */

const education = [
  {
    degree: "Master of Engineering (MEng)",
    program: "Electrical & Computer Engineering – AI",
    school: "Toronto Metropolitan University",
    url: "https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/",
    location: "Toronto · Ontario · Canada",
    period: "May 2024 – Aug 2025",
  },
  {
    degree: "Bachelor of Engineering (BEng)",
    program: "Computer Engineering – Software Option",
    school: "Toronto Metropolitan University",
    url: "https://www.torontomu.ca/programs/undergraduate/computer-engineering/",
    location: "Toronto · Ontario · Canada",
    period: "Sept 2019 – Apr 2024",
  },
];

/* all 20 courses, you can add/remove freely */
const courses = [
  /* ——— Graduate (MEng) ——— */
  {
    name: "Neural Networks",
    icon: "/images/neural-network.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "grad",
  },
  {
    name: "Deep Learning",
    icon: "/images/deep_learning.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "grad",
  },
  {
    name: "Neural Information Processing & Retrieval",
    icon: "/images/nlp.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "grad",
  },
  {
    name: "Secure Machine Learning",
    icon: "/images/mls.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "grad",
  },
  {
    name: "Advanced Data Engineering",
    icon: "/images/dba.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "grad",
  },
  {
    name: "Graph Mining",
    icon: "/images/gm.png",
    url: "https://www.torontomu.ca/graduate/datascience/courses/",
    track: "grad",
  },
  {
    name: "Text Mining",
    icon: "/images/tm.png",
    url: "https://www.torontomu.ca/graduate/datascience/courses/",
    track: "grad",
  },
  {
    name: "Spatial Data Analysis",
    icon: "/images/gis.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/environmental-applied-science-management/",
    track: "grad",
  },

  /* ——— Undergraduate (BEng) ——— */
  {
    name: "Intelligent Systems",
    icon: "/images/ml.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/ELE888_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Data Structures & Algorithms",
    icon: "/images/dsa.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE428_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Software Design & Architecture",
    icon: "/images/sda.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE692_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Distributed & Cloud Computing",
    icon: "/images/dcc.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE892_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Computer Vision",
    icon: "/images/cv.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/843/",
    track: "undergrad",
  },
  {
    name: "Software Testing",
    icon: "/images/st.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE891_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Software Requirement Analysis",
    icon: "/images/sra.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE691_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Software Project Management",
    icon: "/images/spm.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/714/",
    track: "undergrad",
  },
  {
    name: "Operating Systems",
    icon: "/images/os.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE628_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Computer Networks",
    icon: "/images/cn.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE768_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Network Security",
    icon: "/images/ns.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE817_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Digital Systems Engineering",
    icon: "/images/dse.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE758_course_outline.html",
    track: "undergrad",
  },
  {
    name: "Database Systems",
    icon: "/images/dbs.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/510/",
    track: "undergrad",
  },
];

/* ――― helper to filter courses ------------------------------------------- */
const filterCourses = (tab) =>
  tab === "all" ? courses : courses.filter((c) => c.track === tab);

/* ――― component ----------------------------------------------------------- */
export default function EducationComponent() {
  const [tab, setTab] = useState("all");

  return (
    <section id="education" className="education-section">
      <div className="edu-container">
        {/* ── Heading ───────────────────────────────────────────── */}
        <h2 className="edu-heading">
          <strong>Education</strong>
        </h2>

        {/* ── Two cards ─────────────────────────────────────────── */}
        <div className="edu-cards">
          {education.map((e) => (
            <a
              key={e.degree}
              href={e.url}
              className="edu-card"
              target="_blank"
              rel="noreferrer"
            >
              <h3>{e.degree}</h3>
              <h4>{e.program}</h4>
              <h5>{e.school}</h5>
              <p>{e.location}</p>
              <p>{e.period}</p>
            </a>
          ))}
        </div>

        {/* ── Relevant courses ─────────────────────────────────── */}
        <h3 className="courses-heading">
          <strong>Relevant Courses</strong>
        </h3>

        {/* tab buttons */}
        <div className="course-tabs">
          {[
            { id: "all", label: "All" },
            { id: "grad", label: "Graduate (MEng)" },
            { id: "undergrad", label: "Undergraduate (BEng)" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={tab === t.id ? "tab active" : "tab"}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* course grid */}
        <div className="course-grid">
          {filterCourses(tab).map((c) => (
            <a
              key={c.name}
              href={c.url}
              className="course-tile"
              target="_blank"
              rel="noreferrer"
            >
              <img src={c.icon} alt={c.name} />
              <span>{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
