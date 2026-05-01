function HeroBanner() {
  return (
    <section style={{ background: '#f0ebe0' }}>

      {/* Order Banner */}
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
        <div style={{ height: '2px', width: '90px', background: '#0078AE', opacity: 0.3 }} />
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
            background: '#E31837', color: '#fff', border: 'none',
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 900, fontSize: '15px',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            padding: '13px 34px', cursor: 'pointer'
          }}
        >
          Delivery
        </button>
        <span style={{ color: '#bbb', fontSize: '15px' }}>or</span>
        <button
          style={{
            background: '#E31837', color: '#fff', border: 'none',
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 900, fontSize: '13px',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            padding: '13px 34px', cursor: 'pointer'
          }}
        >
          Carryout
        </button>
        <div style={{ height: '2px', width: '100px', fontSize: '15px', background: '#0078AE', opacity: 0.3 }} />
      </div>

      {/* Hero Banner — centered with white space */}
      <div style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1rem' }}>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            minHeight: '440px',
            borderRadius: '5px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}
        >

          {/* LEFT: Medi Licious */}
          <div
            style={{
              background: '#1a7abf',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=85"
              alt="Medi Licious Pizza"
              style={{
                position: 'absolute',
                left: 0, top: 0,
                width: '60%', height: '100%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, rgba(26,122,191,0.15) 0%, rgba(26,122,191,0.5) 50%, rgba(26,122,191,0.97) 70%)'
              }}
            />

            {/* MEDI LICIOUS text */}
            <div
              style={{
                position: 'absolute',
                left: '4%', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: '78px',
                  color: '#fff',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                MEDI
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: '78px',
                  color: '#fff',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                  WebkitTextStroke: '3px #E31837',
                  textShadow: '3px 3px 0 #E31837, -1px -1px 0 #c0101f',
                  marginTop: '6px'
                }}
              >
                LICIOUS
              </div>
              <div
                style={{
                  height: '5px',
                  width: '100%',
                  background: '#1a3a7a',
                  marginTop: '8px',
                  transform: 'skewX(-8deg)'
                }}
              />
            </div>

            {/* Right: desc + price + button */}
            <div
              style={{
                position: 'absolute',
                right: '5%', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                textAlign: 'left',
                maxWidth: '190px'
              }}
            >
              <p
                style={{
                  color: '#fff',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 700, fontSize: '16px',
                  textTransform: 'uppercase', lineHeight: 1.4,
                  marginBottom: '10px',
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                Enjoy Medium BBQ<br />Chicken Pizza + MCP<br />+ 1 Pepsi
              </p>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>FROM</div>
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900, fontSize: '54px',
                  color: '#FFD700', lineHeight: 1,
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
              >
                &#8358;8,999
              </div>
              <button
                style={{
                  marginTop: '12px',
                  background: '#E31837', color: '#fff', border: 'none',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900, fontSize: '12px',
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  padding: '11px 22px', cursor: 'pointer',
                  borderRadius: '24px',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.35)'
                }}
              >
                ORDER NOW &#9658;
              </button>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', marginTop: '5px' }}>T and Cs Apply</div>
            </div>
          </div>

          {/* RIGHT: Lite Bite + Medi Yum — with gap between them */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', background: '#f0ebe0', padding: '6px 0 6px 6px' }}>

            {/* Lite Bite */}
            <div
              style={{
                flex: 1,
                background: '#111',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                borderRadius: '2px'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80"
                alt="Lite Bite"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', opacity: 0.65
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px', right: '12px',
                  textAlign: 'right', zIndex: 2
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontStyle: 'italic' }}>Lite</div>
                <div
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 900, fontSize: '44px',
                    color: '#fff', lineHeight: 1,
                    textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                  }}
                >
                  Bite
                </div>
              </div>
              <div
                style={{
                  position: 'relative', zIndex: 2,
                  padding: '0.8rem 1rem', paddingTop: '2rem',
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>FROM</div>
                <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900, fontSize: '28px', color: '#FFD700', lineHeight: 1, marginBottom: '8px' }}>&#8358;9,999</div>
                <button
                  style={{
                    background: '#E31837', color: '#fff', border: 'none',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 900, fontSize: '9px',
                    letterSpacing: '2px', textTransform: 'uppercase',
                    padding: '7px 14px', cursor: 'pointer', borderRadius: '18px'
                  }}
                >
                  ORDER NOW &#9658;
                </button>
                <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>T and Cs Apply</div>
              </div>
            </div>

            {/* Medi Yum */}
            <div
              style={{
                flex: 1,
                background: '#c87000',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                borderRadius: '2px'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
                alt="Medi Yum"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', opacity: 0.5
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px', left: '12px',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 900, fontSize: '32px',
                    color: '#00BFFF', lineHeight: 1,
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    textTransform: 'uppercase'
                  }}
                >
                  MEDI-<br />YUM
                </div>
              </div>
              <div
                style={{
                  position: 'relative', zIndex: 2,
                  padding: '0.8rem 1rem', paddingTop: '2rem',
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(100,40,0,0.95) 0%, transparent 100%)'
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>FROM</div>
                <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900, fontSize: '28px', color: '#FFD700', lineHeight: 1, marginBottom: '8px' }}>&#8358;6,999</div>
                <button
                  style={{
                    background: '#E31837', color: '#fff', border: 'none',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 900, fontSize: '9px',
                    letterSpacing: '2px', textTransform: 'uppercase',
                    padding: '7px 14px', cursor: 'pointer', borderRadius: '18px'
                  }}
                >
                  ORDER NOW &#9658;
                </button>
                <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>T and Cs Apply</div>
              </div>
            </div>

          </div>
        </div>

        {/* LARGE COMBO DEAL STRIP */}
        <div
          style={{
            marginTop: '1rem',
            background: '#1a3a7a',
            display: 'flex',
            alignItems: 'center',
            minHeight: '120px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '4px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
          }}
        >
          {/* Badge */}
          <div style={{ padding: '0 1.5rem', flexShrink: 0, zIndex: 2 }}>
            <div
              style={{
                background: '#162d55',
                padding: '10px 14px',
                textAlign: 'center',
                border: '2px solid rgba(255,255,255,0.15)',
                borderRadius: '4px'
              }}
            >
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900, fontSize: '18px',
                  color: '#fff', textTransform: 'uppercase',
                  letterSpacing: '1px', lineHeight: 1
                }}
              >
                LARGE
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900, fontSize: '28px',
                  color: '#fff', textTransform: 'uppercase',
                  lineHeight: 1
                }}
              >
                COMBO
              </div>
              <div
                style={{
                  background: '#E31837', color: '#fff',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 900, fontSize: '11px',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  padding: '2px 10px', marginTop: '5px',
                  display: 'inline-block', borderRadius: '2px'
                }}
              >
                DEAL
              </div>
            </div>
          </div>

          {/* Pizza image */}
          <div style={{ width: '200px', height: '120px', flexShrink: 0, overflow: 'hidden', position: 'relative', zIndex: 2 }}>
            <img
              src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80"
              alt="Large Combo Pizza"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: 1, padding: '0 1.5rem', zIndex: 2 }}>
            <p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 700, fontSize: '18px',
                textTransform: 'uppercase',
                color: '#fff', lineHeight: 1.4,
                letterSpacing: '0.5px'
              }}
            >
              Enjoy Large BBQ Chicken or Meatball<br />
              Pizza + 2 50cl Pepsi
            </p>
          </div>

          {/* Price */}
          <div style={{ padding: '0 1rem', flexShrink: 0, zIndex: 2, textAlign: 'right' }}>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>FROM</div>
            <div
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 900, fontSize: '48px',
                color: '#FFD700', lineHeight: 1
              }}
            >
              &#8358;10,999
            </div>
          </div>

          {/* Order Now */}
          <div style={{ padding: '0 1.5rem', flexShrink: 0, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
              style={{
                background: '#E31837', color: '#fff', border: 'none',
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 900, fontSize: '13px',
                letterSpacing: '2px', textTransform: 'uppercase',
                padding: '12px 22px', cursor: 'pointer',
                borderRadius: '24px',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.3)'
              }}
            >
              ORDER NOW &#9658;
            </button>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', marginTop: '5px' }}>T and Cs Apply</div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroBanner
