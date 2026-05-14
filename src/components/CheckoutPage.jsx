import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── Paystack inline script loader ───────────────────────────────────────────
function loadPaystack() {
  return new Promise((resolve) => {
    if (window.PaystackPop) return resolve()
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = resolve
    document.body.appendChild(script)
  })
}

// ─── Email Confirmation Modal ─────────────────────────────────────────────────
function EmailModal({ email, name, total, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-[500] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Gmail-style header */}
        <div className="bg-[#0078AE] px-6 py-4 flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
            alt="Domino's"
            className="h-7 w-auto"
          />
          <div>
            <div className="text-white font-black text-sm tracking-wide">Order Confirmation Email</div>
            <div className="text-white/60 text-xs">Sent to {email}</div>
          </div>
        </div>

        {/* Email preview */}
        <div className="px-6 py-5">
          {/* From/To fields like Gmail */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 text-sm">
            <div className="flex border-b border-gray-100 px-4 py-2 bg-gray-50">
              <span className="text-gray-400 w-10 flex-shrink-0">From</span>
              <span className="text-gray-700 font-medium">noreply@dominos.ng</span>
            </div>
            <div className="flex border-b border-gray-100 px-4 py-2">
              <span className="text-gray-400 w-10 flex-shrink-0">To</span>
              <span className="text-gray-700">{email}</span>
            </div>
            <div className="flex px-4 py-2">
              <span className="text-gray-400 w-10 flex-shrink-0">Sub</span>
              <span className="text-gray-700 font-bold">🍕 Order Received — On Its Way!</span>
            </div>
          </div>

          {/* Email body */}
          <div className="bg-[#faf8f5] rounded-lg p-4 text-sm text-[#3a2a1a] space-y-3 border border-[#e0d8cc]">
            <p className="font-bold text-base">Hi {name || 'there'} 👋</p>
            <p>
              Great news! Your Domino's order has been <span className="font-bold text-[#0078AE]">received and confirmed</span>. Our team is already preparing your food with love 🍕
            </p>
            <div className="bg-white border border-[#e0d8cc] rounded p-3">
              <div className="font-black text-[#E31837] text-lg">&#8358;{total.toLocaleString()}</div>
              <div className="text-gray-500 text-xs mt-0.5">Total charged via Paystack</div>
            </div>
            <p>
              🚗 <span className="font-bold">Estimated delivery:</span> 30–45 minutes
            </p>
            <p className="text-gray-400 text-xs border-t border-[#e0d8cc] pt-3">
              You'll receive a call from our delivery rider when they're close. If you have any issues, call <span className="font-bold text-[#0078AE]">0800-DOMINOS</span>.
            </p>
          </div>
        </div>

        <div className="px-6 pb-5 flex gap-3">
          <div className="flex-1 bg-[#faf8f5] border border-[#e0d8cc] rounded px-3 py-2 text-xs text-gray-500 flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500 flex-shrink-0">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Email sent to your inbox
          </div>
          <button
            onClick={onClose}
            className="bg-[#E31837] text-white font-black text-xs tracking-[2px] uppercase px-5 py-2 rounded cursor-pointer hover:bg-red-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Checkout Page ───────────────────────────────────────────────────────
function CheckoutPage({ cartItems, cartCount, onClearCart, user }) {
  const [step, setStep] = useState(1)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paystackLoaded, setPaystackLoaded] = useState(false)

  const [form, setForm] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    note: '',
  })

  // Pre-fill form when user signs in
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.displayName || prev.name,
        email: user.email || prev.email,
      }))
    }
  }, [user])

  // Pre-load Paystack script
  useEffect(() => {
    loadPaystack().then(() => setPaystackLoaded(true))
  }, [])

  const ITEM_PRICE = 8999
  const subtotal = cartCount * ITEM_PRICE
  const deliveryFee = 500
  const total = subtotal + deliveryFee

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // ── Paystack payment ──────────────────────────────────────────────────────
  const handlePaystack = () => {
    if (!paystackLoaded || !window.PaystackPop) {
      alert('Paystack is still loading. Please try again in a moment.')
      return
    }

    setIsProcessing(true)

    const handler = window.PaystackPop.setup({
      // Demo public key — replace with your real Paystack public key
      key: 'pk_test_d3eff5d423934a24b7214274c397fec344c0185b',
      email: form.email,
      amount: total * 100, // Paystack uses kobo (multiply by 100)
      currency: 'NGN',
      ref: 'DOM-' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Customer Name', variable_name: 'name', value: form.name },
          { display_name: 'Delivery Address', variable_name: 'address', value: form.address },
        ],
      },
      callback: (response) => {
        // Payment successful
        setIsProcessing(false)
        onClearCart()
        setStep(3)
        // Show email confirmation modal after short delay
        setTimeout(() => setShowEmailModal(true), 800)
        console.log('Paystack reference:', response.reference)
      },
      onClose: () => {
        setIsProcessing(false)
      },
    })

    handler.openIframe()
  }

  // ── Step 3: Confirmed ─────────────────────────────────────────────────────
  if (step === 3) {
    return (
      <>
        {showEmailModal && (
          <EmailModal
            email={form.email}
            name={form.name}
            total={total}
            onClose={() => setShowEmailModal(false)}
          />
        )}
        <div className="bg-[#f0ebe0] min-h-screen flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
              alt="Domino's"
              className="h-12 mx-auto mb-5"
            />
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-green-500">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h2 className="font-black text-[#3a2a1a] text-2xl uppercase tracking-wide mb-1">Order Confirmed!</h2>
            <p className="text-gray-500 text-sm mb-1">
              Thank you, <span className="font-bold text-[#3a2a1a]">{form.name || 'Customer'}</span>!
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Your order is on its way to <span className="font-semibold">{form.address}</span>.
            </p>
            <p className="text-[#0078AE] font-bold text-sm mb-5">
              📧 Confirmation email sent to {form.email}
            </p>
            <div className="bg-[#f0ebe0] rounded-lg p-4 mb-6 text-left">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Items ({cartCount})</span>
                <span className="font-bold">&#8358;{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Delivery</span>
                <span className="font-bold">&#8358;{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-black border-t border-[#d6cfc2] pt-2 mt-1">
                <span>Total Paid</span>
                <span className="text-[#E31837]">&#8358;{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              Payment verified by Paystack
            </div>
            <Link
              to="/"
              className="block bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase px-6 py-3 rounded cursor-pointer hover:bg-red-700 transition-colors no-underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    )
  }

  // ── Step 1 & 2 ────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#f0ebe0] min-h-screen px-4 py-6">
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png"
              alt="Domino's"
              className="h-10 w-auto"
            />
          </Link>
          <h1 className="font-black text-[#3a2a1a] uppercase tracking-wide text-xl">Checkout</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {['Delivery Details', 'Payment'].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-sm ${step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-[#0078AE] text-white' : 'bg-gray-200 text-gray-400'}`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span className={`text-sm font-bold uppercase tracking-wide ${step === i + 1 ? 'text-[#0078AE]' : 'text-gray-400'}`}>{label}</span>
              {i < 1 && <div className="w-8 h-0.5 bg-gray-300 mx-1" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Form column */}
          <div className="lg:col-span-2">

            {/* Step 1 — Delivery */}
            {step === 1 && (
              <div className="bg-white rounded-xl shadow p-5 sm:p-6">
                <h2 className="font-black text-[#3a2a1a] uppercase tracking-wide text-lg mb-5">Delivery Details</h2>

                {/* Google pre-fill banner */}
                {user && (
                  <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-4 text-xs text-blue-700">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Name and email pre-filled from your Google account
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name', name: 'name', placeholder: 'John Doe', required: true },
                    { label: 'Phone Number', name: 'phone', placeholder: '+234 800 000 0000', required: true },
                    { label: 'Email Address', name: 'email', placeholder: 'john@example.com', required: true, span: true },
                    { label: 'Delivery Address', name: 'address', placeholder: '12 Banana Island Road', required: true, span: true },
                    { label: 'City', name: 'city', placeholder: 'Lagos', required: true },
                    { label: 'Order Note', name: 'note', placeholder: 'Leave at the gate...', required: false },
                  ].map((field) => (
                    <div key={field.name} className={field.span ? 'sm:col-span-2' : ''}>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full border border-[#d6cfc2] rounded px-3 py-2.5 text-sm text-[#3a2a1a] focus:outline-none focus:border-[#0078AE] bg-[#faf8f5]"
                      />
                    </div>
                  ))}
                </div>

                {/* Delivery map */}
                <div className="mt-5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Delivery Area Map</label>
                  <div className="rounded overflow-hidden border border-[#e0d8cc] h-[200px]">
                    <iframe
                      title="Delivery Map"
                      width="100%" height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Domino%27s+Pizza+Lagos+Nigeria&center=6.5244,3.3792&zoom=12"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!form.name || !form.phone || !form.email || !form.address || !form.city) {
                      alert('Please fill in all required fields.')
                      return
                    }
                    setStep(2)
                  }}
                  className="mt-6 w-full bg-[#0078AE] text-white font-black text-sm tracking-[2px] uppercase py-3 cursor-pointer rounded hover:bg-[#006a99] transition-colors"
                >
                  Continue to Payment ›
                </button>
              </div>
            )}

            {/* Step 2 — Payment */}
            {step === 2 && (
              <div className="bg-white rounded-xl shadow p-5 sm:p-6">
                <h2 className="font-black text-[#3a2a1a] uppercase tracking-wide text-lg mb-5">Payment</h2>

                {/* Paystack promo */}
                <div className="flex items-center gap-3 bg-[#f0f8ff] border border-[#b5d4f4] rounded-lg px-4 py-3 mb-5">
                  <img
                    src="https://website-v3-assets.s3.amazonaws.com/assets/img/hero/Paystack-mark-white-twitter.png"
                    alt="Paystack"
                    className="h-8 w-8 rounded-full bg-[#00C3F7] p-1 flex-shrink-0"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div>
                    <div className="font-black text-[#0078AE] text-sm">Pay securely with Paystack</div>
                    <div className="text-gray-500 text-xs">Cards, Bank Transfer, USSD & more · SSL encrypted</div>
                  </div>
                </div>

                {/* Order summary mini */}
                <div className="bg-[#faf8f5] border border-[#e0d8cc] rounded-lg p-4 mb-5">
                  <div className="font-black text-[#3a2a1a] text-sm uppercase tracking-wide mb-3">Order Summary</div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Subtotal ({cartCount} items)</span>
                    <span className="font-bold">&#8358;{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Delivery to {form.city}</span>
                    <span className="font-bold">&#8358;{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base font-black border-t border-[#e0d8cc] pt-2 mt-2">
                    <span className="text-[#3a2a1a]">Total</span>
                    <span className="text-[#E31837]">&#8358;{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Delivery details recap */}
                <div className="bg-[#faf8f5] border border-[#e0d8cc] rounded-lg px-4 py-3 mb-5 text-sm text-gray-600">
                  <div className="font-bold text-[#3a2a1a] mb-1">Delivering to:</div>
                  <div>{form.name} · {form.phone}</div>
                  <div>{form.address}, {form.city}</div>
                  <div className="text-[#0078AE] text-xs mt-1">📧 Confirmation will be sent to {form.email}</div>
                </div>

                {/* Demo notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 mb-5 text-xs text-yellow-800">
                  <span className="font-bold">Demo mode:</span> Use test card <span className="font-mono font-bold">4084 0840 8408 4081</span>, any future expiry, CVV <span className="font-mono font-bold">408</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-100 text-gray-600 font-black text-sm tracking-wide uppercase py-3 cursor-pointer rounded hover:bg-gray-200 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handlePaystack}
                    disabled={isProcessing || !paystackLoaded}
                    className="flex-1 bg-[#E31837] text-white font-black text-sm tracking-[2px] uppercase py-3 cursor-pointer rounded hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>Pay &#8358;{total.toLocaleString()} ›</>
                    )}
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  256-bit SSL · Secured by Paystack
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-5 sticky top-[72px]">
              <h3 className="font-black text-[#3a2a1a] uppercase tracking-wide text-base mb-4">Your Order</h3>

              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-sm">Your cart is empty.</p>
              ) : (
                <div className="flex flex-col gap-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#3a2a1a] text-sm truncate">{item.name}</div>
                        <div className="text-gray-400 text-xs">x{item.qty}</div>
                      </div>
                      <div className="font-black text-[#3a2a1a] text-sm">&#8358;{(ITEM_PRICE * item.qty).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-[#e0d8cc] pt-3 flex flex-col gap-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">&#8358;{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>
                  <span className="font-bold">&#8358;{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-black border-t border-[#e0d8cc] pt-2 mt-1">
                  <span className="text-[#3a2a1a]">Total</span>
                  <span className="text-[#E31837]">&#8358;{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400 flex-shrink-0">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                Secured checkout · SSL encrypted
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
