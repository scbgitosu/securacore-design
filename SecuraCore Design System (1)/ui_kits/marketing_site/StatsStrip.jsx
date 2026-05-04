// Three-tile "Design & Build / Residential / Business" brochure strip
// matching the live site's CTA band.
function StatsStrip() {
  const tiles = [
    {
      eyebrow: 'Design & Build Partners',
      title: 'Discover the Benefits',
      cta: 'See Benefits',
    },
    {
      eyebrow: 'Residential Services',
      title: 'Experience Smart Home Living',
      cta: 'Learn More',
    },
    {
      eyebrow: 'Business Services',
      title: 'Smart Business Technology',
      cta: 'Explore Now',
    },
  ];
  return (
    <section style={{background: 'var(--sc-ink)', padding: '0', color: '#fff'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {tiles.map((t, i) => (
          <div key={t.title} style={{
            padding: '72px 40px',
            borderRight: i < 2 ? '1px solid rgba(255,255,255,.08)' : 'none',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 11,
              letterSpacing: '.28em', textTransform: 'uppercase',
              color: 'var(--sc-orange)', margin: '0 0 14px', fontWeight: 700,
            }}>{t.eyebrow}</p>
            <h3 style={{
              fontFamily: 'Posterama, sans-serif', fontWeight: 700, fontSize: 26,
              lineHeight: 1.2, letterSpacing: '.05em', textTransform: 'uppercase',
              color: '#fff', margin: '0 0 28px',
            }}>{t.title}</h3>
            <a href="#" style={{
              display: 'inline-block',
              border: '1px solid var(--sc-orange)',
              color: 'var(--sc-orange)',
              fontFamily: 'Posterama, sans-serif', fontSize: 11,
              letterSpacing: '.22em', textTransform: 'uppercase',
              padding: '12px 22px', textDecoration: 'none', fontWeight: 700,
            }}>{t.cta} →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
window.StatsStrip = StatsStrip;
