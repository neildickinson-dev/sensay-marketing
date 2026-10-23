import React from 'react'
import { Link } from 'react-router-dom'

// Prices from the SENSay price list (HQ price_bands, financial model). School,
// clinician and Connect prices are a year plus VAT; family prices include VAT.
const SCHOOL_BANDS = [
  ['Starter', 'Up to 5 pupils', '£895'],
  ['Standard', 'Up to 15 pupils', '£1,495'],
  ['Large', 'Up to 30 pupils', '£2,295'],
  ['Special school', 'Up to 80 pupils, then £45 per pupil', '£4,495'],
]

export default function Pricing() {
  return (
    <section className="s-section s-section--soft" id="pricing">
      <div className="s-wrap">
        <div className="s-center">
          <span className="s-eyebrow">Pricing</span>
          <h2 className="s-h2">The board is free for every child. Always.</h2>
          <p className="s-lead">
            A child's ability to communicate is never behind a paywall. The board, the voice and sending a message
            always work, whatever plan the adults are on and whether or not AI is switched on.
          </p>
        </div>

        <div className="s-prices">
          <div className="s-price" style={{ '--c': 'var(--yellow)' }}>
            <span className="s-price__who">Families</span>
            <span className="s-price__amount">£7.99</span>
            <span className="s-price__note">a month, or £79 a year, including VAT. Opens in 2027. Free when your child's school has a licence.</span>
            <ul>
              <li>Messages by email and text, with what SENSay noticed</li>
              <li>Patterns, reports and the weekly summary</li>
              <li>Sharing with school and therapists</li>
              <li>A support price of £3.99 a month on request</li>
            </ul>
            <Link to="/families" className="s-btn s-btn--ghost">For families</Link>
          </div>
          <div className="s-price" style={{ '--c': 'var(--green)' }}>
            <span className="s-price__who">Schools</span>
            <span className="s-price__amount">From £895</span>
            <span className="s-price__note">a year plus VAT, by number of pupils, invoiced annually. Unlimited staff.</span>
            <ul>
              <li>The board for every pupil, and the family app free for their families</li>
              <li>Evidence against targets and review packs</li>
              <li>Section B drafts with every claim cited</li>
              <li>Teaching aids and the class screen</li>
            </ul>
            <Link to="/schools" className="s-btn s-btn--primary">For schools</Link>
          </div>
          <div className="s-price" style={{ '--c': 'var(--red)' }}>
            <span className="s-price__who">Therapists</span>
            <span className="s-price__amount">£249</span>
            <span className="s-price__note">a year plus VAT, for a caseload of up to 40 children shared by their families.</span>
            <ul>
              <li>One record across home, school and therapy</li>
              <li>Appointment summaries with no AI</li>
              <li>Notes with advice for home and school</li>
            </ul>
            <Link to="/therapists" className="s-btn s-btn--ghost">For therapists</Link>
          </div>
          <div className="s-price" style={{ '--c': 'var(--blue)' }}>
            <span className="s-price__who">AAC services</span>
            <span className="s-price__amount">Free trial</span>
            <span className="s-price__note">90 days for up to 40 children, then priced for your service. For children on TD Snap, Grid 3 and other devices.</span>
            <ul>
              <li>Your whole caseload on one page</li>
              <li>Who needs you this week</li>
              <li>Adoption and abandonment for commissioners</li>
            </ul>
            <Link to="/connect" className="s-btn s-btn--ghost">SENSay Connect</Link>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: '2.6rem auto 0' }}>
          <table className="s-table">
            <thead><tr><th>School licence</th><th>Pupils</th><th>A year, plus VAT</th></tr></thead>
            <tbody>
              {SCHOOL_BANDS.map(([n, p, a]) => <tr key={n}><td>{n}</td><td>{p}</td><td>{a}</td></tr>)}
            </tbody>
          </table>
          <p className="s-caption">
            Multi-academy trusts save 5% at two or three schools, 10% at four to nine and 15% at ten or more.
            Pupils on other devices: SENSay Connect is included in Large and Special school licences, and £395 a year otherwise.
            Maintained schools, academies and most independent special schools reclaim the VAT.
          </p>
        </div>
      </div>
    </section>
  )
}
