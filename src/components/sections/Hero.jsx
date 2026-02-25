export default function Hero() {
  const hits = [
    { title: "Top Artist", subtitle: "Pop hits", tag: "New" },
    { title: "Top Mix", subtitle: "Daily mix", tag: "Hot" },
    { title: "Concert Vibes", subtitle: "Live songs", tag: "Live" },
  ];

  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-title">LIVE YOUR DAY WITH MUSIC</h1>

          <p className="hero-desc">
            Make your day more lively with a variety of premium music that
            refreshes your mind.
          </p>

          <div className="hero-actions">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">View Plans</button>
          </div>

          {/* Hits Music (inside Hero) */}
          <div className="hits">
            <div className="hits-head">
              <h3 className="hits-title">Hit&apos;s Music</h3>
              <div className="hits-controls">
                <button className="hits-btn" type="button" aria-label="Previous">
                  ‹
                </button>
                <button className="hits-btn" type="button" aria-label="Next">
                  ›
                </button>
              </div>
            </div>

            <div className="hits-row" role="list">
              {hits.map((item, idx) => (
                <article className="hit-card" role="listitem" key={idx}>
                  <div className="hit-top">
                    <span className="hit-tag">{item.tag}</span>
                  </div>

                  <div className="hit-avatar" aria-hidden="true" />

                  <div className="hit-meta">
                    <div className="hit-title">{item.title}</div>
                    <div className="hit-sub">{item.subtitle}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT (placeholder image) */}
        <div className="hero-right">
          <div className="hero-imageWrap">
            <div className="hero-imagePlaceholder"><img src="/ss.jpg" alt="" /></div>

            {/* glow blobs */}
            <span className="blob blob-1" />
            <span className="blob blob-2" />
          </div>
        </div>
      </div>
    </section>
  );
}