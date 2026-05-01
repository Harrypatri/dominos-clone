function MenuCard(props) {
  var item = props.item
  var onAdd = props.onAdd

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #ece7df',
        transition: 'all 0.25s',
        cursor: 'pointer',
        borderRadius: '2px',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          height: '150px',
          overflow: 'hidden',
          background: '#f5f0e8'
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{ padding: '0.75rem' }}>
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '14px',
            color: '#1a1a1a',
            marginBottom: '3px'
          }}
        >
          {item.name}
        </div>

        <div
          style={{
            fontSize: '11px',
            color: '#aaa',
            marginBottom: '8px',
            lineHeight: 1.3
          }}
        >
          {item.desc}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 900,
              fontSize: '15px',
              color: '#0078AE'
            }}
          >
            &#8358;{item.price.toLocaleString()}
          </span>

          <button
            onClick={function() { onAdd(item.name) }}
            style={{
              background: '#E31837',
              color: '#fff',
              border: 'none',
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 900,
              fontSize: '10px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            ADD +
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
