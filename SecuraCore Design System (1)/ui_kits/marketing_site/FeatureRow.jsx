// Three-icon "What is Smart Technology?" feature strip from the live site.
function FeatureRow() {
  const features = [
    {
      icon: 'icon-dark-mobile.jpg',
      title: 'User-Friendly Operation',
      body: 'One app, one touch panel — control every system in your home from a single, intuitive interface.',
    },
    {
      icon: 'icon-dark-lights.jpg',
      title: 'Personalized Experience',
      body: 'Scenes tuned to your routines — morning wake-up, movie night, away mode — all triggered automatically.',
    },
    {
      icon: 'icon-dark-solar.jpg',
      title: 'Cost-Effective Technology',
      body: 'Scheduled shades and smart thermostats quietly lower your energy bill while keeping rooms comfortable.',
    },
  ];
  return (
    <section style={{background: 'var(--sc-grey-100)', padding: '96px 64px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <p style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--sc-orange)',
          textAlign: 'center', margin: '0 0 14px', fontWeight: 700,
        }}>What Is Smart Technology?</p>
        <h2 style={{
          fontFamily: 'Posterama, sans-serif', fontWeight: 700, fontSize: 34,
          lineHeight: 1.1, letterSpacing: '.06em', textTransform: 'uppercase',
          color: 'var(--sc-ink)', margin: '0 0 64px', textAlign: 'center',
          maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
        }}>Technology, Installed Right — So It Actually Gets Used.</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56}}>
          {features.map(f => (
            <div key={f.title} style={{textAlign: 'center'}}>
              <div style={{
                width: 88, height: 88, borderRadius: 999,
                background: 'var(--sc-ink)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22, boxShadow: 'var(--shadow-md)',
              }}>
                <img src={`../../assets/${f.icon}`} style={{width: 48, height: 48, objectFit: 'contain'}} />
              </div>
              <h5 style={{
                fontFamily: 'Posterama, sans-serif', fontSize: 15,
                letterSpacing: '.16em', textTransform: 'uppercase',
                fontWeight: 700, color: 'var(--sc-ink)', margin: '0 0 12px',
              }}>{f.title}</h5>
              <p style={{
                fontFamily: 'Open Sans, sans-serif', fontSize: 15,
                lineHeight: 1.6, color: 'var(--sc-grey-700)', margin: 0,
                maxWidth: 300, marginLeft: 'auto', marginRight: 'auto',
              }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FeatureRow = FeatureRow;
