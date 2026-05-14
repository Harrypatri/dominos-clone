import { Link } from 'react-router-dom'

function CartDrawer({ isOpen, onClose, cartItems, onRemove, onAdd, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.qty * 8999, 0)
  const deliveryFee = cartItems.length > 0 ? 500 : 0
  const total = subtotal + deliveryFee

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[300]"
          onClick={onClose}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[380px] bg-white z-[400] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="bg-[#0078AE] px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
              alt="Domino's"
              className="h-8 w-auto"
            />
            <div>
              <div className="text-white font-black text-sm uppercase tracking-widest">Your Cart</div>
              <div className="text-white/60 text-xs">
                {cartItems.length === 0
                  ? 'Empty'
                  : `${cartItems.reduce((s, i) => s + i.qty, 0)} item(s)`}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white bg-transparent border-none cursor-pointer p-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
                alt="Domino's"
                className="h-14 w-auto opacity-20"
              />
              <div>
                <p className="font-black text-gray-300 uppercase tracking-wide text-base">Cart is empty</p>
                <p className="text-gray-400 text-sm mt-1">Add some delicious items to get started</p>
              </div>
              <button
                onClick={onClose}
                className="bg-[#E31837] text-white font-black text-xs tracking-[2px] uppercase px-5 py-2.5 rounded-full cursor-pointer hover:bg-red-700 transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-[#faf8f5] border border-[#e0d8cc] rounded-lg p-3"
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.img || 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&q=80'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name + price */}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[#3a2a1a] text-sm truncate">{item.name}</div>
                    <div className="text-[#0078AE] font-black text-sm">
                      &#8358;{(item.qty * 8999).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-xs">&#8358;8,999 each</div>
                  </div>

                  {/* Qty controls: minus / count / plus */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => onRemove(item.name)}
                      className="w-7 h-7 rounded-full border-2 border-[#E31837] text-[#E31837] font-black text-base flex items-center justify-center cursor-pointer hover:bg-[#E31837] hover:text-white transition-colors bg-white leading-none"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-black text-[#3a2a1a] text-sm">{item.qty}</span>
                    <button
                      onClick={() => onAdd(item.name)}
                      className="w-7 h-7 rounded-full border-2 border-[#0078AE] text-[#0078AE] font-black text-base flex items-center justify-center cursor-pointer hover:bg-[#0078AE] hover:text-white transition-colors bg-white leading-none"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete entire item */}
                  <button
                    onClick={() => onRemove(item.name, true)}
                    title="Remove item"
                    className="text-gray-300 hover:text-[#E31837] bg-transparent border-none cursor-pointer flex-shrink-0 transition-colors p-1"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: totals + checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#e0d8cc] px-5 py-4 bg-white flex-shrink-0">
            <div className="flex flex-col gap-1.5 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-[#3a2a1a]">&#8358;{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-bold text-[#3a2a1a]">&#8358;{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-black border-t border-[#e0d8cc] pt-2 mt-1">
                <span className="text-[#3a2a1a]">Total</span>
                <span className="text-[#E31837]">&#8358;{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onCheckout() }}
              className="w-full bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase py-3.5 rounded cursor-pointer hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              Proceed to Checkout &#9658;
            </button>

            <Link
              to="/menu"
              onClick={onClose}
              className="block text-center text-[#0078AE] text-xs font-bold uppercase tracking-wide mt-3 hover:underline no-underline"
            >
              + Add More Items
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
