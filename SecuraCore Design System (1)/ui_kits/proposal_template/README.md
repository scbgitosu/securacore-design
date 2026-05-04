# Proposal Template — SecuraCore UI Kit

A print-and-web proposal template modeled on real SecuraCore proposals (#474 Grotz Residence, #497 Brant, #509 TS&S Ford Madras, #533 Brownrigg P2P).

## Structure

The template is a single scrollable HTML document composed of "pages" (each 816×1056px at 96dpi — US Letter portrait, printable). Components:

| Component | What it is |
|---|---|
| `CoverPage.jsx` | Title, client block, SecuraCore block, preparer + expiration |
| `AboutUs.jsx` | Standard boilerplate + brand marks |
| `ProjectDescription.jsx` | Scope of work, floorplan resources, clarifications |
| `AreaBlock.jsx` | One area (e.g. "Main House") with nested `LineItemTable` |
| `LineItemTable.jsx` | Brand-labeled rows: description • location • price × qty = total |
| `FinancialSummary.jsx` | Parts / Labor / Subtotal / Total |
| `PaymentSchedule.jsx` | 50% upon acceptance, balance upon completion (default) |
| `ProjectTerms.jsx` | Tariff pass-through, warranty, lien info — standard boilerplate |
| `SignatureBlock.jsx` | "I accept this proposal and the terms herein" + digital fingerprint |
| `ProposalFooter.jsx` | "Proposal #N • X of Y • [Section]" — repeats at bottom of every page |

## Viewing

Open `index.html` — renders the full Brant residence proposal (#497) as a sample, using the real data extracted from the PDF. Scroll through to see every page type.

## Data shape

See `sampleData.js` for the proposal data shape:

```
{
  proposalNumber: 497,
  title: 'Home Management, Network/WiFi & Audio Visual',
  client: { name, email, phone, address },
  preparer: 'Matt Schaberg',
  expires: 'December 08, 2025',
  scope: '...',
  clarifications: [...],
  areas: [
    {
      name: 'Home Management/Property Awareness',
      lines: [
        { brand: 'Qolsys', kind: 'item', desc, location, price, qty, total },
        { brand: 'Labor Installation', kind: 'labor', desc, price, qty, total },
        ...
      ],
      total: 5282.35,
    },
  ],
  totals: { parts, labor, subtotal, total, taxExempt: true },
  payments: [
    { label: 'Payment 1', terms: '50% of Proposal Total • Due Upon Proposal Acceptance', amount: 8832.81 },
    ...
  ],
}
```

## Notes

- **Not a form builder.** This is a visual template; the data is hard-coded. For a real proposal workflow, wire this up to your CRM / proposal software.
- **Print-ready.** Every page has `page-break-after: always` and sizes to 8.5×11" so it prints cleanly with Cmd+P.
- **Branding.** Cover uses the stacked logo; About Us uses the horizontal logo; every page footer repeats "Proposal #N · X of Y · Section" per the source PDFs.
