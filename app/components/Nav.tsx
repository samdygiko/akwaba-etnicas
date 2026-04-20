export default function Nav() {
  const links = [
    { label: "Collections", href: "#collections" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--paper)",
        borderBottom: "1px solid var(--bone)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "68px",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-italiana), serif",
          fontSize: "1.75rem",
          color: "var(--ink)",
          textDecoration: "none",
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
      >
        Akwaba Etnicas
      </a>

      {/* Desktop nav links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="hidden-mobile"
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--cocoa)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: "var(--paper)",
          background: "var(--ink)",
          padding: "0.65rem 1.4rem",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Visit Us
      </a>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
