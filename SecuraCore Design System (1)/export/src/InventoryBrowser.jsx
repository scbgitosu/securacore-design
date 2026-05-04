// Inventory Browser — renders the current parts catalog with stock status,
// grouped by brand, searchable. Lets the user see what real line-items
// look like when they land in a proposal.
function InventoryBrowser() {
  const [rows, setRows] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [brand, setBrand] = React.useState('All');
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    loadInventory().then(r => { setRows(r); setLoading(false); })
      .catch(e => { setErr(String(e)); setLoading(false); });
  }, []);

  const brands = React.useMemo(() => {
    const s = new Set(rows.map(r => r.brand).filter(Boolean));
    return ['All', ...[...s].sort((a, b) => a.localeCompare(b))];
  }, [rows]);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase();
    return rows.filter(r =>
      (brand === 'All' || r.brand === brand) &&
      (q === '' || [r.brand, r.model, r.desc, r.sku].join(' ').toLowerCase().includes(q))
    );
  }, [rows, query, brand]);

  const stats = React.useMemo(() => {
    let units = 0, value = 0, skus = 0, low = 0;
    for (const r of filtered) {
      skus++;
      units += r.qty;
      value += r.qty * r.price;
      if (r.reorder > 0 && r.qty <= r.reorder) low++;
    }
    return {units, value, skus, low};
  }, [filtered]);

  function stockBadge(r) {
    if (r.qty === 0) return {label: 'Out', bg: '#F9E2DE', fg: '#B83120'};
    if (r.reorder > 0 && r.qty <= r.reorder) return {label: 'Low', bg: '#FCEEE1', fg: '#A74E10'};
    return {label: 'In Stock', bg: '#E4F1E8', fg: '#2E7D45'};
  }

  return (
    <div style={{
      maxWidth: 1280, margin: '40px auto', padding: '0 24px',
      fontFamily: 'Open Sans, sans-serif', color: 'var(--sc-ink)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        marginBottom: 24, gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <p style={{
            fontFamily: 'Posterama, sans-serif', fontSize: 11,
            letterSpacing: '.28em', textTransform: 'uppercase',
            color: 'var(--sc-orange)', margin: '0 0 8px', fontWeight: 700,
          }}>Inventory Browser</p>
          <h1 style={{
            fontFamily: 'Posterama, sans-serif', fontWeight: 700,
            fontSize: 32, letterSpacing: '.04em', textTransform: 'uppercase',
            color: 'var(--sc-ink)', margin: 0,
          }}>Current Parts Catalog</h1>
          <p style={{margin: '8px 0 0', fontSize: 13, color: 'var(--sc-grey-500)'}}>
            Searchable view of everything currently stocked — ready to drop into a proposal.
          </p>
        </div>
        <div style={{display: 'flex', gap: 24}}>
          <Stat label="SKUs" value={stats.skus.toLocaleString()} />
          <Stat label="Units on hand" value={stats.units.toLocaleString()} />
          <Stat label="Sell value" value={'$' + Math.round(stats.value).toLocaleString()} />
          <Stat label="Below reorder" value={stats.low.toLocaleString()} warn={stats.low > 0} />
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center',
      }}>
        <input
          placeholder="Search SKU, brand, model, description…"
          value={query} onChange={e => setQuery(e.target.value)}
          style={{
            flex: 1, padding: '12px 16px',
            fontFamily: 'Open Sans, sans-serif', fontSize: 14,
            border: '1px solid var(--border-default)', background: '#fff',
            borderRadius: 2, outline: 'none',
          }}
        />
        <select value={brand} onChange={e => setBrand(e.target.value)} style={{
          padding: '12px 14px',
          fontFamily: 'Open Sans, sans-serif', fontSize: 14,
          border: '1px solid var(--border-default)', background: '#fff',
          borderRadius: 2, minWidth: 180,
        }}>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {loading && <div style={{padding: 60, textAlign: 'center', color: 'var(--sc-grey-500)'}}>Loading inventory…</div>}
      {err && <div style={{padding: 24, background: '#F9E2DE', color: '#B83120', borderRadius: 2}}>Failed to load inventory: {err}</div>}

      {!loading && !err && (
        <div style={{border: '1px solid var(--border-subtle)', background: '#fff'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: 'var(--sc-ink)', color: '#fff'}}>
                {['Brand', 'Model / SKU', 'Description', 'Qty', 'Price', 'Supplier', 'Status'].map((h, i) => (
                  <th key={h} style={{
                    padding: '12px 14px',
                    textAlign: ['Qty', 'Price'].includes(h) ? 'right' : 'left',
                    fontFamily: 'Posterama, sans-serif', fontSize: 10,
                    letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 150).map((r, i) => {
                const b = stockBadge(r);
                return (
                  <tr key={i} style={{borderBottom: '1px solid var(--border-subtle)'}}>
                    <td style={{padding: '12px 14px', fontFamily: 'Posterama, sans-serif', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700}}>{r.brand}</td>
                    <td style={{padding: '12px 14px', fontSize: 12, fontFamily: 'ui-monospace, SF Mono, monospace', color: 'var(--sc-grey-700)'}}>{r.model}</td>
                    <td style={{padding: '12px 14px', fontSize: 13, color: 'var(--sc-ink)', maxWidth: 460}}>{r.desc}</td>
                    <td style={{padding: '12px 14px', textAlign: 'right', fontSize: 13, fontVariantNumeric: 'tabular-nums'}}>{r.qty}</td>
                    <td style={{padding: '12px 14px', textAlign: 'right', fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums'}}>{r.price ? '$' + r.price.toFixed(2) : '—'}</td>
                    <td style={{padding: '12px 14px', fontSize: 12, color: 'var(--sc-grey-500)'}}>{r.supplier}</td>
                    <td style={{padding: '12px 14px'}}>
                      <span style={{
                        display: 'inline-block', padding: '4px 10px',
                        fontFamily: 'Posterama, sans-serif', fontSize: 9,
                        letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 700,
                        background: b.bg, color: b.fg, borderRadius: 2,
                      }}>{b.label}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length > 150 && (
            <div style={{padding: '16px 20px', background: 'var(--sc-grey-100)', fontSize: 12, color: 'var(--sc-grey-500)', textAlign: 'center'}}>
              Showing first 150 of {filtered.length.toLocaleString()} matching items. Narrow your search to see more.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({label, value, warn}) {
  return (
    <div>
      <div style={{
        fontFamily: 'Posterama, sans-serif', fontSize: 10,
        letterSpacing: '.22em', textTransform: 'uppercase',
        color: 'var(--sc-grey-500)', marginBottom: 4, fontWeight: 700,
      }}>{label}</div>
      <div style={{
        fontFamily: 'Posterama, sans-serif', fontSize: 22,
        letterSpacing: '.02em', fontWeight: 700,
        color: warn ? 'var(--sc-orange)' : 'var(--sc-ink)',
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</div>
    </div>
  );
}

window.InventoryBrowser = InventoryBrowser;
window.Stat = Stat;
