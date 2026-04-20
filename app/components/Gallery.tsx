// Placeholder gallery cells — replace backgrounds with real <Image> components
// when product photography is supplied.
const GALLERY_ITEMS = [
  { id: 1, bg: "var(--clay)", span: "span 2", label: "Ankara Garment" },
  { id: 2, bg: "var(--ochre)", span: "span 1", label: "Original Painting" },
  { id: 3, bg: "var(--cocoa)", span: "span 1", label: "Woven Handbag" },
  { id: 4, bg: "var(--rust)", span: "span 1", label: "Headwrap" },
  { id: 5, bg: "#6b3d2e", span: "span 2", label: "Mudcloth Garment" },
  { id: 6, bg: "var(--sun)", span: "span 1", label: "Statement Bag" },
  { id: 7, bg: "#3d2010", span: "span 1", label: "Acrylic on Canvas" },
  { id: 8, bg: "var(--clay)", span: "span 1", label: "Kente Wrap" },
  { id: 9, bg: "var(--cocoa)", span: "span 2", label: "Mixed Media" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--bone)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "4.5rem 2.5rem 3rem",
          borderBottom: "1px solid var(--bone)",
        }}
      >
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
          Selected Works
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
          Each piece, a continent.
        </h2>
      </div>

      {/* Irregular grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "260px",
          gap: "1px",
          background: "var(--bone)",
        }}
        className="gallery-grid"
      >
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            style={{
              gridColumn: item.span,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="placeholder-img"
              style={{
                position: "absolute",
                inset: 0,
                background: item.bg,
              }}
            />
            {/* Hover label */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                padding: "1.25rem",
                background: "linear-gradient(to top, rgba(42,26,15,0.55) 0%, transparent 50%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="gallery-label"
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .gallery-label {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 200px !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 240px !important;
          }
          .gallery-item {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
