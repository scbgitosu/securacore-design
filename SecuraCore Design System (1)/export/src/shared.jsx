// Shared page primitives + helpers for the proposal template.
// All pages are 8.5" × 11" at 96dpi = 816 × 1056px.
// Each <ProposalPage> carries brand chrome and the standard footer.

const PAGE_WIDTH  = 816;
const PAGE_HEIGHT = 1056;

function fmtMoney(n) {
  return '$' + n.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function fmtQty(n) {
  // match source: 'x1', 'x0.5', 'x1.5', 'x14'
  return 'x' + (Number.isInteger(n) ? n : n.toString());
}

function ProposalPage({children, n, total, section, noFooter, style}) {
  return (
    <section style={{
      width: PAGE_WIDTH, height: PAGE_HEIGHT,
      background: '#fff', color: 'var(--sc-ink)',
      margin: '0 auto 32px', boxShadow: 'var(--shadow-lg)',
      position: 'relative', overflow: 'hidden',
      fontFamily: 'Open Sans, sans-serif',
      pageBreakAfter: 'always',
      ...style,
    }}>
      {children}
      {!noFooter && (
        <div style={{
          position: 'absolute', bottom: 24, left: 48, right: 48,
          display: 'flex', justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 12,
          fontFamily: 'Open Sans, sans-serif', fontSize: 10,
          color: 'var(--sc-grey-500)',
          letterSpacing: '.04em',
        }}>
          <span>Proposal #{n}</span>
          <span style={{fontFamily: 'Posterama, sans-serif', letterSpacing: '.22em', textTransform: 'uppercase'}}>{section}</span>
          <span>{String(total[0]).padStart(2, '0')} of {total[1]}</span>
        </div>
      )}
    </section>
  );
}

// Section heading (matches "About Us", "Project Description", etc.)
function SectionHeading({children}) {
  return (
    <h2 style={{
      fontFamily: 'Posterama, sans-serif', fontWeight: 700,
      fontSize: 26, letterSpacing: '.06em', textTransform: 'uppercase',
      color: 'var(--sc-ink)', margin: '0 0 24px',
      paddingBottom: 14, borderBottom: '3px solid var(--sc-orange)',
      display: 'inline-block',
    }}>{children}</h2>
  );
}

window.ProposalPage = ProposalPage;
window.SectionHeading = SectionHeading;
window.fmtMoney = fmtMoney;
window.fmtQty = fmtQty;
window.PAGE_WIDTH = PAGE_WIDTH;
window.PAGE_HEIGHT = PAGE_HEIGHT;
