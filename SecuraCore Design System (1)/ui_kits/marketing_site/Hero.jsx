function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: 620,
      backgroundImage: 'linear-gradient(180deg, rgba(29,37,45,.35) 0%, rgba(29,37,45,.72) 100%), url(../../assets/photo-smart-home-hero.png)',
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', alignItems: 'center',
      padding: '96px 64px', color: '#fff',
    }}>
      <div style={{maxWidth: 820}}>
        <h1 style={{
          fontFamily: 'Posterama, sans-serif', fontWeight: 700,
          fontSize: 58, lineHeight: 1.04, letterSpacing: '.04em',
          textTransform: 'uppercase', margin: '0 0 28px', color: '#fff',
        }}>
          Smart Home Automation,<br/>
          <span style={{color: 'var(--sc-orange)'}}>AV &amp; Security</span> Installation<br/>
          in Bend, OR
        </h1>
        <p style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 19, lineHeight: 1.55,
          color: 'rgba(255,255,255,.88)', margin: '0 0 36px', maxWidth: 600,
          fontWeight: 300,
        }}>
          Delivering smart technology solutions that make homes and businesses
          elegant, efficient, and secure.
        </p>
        <a href="#" style={{
          background: 'var(--sc-orange)', color: '#fff',
          fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.22em',
          textTransform: 'uppercase', padding: '16px 28px', borderRadius: 2,
          textDecoration: 'none', fontWeight: 700,
          display: 'inline-flex', alignItems: 'center', gap: 12,
        }}>Explore Our Services <span style={{fontSize: 14}}>→</span></a>
      </div>
    </section>
  );
}
window.Hero = Hero;
