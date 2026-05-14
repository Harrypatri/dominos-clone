import { useState } from 'react'

const msgs = ['Nice toss!', 'Perfect spin!', 'Chef kiss 🤌', 'Ole!', 'Still hot!', 'Masterclass!', 'Gordon Ramsay approved.']

function PizzaAnimation() {
  const [flipping, setFlipping] = useState(false)
  const [msg, setMsg] = useState('')
  const [count, setCount] = useState(0)

  const toss = () => {
    if (flipping) return
    setFlipping(true)
    setMsg(msgs[count % msgs.length])
    setCount(c => c + 1)
    setTimeout(() => setFlipping(false), 950)
  }

  return (
    <div className="flex flex-col items-center gap-4 py-10 bg-[#f0ebe0]">

      <style>{`
        @keyframes pizza-flip {
          0%   { transform: translateY(0) rotateX(0deg) scale(1); }
          30%  { transform: translateY(-120px) rotateX(180deg) scale(1.15); }
          60%  { transform: translateY(-80px) rotateX(360deg) scale(1.1); }
          80%  { transform: translateY(-20px) rotateX(520deg) scale(1.05); }
          100% { transform: translateY(0) rotateX(720deg) scale(1); }
        }
        @keyframes pizza-idle {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shadow-pulse {
          0%,100% { transform: translateX(-50%) scaleX(1); opacity: 0.2; }
          30%     { transform: translateX(-50%) scaleX(0.4); opacity: 0.05; }
          80%     { transform: translateX(-50%) scaleX(0.75); opacity: 0.12; }
        }
        .pizza-flip  { animation: pizza-flip 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .pizza-idle  { animation: pizza-idle 10s linear infinite; }
        .shadow-flip { animation: shadow-pulse 0.9s ease forwards; }
      `}</style>

      {/* Stage */}
      <div style={{ position: 'relative', width: '160px', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>

        {/* Shadow */}
        <div
          className={flipping ? 'shadow-flip' : ''}
          style={{
            position: 'absolute', bottom: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '100px', height: '14px',
            background: '#000', borderRadius: '50%',
            opacity: 0.2
          }}
        />

        {/* Pizza */}
        <div
          className={flipping ? 'pizza-flip' : 'pizza-idle'}
          style={{ position: 'absolute', bottom: '16px', width: '130px', height: '130px' }}
        >
          <svg viewBox="0 0 120 120" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
            {/* Crust outer */}
            <circle cx="60" cy="60" r="58" fill="#e8a020"/>
            {/* Crust ring */}
            <circle cx="60" cy="60" r="52" fill="#d4691a"/>
            {/* Sauce base */}
            <circle cx="60" cy="60" r="48" fill="#c0380a" opacity="0.75"/>
            <circle cx="60" cy="60" r="48" fill="#e8732a" opacity="0.55"/>
            {/* Cheese layer */}
            <ellipse cx="60" cy="60" rx="44" ry="43" fill="#f5c842" opacity="0.9"/>
            <ellipse cx="60" cy="60" rx="38" ry="37" fill="#f0c060" opacity="0.6"/>
            {/* Cheese texture blobs */}
            <ellipse cx="48" cy="50" rx="10" ry="8" fill="#ffe080" opacity="0.5"/>
            <ellipse cx="72" cy="55" rx="8" ry="9" fill="#ffe080" opacity="0.45"/>
            <ellipse cx="58" cy="72" rx="9" ry="7" fill="#ffe080" opacity="0.4"/>
            {/* Pepperoni */}
            <circle cx="44" cy="42" r="8" fill="#c0281a" opacity="0.92"/>
            <circle cx="44" cy="42" r="6" fill="#a0180a" opacity="0.6"/>
            <circle cx="76" cy="38" r="7" fill="#c0281a" opacity="0.88"/>
            <circle cx="76" cy="38" r="5" fill="#a0180a" opacity="0.55"/>
            <circle cx="82" cy="68" r="8" fill="#c0281a" opacity="0.92"/>
            <circle cx="82" cy="68" r="6" fill="#a0180a" opacity="0.6"/>
            <circle cx="50" cy="78" r="7" fill="#c0281a" opacity="0.88"/>
            <circle cx="50" cy="78" r="5" fill="#a0180a" opacity="0.55"/>
            <circle cx="64" cy="58" r="6" fill="#c0281a" opacity="0.85"/>
            <circle cx="64" cy="58" r="4" fill="#a0180a" opacity="0.5"/>
            <circle cx="36" cy="62" r="6" fill="#c0281a" opacity="0.82"/>
            {/* Basil leaves */}
            <ellipse cx="56" cy="45" rx="5" ry="3" fill="#3a7c20" opacity="0.9" transform="rotate(-20 56 45)"/>
            <ellipse cx="73" cy="52" rx="5" ry="3" fill="#3a7c20" opacity="0.9" transform="rotate(30 73 52)"/>
            <ellipse cx="47" cy="66" rx="5" ry="3" fill="#3a7c20" opacity="0.9" transform="rotate(-10 47 66)"/>
            <ellipse cx="68" cy="74" rx="5" ry="3" fill="#3a7c20" opacity="0.9" transform="rotate(15 68 74)"/>
            {/* Crust border */}
            <circle cx="60" cy="60" r="58" fill="none" stroke="#b8600a" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="51" fill="none" stroke="#c87028" stroke-width="1" opacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={toss}
        className="bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-8 py-3 rounded-full cursor-pointer hover:bg-red-700 transition-colors shadow-md"
      >
        Toss Pizza 🍕
      </button>

      {/* Message */}
      <p className="text-sm text-gray-400 min-h-[20px]">{msg}</p>

    </div>
  )
}

export default PizzaAnimation
