function ProjectTerms({data, pageN, pagesTotal}) {
  return (
    <ProposalPage n={data.proposalNumber} total={[pageN, pagesTotal]} section="Project Terms">
      <div style={{padding: '56px 72px 0'}}>
        <SectionHeading>Project Terms</SectionHeading>

        <div style={{display: 'flex', flexDirection: 'column', gap: 14,
          fontFamily: 'Open Sans, sans-serif', fontSize: 10.5, lineHeight: 1.6,
          color: 'var(--sc-grey-700)'}}>

          <p style={{margin: 0}}>
            Quoted pricing is good for 30 days. After that, prices are subject to
            change without notice, and the price will be that in effect at the time
            of shipment or service.
          </p>

          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 10,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--sc-ink)', marginBottom: 4, fontWeight: 700,
            }}>Tariff Pass-Through Clause</div>
            <p style={{margin: 0}}>
              In the event that any tariffs, duties, or additional taxes are imposed
              on the goods or services provided under this contract by any
              governmental authority, such costs will be passed through to the
              customer.
            </p>
          </div>

          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 10,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--sc-ink)', marginBottom: 4, fontWeight: 700,
            }}>Owner Responsibilities</div>
            <ol style={{margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4}}>
              <li>Owner shall provide clear and safe access to all work areas.</li>
              <li>Owner shall provide adequate electrical power and utilities at no cost.</li>
              <li>Owner shall coordinate access with any other trades on the job site.</li>
              <li>Owner shall indemnify and hold Contractor harmless from any claims, damages, lawsuits or expenses resulting from negligence or errors or omissions committed by Owner or Owner's agents.</li>
              <li>Owner shall bear all risk of loss, damage and casualty to the Property including but not limited to damage to vegetation, furniture and personal belongings of Owner.</li>
              <li>Owner shall maintain at Owner's expense during the work property damage insurance.</li>
              <li><strong>Attorney Fees.</strong> If Owner is in default of payment, Owner shall pay Contractor, immediately on demand, Contractor's actual fees and expenses together with reasonable attorney fees, even though no suit or action is filed.</li>
            </ol>
          </div>

          <div>
            <div style={{
              fontFamily: 'Posterama, sans-serif', fontSize: 10,
              letterSpacing: '.22em', textTransform: 'uppercase',
              color: 'var(--sc-ink)', marginBottom: 4, fontWeight: 700,
            }}>Warranty</div>
            <p style={{margin: 0, fontSize: 10}}>
              THE WARRANTIES IN THIS PARAGRAPH ARE IN LIEU OF OTHER WARRANTIES.
              THERE ARE NO OTHER WARRANTIES, EXPRESS OR IMPLIED, OF MERCHANTABILITY
              OR FITNESS FOR ANY PURPOSE. Contractor warrants that it will perform
              the work in accordance with industry practice and that materials and
              equipment furnished, if any, will be new, unless specified otherwise.
              Contractor warrants their installation and service work will be free
              from defect for a period of one (1) year from the date of project's
              substantial completion. This warranty will automatically terminate
              upon sale of the property by the Owner or if a third party alters,
              makes additions, adjustments or repairs to the system. Contractor's
              duty to repair is conditioned upon Owner's compliance in full with
              the payment terms and other conditions of this contract. Contractor
              shall not be responsible for consequential damages.
            </p>
          </div>

          <div style={{
            marginTop: 8, padding: '10px 14px',
            background: 'var(--sc-grey-100)',
            fontSize: 10.5,
          }}>
            <strong>Liens Information:</strong> Consumer_Protection_Notice_ORS_701.3.pdf 📎
          </div>
        </div>
      </div>
    </ProposalPage>
  );
}
window.ProjectTerms = ProjectTerms;
