export default function LatestArticles() {
  const articles = [
    {
      title: "My paradise",
      meta: "Published | 12 July 2018",
      desc:
        "Ut pretium ultrices dignissim. Sed sit amet eget urna placerat ullamcorper. In convallis elementum convallis. Donec at ullamcorper diam.",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Travel to Italy",
      meta: "Published | 11 July 2018",
      desc:
        "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Chasing the sun",
      meta: "Published | 10 July 2018",
      desc:
        "Curabitur tristique, mi a mollis sagittis, metus felis mattis nunc, vel tincidunt est dui id turpis. Mauris rutrum nunc euismod augue sagittis.",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  return (
    <section className="articles">
      <div className="container">
        <h2 className="section-title">Latest articles</h2>

        <div className="articles-grid">
          {articles.map((a, idx) => (
            <article className="article-card" key={idx}>
              <div className="article-media">
                <img src={a.img} alt={a.title} />
              </div>

              <div className="article-body">
                <h3 className="article-title">{a.title}</h3>
                <div className="article-meta">{a.meta}</div>
                <p className="article-desc">{a.desc}</p>

                <button className="article-btn" type="button">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}