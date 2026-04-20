"use client";

import { useState } from "react";
import { aboutTranslations, type Lang } from "@/app/lib/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export default function About() {
  const [lang, setLang] = useState<Lang>("en");
  const t = aboutTranslations[lang];

  return (
    <section
      id="about"
      style={{
        background: "var(--cocoa)",
        borderBottom: "1px solid var(--clay)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "540px",
        }}
        className="about-grid"
      >
        {/* Left — Pull quote */}
        <div
          style={{
            borderRight: "1px solid var(--clay)",
            padding: "5rem 3.5rem 5rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="about-left"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ochre)",
              }}
            >
              {t.label}
            </span>

            {/* Language switcher */}
            <div style={{ display: "flex", gap: "0.25rem" }}>
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    fontWeight: lang === code ? 700 : 400,
                    color: lang === code ? "var(--ochre)" : "rgba(235,224,203,0.35)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.25rem 0.4rem",
                    textTransform: "uppercase",
                    transition: "color 0.15s",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              lineHeight: 1.2,
              color: "var(--cream)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {t.pullQuote}
          </blockquote>
        </div>

        {/* Right — Body text */}
        <div
          style={{
            padding: "5rem 2.5rem 5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="about-right"
        >
          <p
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
              color: "var(--bone)",
              margin: "0 0 2.5rem 0",
              fontWeight: 400,
            }}
          >
            {t.body}
          </p>

          {/* Location detail */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--clay)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ochre)",
              }}
            >
              {t.findUs}
            </span>
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.9375rem",
                color: "var(--cream)",
                lineHeight: 1.6,
              }}
            >
              8233+95J Marché Belleville (Treichville)
              <br />
              Abidjan, Côte d&apos;Ivoire
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-left {
            border-right: none !important;
            border-bottom: 1px solid var(--clay) !important;
            padding: 3rem 1.5rem !important;
          }
          .about-right { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
