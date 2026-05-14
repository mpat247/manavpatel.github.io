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
    degree: "Master of Science (MS)",
    program: "Computer Science",
    specialization: "Computing Systems (OMSCS)",
    school: "Georgia Institute of Technology",
    url: "https://www.omscs.gatech.edu/specialization-computing-systems",
    period: "Incoming Jam 2027",
  },
  {
    degree: "Master of Engineering (MEng)",
    program: "Electrical & Computer Engineering",
    specialization: "Artificial Intelligence",
    school: "Toronto Metropolitan University",
    url: "https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/",
    location: "Toronto · Ontario · Canada",
    period: "May 2024 – Dec 2025",
  },
  {
    degree: "Bachelor of Engineering (BEng)",
    program: "Computer Engineering",
    specialization: "Software Engineering",
    school: "Toronto Metropolitan University",
    url: "https://www.torontomu.ca/programs/undergraduate/computer-engineering/",
    location: "Toronto · Ontario · Canada",
    period: "Sept 2019 – Apr 2024",
  },
];

/* course list */
const courses = [
  /* ——— Master of Science (MS) ——— */
  {
    name: "Advanced Operating Systems",
    icon: "/images/aopsys.png",
    url: "https://omscs.gatech.edu/cs-6210-advanced-operating-systems",
    track: "msc",
  },
  {
    name: "High-Performance Computer Architecture",
    icon: "/images/hpca.jpg",
    url: "https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture",
    track: "msc",
  },
  {
    name: "Database System Implementation",
    icon: "/images/dsi.avif",
    url: "https://omscs.gatech.edu/cs-6422-database-system-implementation",
    track: "msc",
  },
  {
    name: "GPU Hardware and Software",
    icon: "/images/gpuhs.png",
    url: "https://omscs.gatech.edu/cs-7295-gpu-hardware-and-software",
    track: "msc",
  },
  {
    name: "High-Performance Computing",
    icon: "/images/hpc.svg",
    url: "https://omscs.gatech.edu/cse-6220-intro-high-performance-computing",
    track: "msc",
  },
  {
    name: "Compilers",
    icon: "/images/compilers.png",
    url: "https://omscs.gatech.edu/cs-8803-o08-compilers-theory-and-practice",
    track: "msc",
  },
  {
    name: "Reinforcement Learning",
    icon: "/images/rl.png",
    url: "https://omscs.gatech.edu/cs-7642-reinforcement-learning",
    track: "msc",
  },
  {
    name: "Robotics",
    icon: "/images/robotics.png",
    url: "https://omscs.gatech.edu/cs-7638-robotics-ai-techniques",
    track: "msc",
  },
  {
    name: "Research",
    icon: "/images/research.webp",
    url: "https://omscs.gatech.edu/cs-8803-o24-intro-research",
    track: "msc",
  },

  /* ——— Graduate (MEng) ——— */
  {
    name: "Neural Networks",
    icon: "/images/neural-network.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "meng",
  },
  {
    name: "Deep Learning",
    icon: "/images/deep_learning.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "meng",
  },
  {
    name: "Neural Information Processing & Retrieval",
    icon: "/images/nlp.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "meng",
  },
  {
    name: "Secure Machine Learning",
    icon: "/images/mls.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "meng",
  },
  {
    name: "Advanced Data Engineering",
    icon: "/images/dba.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/electrical-computer-engineering/#accordion-1600184468068-course-listings",
    track: "meng",
  },
  {
    name: "Graph Mining",
    icon: "/images/gm.png",
    url: "https://www.torontomu.ca/graduate/datascience/courses/",
    track: "meng",
  },
  {
    name: "Text Mining",
    icon: "/images/tm.png",
    url: "https://www.torontomu.ca/graduate/datascience/courses/",
    track: "meng",
  },
  {
    name: "Spatial Data Analysis",
    icon: "/images/gis.png",
    url: "https://www.torontomu.ca/graduate/calendar/programs-and-courses/environmental-applied-science-management/",
    track: "meng",
  },

  /* ——— Undergraduate (BEng) ——— */
  {
    name: "Intelligent Systems",
    icon: "/images/ml.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/ELE888_course_outline.html",
    track: "beng",
  },
  {
    name: "Data Structures & Algorithms",
    icon: "/images/dsa.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE428_course_outline.html",
    track: "beng",
  },
  {
    name: "Software Design & Architecture",
    icon: "/images/sda.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE692_course_outline.html",
    track: "beng",
  },
  {
    name: "Distributed & Cloud Computing",
    icon: "/images/dcc.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE892_course_outline.html",
    track: "beng",
  },
  {
    name: "Computer Vision",
    icon: "/images/cv.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/843/",
    track: "beng",
  },
  {
    name: "Software Testing",
    icon: "/images/st.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE891_course_outline.html",
    track: "beng",
  },
  {
    name: "Software Requirement Analysis",
    icon: "/images/sra.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE691_course_outline.html",
    track: "beng",
  },
  {
    name: "Software Project Management",
    icon: "/images/spm.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/714/",
    track: "beng",
  },
  {
    name: "Operating Systems",
    icon: "/images/os.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE628_course_outline.html",
    track: "beng",
  },
  {
    name: "Computer Networks",
    icon: "/images/cn.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE768_course_outline.html",
    track: "beng",
  },
  {
    name: "Network Security",
    icon: "/images/ns.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE817_course_outline.html",
    track: "beng",
  },
  {
    name: "Digital Systems Engineering",
    icon: "/images/dse.png",
    url: "https://www.ecb.torontomu.ca/undergraduate/outlines/COE758_course_outline.html",
    track: "beng",
  },
  {
    name: "Database Systems",
    icon: "/images/dbs.png",
    url: "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/510/",
    track: "beng",
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
        <div className="edu-header">
          <h2 className="edu-heading">
            <strong>Education</strong>
          </h2>
        </div>

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
              <p className="edu-specialization">
                <strong>Specialization:&nbsp;</strong>
                {e.specialization}
              </p>
              <h5>{e.school}</h5>
              <p>{e.location}</p>
              <p>{e.period}</p>
            </a>
          ))}
        </div>

        <div className="courses-panel">
          <h3 className="courses-heading">
            <strong>Relevant Courses</strong>
          </h3>

          <div className="course-tabs">
            {[
              { id: "all", label: "All" },
              { id: "msc", label: "MSc" },
              { id: "meng", label: "MEng" },
              { id: "beng", label: "BEng" },
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
      </div>
    </section>
  );
}
