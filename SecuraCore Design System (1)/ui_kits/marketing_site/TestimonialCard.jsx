function TestimonialCard() {
  return (
    <section style={{background: '#fff', padding: '112px 64px'}}>
      <div style={{maxWidth: 900, margin: '0 auto', textAlign: 'center'}}>
        <p style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 12, letterSpacing: '.28em',
          textTransform: 'uppercase', color: 'var(--sc-orange)',
          margin: '0 0 14px', fontWeight: 700,
        }}>Testimonials</p>
        <h2 style={{
          fontFamily: 'Posterama, sans-serif', fontWeight: 700, fontSize: 36,
          lineHeight: 1.1, letterSpacing: '.05em', textTransform: 'uppercase',
          color: 'var(--sc-ink)', margin: '0 0 56px',
        }}>What Clients Say About Us</h2>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 22,
          lineHeight: 1.6, color: 'var(--sc-grey-700)',
          fontStyle: 'italic', fontWeight: 300, margin: '0 0 32px',
        }}>
          "SecuraCore replaced a tangle of three broken systems with one that just works.
          Their team walked us through everything, showed up on time, and the install is
          cleaner than the builder's own wiring. Highly recommended."
        </div>
        <div style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 12,
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--sc-ink)', fontWeight: 700,
        }}>Mike &amp; Jen R. · Bend, OR</div>
      </div>
    </section>
  );
}
window.TestimonialCard = TestimonialCard;
