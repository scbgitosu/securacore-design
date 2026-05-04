function FinancialSummary({data, pageN, pagesTotal}) {
  const t = data.totals;
  const rows = [
    {label: t.taxExempt ? 'Parts (Tax Exempt)' : 'Parts', val: t.parts, muted: true},
    {label: 'Total Parts', val: t.parts, strong: true},
    {label: t.taxExempt ? 'Labor (Tax Exempt)' : 'Labor', val: t.labor, muted: true},
    {label: 'Total Labor', val: t.labor, strong: true},
    {label: 'Subtotal', val: t.subtotal, strong: true, divider: true},
  ];
  return (
    <ProposalPage n={data.proposalNumber} total={[pageN, pagesTotal]} section="Financial Summary">
      <div style={{padding: '72px 72px 0'}}>
        <SectionHeading>Financial Summary</SectionHeading>

        <table style={{width: '100%', maxWidth: 560, borderCollapse: 'collapse', marginTop: 12}}>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{
                borderTop: r.divider ? '2px solid var(--sc-ink)' : '1px solid var(--border-subtle)',
              }}>
                <td style={{
                  padding: '14px 0',
                  fontFamily: 'Open Sans, sans-serif', fontSize: 14,
                  color: r.muted ? 'var(--sc-grey-500)' : 'var(--sc-ink)',
                  fontWeight: r.strong ? 600 : 400,
                }}>{r.label}</td>
                <td style={{
                  padding: '14px 0', textAlign: 'right',
                  fontFamily: 'Open Sans, sans-serif', fontSize: 14,
                  color: r.muted ? 'var(--sc-grey-700)' : 'var(--sc-ink)',
                  fontWeight: r.strong ? 700 : 400,
                  fontVariantNumeric: 'tabular-nums',
                }}>{fmtMoney(r.val)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Grand total — the hero */}
        <div style={{
          marginTop: 32, maxWidth: 560,
          background: 'var(--sc-ink)', color: '#fff',
          padding: '28px 32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderLeft: '6px solid var(--sc-orange)',
        }}>
          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 11,
              letterSpacing: '.28em', textTransform: 'uppercase',
              color: 'var(--sc-orange)', marginBottom: 4, fontWeight: 700,
            }}>Proposal Total</div>
            <div style={{fontFamily: 'Open Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.6)'}}>
              Quoted pricing good for 30 days.
            </div>
          </div>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 36,
            letterSpacing: '.02em', fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}>{fmtMoney(t.total)}</div>
        </div>

        {/* Area subtotals — nice reminder */}
        <div style={{marginTop: 36}}>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 11,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--sc-grey-500)', marginBottom: 12, fontWeight: 700,
          }}>Breakdown by Area</div>
          <table style={{width: '100%', maxWidth: 560, borderCollapse: 'collapse'}}>
            <tbody>
              {data.areas.map(a => (
                <tr key={a.name} style={{borderTop: '1px solid var(--border-subtle)'}}>
                  <td style={{
                    padding: '10px 0',
                    fontFamily: 'Open Sans, sans-serif', fontSize: 13,
                    color: 'var(--sc-grey-700)',
                  }}>{a.name}</td>
                  <td style={{
                    padding: '10px 0', textAlign: 'right',
                    fontFamily: 'Open Sans, sans-serif', fontSize: 13,
                    color: 'var(--sc-ink)', fontWeight: 600,
                    fontVariantNumeric: 'tabular-nums',
                  }}>{fmtMoney(a.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProposalPage>
  );
}
window.FinancialSummary = FinancialSummary;
