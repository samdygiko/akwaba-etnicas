import Image from "next/image";

const COLLECTIONS = [
  {
    slug: "bags",
    label: "Bags",
    count: "Handbags & Totes",
    desc: "Woven and fabric bags in bold African patterns. Each bag a statement piece.",
    cover: "/images/bag-1.jpg",
    alt: "African handbag",
  },
  {
    slug: "outfits",
    label: "Garments",
    count: "Ready to Wear",
    desc: "Handcrafted clothing in authentic African textiles — ankara, kente and more.",
    cover: "/images/outfit-2.jpg",
    alt: "African garment",
  },
  {
    slug: "hats",
    label: "Hats",
    count: "Caps & Headwear",
    desc: "Handmade caps and hats in vibrant African prints and traditional materials.",
    cover: "/images/hat-3.jpg",
    alt: "African hat",
  },
  {
    slug: "fans",
    label: "Fans",
    count: "Hand Fans",
    desc: "Beautifully crafted African hand fans — decorative and functional statement pieces.",
    cover: "/images/fan-1.jpg",
    alt: "African hand fan",
  },
  {
    slug: "paintings",
    label: "Paintings",
    count: "Original Works",
    desc: "Original artworks from artists across the African continent. Oil, acrylic and mixed media.",
    cover: "/images/painting-1.jpg",
    alt: "African painting",
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
            Five worlds, one house.
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
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
        className="collections-grid"
      >
        {COLLECTIONS.map((col, i) => (
          <div
            key={col.slug}
            className="collection-card"
            style={{
              borderRight: i < 4 ? "1px solid var(--bone)" : "none",
            }}
          >
            {/* Cover image */}
            <div
              style={{
                overflow: "hidden",
                position: "relative",
                aspectRatio: "3 / 4",
              }}
            >
              <Image
                src={col.cover}
                alt={col.alt}
                fill
                style={{ objectFit: "cover" }}
                className="placeholder-img"
                sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 20vw"
              />
            </div>

            {/* Card text */}
            <div
              style={{
                padding: "1.25rem 1.25rem 1.75rem",
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
                  marginBottom: "0.4rem",
                }}
              >
                {col.count}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: "var(--ink)",
                  margin: "0 0 0.6rem 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {col.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.8rem",
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
        @media (max-width: 1000px) {
          .collections-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .collection-card:nth-child(3) { border-right: none !important; }
          .collection-card:nth-child(1),
          .collection-card:nth-child(2),
          .collection-card:nth-child(3) { border-bottom: 1px solid var(--bone); }
        }
        @media (max-width: 600px) {
          .collections-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .collection-card:nth-child(2n) { border-right: none !important; }
          .collection-card { border-bottom: 1px solid var(--bone) !important; }
        }
      `}</style>
    </section>
  );
}
