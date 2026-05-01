var menuCategories = [
  { id: 1, name: 'Deals', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80' },
  { id: 2, name: 'Pizzas', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&q=80' },
  { id: 3, name: 'Sides', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=300&q=80' },
  { id: 4, name: 'Extras', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80' },
  { id: 5, name: 'Chicken', img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&q=80' },
  { id: 6, name: 'Drinks', img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&q=80' },
  { id: 7, name: 'Desserts', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&q=80' }
]

function MenuGrid(props) {
  var onAdd = props.onAdd

  return (
    <section
      id="menu"
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
            marginBottom: '0.5rem'
          }}
        >
          Domino's National Menu
        </h2>

        <p style={{ color: '#888', fontSize: '13px', marginBottom: '1.5rem' }}>
          This is the Domino's national menu. To see prices, coupons and exactly what items are available to you,{' '}
          <a href="#" style={{ color: '#0078AE' }}>select your local store.</a>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {menuCategories.map(function(cat) {
            return (
              <div
                key={cat.id}
                onClick={function() { onAdd(cat.name) }}
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
                    src={cat.img}
                    alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div
                  style={{
                    padding: '0 1.5rem',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#3a2a1a'
                  }}
                >
                  {cat.name}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default MenuGrid
