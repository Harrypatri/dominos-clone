import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer'
import MenuPage from './components/MenuPage'
import DealsSection from './components/DealsSection'
import CheckoutPage from './components/CheckoutPage'
import CartDrawer from './components/CartDrawer'


import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

// ─── Your Firebase config ─────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBrWU6zoY2fKiWMerUOFPLL0y7CBq9kJ7I",
  authDomain: "dominos-70b28.firebaseapp.com",
  projectId: "dominos-70b28",
  storageBucket: "dominos-70b28.firebasestorage.app",
  messagingSenderId: "135429395747",
  appId: "1:135429395747:web:cf412fc1f1f9bcd678e896",
  measurementId: "G-34H6XVCFSS"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

// ─── Item image map ───────────────────────────────────────────────────────────
const ITEM_IMAGES = {
  'Deals': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80',
  'Pizzas': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&q=80',
  'Sides': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=300&q=80',
  'Extras': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80',
  'Chicken': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&q=80',
  'Drinks': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&q=80',
  'Desserts': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&q=80',
  '2 Large Pizzas': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80',
  'Wednesday Deal': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80',
  'Family Feast': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80',
  'Lite Bite Combo': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80',
  'Large Combo Deal': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80',
  'Medi Licious': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80',
}

import PizzaAnimation from './components/PizzaAnimation'

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <PizzaAnimation />
      <Footer />
    </div>
  )
}

function DealsPage({ onAdd }) {
  return (
    <div>
      <DealsSection onAdd={onAdd} />
      <Footer />
    </div>
  )
}

function AppInner() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }, [toast])

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setToast(`Welcome, ${result.user.displayName}! 👋`)
    } catch (error) {
      console.error('Sign in error:', error)
      setToast('Sign in failed. Please try again.')
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setToast('Signed out successfully.')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const handleAdd = (name) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === name)
      if (existing) {
        return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { name, qty: 1, img: ITEM_IMAGES[name] || '' }]
    })
    setToast('Added: ' + name)
  }

  const handleRemove = (name, deleteAll = false) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === name)
      if (!existing) return prev
      if (deleteAll || existing.qty <= 1) return prev.filter((i) => i.name !== name)
      return prev.map((i) => i.name === name ? { ...i, qty: i.qty - 1 } : i)
    })
  }

  const handleClearCart = () => setCartItems([])
  const handleCheckout = () => navigate('/checkout')

  return (
    <div className="bg-[#f0ebe0] min-h-screen">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setIsCartOpen(true)}
        user={user}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage onAdd={handleAdd} />} />
        <Route path="/deals" element={<DealsPage onAdd={handleAdd} />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              cartCount={cartCount}
              onClearCart={handleClearCart}
              user={user}
            />
          }
        />
      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#0078AE] text-white px-5 py-3.5 font-bold text-sm tracking-wide z-[9999] shadow-xl border-l-4 border-[#FFD700] rounded-sm flex items-center gap-3 max-w-[320px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FFD700] flex-shrink-0">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span className="flex-1">{toast}</span>
          {cartCount > 0 && !toast.startsWith('Welcome') && !toast.startsWith('Signed') && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-[#E31837] text-white text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full cursor-pointer hover:bg-red-700 transition-colors flex-shrink-0"
            >
              View Cart
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

export default App
