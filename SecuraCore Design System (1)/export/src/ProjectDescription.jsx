function ProjectDescription({data}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[5, 12]} section="Project Description">
      <div style={{padding: '72px 72px 0'}}>
        <SectionHeading>Project Description</SectionHeading>

        <div style={{marginBottom: 28}}>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 12,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--sc-grey-500)', marginBottom: 10, fontWeight: 700,
          }}>Scope of Work</div>
          <p style={{
            fontFamily: 'Open Sans, sans-serif', fontSize: 14,
            lineHeight: 1.7, color: 'var(--sc-grey-700)', margin: 0,
            maxWidth: 620,
          }}>{data.scope}</p>
        </div>

        {data.floorplan && (
          <div style={{marginBottom: 28}}>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 12,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--sc-grey-500)', marginBottom: 10, fontWeight: 700,
            }}>Floorplan Resources</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 16px',
              background: 'var(--sc-grey-100)',
              border: '1px solid var(--border-subtle)',
            }}>
              <span style={{fontSize: 18}}>📎</span>
              <span style={{fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: 'var(--sc-ink)'}}>{data.floorplan}</span>
            </div>
          </div>
        )}

        {data.clarifications?.length > 0 && (
          <div style={{marginBottom: 28}}>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 12,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--sc-grey-500)', marginBottom: 10, fontWeight: 700,
            }}>Clarifications</div>
            <ol style={{margin: 0, paddingLeft: 20, fontFamily: 'Open Sans, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'var(--sc-grey-700)'}}>
              {data.clarifications.map((c, i) => <li key={i}>{c}</li>)}
            </ol>
          </div>
        )}

        <div style={{
          marginTop: 40, padding: '16px 20px',
          background: 'var(--sc-orange-tint)',
          borderLeft: '4px solid var(--sc-orange)',
          fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: 'var(--sc-ink)',
        }}>
          <strong>See Areas &amp; Items Below</strong> for detailed project breakdown.
        </div>
      </div>
    </ProposalPage>
  );
}
window.ProjectDescription = ProjectDescription;
