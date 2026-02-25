export default function Footer() {
  const socials = [
    { label: "Facebook", icon: "f", href: "#" },
    { label: "Twitter", icon: "t", href: "#" },
    { label: "Google", icon: "G+", href: "#" },
    { label: "Instagram", icon: "ig", href: "#" },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <h3 className="footer-title">Foolish Developer</h3>

        <p className="footer-text">
          Foolish Developer is a blog website where you will find great tutorials
          on web design and development. Here each tutorial is beautifully
          described step by step with the required source code.
        </p>

        <div className="footer-social">
          {socials.map((s) => (
            <a
              key={s.label}
              className="social-pill"
              href={s.href}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}