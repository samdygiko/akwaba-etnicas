const COLLECTIONS = [
  {
    slug: "paintings",
    label: "Paintings",
    count: "Original Works",
    desc: "Original artworks from artists across the African continent. Oil, acrylic and mixed media.",
    bg: "var(--clay)",
    accent: "var(--sun)",
  },
  {
    slug: "garments",
    label: "Garments",
    count: "Ready to Wear",
    desc: "Handcrafted clothing in authentic African textiles — ankara, kente, mudcloth and more.",
    bg: "var(--cocoa)",
    accent: "var(--cream)",
  },
  {
    slug: "handbags",
    label: "Handbags",
    count: "Statement Pieces",
    desc: "Woven and leather handbags in bold African patterns. Each bag a conversation starter.",
    bg: "var(--rust)",
    accent: "var(--bone)",
  },
  {
    slug: "headwraps",
    label: "Headwraps",
    count: "The Crown",
    desc: "The crown jewel of African womenswear. Vibrant colours, traditional techniques.",
    bg: "var(--ochre)",
    accent: "var(--ink)",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      style={{
        background: "var(--paper)",
        borderBottom: "1px solid var(--bone)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "4.5rem 2.5rem 3rem",
          borderBottom: "1px solid var(--bone)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--clay)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            What We Carry
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Four worlds, one house.
          </h2>
        </div>
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--clay)",
            textDecoration: "none",
            fontWeight: 500,
            borderBottom: "1px solid var(--clay)",
            paddingBottom: "2px",
          }}
        >
          Enquire about availability →
        </a>
      </div>

      {/* Collection grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "none",
        }}
        className="collections-grid"
      >
        {COLLECTIONS.map((col, i) => (
          <div
            key={col.slug}
            className="collection-card"
            style={{
              borderRight: i < 3 ? "1px solid var(--bone)" : "none",
              cursor: "default",
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                overflow: "hidden",
                position: "relative",
                aspectRatio: "3 / 4",
              }}
            >
              <div
                className="placeholder-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: col.bg,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-italiana), serif",
                    fontSize: "1.25rem",
                    color: col.accent,
                    opacity: 0.4,
                    letterSpacing: "0.05em",
                  }}
                >
                  {col.label}
                </span>
              </div>
            </div>

            {/* Card text */}
            <div
              style={{
                padding: "1.5rem 1.5rem 2rem",
                borderTop: "1px solid var(--bone)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--clay)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {col.count}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 400,
                  fontSize: "1.35rem",
                  color: "var(--ink)",
                  margin: "0 0 0.75rem 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {col.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--cocoa)",
                  margin: 0,
                }}
              >
                {col.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .collections-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .collection-card:nth-child(2) {
            border-right: none !important;
          }
          .collection-card:nth-child(1),
          .collection-card:nth-child(2) {
            border-bottom: 1px solid var(--bone);
          }
        }
        @media (max-width: 540px) {
          .collections-grid {
            grid-template-columns: 1fr !important;
          }
          .collection-card {
            border-right: none !important;
            border-bottom: 1px solid var(--bone) !important;
          }
        }
      `}</style>
    </section>
  );
}
