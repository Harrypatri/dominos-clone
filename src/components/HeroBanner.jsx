function HeroBanner() {
  return (
    <section className="bg-[#f0ebe0]">

      {/* Order Banner */}
      <div className="bg-[#f0ebe0] px-4 py-3 flex flex-wrap items-center justify-center gap-3 border-b border-[#d6cfc2]">
        <span className="font-black text-base tracking-[2px] text-[#0078AE] uppercase">
          Start Your Order
        </span>
        <button className="bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-6 py-3 cursor-pointer hover:bg-red-700 transition-colors">
          Delivery
        </button>
        <span className="text-gray-400 text-sm">or</span>
        <button className="bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-6 py-3 cursor-pointer hover:bg-red-700 transition-colors">
          Carryout
        </button>
      </div>

      <div className="max-w-[960px] mx-auto my-6 px-4">

        {/* Hero Card */}
        <div className="rounded overflow-hidden shadow-xl">

          {/* MEDI LICIOUS Banner */}
          <div className="bg-[#1a7abf] relative overflow-hidden min-h-[240px] sm:min-h-[300px] flex items-center">
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=85"
              alt="Medi Licious Pizza"
              className="absolute left-0 top-0 w-[60%] h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a7abf]/10 via-[#1a7abf]/50 to-[#1a7abf]/95" />

            {/* Domino's watermark logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
              alt=""
              className="absolute bottom-3 left-1/2 -translate-x-1/2 h-8 opacity-10 z-[1]"
            />

            {/* Left: MEDI LICIOUS text */}
            <div className="absolute left-[4%] top-1/2 -translate-y-1/2 z-10">
              <div className="font-black text-white uppercase leading-none" style={{ fontSize: 'clamp(36px, 8vw, 78px)', textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
                MEDI
              </div>
              <div className="font-black text-white uppercase leading-none mt-1" style={{ fontSize: 'clamp(36px, 8vw, 78px)', WebkitTextStroke: '2px #E31837', textShadow: '3px 3px 0 #E31837' }}>
                LICIOUS
              </div>
              <div className="h-1 w-full bg-[#1a3a7a] mt-2 -skew-x-[8deg]" />
            </div>

            {/* Right: Price + CTA */}
            <div className="absolute right-[4%] top-1/2 -translate-y-1/2 z-10 max-w-[180px]">
              <p className="text-white font-bold uppercase leading-snug mb-2" style={{ fontSize: 'clamp(11px, 2vw, 15px)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Enjoy Medium BBQ<br />Chicken Pizza + MCP<br />+ 1 Pepsi
              </p>
              <div className="text-white/75 text-[9px] font-bold tracking-[2px] uppercase">FROM</div>
              <div className="font-black text-[#FFD700] leading-none" style={{ fontSize: 'clamp(28px, 6vw, 54px)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                &#8358;8,999
              </div>
              <button className="mt-3 bg-[#E31837] text-white font-black text-[11px] tracking-[1.5px] uppercase px-4 py-2 cursor-pointer rounded-full inline-flex items-center gap-1 shadow-lg hover:bg-red-700 transition-colors">
                ORDER NOW &#9658;
              </button>
              <div className="text-[9px] text-white/40 mt-1">T and Cs Apply</div>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-2 gap-1 bg-[#f0ebe0] p-1">

            {/* Lite Bite */}
            <div className="bg-black relative overflow-hidden cursor-pointer flex items-end min-h-[150px] sm:min-h-[180px] rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80"
                alt="Lite Bite"
                className="absolute inset-0 w-full h-full object-cover opacity-65"
              />
              <div className="absolute top-2.5 right-2.5 text-right z-10">
                <div className="text-white/85 text-[11px] italic">Lite</div>
                <div className="font-black text-white leading-none" style={{ fontSize: 'clamp(24px, 5vw, 44px)', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Bite</div>
              </div>
              <div className="relative z-10 p-3 pt-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-white/60 text-[8px] font-bold tracking-[2px] uppercase">FROM</div>
                <div className="font-black text-[#FFD700] leading-none mb-1.5" style={{ fontSize: 'clamp(16px, 3.5vw, 28px)' }}>&#8358;9,999</div>
                <button className="bg-[#E31837] text-white font-black text-[8px] tracking-[1.5px] uppercase px-2.5 py-1.5 cursor-pointer rounded-full hover:bg-red-700 transition-colors">
                  ORDER NOW &#9658;
                </button>
                <div className="text-[7px] text-white/40 mt-1">T and Cs Apply</div>
              </div>
            </div>

            {/* Medi Yum */}
            <div className="bg-[#c87000] relative overflow-hidden cursor-pointer flex items-end min-h-[150px] sm:min-h-[180px] rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
                alt="Medi Yum"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute top-2.5 left-2.5 z-10">
                <div className="font-black text-[#00BFFF] leading-none uppercase" style={{ fontSize: 'clamp(18px, 4vw, 32px)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  MEDI-<br />YUM
                </div>
              </div>
              <div className="relative z-10 p-3 pt-8 w-full bg-gradient-to-t from-[#64280099]/95 to-transparent">
                <div className="text-white/60 text-[8px] font-bold tracking-[2px] uppercase">FROM</div>
                <div className="font-black text-[#FFD700] leading-none mb-1.5" style={{ fontSize: 'clamp(16px, 3.5vw, 28px)' }}>&#8358;6,999</div>
                <button className="bg-[#E31837] text-white font-black text-[8px] tracking-[1.5px] uppercase px-2.5 py-1.5 cursor-pointer rounded-full hover:bg-red-700 transition-colors">
                  ORDER NOW &#9658;
                </button>
                <div className="text-[7px] text-white/40 mt-1">T and Cs Apply</div>
              </div>
            </div>

          </div>
        </div>

        {/* Large Combo Deal Strip */}
        <div className="mt-4 bg-[#1a3a7a] flex flex-wrap items-center overflow-hidden cursor-pointer rounded shadow-lg">

          {/* Badge */}
          <div className="p-4 flex-shrink-0">
            <div className="bg-[#162d55] px-3 py-2 text-center border-2 border-white/15 rounded">
              <div className="font-black text-white uppercase tracking-wide text-sm leading-none">LARGE</div>
              <div className="font-black text-white uppercase text-2xl leading-none">COMBO</div>
              <div className="bg-[#E31837] text-white font-black text-[10px] tracking-[2px] uppercase px-2 py-0.5 mt-1 inline-block rounded-sm">DEAL</div>
            </div>
          </div>

          {/* Pizza Image */}
          <div className="w-32 h-24 flex-shrink-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80"
              alt="Large Combo Pizza"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text + Price */}
          <div className="flex-1 p-4 min-w-[150px]">
            <p className="font-bold text-white uppercase leading-snug tracking-wide mb-1" style={{ fontSize: 'clamp(12px, 2.5vw, 17px)' }}>
              Enjoy Large BBQ Chicken or Meatball Pizza + 2 50cl Pepsi
            </p>
            <div className="text-white/65 text-[9px] font-bold tracking-[2px] uppercase">FROM</div>
            <div className="font-black text-[#FFD700] leading-none" style={{ fontSize: 'clamp(26px, 5vw, 48px)' }}>&#8358;10,999</div>
          </div>

          {/* Order Now */}
          <div className="p-4 flex-shrink-0 flex flex-col items-end">
            <button className="bg-[#E31837] text-white font-black text-xs tracking-[2px] uppercase px-5 py-3 cursor-pointer rounded-full inline-flex items-center gap-2 shadow-lg hover:bg-red-700 transition-colors">
              ORDER NOW &#9658;
            </button>
            <div className="text-[8px] text-white/35 mt-1">T and Cs Apply</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroBanner
