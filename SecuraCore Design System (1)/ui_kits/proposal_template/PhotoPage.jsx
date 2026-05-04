// Full-bleed photo page — source PDFs have 2-3 of these between About Us and scope.
function PhotoPage({data, src, caption, pageN}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[pageN, 12]} section="About Us"
      style={{
        background: `linear-gradient(180deg, rgba(29,37,45,0) 60%, rgba(29,37,45,.85) 100%), url(../../assets/${src})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <div style={{height: 6, background: 'var(--sc-orange)'}} />
      <div style={{
        position: 'absolute', bottom: 72, left: 72, right: 72, color: '#fff',
      }}>
        <p style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 11,
          letterSpacing: '.28em', textTransform: 'uppercase',
          color: 'var(--sc-orange)', margin: '0 0 10px', fontWeight: 700,
        }}>What We Deliver</p>
        <h3 style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 30,
          letterSpacing: '.04em', textTransform: 'uppercase',
          fontWeight: 700, margin: 0, maxWidth: 520, lineHeight: 1.1,
        }}>{caption}</h3>
      </div>
    </ProposalPage>
  );
}
window.PhotoPage = PhotoPage;
