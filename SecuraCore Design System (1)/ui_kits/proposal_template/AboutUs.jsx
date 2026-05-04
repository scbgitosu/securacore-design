function AboutUs({data}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[2, 12]} section="About Us">
      <div style={{padding: '72px 72px 0'}}>
        <SectionHeading>About Us</SectionHeading>

        <p style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 14,
          lineHeight: 1.75, color: 'var(--sc-grey-700)',
          maxWidth: 620, margin: '0 0 32px',
        }}>
          <strong style={{color: 'var(--sc-ink)'}}>SecuraCore</strong>, based in Bend,
          delivers smart technology solutions to enhance homes and businesses with
          elegance, efficiency, and security. We offer user-friendly, reliable, and
          affordable technology, backed by exceptional service.
        </p>
        <p style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 14,
          lineHeight: 1.75, color: 'var(--sc-grey-700)',
          maxWidth: 620, margin: '0 0 40px',
        }}>
          Specializing in Alarm.com security, surveillance, and automation, our
          expertise also includes Lutron lighting and shades, eero WiFi/networks,
          Samsung/Sonos audio-visual systems, LED low-voltage lighting, and more.
        </p>

        {/* Brand partners row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16, marginTop: 32,
        }}>
          {['Alarm.com', 'Lutron', 'eero', 'Sonos', 'Samsung', 'Qolsys', 'Yale', 'Sonance'].map(b => (
            <div key={b} style={{
              padding: '22px 10px',
              background: 'var(--sc-grey-100)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              fontFamily: 'Posterama, sans-serif', fontSize: 12,
              letterSpacing: '.16em', textTransform: 'uppercase',
              fontWeight: 700, color: 'var(--sc-ink)',
            }}>{b}</div>
          ))}
        </div>

        {/* Promise strip */}
        <div style={{
          marginTop: 40, padding: '26px 28px',
          background: 'var(--sc-ink)', color: '#fff',
          display: 'flex', alignItems: 'center', gap: 24,
          borderLeft: '4px solid var(--sc-orange)',
        }}>
          <img src="../../assets/logo-mark.png" style={{height: 44, filter: 'brightness(0) invert(1)'}} alt="" />
          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 11,
              letterSpacing: '.28em', textTransform: 'uppercase',
              color: 'var(--sc-orange)', marginBottom: 6, fontWeight: 700,
            }}>Brand Promise</div>
            <div style={{fontFamily: 'Posterama, sans-serif', fontSize: 18, letterSpacing: '.04em', fontWeight: 700, textTransform: 'uppercase'}}>
              Technology that works the way it should.
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16}}>
          {[
            {v: 'Craftsmanship', d: 'Every install with precision.'},
            {v: 'Reliability', d: 'Show up. Follow through.'},
            {v: 'Simplicity', d: 'Technology made simple.'},
            {v: 'Community', d: 'Rooted in Bend.'},
            {v: 'Growth', d: 'Always improving.'},
          ].map(x => (
            <div key={x.v}>
              <div style={{
                fontFamily: 'Posterama, sans-serif', fontSize: 11,
                letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--sc-orange)', marginBottom: 6, fontWeight: 700,
              }}>{x.v}</div>
              <div style={{fontFamily: 'Open Sans, sans-serif', fontSize: 12, color: 'var(--sc-grey-700)', lineHeight: 1.5}}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </ProposalPage>
  );
}
window.AboutUs = AboutUs;
