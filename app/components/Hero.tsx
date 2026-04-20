export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "calc(100vh - 68px)",
          background: "var(--paper)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid var(--bone)",
        }}
        className="hero-grid"
      >
        {/* Left — Editorial copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 3rem 5rem 2.5rem",
            borderRight: "1px solid var(--bone)",
          }}
          className="hero-left"
        >
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--clay)",
              marginBottom: "1.75rem",
              display: "block",
            }}
          >
            African Fashion &amp; Art House — Altea, Spain
          </span>

          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
              lineHeight: 1.05,
              color: "var(--ink)",
              margin: "0 0 2rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            Art you carry.
            <br />
            Heritage
            <br />
            you wear.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--cocoa)",
              maxWidth: "420px",
              margin: "0 0 2.75rem 0",
              fontWeight: 400,
            }}
          >
            Paintings, garments, handbags and headwraps —
            each piece a story from the continent, worn and lived in.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#collections"
              style={{
                display: "inline-block",
                padding: "1rem 2.25rem",
                background: "var(--ink)",
                color: "var(--paper)",
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Explore the Collection
            </a>
            <a
              href="#about"
              style={{
                display: "inline-block",
                padding: "1rem 2.25rem",
                border: "1px solid var(--cocoa)",
                color: "var(--cocoa)",
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Right — Placeholder images */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "3fr 2fr",
            gridTemplateColumns: "3fr 2fr",
            gap: "1px",
            background: "var(--bone)",
            overflow: "hidden",
          }}
          className="hero-right"
        >
          {/* Main hero image — spans both rows in first col */}
          <div
            style={{
              gridRow: "1 / 3",
              background: "var(--cocoa)",
              overflow: "hidden",
              position: "relative",
            }}
            className="placeholder-img"
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                padding: "1.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-italiana), serif",
                  fontSize: "1rem",
                  color: "rgba(250,244,230,0.5)",
                  letterSpacing: "0.06em",
                }}
              >
                New Collection
              </span>
            </div>
          </div>

          {/* Top right */}
          <div
            style={{
              background: "var(--clay)",
              overflow: "hidden",
            }}
            className="placeholder-img"
          />

          {/* Bottom right */}
          <div
            style={{
              background: "var(--ochre)",
              overflow: "hidden",
              position: "relative",
            }}
            className="placeholder-img"
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-italiana), serif",
                  fontSize: "0.875rem",
                  color: "rgba(42,26,15,0.45)",
                  letterSpacing: "0.06em",
                }}
              >
                Headwraps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div
        style={{
          background: "var(--ink)",
          borderBottom: "1px solid var(--cocoa)",
          padding: "0.9rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          <div className="marquee-inner">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--bone)",
                  marginRight: "0",
                }}
              >
                Paintings&nbsp;&nbsp;·&nbsp;&nbsp;
                Garments&nbsp;&nbsp;·&nbsp;&nbsp;
                Handbags&nbsp;&nbsp;·&nbsp;&nbsp;
                Headwraps&nbsp;&nbsp;·&nbsp;&nbsp;
                Altea, Spain&nbsp;&nbsp;·&nbsp;&nbsp;
                African Art House&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            display: none !important;
          }
          .hero-left {
            border-right: none !important;
            padding: 3.5rem 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
