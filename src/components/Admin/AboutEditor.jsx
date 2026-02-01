import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getAboutData, updateAboutData } from "../../firebase/aboutService";
import "./AboutEditor.css";

export default function AboutEditor() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    loadAboutData();
  }, []);

  const loadAboutData = async () => {
    try {
      const data = await getAboutData();
      if (data) {
        setContent(data.content || "");
        setIsVisible(data.isVisible !== false); // Default to true if not set
        if (data.updatedAt) {
          setLastSaved(data.updatedAt.toDate());
        }
      }
    } catch (error) {
      setMessage("Error loading about data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");

    try {
      await updateAboutData({
        content,
        isVisible,
      });
      setMessage("About section updated successfully!");
      setLastSaved(new Date());
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error saving: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="about-editor-loading">
        <div className="loading-spinner"></div>
        <p>Loading about data...</p>
      </div>
    );
  }

  return (
    <div className="about-editor">
      <div className="editor-header">
        <h2>Edit About Me Section</h2>
        <div className="editor-controls">
          <label className="visibility-toggle">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
            />
            <span>Visible on public site</span>
          </label>
          <button onClick={handleSave} disabled={saving} className="save-btn">
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`message ${
            message.includes("Error") ? "error" : "success"
          }`}
        >
          {message}
        </div>
      )}

      {lastSaved && (
        <div className="last-saved">
          Last saved: {lastSaved.toLocaleString()}
        </div>
      )}

      <div className="editor-container">
        <div className="editor-instructions">
          <h4>Rich Text Editor Instructions:</h4>
          <ul>
            <li>
              <strong>Bold text:</strong> **text** or use toolbar
            </li>
            <li>
              <strong>Links:</strong> [link text](https://example.com)
            </li>
            <li>
              <strong>Email links:</strong> [email me](mailto:your@email.com)
            </li>
            <li>
              <strong>Italic text:</strong> *text* or use toolbar
            </li>
            <li>
              <strong>Line breaks:</strong> Double space at end of line
            </li>
          </ul>
        </div>

        <MDEditor
          value={content}
          onChange={setContent}
          preview="edit"
          height={400}
          data-color-mode="dark"
          hideToolbar={false}
        />

        <div className="preview-section">
          <h4>Preview (How it will appear on your site):</h4>
          <div className="about-preview">
            <MDEditor.Markdown
              source={content}
              style={{
                whiteSpace: "pre-wrap",
                color: "#ffffff",
                backgroundColor: "#161a1f",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #444",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
