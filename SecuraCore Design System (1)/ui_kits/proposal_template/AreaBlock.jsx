// AreaBlock renders one area (e.g. "Main House") with its line items.
// Each line shows the BRAND in left column, description (+ location) in center,
// then Price / Qty / Total on the right — exactly matching the source PDFs.

function LineItemRow({line}) {
  const isLabor = line.kind === 'labor';
  return (
    <tr style={{
      borderBottom: '1px solid var(--border-subtle)',
      background: isLabor ? 'var(--sc-grey-50)' : 'transparent',
    }}>
      <td style={{
        width: 128, padding: '12px 14px', verticalAlign: 'top',
        fontFamily: 'Posterama, sans-serif', fontSize: 10,
        letterSpacing: '.16em', textTransform: 'uppercase',
        color: isLabor ? 'var(--sc-orange)' : 'var(--sc-ink)',
        fontWeight: 700,
      }}>{isLabor ? 'Labor' : line.brand}</td>
      <td style={{padding: '12px 14px', verticalAlign: 'top'}}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 11.5,
          color: 'var(--sc-ink)', lineHeight: 1.5,
          fontWeight: isLabor ? 500 : 400,
        }}>{line.desc}</div>
        {line.location && (
          <div style={{
            marginTop: 4,
            fontFamily: 'Open Sans, sans-serif', fontSize: 10.5,
            color: 'var(--sc-grey-500)', fontStyle: 'italic',
          }}>↳ {line.location}</div>
        )}
      </td>
      <td style={{
        padding: '12px 10px', textAlign: 'right', verticalAlign: 'top', width: 72,
        fontFamily: 'Open Sans, sans-serif', fontSize: 11,
        color: 'var(--sc-grey-700)', fontVariantNumeric: 'tabular-nums',
      }}>{fmtMoney(line.price)}</td>
      <td style={{
        padding: '12px 8px', textAlign: 'center', verticalAlign: 'top', width: 48,
        fontFamily: 'Open Sans, sans-serif', fontSize: 11,
        color: 'var(--sc-grey-500)', fontVariantNumeric: 'tabular-nums',
      }}>{fmtQty(line.qty)}</td>
      <td style={{
        padding: '12px 14px 12px 10px', textAlign: 'right', verticalAlign: 'top', width: 84,
        fontFamily: 'Open Sans, sans-serif', fontSize: 11.5,
        color: 'var(--sc-ink)', fontWeight: 600, fontVariantNumeric: 'tabular-nums',
      }}>{fmtMoney(line.total)}</td>
    </tr>
  );
}

function LineItemTable({lines}) {
  return (
    <table style={{width: '100%', borderCollapse: 'collapse', borderSpacing: 0}}>
      <thead>
        <tr style={{background: 'var(--sc-ink)', color: '#fff'}}>
          <th style={{
            padding: '10px 14px', textAlign: 'left',
            fontFamily: 'Posterama, sans-serif', fontSize: 10,
            letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
          }}>Brand</th>
          <th style={{
            padding: '10px 14px', textAlign: 'left',
            fontFamily: 'Posterama, sans-serif', fontSize: 10,
            letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
          }}>Items</th>
          <th style={{
            padding: '10px 10px', textAlign: 'right',
            fontFamily: 'Posterama, sans-serif', fontSize: 10,
            letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
          }}>Sell Price</th>
          <th style={{
            padding: '10px 8px', textAlign: 'center',
            fontFamily: 'Posterama, sans-serif', fontSize: 10,
            letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
          }}>Qty</th>
          <th style={{
            padding: '10px 14px 10px 10px', textAlign: 'right',
            fontFamily: 'Posterama, sans-serif', fontSize: 10,
            letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
          }}>Total</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((l, i) => <LineItemRow key={i} line={l} />)}
      </tbody>
    </table>
  );
}

function AreaBlock({data, area, pageN, pagesTotal, splitIdx, totalSplits}) {
  // When an area is too long for one page, caller passes a splitIdx / total.
  const suffix = totalSplits > 1 ? ` (${splitIdx}/${totalSplits})` : '';
  return (
    <ProposalPage n={data.proposalNumber} total={[pageN, pagesTotal]} section={area.name}>
      <div style={{padding: '56px 48px 0'}}>
        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20}}>
          <h2 style={{
            fontFamily: 'Posterama, sans-serif', fontWeight: 700,
            fontSize: 22, letterSpacing: '.06em', textTransform: 'uppercase',
            color: 'var(--sc-ink)', margin: 0,
            paddingBottom: 10, borderBottom: '3px solid var(--sc-orange)',
          }}>{area.name}{suffix}</h2>
          <div style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 11,
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--sc-grey-500)', fontWeight: 700,
          }}>Areas &amp; Items</div>
        </div>

        <LineItemTable lines={area.lines} />

        {splitIdx === totalSplits && (
          <div style={{
            marginTop: 16, padding: '14px 18px',
            background: 'var(--sc-ink)', color: '#fff',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 12,
              letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 700,
            }}>{area.name} Total</span>
            <span style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 18,
              letterSpacing: '.04em', color: 'var(--sc-orange)',
              fontWeight: 700, fontVariantNumeric: 'tabular-nums',
            }}>{fmtMoney(area.total)}</span>
          </div>
        )}
      </div>
    </ProposalPage>
  );
}

window.LineItemRow = LineItemRow;
window.LineItemTable = LineItemTable;
window.AreaBlock = AreaBlock;
