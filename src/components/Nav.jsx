import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  ['/families', 'Families'],
  ['/schools', 'Schools'],
  ['/therapists', 'Therapists'],
  ['/connect', 'AAC services'],
  ['/#pricing', 'Pricing'],
  ['/our-story', 'Our story'],
  ['/guides', 'Guides'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="SENSay home">
          <img src="/brand/sensay-logo.svg" alt="SENSay" width="132" height="38" />
        </Link>

        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} aria-label="Main navigation">
          {LINKS.map(([to, label]) => (
            to.includes('#')
              ? <Link key={to} to={to}>{label}</Link>
              : <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>{label}</NavLink>
          ))}
          <a href="https://app.sensay.uk" className="nav-signin">Sign in</a>
          <a href="mailto:hello@sensay.uk?subject=SENSay%20demo" className="nav-cta">Book a demo</a>
        </nav>

        <button className="nav-burger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="stripe" />
    </header>
  )
}
