import React from 'react'
import { Link } from 'react-router-dom'
import { Closing } from '../components/Blocks.jsx'

const GUIDES = [
  ['Families', 'var(--yellow)', 'SENSay guide for parents and carers', 'Setting up the board for your child, messages by email and text, the patterns behind them, sharing with school and therapists, and your choices about AI and data.', '/guides/sensay-guide-for-parents-and-carers.pdf'],
  ['Schools', 'var(--green)', 'SENSay guide for teachers and SENCOs', 'Setting up your school, the board in class, recording evidence, reviews and EHCP drafts, teaching aids, data protection and prices.', '/guides/sensay-guide-for-teachers-and-sencos.pdf'],
  ['Therapists', 'var(--red)', 'SENSay guide for therapists', 'How families share a child with you, your caseload, appointment summaries, notes with advice for home and school, and what the data can and cannot tell you.', '/guides/sensay-guide-for-therapists.pdf'],
  ['AAC services', 'var(--blue)', 'SENSay Connect guide for AAC services', 'Reading usage from TD Snap, Grid 3, PRC-Saltillo devices and others, who needs you this week, the service summary, and the free 90-day trial.', '/guides/sensay-connect-guide-for-aac-services.pdf'],
]

export default function Guides() {
  return (
    <>
      <section className="s-hero" style={{ paddingBottom: '1rem' }}>
        <div className="s-wrap s-center">
          <span className="s-eyebrow">Guides</span>
          <h1 className="s-h1">How SENSay works, for everyone around the child</h1>
          <p className="s-lead">Four short guides, each written for the people who will use it. Free to download and share.</p>
        </div>
      </section>
      <section className="s-section s-section--white" style={{ paddingTop: '2rem' }}>
        <div className="s-wrap">
          <div className="s-cards">
            {GUIDES.map(([who, c, title, body, href]) => (
              <a key={href} href={href} className="s-card" style={{ '--c': c }}>
                <span className="s-card__who">{who}</span>
                <h3 className="s-h3">{title}</h3>
                <p>{body}</p>
                <span className="s-card__more">Download the PDF</span>
              </a>
            ))}
          </div>
          <p className="s-caption s-center" style={{ marginTop: '2rem' }}>
            Looking for charities and support organisations? See <Link to="/documentation" style={{ color: '#0077A8', fontWeight: 800 }}>resources</Link>.
          </p>
        </div>
      </section>
      <Closing />
    </>
  )
}
