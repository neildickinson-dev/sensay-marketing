import React from 'react'
import { Link } from 'react-router-dom'
import { Closing } from '../components/Blocks.jsx'
import { GUIDES } from '../data/guides.js'

export default function Guides() {
  return (
    <>
      <section className="s-hero" style={{ paddingBottom: '1rem' }}>
        <div className="s-wrap s-center">
          <span className="s-eyebrow">Guides</span>
          <h1 className="s-h1">How SENSay works, for everyone around the child</h1>
          <p className="s-lead">Five short guides, each written for the people who will use it. Free to download, print and share.</p>
        </div>
      </section>
      <section className="s-section s-section--white" style={{ paddingTop: '2rem' }}>
        <div className="s-wrap">
          <div className="s-cards s-cards--guides">
            {GUIDES.map(g => (
              <a key={g.key} href={g.href} download={g.file} className="s-card" style={{ '--c': g.colour }}>
                <span className="s-card__who">{g.who}</span>
                <h3 className="s-h3">{g.title}</h3>
                <p>{g.body}</p>
                <span className="s-card__meta">PDF · {g.pages} pages · {g.size}</span>
                <span className="s-card__more">Download the guide</span>
              </a>
            ))}
          </div>
          <p className="s-caption s-center" style={{ marginTop: '2rem' }}>
            Updated October 2026. Looking for charities and support organisations? See{' '}
            <Link to="/documentation" style={{ color: 'var(--blue-text)', fontWeight: 800 }}>resources</Link>, or the latest{' '}
            <Link to="/news" style={{ color: 'var(--blue-text)', fontWeight: 800 }}>SEN news</Link>.
          </p>
        </div>
      </section>
      <Closing />
    </>
  )
}
