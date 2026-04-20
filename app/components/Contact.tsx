"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Wire to /api/contact (Resend) when ready
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--clay)",
    color: "var(--cream)",
    fontSize: "0.9375rem",
    padding: "0.75rem 0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-archivo), sans-serif",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ochre)",
    display: "block",
    marginBottom: "0.35rem",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
        borderBottom: "1px solid var(--cocoa)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="contact-grid"
      >
        {/* Left — Info */}
        <div
          style={{
            borderRight: "1px solid var(--cocoa)",
            padding: "5rem 3.5rem 5rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="contact-left"
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ochre)",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Get In Touch
            </span>

            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                color: "var(--cream)",
                margin: "0 0 2.5rem 0",
                letterSpacing: "-0.01em",
              }}
            >
              Come and see us.
              <br />
              Or send a word.
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Address */}
            <div>
              <span style={labelStyle}>Address</span>
              <address
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--bone)",
                  fontStyle: "normal",
                }}
              >
                C/Tirant lo Blanc, 6 Loc. 2-3 27A
                <br />
                03590 Altea, Alicante, Spain
              </address>
            </div>

            {/* Phone */}
            <div>
              <span style={labelStyle}>Phone</span>
              <a
                href="tel:+2250704854478"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--bone)",
                  textDecoration: "none",
                }}
              >
                +225 07 04 85 44 78
              </a>
            </div>

            {/* Email */}
            <div>
              <span style={labelStyle}>Email</span>
              <a
                href="mailto:akwabaakwabaethniques@gmail.com"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--bone)",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                akwabaakwabaethniques@gmail.com
              </a>
            </div>

            {/* Facebook */}
            <div>
              <span style={labelStyle}>Follow</span>
              <a
                href="https://www.facebook.com/profile.php?id=100083202807448"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--bone)",
                  textDecoration: "none",
                }}
              >
                Facebook →
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div
          style={{
            padding: "5rem 2.5rem 5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="contact-right"
        >
          {status === "sent" ? (
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginBottom: "0.75rem",
                }}
              >
                Thank you.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--bone)",
                  lineHeight: 1.65,
                }}
              >
                We&apos;ve received your message and will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you interested in?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--sun)",
                  }}
                >
                  Something went wrong — please try emailing us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  alignSelf: "flex-start",
                  background: "var(--cream)",
                  color: "var(--ink)",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: status === "sending" ? "default" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-left {
            border-right: none !important;
            border-bottom: 1px solid var(--cocoa) !important;
            padding: 3rem 1.5rem !important;
          }
          .contact-right {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
