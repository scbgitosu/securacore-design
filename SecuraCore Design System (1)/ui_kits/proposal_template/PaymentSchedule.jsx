function PaymentSchedule({data, pageN, pagesTotal}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[pageN, pagesTotal]} section="Payments">
      <div style={{padding: '72px 72px 0'}}>
        <SectionHeading>Payment Schedule</SectionHeading>

        <p style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12,
          lineHeight: 1.7, color: 'var(--sc-grey-700)',
          margin: '0 0 24px', maxWidth: 620,
        }}>
          Ongoing monthly charges outlined in "Recurring Monthly Charges" or
          "Maintenance Services" sections will be automatically billed via ACH or
          Credit Card. Standard SecuraCore 12-month "Services and Monitoring
          Agreement" to be executed by both parties prior to installation. Month-
          to-month charges thereafter.
        </p>

        <div style={{
          fontFamily: 'Posterama, sans-serif', fontSize: 11,
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--sc-grey-500)', marginBottom: 12, fontWeight: 700,
        }}>Payment Schedule</div>

        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          {data.payments.map((p, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr 130px',
              gap: 16, alignItems: 'center',
              padding: '18px 22px',
              background: i === 0 ? 'var(--sc-orange-tint)' : 'var(--sc-grey-100)',
              borderLeft: '4px solid ' + (i === 0 ? 'var(--sc-orange)' : 'var(--sc-grey-300)'),
            }}>
              <div style={{
                fontFamily: 'Posterama, sans-serif', fontSize: 13,
                letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--sc-ink)', fontWeight: 700,
              }}>{p.label}</div>
              <div style={{
                fontFamily: 'Open Sans, sans-serif', fontSize: 12,
                color: 'var(--sc-grey-700)', lineHeight: 1.5,
              }}>{p.terms}</div>
              <div style={{
                fontFamily: 'Posterama, sans-serif', fontSize: 18,
                color: 'var(--sc-ink)', fontWeight: 700, textAlign: 'right',
                fontVariantNumeric: 'tabular-nums',
              }}>{fmtMoney(p.amount)}</div>
            </div>
          ))}
        </div>

        {/* Signature block */}
        <div style={{marginTop: 48}}>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 11,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--sc-grey-500)', marginBottom: 14, fontWeight: 700,
          }}>Acceptance</div>
          <p style={{
            fontFamily: 'Open Sans, sans-serif', fontSize: 13,
            color: 'var(--sc-ink)', margin: '0 0 28px', fontStyle: 'italic',
          }}>I, <span style={{
            borderBottom: '1px solid var(--sc-grey-400)', padding: '0 40px',
            display: 'inline-block', minWidth: 180,
          }}></span>, accept this proposal and the terms herein.</p>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24, alignItems: 'end'}}>
            <div>
              <div style={{
                borderBottom: '1.5px solid var(--sc-ink)',
                height: 44,
                fontFamily: 'Caveat, cursive', fontSize: 28,
                color: 'var(--sc-grey-400)',
                paddingLeft: 8, display: 'flex', alignItems: 'flex-end', paddingBottom: 2,
              }}>Sign here</div>
              <div style={{
                marginTop: 8,
                fontFamily: 'Posterama, sans-serif', fontSize: 10,
                letterSpacing: '.22em', textTransform: 'uppercase',
                color: 'var(--sc-grey-500)', fontWeight: 700,
              }}>Signature</div>
            </div>
            <div>
              <div style={{
                borderBottom: '1.5px solid var(--sc-ink)', height: 44,
              }}></div>
              <div style={{
                marginTop: 8,
                fontFamily: 'Posterama, sans-serif', fontSize: 10,
                letterSpacing: '.22em', textTransform: 'uppercase',
                color: 'var(--sc-grey-500)', fontWeight: 700,
              }}>Date</div>
            </div>
          </div>

          <div style={{
            marginTop: 32, padding: '12px 16px',
            background: 'var(--sc-grey-100)',
            fontFamily: 'Open Sans, sans-serif', fontSize: 11,
            color: 'var(--sc-grey-500)', fontStyle: 'italic',
          }}>
            This proposal will be locked for editing and secured with a digital fingerprint upon acceptance.
          </div>
        </div>
      </div>
    </ProposalPage>
  );
}
window.PaymentSchedule = PaymentSchedule;
