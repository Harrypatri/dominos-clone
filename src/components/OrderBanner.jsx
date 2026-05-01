function OrderBanner() {
  return (
    <div
      style={{
        background: '#f0ebe0',
        padding: '14px 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        borderBottom: '1px solid #d6cfc2'
      }}
    >

      <div
        style={{
          height: '2px',
          width: '90px',
          background: '#0078AE',
          opacity: 0.3
        }}
      />

      <span
        style={{
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '19px',
          letterSpacing: '2.5px',
          color: '#0078AE',
          textTransform: 'uppercase'
        }}
      >
        Start Your Order
      </span>

      <button
        style={{
          background: '#E31837',
          color: '#fff',
          border: 'none',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '13px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '13px 34px',
          cursor: 'pointer'
        }}
      >
        Delivery
      </button>

      <span
        style={{
          color: '#bbb',
          fontSize: '14px'
        }}
      >
        or
      </span>

      <button
        style={{
          background: '#E31837',
          color: '#fff',
          border: 'none',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '13px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          padding: '13px 34px',
          cursor: 'pointer'
        }}
      >
        Carryout
      </button>

      <div
        style={{
          height: '2px',
          width: '90px',
          background: '#0078AE',
          opacity: 0.3
        }}
      />

    </div>
  )
}

export default OrderBanner