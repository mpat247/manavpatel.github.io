/* ─────────────────────────────────────────────────────────────
   ContactComponent
   -------------------------------------------------------------
   • Simple Name / Email / Message form
   • On submit it triggers a mailto: link (no backend needed)
   • Fully controlled inputs, minimal validation
   ─────────────────────────────────────────────────────────── */

import { useState } from "react";
import "./ContactComponent.css";

export default function ContactComponent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.name || !form.email || !form.message) return;

    const mailto = `mailto:manav1.patel@torontomu.ca
           ?subject=Portfolio%20Contact%20-%20${encodeURIComponent(form.name)}
           &body=${encodeURIComponent(
             form.message + "\n\nFrom: " + form.email
           )}`;

    window.location.href = mailto.replace(/\s/g, "");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          <strong>Contact&nbsp;Me</strong>
        </h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="textarea-label">
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Send&nbsp;Message
          </button>
        </form>
      </div>
    </section>
  );
}
