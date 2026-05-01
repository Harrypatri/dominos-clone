var deals = [
  {
    id: 1,
    name: '2 Large Pizzas',
    desc: 'Any 2 large pizzas at menu price',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80'
  },
  {
    id: 2,
    name: 'Wednesday Deal',
    desc: 'Large loaded pizza + BBQ Chicken + 1 Pepsi',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80'
  },
  {
    id: 3,
    name: 'Family Feast',
    desc: '2 large pizzas + sides + drinks',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80'
  },
  {
    id: 4,
    name: 'Lite Bite Combo',
    desc: 'Personal pizza + Pepsi + chicken side',
    img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80'
  },
  {
    id: 5,
    name: 'Large Combo Deal',
    desc: 'Large BBQ Chicken or Meatball Pizza + 2 Pepsi',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80'
  },
  {
    id: 6,
    name: 'Medi Licious',
    desc: 'Medium BBQ Chicken Pizza + MCP + 1 Pepsi',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80'
  }
]

function DealsSection(props) {
  var onAdd = props.onAdd

  return (
    <section
      id="deals"
      style={{ padding: '2rem', background: '#f0ebe0' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <h2
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '28px',
            color: '#3a2a1a',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1.5rem'
          }}
        >
          Today's Deals
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {deals.map(function(deal) {
            return (
              <div
                key={deal.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#fff',
                  border: '1px solid #e0d8cc',
                  cursor: 'pointer',
                  minHeight: '80px'
                }}
                onMouseOver={function(e) {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)'
                }}
                onMouseOut={function(e) {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ width: '120px', height: '80px', flexShrink: 0, overflow: 'hidden' }}>
                  <img
                    src={deal.img}
                    alt={deal.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '0 1.5rem', flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#3a2a1a',
                      marginBottom: '3px'
                    }}
                  >
                    {deal.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{deal.desc}</div>
                </div>

                <div style={{ padding: '0 1.5rem', flexShrink: 0 }}>
                  <button
                    onClick={function(e) {
                      e.stopPropagation()
                      onAdd(deal.name)
                    }}
                    style={{
                      background: '#E31837',
                      color: '#fff',
                      border: 'none',
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: '11px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      padding: '8px 18px',
                      cursor: 'pointer',
                      borderRadius: '20px'
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default DealsSection
