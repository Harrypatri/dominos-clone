function Footer() {
  return (
    <footer style={{ background: '#f0ebe0' }}>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '18px 2rem',
          borderTop: '1px solid #d6cfc2',
          borderBottom: '1px solid #d6cfc2',
          gap: '0',
          flexWrap: 'wrap'
        }}
      >
        <a href="#" style={{ color: '#666', fontSize: '13px', padding: '4px 1.1rem', textDecoration: 'none' }}>International</a>
        <span style={{ color: '#ccc' }}>|</span>
        <a href="#" style={{ color: '#666', fontSize: '13px', padding: '4px 1.1rem', textDecoration: 'none' }}>About Pizza</a>
        <span style={{ color: '#ccc' }}>|</span>
        <a href="#" style={{ color: '#666', fontSize: '13px', padding: '4px 1.1rem', textDecoration: 'none' }}>FAQ</a>
        <span style={{ color: '#ccc' }}>|</span>
        <a href="#" style={{ color: '#666', fontSize: '13px', padding: '4px 1.1rem', textDecoration: 'none' }}>Contact Us</a>
        <span style={{ color: '#ccc' }}>|</span>
        <a href="#" style={{ color: '#666', fontSize: '13px', padding: '4px 1.1rem', textDecoration: 'none' }}>Privacy Policy</a>
      </div>

      <div
        style={{
          padding: '28px 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a href="#" style={{ color: '#444', textDecoration: 'none' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" style={{ color: '#444', textDecoration: 'none' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" style={{ color: '#444', textDecoration: 'none' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
          <a href="#" style={{ color: '#444', textDecoration: 'none' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ color: '#eb001b', fontWeight: 900, fontSize: '12px', border: '2px solid #eb001b', padding: '4px 8px', borderRadius: '3px' }}>Mastercard</span>
          <span style={{ color: '#1a1f71', fontWeight: 900, fontSize: '16px', border: '2px solid #1a1f71', padding: '2px 8px', borderRadius: '3px', letterSpacing: '2px' }}>VISA</span>
          <span style={{ color: '#00553e', fontWeight: 900, fontSize: '13px', border: '2px solid #00553e', padding: '3px 8px', borderRadius: '3px' }}>Verve</span>
          <span style={{ color: '#006eff', fontWeight: 700, fontSize: '12px', border: '2px solid #006eff', padding: '3px 8px', borderRadius: '3px' }}>paystack</span>
          <span style={{ color: '#c0392b', fontWeight: 900, fontSize: '12px', border: '2px solid #c0392b', padding: '3px 8px', borderRadius: '3px' }}>Interswitch</span>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #d6cfc2',
          padding: '1.5rem 2rem 2.5rem'
        }}
      >
        <p style={{ color: '#999', fontSize: '12px', lineHeight: 1.8, maxWidth: '960px', margin: '0 auto 10px' }}>
          Delivery Guarantee: A minimum order of &#8358;3000 is required to qualify for free delivery.
          FREE delivery applies to predetermined areas around each Domino's outlet.
          Please ask your closest Domino's Pizza outlet if you fall within their specified delivery area.
          Our Delivery Experts are not penalized for late deliveries.
        </p>
        <p style={{ color: '#999', fontSize: '12px', lineHeight: 1.8, maxWidth: '960px', margin: '0 auto' }}>
          The hours of operation may vary by store. Valid for the Delivery Service and Carry-Out of
          Domino's Pizza Nigeria stores. Domino's Pizza reserves the right to make unannounced price changes.
          Please note that checks or bank transfers are not accepted as payment method.
          Prices include VAT and other Taxes.
        </p>
      </div>

    </footer>
  )
}

export default Footer
