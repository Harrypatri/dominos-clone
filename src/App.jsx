import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Footer from './components/Footer'
import MenuPage from './components/MenuPage'
import DealsSection from './components/DealsSection'

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Footer />
    </div>
  )
}

function DealsPage(props) {
  var onAdd = props.onAdd
  return (
    <div>
      <DealsSection onAdd={onAdd} />
      <Footer />
    </div>
  )
}

function App() {
  var cartState = useState(0)
  var cartCount = cartState[0]
  var setCartCount = cartState[1]

  var toastState = useState(null)
  var toast = toastState[0]
  var setToast = toastState[1]

  useEffect(function() {
    if (!toast) return
    var timer = setTimeout(function() { setToast(null) }, 2500)
    return function() { clearTimeout(timer) }
  }, [toast])

  function handleAdd(name) {
    setCartCount(function(prev) { return prev + 1 })
    setToast('Added: ' + name)
  }

  return (
    <BrowserRouter>
      <div style={{ background: '#f0ebe0', minHeight: '100vh' }}>

        <Navbar cartCount={cartCount} />

        <Routes>
          <Route path="/"      element={<HomePage />} />
          <Route path="/menu"  element={<MenuPage onAdd={handleAdd} />} />
          <Route path="/deals" element={<DealsPage onAdd={handleAdd} />} />
        </Routes>

        {toast && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              background: '#0078AE',
              color: '#fff',
              padding: '14px 22px',
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '1px',
              zIndex: 9999,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              borderLeft: '4px solid #FFD700'
            }}
          >
            {toast}
          </div>
        )}

      </div>
    </BrowserRouter>
  )
}

export default App
