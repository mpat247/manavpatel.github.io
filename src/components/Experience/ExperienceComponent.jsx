import "./ExperienceComponent.css";

const experienceItems = [
  {
    title: "Software Engineer (Full-Time)",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "June 2026 – Present",
    team: "Naval Systems",
    // skills:
    //   "Software Development · Data Integrations · Data Engineering · OneStream ",
  },
  {
    title: "Intermediate Application Developer (Contract)",
    location: "Guelph, Ontario, Canada",
    company: {
      name: "Linamar Corp.",
      url: "https://www.linamar.com//",
    },
    period: "Aug 2025 – May 2026",
    team: "Financial Systems",
    skills:
      "Software Development · Data Integrations · Data Engineering · OneStream ",
  },
  {
    title: "ML Research Assistant (Thesis)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "CVIP Lab – Toronto Metropolitan University",
      url: "https://www.torontomu.ca/electrical-computer-biomedical/research/#!accordion-1578519133634-computer-vision-and-image-processing--cvip--laboratory",
    },
    period: "May 2025 – Present",
    team: "Computer Vision & Image Processing (CVIP) Lab",
    skills:
      "Machine Learning · Image Processing · Computer Vision · Medical Imaging",
  },
  {
    title: "AI Agent Developer – NLP & Mental Health (Volunteer)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Unity Health Toronto",
      url: "https://unityhealth.to/",
    },
    period: "Oct 2025 - Jan 2026",
    skills: "Data Science · NLP · AI Agents · Mental Health Research",
  },
  {
    title: "Software Engineer (Part-Time)",
    location: "Oakville, Ontario, Canada",
    company: {
      name: "Cashly Inc.",
      url: "https://gocashly.io/",
    },
    period: "Sept 2024 – Feb 2026",
    team: "Mortgage Tech Services",
    skills:
      "Full-Stack Development · Artificial Intelligence · SaaS · Start-up",
  },
  {
    title: "Graduate Teaching Assistant (Part-Time)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Toronto Metropolitan University",
      url: "https://www.torontomu.ca",
    },
    period: "Sep 2024 – Apr 2025",
    skills: "Software Systems · Software Architecture & Design",
  },
  {
    title: ".NET Software Developer (Internship)",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "FGF Brands",
      url: "https://www.fgfbrands.com/",
    },
    period: "May 2023 – Aug 2023",
    team: "Enablement Operations",
    skills: "Full Stack Development · DevOps · Automation",
  },
  {
    title: "Backend Developer (Internship)",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "Sep 2022 – Apr 2023",
    team: "Rotary & Mission Systems - Training & Sustainment",
    skills: "Backend Development · Relational Databases · NLP",
  },
];

export default function ExperienceComponent() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-heading">
            <strong>Experience</strong>
          </h2>
        </div>

        <ul className="career-track">
          {experienceItems.map((item, idx) => (
            <li key={item.title} className="career-item" data-aos="fade-up">
              <div className="career-meta">
                <p className="career-period">{item.period}</p>
                <h3 className="career-company">
                  <a href={item.company.url} target="_blank" rel="noreferrer">
                    {item.company.name}
                  </a>
                </h3>
                <p className="career-location">{item.location}</p>
              </div>

              <div className="career-details">
                <h4 className="career-title">{item.title}</h4>
                <div className="career-extra">
                  {item.team ? (
                    <p className="career-extra-row">
                      <strong>Team:&nbsp;</strong>
                      <span>{item.team}</span>
                    </p>
                  ) : null}

                  {item.skills ? (
                    <p className="career-extra-row">
                      <strong>Skills:&nbsp;</strong>
                      <span>{item.skills}</span>
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
