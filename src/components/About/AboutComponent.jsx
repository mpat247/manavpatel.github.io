/* src/components/About/AboutComponent.jsx */
import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getAboutData } from "../../firebase/aboutService";
import "./AboutComponent.css";

export default function AboutComponent() {
  console.log('🚀 [AboutComponent] Component initializing...');
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔄 [AboutComponent] useEffect triggered - calling loadAboutData');
    loadAboutData();
  }, []);

  const loadAboutData = async () => {
    console.log('🔄 [AboutComponent] Starting to load about data...');
    
    try {
      console.log('📡 [AboutComponent] Calling getAboutData() from Firebase...');
      const data = await getAboutData();
      
      console.log('📥 [AboutComponent] Firebase response received:', data);
      
      if (data && data.isVisible) {
        console.log('✅ [AboutComponent] Using FIREBASE DATA - isVisible: true');
        console.log('📄 [AboutComponent] Content preview:', data.content?.substring(0, 100) + '...');
        setAboutData(data);
      } else if (data && !data.isVisible) {
        console.log('👁️ [AboutComponent] Firebase data exists but isVisible: false - using FALLBACK');
        setAboutData({
          content: `I'm **Manav Patel**, a recent [**Software Engineering**](https://www.torontomu.ca/calendar/2024-2025/programs/feas/computer_eng/) graduate now pursuing an [**MEng in Artificial Intelligence**](https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/) at Toronto Metropolitan University.

I've gained over a year of hands-on experience through internships at [Lockheed Martin](https://www.lockheedmartin.com/en-ca/) and [FGF Brands](https://www.fgfbrands.com/). Currently, I'm a Junior Software Engineer at [Cashly Inc.](https://www.linkedin.com/company/gocashly/)

I'm actively seeking *new-grad/junior/entry-level* opportunities in backend development, machine learning, or data engineering.

Feel free to reach me at [manav1.patel@torontomu.ca](mailto:manav1.patel@torontomu.ca).`,
        });
      } else {
        console.log('📭 [AboutComponent] No Firebase data found - using FALLBACK content');
        setAboutData({
          content: `I'm **Manav Patel**, a recent [**Software Engineering**](https://www.torontomu.ca/calendar/2024-2025/programs/feas/computer_eng/) graduate now pursuing an [**MEng in Artificial Intelligence**](https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/) at Toronto Metropolitan University.

I've gained over a year of hands-on experience through internships at [Lockheed Martin](https://www.lockheedmartin.com/en-ca/) and [FGF Brands](https://www.fgfbrands.com/). Currently, I'm a Junior Software Engineer at [Cashly Inc.](https://www.linkedin.com/company/gocashly/)

I'm actively seeking *new-grad/junior/entry-level* opportunities in backend development, machine learning, or data engineering.

Feel free to reach me at [manav1.patel@torontomu.ca](mailto:manav1.patel@torontomu.ca).`,
        });
      }
    } catch (error) {
      console.error("❌ [AboutComponent] Error loading about data:", error);
      console.log('🔄 [AboutComponent] Firebase failed - using FALLBACK content due to error');
      setAboutData({
        content: `I'm **Manav Patel**, a recent [**Software Engineering**](https://www.torontomu.ca/calendar/2024-2025/programs/feas/computer_eng/) graduate now pursuing an [**MEng in Artificial Intelligence**](https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/) at Toronto Metropolitan University.

I've gained over a year of hands-on experience through internships at [Lockheed Martin](https://www.lockheedmartin.com/en-ca/) and [FGF Brands](https://www.fgfbrands.com/). Currently, I'm a Junior Software Engineer at [Cashly Inc.](https://www.linkedin.com/company/gocashly/)

I'm actively seeking *new-grad/junior/entry-level* opportunities in backend development, machine learning, or data engineering.

Feel free to reach me at [manav1.patel@torontomu.ca](mailto:manav1.patel@torontomu.ca).`,
      });
    } finally {
      console.log('🏁 [AboutComponent] Loading complete, setting loading: false');
      setLoading(false);
    }
  };

  if (loading) {
    console.log('⏳ [AboutComponent] Still loading - showing loading state');
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-heading">
            <strong>About&nbsp;Me</strong>
          </h2>
          <div className="about-loading">Loading...</div>
        </div>
      </section>
    );
  }

  if (!aboutData) {
    console.log('🚫 [AboutComponent] No aboutData - not rendering section');
    return null; // Don't render if not visible or no data
  }

  console.log('✅ [AboutComponent] Rendering section with data:', aboutData?.content?.substring(0, 50) + '...');

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ── heading ───────────────────────────────────────── */}
        <h2 className="about-heading">
          <strong>About&nbsp;Me</strong>
        </h2>

        {/* ── main text ─────────────────────────────────────── */}
        <div className="about-text">
          <MDEditor.Markdown
            source={aboutData.content}
            style={{
              backgroundColor: "transparent",
              color: "inherit",
            }}
          />
        </div>
      </div>
    </section>
  );
}
