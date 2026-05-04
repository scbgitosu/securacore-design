// Services based on the live site — real copy, real structure.
// The live site uses image cards with H4 titles + a long description + READ MORE.
function ServiceGrid() {
  const services = [
    {
      title: 'Security / Awareness',
      icon: 'icon-dark-security.jpg',
      img: 'photo-smart-home-hero.png',
      body: 'Explore the boundless possibilities of security and awareness technology with SecuraCore. Experience real-time surveillance through cameras, receive low battery notifications from smoke detectors, and stay informed with door sensors alerting you to open garages, ajar front doors, or arriving service providers.',
    },
    {
      title: 'Automation',
      icon: 'icon-dark-mobile.jpg',
      img: 'photo-home-interior.png',
      body: 'Effortlessly create the perfect ambiance with our user-friendly automation features. Set the ideal lighting scene for movie nights or dinner. Enjoy your favorite playlist seamlessly across your patio and living room. Schedule automated shades to close during peak sunlight, maintaining a cool and comfortable locale.',
    },
    {
      title: 'Automated Shades',
      icon: 'icon-dark-shades.jpg',
      img: 'photo-home-driveway.png',
      body: 'Utilizing automated shades is a simple way to manage individual or groups of shades across your property. You can schedule their operation or control them effortlessly with the touch of a button, whether through an in-wall switch, keypad, phone, or touch screen.',
    },
    {
      title: 'Lighting Control',
      icon: 'icon-dark-lights.jpg',
      img: 'photo-home-exterior-02.png',
      body: 'Effortlessly manage your lights throughout your home using your phone, voice assistant, or automated scenes and schedules for added convenience.',
    },
    {
      title: 'Network & WiFi',
      icon: 'icon-dark-wifi.jpg',
      img: 'photo-home-exterior.png',
      body: "In today's world, the dependability of your WiFi network plays a crucial role in your technological success. Whether streaming movies and music, assisting your kids with homework, or working from home, a top-notch and reliable network ensures optimal performance in all your activities.",
    },
    {
      title: 'Theater & Entertainment',
      icon: 'icon-dark-tv.jpg',
      img: 'photo-smart-home-hero.png',
      body: 'Discover some of the most thrilling surround sound setups in spaces beyond traditional cinema rooms! Transform your living rooms, family rooms, master bedrooms, and outdoor patios into dual-function areas with the ultimate connected home theater system tailored to your space.',
    },
    {
      title: 'Surveillance Cameras',
      icon: 'icon-dark-cameras.jpg',
      img: 'photo-home-interior.png',
      body: 'Enhance your understanding of activities around your home and property with our surveillance solutions. Monitor vehicle movements, unexpected visitors, and more. Surveillance cameras enable you to oversee your entire property, providing security even in your absence.',
    },
    {
      title: 'Access Control',
      icon: 'icon-dark-lock.jpg',
      img: 'photo-home-driveway.png',
      body: 'Bid farewell to key-related worries. Electronic exterior and interior door locks and gates come equipped with user-friendly keypads or can be controlled locally or remotely, offering convenient entrance solutions.',
    },
    {
      title: 'Audio',
      icon: 'icon-dark-music.jpg',
      img: 'photo-home-exterior-02.png',
      body: 'Effortlessly manage your music with simplicity and intuition using a touch panel, keypad, handheld remote, or mobile device. Regardless of whether the speakers are integrated into walls, ceilings, bookshelves, patios, or spaced around pools, they can be designed to blend aesthetically, minimizing visual impact.',
    },
  ];
  return (
    <section style={{background: '#fff', padding: '112px 64px'}}>
      <div style={{maxWidth: 1240, margin: '0 auto'}}>
        <p style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--sc-orange)',
          textAlign: 'center', margin: '0 0 14px', fontWeight: 700,
        }}>Our Services</p>
        <h2 style={{
          fontFamily: 'Posterama, sans-serif', fontWeight: 700, fontSize: 40,
          lineHeight: 1.1, letterSpacing: '.06em', textTransform: 'uppercase',
          color: 'var(--sc-ink)', margin: '0 0 64px', textAlign: 'center',
        }}>Our Areas of Technology Expertise</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32}}>
          {services.map(s => (
            <article key={s.title} style={{
              background: '#fff', border: '1px solid var(--border-subtle)',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              transition: 'box-shadow .2s, transform .2s',
            }}
              onMouseEnter={e => {e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)';}}
              onMouseLeave={e => {e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)';}}
            >
              <div style={{
                height: 200, background: `linear-gradient(180deg, rgba(29,37,45,.15), rgba(29,37,45,.55)), url(../../assets/${s.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative',
              }}>
                <img src={`../../assets/${s.icon}`} style={{
                  position: 'absolute', bottom: -28, left: 24,
                  width: 56, height: 56, borderRadius: 999,
                  background: 'var(--sc-ink)', padding: 8,
                  boxShadow: 'var(--shadow-md)',
                }} />
              </div>
              <div style={{padding: '40px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <h4 style={{
                  fontFamily: 'Posterama, sans-serif', fontSize: 16,
                  letterSpacing: '.14em', textTransform: 'uppercase',
                  fontWeight: 700, color: 'var(--sc-ink)', margin: '0 0 14px',
                }}>{s.title}</h4>
                <p style={{
                  fontFamily: 'Open Sans, sans-serif', fontSize: 14,
                  lineHeight: 1.6, color: 'var(--sc-grey-700)',
                  margin: '0 0 20px', flex: 1,
                }}>{s.body}</p>
                <a href="#" style={{
                  fontFamily: 'Posterama, sans-serif', fontSize: 11,
                  letterSpacing: '.22em', textTransform: 'uppercase',
                  color: 'var(--sc-orange)', textDecoration: 'none',
                  fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>Read More <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ServiceGrid = ServiceGrid;
