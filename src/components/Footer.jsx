import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const LINKS = {
  Product: [
    { label: 'How it works',   href: '/#how-it-works', internal: false },
    { label: 'For schools',    href: '/#for-schools',  internal: false },
    { label: 'AI analytics',   href: '/#ai',           internal: false },
    { label: 'Pricing',        href: '/#pricing',      internal: false },
  ],
  Company: [
    { label: 'About SENSay',   href: '/about',      internal: true },
    { label: 'Our story',      href: '/our-story',  internal: true },
    { label: 'Blog',           href: '/blog',       internal: true },
    { label: 'Documentation',  href: '/documentation', internal: true },
    { label: 'Press & media',  href: '/press',      internal: true },
  ],
  Support: [
    { label: 'Contact us',     href: '/contact',    internal: true },
    { label: 'Privacy policy', href: '/privacy',    internal: true },
    { label: 'Terms of service',href: '/terms',     internal: true },
  ],
  Contact: [
    { label: 'info@sensay.uk',        href: 'mailto:info@sensay.uk',        internal: false },
    { label: 'support@sensay.uk',     href: 'mailto:support@sensay.uk',     internal: false },
    { label: 'education@sensay.uk',   href: 'mailto:education@sensay.uk',   internal: false },
    { label: 'healthcare@sensay.uk',  href: 'mailto:healthcare@sensay.uk',  internal: false },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="stripe" />
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo__sen">SEN</span>
            <span className="footer-logo__say">Say</span>
          </Link>
          <p className="footer-strapline">Empowering every child to communicate.</p>
          <p className="footer-sub">
            Designed by parents of non-verbal children.<br />
            Built with AI for the whole SEN community.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social">in</a>
            <a href="https://twitter.com"  aria-label="Twitter/X" className="footer-social">𝕏</a>
          </div>
        </div>

        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} className="footer-col">
            <div className="footer-col__heading">{heading}</div>
            <ul>
              {items.map(item => (
                <li key={item.label}>
                  {item.internal
                    ? <Link to={item.href}>{item.label}</Link>
                    : <a href={item.href}>{item.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 SENSay Ltd. All rights reserved.</span>
        <span>sensay.uk</span>
      </div>
    </footer>
  )
}
