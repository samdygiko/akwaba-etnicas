import Image from "next/image";

// All 19 product photos distributed across the gallery grid
// Layout: 3-column grid, some items span 2 columns for visual rhythm
const GALLERY_ITEMS = [
  { src: "/images/outfit-1.jpg",   alt: "African outfit",        label: "Garments",  span: 1 },
  { src: "/images/bag-2.jpg",      alt: "African handbag",       label: "Bags",      span: 1 },
  { src: "/images/painting-1.jpg", alt: "African painting",      label: "Paintings", span: 1 },
  { src: "/images/hat-2.jpg",      alt: "African hat",           label: "Hats",      span: 1 },
  { src: "/images/outfit-2.jpg",   alt: "African outfit",        label: "Garments",  span: 2 },
  { src: "/images/fan-1.jpg",      alt: "African hand fan",      label: "Fans",      span: 1 },
  { src: "/images/bag-3.jpg",      alt: "African tote bag",      label: "Bags",      span: 1 },
  { src: "/images/painting-2.jpg", alt: "African painting",      label: "Paintings", span: 1 },
  { src: "/images/hat-3.jpg",      alt: "African hat",           label: "Hats",      span: 2 },
  { src: "/images/bag-4.jpg",      alt: "African bag",           label: "Bags",      span: 1 },
  { src: "/images/outfit-3.jpg",   alt: "African garment",       label: "Garments",  span: 1 },
  { src: "/images/fan-2.jpg",      alt: "African hand fan",      label: "Fans",      span: 1 },
  { src: "/images/painting-3.jpg", alt: "African painting",      label: "Paintings", span: 1 },
  { src: "/images/hat-4.jpg",      alt: "African hat",           label: "Hats",      span: 1 },
  { src: "/images/painting-4.jpg", alt: "African painting",      label: "Paintings", span: 1 },
  { src: "/images/hat-5.jpg",      alt: "African hat",           label: "Hats",      span: 1 },
  { src: "/images/bag-1.jpg",      alt: "African handbag",       label: "Bags",      span: 2 },
  { src: "/images/hat-6.jpg",      alt: "African hat",           label: "Hats",      span: 1 },
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
        <span
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--clay)",
            fontWeight: 500,
          }}
        >
          19 works
        </span>
      </div>

      {/* Gallery grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "320px",
          gap: "1px",
          background: "var(--bone)",
        }}
        className="gallery-grid"
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              gridColumn: `span ${item.span}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes={item.span === 2
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              }
            />
            {/* Hover label */}
            <div className="gallery-label">
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
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
        .gallery-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.25rem;
          background: linear-gradient(to top, rgba(42,26,15,0.6) 0%, transparent 45%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-label { opacity: 1; }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 220px !important;
          }
          .gallery-item[style*="span 2"] { grid-column: span 2 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 260px !important;
          }
          .gallery-item { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
