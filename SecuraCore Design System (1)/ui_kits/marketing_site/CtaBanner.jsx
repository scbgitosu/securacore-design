// "Start your project" form from the live site — two-column with form.
function CtaBanner() {
  const [svc, setSvc] = React.useState('Service Type');
  const [open, setOpen] = React.useState(false);
  const services = ['Security & Awareness', 'Automation', 'Surveillance', 'Network & WiFi', 'Audio', 'Theater', 'Lighting', 'Shades', 'Climate'];
  const input = {
    width: '100%', padding: '14px 16px',
    fontFamily: 'Open Sans, sans-serif', fontSize: 14,
    background: 'rgba(255,255,255,.06)',
    border: '1px solid rgba(255,255,255,.18)',
    color: '#fff', outline: 'none',
    borderRadius: 2,
  };
  return (
    <section style={{
      background: 'var(--sc-ink)', color: '#fff',
      padding: '96px 64px',
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start'}}>
        <div>
          <h2 style={{
            fontFamily: 'Posterama, sans-serif', fontWeight: 700, fontSize: 38,
            lineHeight: 1.1, letterSpacing: '.05em', textTransform: 'uppercase',
            color: '#fff', margin: '0 0 24px',
          }}>Inspired? Start Your Project Today. <span style={{color: 'var(--sc-orange)'}}>Let Us Help Turn Your Vision Into Reality.</span></h2>
          <p style={{
            fontFamily: 'Open Sans, sans-serif', fontSize: 16,
            lineHeight: 1.6, color: 'rgba(255,255,255,.75)', margin: '0 0 36px',
          }}>Fill out the form and we'll respond back to you shortly.</p>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 13,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.6)', marginBottom: 8, fontWeight: 700,
          }}>Call Us</div>
          <a href="tel:5412418114" style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 34,
            letterSpacing: '.04em', color: 'var(--sc-orange)',
            textDecoration: 'none', fontWeight: 700,
          }}>(541) 241-8114</a>
        </div>
        <form style={{background: 'rgba(255,255,255,.04)', padding: 32, border: '1px solid rgba(255,255,255,.1)'}} onSubmit={e => e.preventDefault()}>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 13,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: '#fff', marginBottom: 24, fontWeight: 700,
          }}>Request Information</div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12}}>
            <input placeholder="First Name" style={input} />
            <input placeholder="Last Name" style={input} />
          </div>
          <input placeholder="Email" style={{...input, marginBottom: 12}} />
          <input placeholder="Phone" style={{...input, marginBottom: 12}} />
          <div style={{position: 'relative', marginBottom: 12}}>
            <button type="button" onClick={() => setOpen(!open)} style={{
              ...input, textAlign: 'left',
              color: svc === 'Service Type' ? 'rgba(255,255,255,.5)' : '#fff',
              cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              {svc} <span style={{fontSize: 10, opacity: .6}}>▾</span>
            </button>
            {open && (
              <div style={{position: 'absolute', top: '100%', left: 0, right: 0, background: '#1a2028', border: '1px solid rgba(255,255,255,.2)', zIndex: 10, maxHeight: 220, overflow: 'auto'}}>
                {services.map(s => (
                  <div key={s} onClick={() => {setSvc(s); setOpen(false);}} style={{padding: '12px 16px', cursor: 'pointer', fontFamily: 'Open Sans, sans-serif', fontSize: 14}}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(227,111,30,.14)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >{s}</div>
                ))}
              </div>
            )}
          </div>
          <textarea placeholder="Tell us about your project" rows={4} style={{...input, marginBottom: 16, resize: 'vertical', fontFamily: 'Open Sans, sans-serif'}} />
          <button type="submit" style={{
            width: '100%', background: 'var(--sc-orange)', color: '#fff',
            fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.22em',
            textTransform: 'uppercase', padding: '16px', border: 'none', borderRadius: 2,
            fontWeight: 700, cursor: 'pointer',
          }}>Submit Now →</button>
        </form>
      </div>
    </section>
  );
}
window.CtaBanner = CtaBanner;
