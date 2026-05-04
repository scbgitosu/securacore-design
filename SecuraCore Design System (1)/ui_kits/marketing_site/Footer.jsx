function Footer() {
  return (
    <footer style={{background: '#000', color: 'rgba(255,255,255,.72)', padding: '72px 48px 28px', borderTop: '3px solid var(--sc-orange)'}}>
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48}}>
        <div>
          <img src="../../assets/logo-securacore-horizontal.png" style={{height: 56, filter: 'brightness(0) invert(1)'}} alt="SecuraCore" />
          <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: 14, lineHeight: 1.6, marginTop: 20, maxWidth: 320}}>
            Delivering smart technology solutions that make homes and businesses
            elegant, efficient, and secure — across Central Oregon.
          </p>
          <div style={{display: 'flex', gap: 14, marginTop: 20}}>
            <a href="#" style={{color: 'rgba(255,255,255,.7)'}} aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.1-1.3H18V0h-3.6C10.8 0 9 1.6 9 4.7V8z"/></svg>
            </a>
            <a href="#" style={{color: 'rgba(255,255,255,.7)'}} aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.2.5 1.7 1 .5.5.8 1 1 1.7.3.6.4 1.3.5 2.3C21.9 9 22 9.3 22 12s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.2-1 1.7-.5.5-1 .8-1.7 1-.6.3-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.2-.5-1.7-1-.5-.5-.8-1-1-1.7-.3-.6-.4-1.3-.5-2.3C2.1 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.2 1-1.7.5-.5 1-.8 1.7-1 .6-.3 1.3-.4 2.3-.5C9 2.1 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
            </a>
          </div>
        </div>
        {[
          {h: 'Main Pages', l: ['Home', 'Security / Awareness', 'Automation', 'Contact', 'About Us', 'Blog', 'Careers']},
          {h: 'Technology', l: ['Surveillance', 'Network & WiFi', 'Thermostats & Climate', 'Audio', 'Theater & Entertainment', 'Lighting Control']},
          {h: 'Contact Us', l: ['(541) 241-8114', 'info@mysecuracore.com', '404 NE Norton Ave.', 'Bend, OR']},
        ].map(col => (
          <div key={col.h}>
            <div style={{fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.22em', color: '#fff', marginBottom: 20, fontWeight: 700, textTransform: 'uppercase'}}>{col.h}</div>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10}}>
              {col.l.map(i => <li key={i} style={{fontFamily: 'Open Sans, sans-serif', fontSize: 14}}><a href="#" style={{color: 'rgba(255,255,255,.72)', textDecoration: 'none'}}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{maxWidth: 1200, margin: '56px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'Open Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.5)'}}>
        <span>© 2026 All Rights Reserved By SecuraCore · Licensed &amp; insured · Bend, Oregon</span>
        <span>Technology Made Simple.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
