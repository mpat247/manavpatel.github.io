import { useState } from "react";
import AboutEditor from "./AboutEditor";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: "👤" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "💻" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <div className="admin-dashboard">
      {/* Navigation Tabs */}
      <div className="admin-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="admin-content">
        {activeTab === "about" && <AboutEditor />}
        {activeTab === "experience" && (
          <div>Experience Editor (Coming Soon)</div>
        )}
        {activeTab === "education" && <div>Education Editor (Coming Soon)</div>}
        {activeTab === "skills" && <div>Skills Editor (Coming Soon)</div>}
        {activeTab === "projects" && <div>Projects Editor (Coming Soon)</div>}
        {activeTab === "contact" && <div>Contact Editor (Coming Soon)</div>}
      </div>
    </div>
  );
}
