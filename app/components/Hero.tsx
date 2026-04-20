import Image from "next/image";

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
            African Fashion &amp; Art House — Abidjan, Côte d&apos;Ivoire
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
            Paintings, garments, bags, fans and hats —
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

        {/* Right — Real product photos */}
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
          {/* Main hero image */}
          <div
            style={{
              gridRow: "1 / 3",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/outfit-1.jpg"
              alt="Akwaba Etnicas — African garment"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="(max-width: 768px) 0px, 30vw"
            />
          </div>

          {/* Top right */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/images/bag-1.jpg"
              alt="African handbag"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 0px, 20vw"
            />
          </div>

          {/* Bottom right */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/images/hat-1.jpg"
              alt="African hat"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 0px, 20vw"
            />
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
                }}
              >
                Paintings&nbsp;&nbsp;·&nbsp;&nbsp;
                Garments&nbsp;&nbsp;·&nbsp;&nbsp;
                Bags&nbsp;&nbsp;·&nbsp;&nbsp;
                Fans&nbsp;&nbsp;·&nbsp;&nbsp;
                Hats&nbsp;&nbsp;·&nbsp;&nbsp;
                Abidjan, Côte d&apos;Ivoire&nbsp;&nbsp;·&nbsp;&nbsp;
                African Art House&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .hero-left { border-right: none !important; padding: 3.5rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
