export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--paper)",
        borderTop: "1px solid var(--bone)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem",
          padding: "4rem 2.5rem",
          borderBottom: "1px solid var(--bone)",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-italiana), serif",
              fontSize: "2rem",
              color: "var(--ink)",
              display: "block",
              marginBottom: "1rem",
              letterSpacing: "0.03em",
            }}
          >
            Akwaba Etnicas
          </span>
          <p
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "var(--cocoa)",
              maxWidth: "320px",
            }}
          >
            African fashion &amp; art house. Paintings, garments,
            bags, fans and hats. Based in Abidjan, Côte d&apos;Ivoire.
          </p>
        </div>

        {/* Nav */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--clay)",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            Navigate
          </span>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { label: "Collections", href: "#collections" },
              { label: "Gallery", href: "#gallery" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--cocoa)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--clay)",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <a
              href="tel:+2250704854478"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.9rem",
                color: "var(--cocoa)",
                textDecoration: "none",
              }}
            >
              +225 07 04 85 44 78
            </a>
            <a
              href="mailto:akwabaakwabaethniques@gmail.com"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.9rem",
                color: "var(--cocoa)",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              akwabaakwabaethniques
              <br />
              @gmail.com
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083202807448"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.9rem",
                color: "var(--cocoa)",
                textDecoration: "none",
              }}
            >
              Facebook →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2.5rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: "0.75rem",
            color: "var(--clay)",
            letterSpacing: "0.04em",
          }}
        >
          © {year} Akwaba Etnicas. All rights reserved.
        </span>
        <a
          href="https://dygiko.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: "0.75rem",
            color: "var(--clay)",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          Site by Dygiko
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
