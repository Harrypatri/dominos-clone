import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const menuCategories = [
  { id: 1, name: 'Deals', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80' },
  { id: 2, name: 'Pizzas', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&q=80' },
  { id: 3, name: 'Sides', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&q=80' }, 
  { id: 4, name: 'Extras', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80' },
  { id: 5, name: 'Chicken', img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&q=80' },
  { id: 6, name: 'Drinks', img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&q=80' },
  { id: 7, name: 'Desserts', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&q=80' },
]

// Domino's Nigeria store locations for Google Maps
const storeLocations = [
  { name: "Domino's - Ikeja", lat: 6.6018, lng: 3.3515 },
  { name: "Domino's - Victoria Island", lat: 6.4281, lng: 3.4219 },
  { name: "Domino's - Lekki", lat: 6.4478, lng: 3.5379 },
]

function StoreMap() {
  // Build a Google Maps embed URL with multiple markers
  const mapSrc =
    `https://www.google.com/maps/embed/v1/search` +
    `?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY` +
    `&q=Domino%27s+Pizza+Nigeria` +
    `&center=6.5244,3.3792` +
    `&zoom=11`

  return (
    <div className="mt-8 mb-4">
      <h3 className="font-black text-[#3a2a1a] uppercase tracking-wide text-lg mb-3">
        Find Your Nearest Store
      </h3>

      {/* Map embed */}
      <div className="rounded overflow-hidden border border-[#e0d8cc] shadow-md w-full h-[280px] sm:h-[360px]">
        <iframe
          title="Domino's Store Locator"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
      </div>

      {/* Store list */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {storeLocations.map((store) => (
          <a
            key={store.name}
            href={`https://www.google.com/maps/search/?api=1&query=${store.lat},${store.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-[#e0d8cc] px-3 py-2 rounded text-[#0078AE] text-sm font-bold hover:bg-[#f0f8ff] transition-colors no-underline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E31837] flex-shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {store.name}
          </a>
        ))}
      </div>
    </div>
  )
}

function MenuPage(props) {
  const { onAdd } = props

  return (
    <div className="bg-[#f0ebe0] min-h-screen">

      {/* Order Banner */}
      <div className="bg-[#0078AE] px-4 py-3 flex flex-wrap items-center justify-center gap-3">
        <span className="font-black text-base tracking-[2px] text-white uppercase">
          Start Your Order
        </span>
        <button className="bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-6 py-3 cursor-pointer hover:bg-red-700 transition-colors">
          Delivery
        </button>
        <span className="text-white/60 text-sm">or</span>
        <button className="bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-6 py-3 cursor-pointer hover:bg-red-700 transition-colors">
          Carryout
        </button>
      </div>

      <div className="max-w-[960px] mx-auto px-4 py-6">

        {/* Back link */}
        <div className="mb-4">
          <Link to="/" className="text-[#0078AE] text-sm no-underline inline-flex items-center gap-1 hover:underline">
            &#8592; Back to Home
          </Link>
        </div>

        {/* Domino's Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Domino's" className="h-10 w-auto" />
        
          <h2 className="font-black text-[#3a2a1a] uppercase tracking-wide" style={{ fontSize: 'clamp(18px, 5vw, 28px)' }}>
            National Menu
          </h2>
        </div>

        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
          This is the Domino's national menu. To see prices, coupons and exactly what items are available to you,{' '}
          <a href="#" className="text-[#0078AE] hover:underline">select your local store.</a>
        </p>

        {/* Category Tabs — scrollable on mobile */}
        <div className="flex gap-1 mb-5 border-b-2 border-[#d6cfc2] pb-3 overflow-x-auto scrollbar-hide">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              className="text-[#0078AE] text-[12px] font-bold tracking-wide uppercase no-underline px-2 py-1 border-b-2 border-transparent whitespace-nowrap flex-shrink-0 hover:border-[#0078AE] transition-colors"
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-1.5">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              id={`cat-${cat.id}`}
              onClick={() => onAdd(cat.name)}
              className="flex items-center bg-white border border-[#e0d8cc] cursor-pointer min-h-[80px] hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-20 flex-shrink-0 overflow-hidden">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-4 font-bold text-[#3a2a1a] flex-1" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
                {cat.name}
              </div>
              <div className="px-4 text-[#0078AE] text-xl">&#8250;</div>
            </div>
          ))}
        </div>

        {/* Google Maps Store Locator */}
        <StoreMap />

      </div>
    </div>
  )
}

export default MenuPage
