import "./ExperienceComponent.css";

const experienceItems = [
  {
    title: "Junior Software Engineer",
    location: "Oakville, Ontario, Canada",
    company: {
      name: "Cashly Inc.",
      url: "https://gocashly.io/",
    },
    period: "Nov 2024 – Present",
    skills:
      "Next.js · Node.js · PostgreSQL · AI-Driven Products · Full-Stack Development · End-to-End Delivery · Machine Learning",
  },
  {
    title: "ML Research Assistant",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Toronto Metropolitan Universtiy - CVIP Lab",
      url: "https://www.torontomu.ca/electrical-computer-biomedical/research/#!accordion-1578519133634-computer-vision-and-image-processing--cvip--laboratory",
    },
    period: "May 2025 – Aug 2025",
    skills:
      "PyTorch · CNNs · Transformers · Image Denoising · Medical Imaging · Model Evaluation ",
  },
  {
    title: "Graduate Teaching Assistant",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "Toronto Metropolitan University",
      url: "https://www.torontomu.ca",
    },
    period: "Sep 2024 – Apr 2025",
    skills:
      "Java · OOP · JUnit · Docker · Kubernetes · GCP · REST APIs · University Teaching",
  },
  {
    title: ".NET Software Developer Intern",
    location: "Toronto, Ontario, Canada",
    company: {
      name: "FGF Brands",
      url: "https://www.fgfbrands.com/",
    },
    period: "May 2023 – Aug 2023",
    skills:
      "C# · .NET Framework · ASP.NET MVC · SQL Server · Git · Microsoft Azure",
  },
  {
    title: "Backend Developer Intern",
    location: "Ottawa, Ontario, Canada",
    company: {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-ca/",
    },
    period: "Sep 2022 – Apr 2023",
    skills:
      "JavaScript · REST APIs · PostgreSQL · Express.js · Node.js · Git · Docker",
  },
];

export default function ExperienceComponent() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">
          <strong>Experience</strong>
        </h2>

        <ul className="timeline">
          {experienceItems.map((item, idx) => (
            <li
              key={item.title}
              className="timeline-item"
              data-aos={idx % 2 ? "fade-left" : "fade-right"}
            >
              <span className="timeline-badge">
                <i className={`fas fa-${item.icon}`} aria-hidden="true" />
              </span>

              <div className="timeline-panel">
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-location">{item.location}</h4>

                <span className="timeline-company">
                  <strong>
                    <a href={item.company.url} target="_blank" rel="noreferrer">
                      {item.company.name}
                    </a>
                  </strong>{" "}
                  | {item.period}
                </span>

                <p className="timeline-skills">
                  <strong>Skills:&nbsp;</strong>
                  {item.skills}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
