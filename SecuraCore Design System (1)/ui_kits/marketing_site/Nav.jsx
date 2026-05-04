function UtilityBar() {
  const item = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'Open Sans, sans-serif', fontSize: 13,
    color: 'rgba(255,255,255,.85)', textDecoration: 'none',
  };
  const dot = {width: 14, height: 14, display: 'inline-block', opacity: .75};
  return (
    <div style={{
      background: 'var(--sc-ink)', color: '#fff',
      padding: '10px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      gap: 28, borderBottom: '3px solid var(--sc-orange)',
    }}>
      <a href="tel:5412418114" style={item}>
        <svg style={dot} viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
        (541) 241-8114
      </a>
      <a href="mailto:info@mysecuracore.com" style={item}>
        <svg style={dot} viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        info@mysecuracore.com
      </a>
      <span style={item}>
        <svg style={dot} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/></svg>
        404 NE Norton Ave. Bend, OR
      </span>
      <div style={{display: 'flex', gap: 12, alignItems: 'center', marginLeft: 8}}>
        <a href="#" style={{...item, opacity: .85}} aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.1-1.3H18V0h-3.6C10.8 0 9 1.6 9 4.7V8z"/></svg>
        </a>
        <a href="#" style={{...item, opacity: .85}} aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.2.5 1.7 1 .5.5.8 1 1 1.7.3.6.4 1.3.5 2.3C21.9 9 22 9.3 22 12s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.2-1 1.7-.5.5-1 .8-1.7 1-.6.3-1.3.4-2.3.5-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.2-.5-1.7-1-.5-.5-.8-1-1-1.7-.3-.6-.4-1.3-.5-2.3C2.1 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.2 1-1.7.5-.5 1-.8 1.7-1 .6-.3 1.3-.4 2.3-.5C9 2.1 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
        </a>
      </div>
      <a href="#" style={{
        background: 'var(--sc-orange)', color: '#fff',
        fontFamily: 'Posterama, sans-serif', fontSize: 11, letterSpacing: '.22em',
        textTransform: 'uppercase', padding: '10px 18px', borderRadius: 2,
        textDecoration: 'none', fontWeight: 700, marginLeft: 8,
      }}>Contact Us</a>
    </div>
  );
}

function Nav() {
  const items = [
    {label: 'Security & Awareness'},
    {label: 'Automation'},
    {label: 'Technology', children: ['Surveillance', 'Network & WiFi', 'Thermostats & Climate', 'Audio', 'Theater & Entertainment', 'Lighting Control', 'Automated Shading']},
    {label: 'Design & Build Partners'},
    {label: 'Areas We Serve', children: ['Bend', 'Sisters', 'Sunriver', 'Powell Butte', 'Redmond', 'Brasada Ranch', 'Black Butte Ranch', 'Terrebonne']},
    {label: 'About', children: ['Service Request', 'Technology Design Center', 'Blog', 'Careers']},
  ];
  const [open, setOpen] = React.useState(null);
  return (
    <React.Fragment>
      <UtilityBar />
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px', background: '#fff',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <img src="../../assets/logo-securacore-horizontal.png" alt="SecuraCore" style={{height: 44}} />
        <div style={{display: 'flex', gap: 28, alignItems: 'center'}}>
          {items.map(it => (
            <div key={it.label}
              onMouseEnter={() => it.children && setOpen(it.label)}
              onMouseLeave={() => setOpen(null)}
              style={{position: 'relative'}}
            >
              <a href="#" style={{
                fontFamily: 'Posterama, sans-serif', fontSize: 11, letterSpacing: '.2em',
                textTransform: 'uppercase', color: 'var(--sc-ink)',
                textDecoration: 'none', fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 0',
                borderBottom: open === it.label ? '2px solid var(--sc-orange)' : '2px solid transparent',
                transition: 'border-color .15s',
              }}>
                {it.label}
                {it.children && <span style={{fontSize: 8, opacity: .6}}>▾</span>}
              </a>
              {it.children && open === it.label && (
                <div style={{
                  position: 'absolute', top: '100%', left: -16, minWidth: 240,
                  background: '#fff', boxShadow: 'var(--shadow-lg)',
                  borderTop: '2px solid var(--sc-orange)',
                  padding: '12px 0', zIndex: 60,
                }}>
                  {it.children.map(c => (
                    <a key={c} href="#" style={{
                      display: 'block', padding: '10px 20px',
                      fontFamily: 'Open Sans, sans-serif', fontSize: 14,
                      color: 'var(--sc-ink)', textDecoration: 'none',
                    }}
                      onMouseEnter={e => {e.currentTarget.style.background = 'var(--sc-grey-100)'; e.currentTarget.style.color = 'var(--sc-orange)';}}
                      onMouseLeave={e => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--sc-ink)';}}
                    >{c}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </React.Fragment>
  );
}
window.Nav = Nav;
