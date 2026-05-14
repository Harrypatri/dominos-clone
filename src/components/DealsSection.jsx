import logo from '../assets/logo.png'
const deals = [
  { id: 1, name: '2 Large Pizzas', desc: 'Any 2 large pizzas at menu price', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80' },
  { id: 2, name: 'Wednesday Deal', desc: 'Large loaded pizza + BBQ Chicken + 1 Pepsi', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80' },
  { id: 3, name: 'Family Feast', desc: '2 large pizzas + sides + drinks', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80' },
  { id: 4, name: 'Lite Bite Combo', desc: 'Personal pizza + Pepsi + chicken side', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80' },
  { id: 5, name: 'Large Combo Deal', desc: 'Large BBQ Chicken or Meatball Pizza + 2 Pepsi', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80' },
  { id: 6, name: 'Medi Licious', desc: 'Medium BBQ Chicken Pizza + MCP + 1 Pepsi', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80' },
]

function DealsSection(props) {
  const { onAdd } = props

  return (
    <section id="deals" className="px-4 py-6 bg-[#f0ebe0]">
      <div className="max-w-[960px] mx-auto">

        {/* Header with logo */}
        <div className="flex items-center gap-3 mb-5">
          
            <img src={logo} alt="Domino's" className="h-10 w-auto" />
        
          <h2 className="font-black text-[#3a2a1a] uppercase tracking-wide" style={{ fontSize: 'clamp(18px, 5vw, 28px)' }}>
            Today's Deals
          </h2>
        </div>

        <div className="flex flex-col gap-1.5">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="flex items-center bg-white border border-[#e0d8cc] cursor-pointer min-h-[80px] hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div className="w-[90px] h-20 flex-shrink-0 overflow-hidden">
                <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <div className="px-3 flex-1 min-w-0">
                <div
                  className="font-bold text-[#3a2a1a] mb-0.5 truncate"
                  style={{ fontSize: 'clamp(13px, 3vw, 18px)' }}
                >
                  {deal.name}
                </div>
                <div
                  className="text-gray-400 leading-snug line-clamp-2"
                  style={{ fontSize: 'clamp(11px, 2.5vw, 12px)' }}
                >
                  {deal.desc}
                </div>
              </div>

              {/* Order Button */}
              <div className="px-3 flex-shrink-0">
                <button
                  onClick={(e) => { e.stopPropagation(); onAdd(deal.name) }}
                  className="bg-[#E31837] text-white font-black uppercase tracking-wide px-3 py-2 cursor-pointer rounded-full whitespace-nowrap hover:bg-red-700 transition-colors"
                  style={{ fontSize: 'clamp(9px, 2vw, 11px)' }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DealsSection
