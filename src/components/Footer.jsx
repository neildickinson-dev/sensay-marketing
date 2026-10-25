import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const LINKS = {
  Product: [
    { label: 'How it works',   href: '/#how-it-works', internal: true },
    { label: 'For schools',    href: '/senco',         internal: true },
    { label: 'AI reports',     href: '/#proof',        internal: true },
    { label: 'Pricing',        href: '/#pricing',      internal: true },
  ],
  Company: [
    { label: 'About SENSay',   href: '/about',      internal: true },
    { label: 'Our story',      href: '/our-story',  internal: true },
    { label: 'Documentation',  href: '/documentation', internal: true },
    { label: 'Press and media', href: '/press',     internal: true },
  ],
  Support: [
    { label: 'Contact us',     href: '/contact',    internal: true },
    { label: 'Privacy policy', href: '/privacy',    internal: true },
    { label: 'Terms of service',href: '/terms',     internal: true },
  ],
  Contact: [
    { label: 'hello@sensay.uk', href: 'mailto:hello@sensay.uk', internal: false },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="stripe" />
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="SENSay home">
            <img src="/sensay-logo.svg" alt="SENSay" width="154" height="44" />
          </Link>
          <p className="footer-strapline">Helping every child be heard and understood.</p>
          <p className="footer-sub">
            Designed by the parents of a non-verbal child.<br />
            Built for everyone who supports a non-verbal child.
          </p>
          <p className="footer-sub">
            Symbols: Mulberry Symbols (Steve Lee) and PiCom, via Global Symbols, CC BY-SA 4.0.
          </p>
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
        {/* NEIL TO CONFIRM: add the Companies House number here once confirmed
            (Companies (Trading Disclosures) Regulations 2008). */}
        <span>© 2026 SENSay Ltd. Registered in England and Wales. All rights reserved.</span>
        <span>sensay.uk</span>
      </div>
    </footer>
  )
}
