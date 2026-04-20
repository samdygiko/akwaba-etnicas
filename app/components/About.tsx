export default function About() {
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
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ochre)",
              marginBottom: "2rem",
              display: "block",
            }}
          >
            Our Story
          </span>

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
            &ldquo;Akwaba&rdquo; — welcome, in the Akan
            tradition. An invitation to enter a space
            where African artistry meets everyday life.
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
              margin: "0 0 1.75rem 0",
              fontWeight: 400,
            }}
          >
            Rooted in the rich textile and painting traditions of the African
            continent, Akwaba Etnicas is a curated house of fashion and fine
            art. From hand-dyed garments and woven handbags to original
            paintings and the crown jewel of African womenswear — the headwrap
            — every piece carries a story.
          </p>

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
            Based in the heart of Abidjan, we bring the colour, craft and
            spirit of Africa to anyone who believes that what you wear and
            what you hang on your walls should mean something.
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
              Find Us
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
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-left {
            border-right: none !important;
            border-bottom: 1px solid var(--clay) !important;
            padding: 3rem 1.5rem !important;
          }
          .about-right {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
