function CoverPage({data}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[1, 12]} section="Cover" noFooter
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(180deg, #fff 0%, #fff 58%, var(--sc-ink) 58%, var(--sc-ink) 100%)',
      }}
    >
      {/* Top — orange accent bar + logo */}
      <div style={{height: 6, background: 'var(--sc-orange)'}} />
      <div style={{padding: '56px 72px 0'}}>
        <img src="../../assets/logo-securacore-horizontal.png" alt="SecuraCore" style={{height: 56}} />
      </div>

      {/* Title */}
      <div style={{padding: '56px 72px 0', flex: 1}}>
        <p style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 11,
          letterSpacing: '.28em', textTransform: 'uppercase',
          color: 'var(--sc-orange)', margin: '0 0 18px', fontWeight: 700,
        }}>Proposal #{data.proposalNumber}</p>
        <h1 style={{
          fontFamily: 'Posterama, sans-serif', fontWeight: 700,
          fontSize: 48, lineHeight: 1.04, letterSpacing: '.04em',
          textTransform: 'uppercase', color: 'var(--sc-ink)',
          margin: 0, maxWidth: 640,
        }}>{data.title}</h1>
      </div>

      {/* Client + company blocks on dark plate */}
      <div style={{padding: '56px 72px 72px', color: '#fff', position: 'relative'}}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          paddingTop: 36, borderTop: '1px solid rgba(255,255,255,.18)',
        }}>
          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 10,
              letterSpacing: '.28em', textTransform: 'uppercase',
              color: 'var(--sc-orange)', marginBottom: 14, fontWeight: 700,
            }}>A Proposal For</div>
            <div style={{fontFamily: 'Posterama, sans-serif', fontSize: 22, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 12}}>{data.client.name}</div>
            <div style={{fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,.85)'}}>
              <div>{data.client.email}</div>
              <div>{data.client.phone}</div>
              <div style={{marginTop: 8}}>{data.client.addressLine1}</div>
              <div>{data.client.addressLine2}</div>
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 10,
              letterSpacing: '.28em', textTransform: 'uppercase',
              color: 'var(--sc-orange)', marginBottom: 14, fontWeight: 700,
            }}>Prepared By</div>
            <div style={{fontFamily: 'Posterama, sans-serif', fontSize: 22, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 12}}>{data.company.name}</div>
            <div style={{fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,.85)'}}>
              <div>{data.company.url}</div>
              <div>{data.company.phone}</div>
              <div style={{marginTop: 8}}>{data.company.addressLine1}</div>
              <div>{data.company.addressLine2}</div>
              <div style={{marginTop: 8, color: 'rgba(255,255,255,.55)'}}>CCB #{data.company.ccb}</div>
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.14)',
          fontFamily: 'Posterama, sans-serif', fontSize: 10,
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.7)',
        }}>
          Prepared By {data.preparer} &nbsp;·&nbsp; Expires {data.expires}
        </div>
      </div>
    </ProposalPage>
  );
}
window.CoverPage = CoverPage;
