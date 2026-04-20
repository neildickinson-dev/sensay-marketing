import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="SENSay home">
          <span className="nav-logo__sen">SEN</span><span className="nav-logo__say">Say</span>
        </Link>

        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} aria-label="Main navigation">
          {isHome ? (
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          ) : (
            <Link to="/#how-it-works">How it works</Link>
          )}
          <Link to="/about"      onClick={() => setMenuOpen(false)}>About</Link>
          {/* Placed between About and Our story per brief. If "For schools" crowds the nav at
              ~1040px, fall back to "Schools" as the label or promote to a dropdown. */}
          <Link to="/senco"      onClick={() => setMenuOpen(false)}>For schools</Link>
          <Link to="/our-story"  onClick={() => setMenuOpen(false)}>Our story</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/documentation" onClick={() => setMenuOpen(false)}>Resources</Link>
          {isHome ? (
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          ) : (
            <Link to="/#pricing">Pricing</Link>
          )}
          <a href="https://app.sensay.uk" className="nav-cta">Get started free</a>
        </nav>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className="stripe" />
    </header>
  )
}
