import { Link } from 'react-router-dom'

function Navbar(props) {
  var cartCount = props.cartCount

  var linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: 900,
    fontSize: '13px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '0 1.1rem',
    borderRight: '1px solid rgba(255,255,255,0.18)',
    whiteSpace: 'nowrap',
    height: '100%'
  }

  return (
    <header style={{ background: '#0078AE', position: 'sticky', top: 0, zIndex: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
      <div style={{ display: 'flex', alignItems: 'stretch', height: '70px' }}>

        {/* Logo */}
        <Link to="/" style={{ padding: '0 5rem', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(255,255,255,0.18)', border:"none", flexShrink: 0 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
            alt="Domino's"
            style={{ height: '50px', width: 'auto' }}
          />
        </Link>

        {/* ORDER ONLINE — stacked */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900, fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', padding: '0 3rem', border:'none', borderRight: '1px solid rgba(255,255,255,0.18)', whiteSpace: 'nowrap', lineHeight: 1.2 }}>
          <span>ORDER</span>
          <span>ONLINE</span>
        </Link>

        {/* MENU */}
        <Link to="/menu" style={linkStyle}>MENU</Link>

        {/* DEALS */}
        <Link to="/deals" style={linkStyle}>DEALS</Link>

        {/* STORES */}
        <a href="#" style={linkStyle}>STORES</a>

        {/* TRACKER */}
        <a href="#" style={linkStyle}>TRACKER</a>

        {/* VIEW YOUR LOCAL DOMINO'S — white border box */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'transparent',
          border: 'none',
          color: '#fff',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '12px',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          padding: '0 1rem',
          cursor: 'pointer',
          lineHeight: 1.3,
          flexShrink: 0,
          margin: '10px 12px',
          outline: '2px solid rgba(255,255,255,0.8)',
          borderRadius: '2px'
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px', flexShrink: 0 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span>VIEW YOUR LOCAL</span>
            <span>DOMINO'S</span>
          </span>
        </button>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* SIGN IN — darker background */}
        <button style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: 'rgba(0,0,0,0.2)',
          border: 'none',
          borderLeft: '1px solid rgba(255,255,255,0.18)',
          color: '#fff',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '11px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          padding: '0 4rem',
          cursor: 'pointer',
          minWidth: '90px',
          height: '100%'
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px' }}>
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          SIGN IN
        </button>

        {/* CART — darker background with red badge */}
        <button style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: 'rgba(0, 0, 0, 0.25)',
          border: 'none',
          borderLeft: '1px solid rgba(255,255,255,0.18)',
          color: '#fff',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 900,
          fontSize: '11px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          padding: '0 4rem',
          cursor: 'pointer',
          minWidth: '80px',
          height: '100%',
          position: 'relative'
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '26px', height: '26px' }}>
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.83 6H21l-1.68 8.39c-.16.81-.87 1.41-1.7 1.41H8.1c-.84 0-1.56-.62-1.7-1.45L5.1 3H2V1H6l.83 5z"/>
          </svg>
          CART
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: '#E31837',
            color: '#fff',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            fontSize: '11px',
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(0,0,0,0.2)'
          }}>
            {cartCount > 0 ? cartCount : 0}
          </span>
        </button>

      </div>
    </header>
  )
}

export default Navbar
