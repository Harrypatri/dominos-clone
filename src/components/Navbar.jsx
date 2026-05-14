import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function Navbar({ cartCount, onCartOpen, user, onSignIn, onSignOut }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const navLinks = [
    { label: 'Order Online', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'Deals', to: '/deals' },
    { label: 'Stores', to: '#' },
    { label: 'Tracker', to: '#' },
  ]

  return (
    <header className="bg-[#0078AE] sticky top-0 z-50 shadow-md">
      <div className="flex items-stretch h-[60px]">

        {/* Logo */}
        <Link to="/" className="px-5 flex items-center flex-shrink-0">
          <img src={logo} alt="Domino's Pizza" className="h-10 w-auto" />
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-stretch flex-1">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center justify-center text-white font-black text-[13px] tracking-widest uppercase no-underline px-4 border-r border-white/20 whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              {item.label === 'Order Online' ? (
                <span className="flex flex-col items-center leading-tight">
                  <span>ORDER</span>
                  <span>ONLINE</span>
                </span>
              ) : item.label}
            </Link>
          ))}

          <button className="hidden lg:flex items-center gap-2 bg-transparent border-none text-white font-black text-[11px] tracking-wider uppercase cursor-pointer mx-3 my-2 outline outline-2 outline-white/80 rounded-sm px-3 hover:bg-white/10 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span>VIEW YOUR LOCAL</span>
              <span>DOMINO'S</span>
            </span>
          </button>
        </nav>

        <div className="flex-1" />

        {/* Auth — desktop */}
        {user ? (
          <div className="hidden md:flex items-center relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 bg-black/20 border-l border-white/20 text-white font-black text-[11px] tracking-widest uppercase px-4 cursor-pointer h-full hover:bg-black/30 transition-colors"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName} className="w-7 h-7 rounded-full border-2 border-white/40" />
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#E31837] flex items-center justify-center text-white font-black text-sm">
                  {user.displayName?.[0] || user.email?.[0] || 'U'}
                </div>
              )}
              <span className="hidden lg:block max-w-[100px] truncate">{user.displayName || 'Account'}</span>
            </button>
            {showUserMenu && (
              <div className="absolute top-full right-0 bg-white shadow-xl rounded-b border border-gray-100 min-w-[180px] z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="font-bold text-[#3a2a1a] text-sm truncate">{user.displayName}</div>
                  <div className="text-gray-400 text-xs truncate">{user.email}</div>
                </div>
                <button
                  onClick={() => { onSignOut(); setShowUserMenu(false) }}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#E31837] font-bold hover:bg-gray-50 transition-colors cursor-pointer border-none bg-transparent"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onSignIn}
            className="hidden md:flex items-center gap-2 bg-black/20 border-l border-white/20 text-white font-black text-[11px] tracking-widest uppercase px-4 cursor-pointer h-full hover:bg-black/30 transition-colors"
          >
            {/* Google G icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            SIGN IN
          </button>
        )}

        {/* Cart */}
        <button
          onClick={onCartOpen}
          className="flex flex-col items-center justify-center gap-1 bg-black/25 border-l border-white/20 text-white font-black text-[11px] tracking-widest uppercase px-5 cursor-pointer h-full relative hover:bg-black/35 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.83 6H21l-1.68 8.39c-.16.81-.87 1.41-1.7 1.41H8.1c-.84 0-1.56-.62-1.7-1.45L5.1 3H2V1H6l.83 5z"/>
          </svg>
          CART
          <span className="absolute top-1.5 right-1.5 bg-[#E31837] text-white rounded-full w-[18px] h-[18px] text-[10px] font-black flex items-center justify-center border-2 border-black/20">
            {cartCount > 0 ? cartCount : 0}
          </span>
        </button>

        {/* Hamburger — mobile */}
        <button
          className="flex md:hidden items-center justify-center text-white bg-transparent border-none px-4 cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#006a99] border-t border-white/15">
          {user && (
            <div className="px-6 py-3 flex items-center gap-3 border-b border-white/10">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full border-2 border-white/40" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#E31837] flex items-center justify-center text-white font-black text-sm">
                  {user.displayName?.[0] || 'U'}
                </div>
              )}
              <div>
                <div className="text-white font-bold text-sm">{user.displayName}</div>
                <div className="text-white/50 text-xs">{user.email}</div>
              </div>
            </div>
          )}
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block text-white font-black text-sm tracking-widest uppercase no-underline px-6 py-4 border-b border-white/10 hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-3 flex gap-3">
            {user ? (
              <button
                onClick={() => { onSignOut(); setMenuOpen(false) }}
                className="flex-1 bg-black/20 border border-white/30 text-white font-black text-xs tracking-widest uppercase py-3 cursor-pointer rounded-sm hover:bg-black/30 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => { onSignIn(); setMenuOpen(false) }}
                className="flex-1 bg-white text-gray-700 font-black text-xs tracking-wide uppercase py-3 cursor-pointer rounded-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            )}
            <button
              onClick={() => { setMenuOpen(false); onCartOpen() }}
              className="flex-1 bg-[#E31837] text-white font-black text-xs tracking-widest uppercase py-3 cursor-pointer rounded-sm hover:bg-red-700 transition-colors"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
