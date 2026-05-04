// Minimal CSV parser + inventory loader — used by the Inventory Browser screen.
// The CSV lives alongside this file so relative fetch works from index.html.
async function loadInventory(path = 'inventory.csv') {
  const text = await fetch(path).then(r => r.text());
  const rows = [];
  const lines = text.split(/\r?\n/);
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (!row.trim()) continue;
    const cells = [];
    let cur = '', inQ = false;
    for (const ch of row) {
      if (ch === '"') inQ = !inQ;
      else if (ch === ',' && !inQ) { cells.push(cur); cur = ''; }
      else cur += ch;
    }
    cells.push(cur);
    const [sku, brand, model, desc, qty, cost, rt, mt, sell, supplier] = cells.map(c => c.replace(/^"|"$/g, '').trim());
    rows.push({
      sku: sku || model,
      brand,
      model,
      desc,
      qty: parseFloat(qty) || 0,
      cost: parseFloat(cost) || 0,
      reorder: parseFloat(rt) || 0,
      max: parseFloat(mt) || 0,
      price: parseFloat(sell) || 0,
      supplier,
    });
  }
  return rows;
}
window.loadInventory = loadInventory;
