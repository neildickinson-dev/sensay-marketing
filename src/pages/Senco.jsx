import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DraftSample from '../components/DraftSample.jsx'
import './pages.css'
import './senco.css'

const FEATURES = [
  {
    icon: '🔗',
    title: 'Traceable',
    body: 'Every claim in the draft is linked to the specific observation it came from. Audit any sentence in one click, so you can check it against its source before you sign.',
  },
  {
    icon: '⚖️',
    title: 'Evidence-calibrated language',
    body: 'A single observation gets cautious language. Four consistent observations get confident language. SENSay is built not to overclaim what was seen, because Section B written to the wrong strength is Section B thrown out.',
  },
  {
    icon: '🧭',
    title: 'Cross-context patterns',
    body: "SENSay compares how a pupil responds across 1:1 versus whole-class, morning versus afternoon, familiar adult versus cover. The patterns that wouldn't show up in a single lesson observation become the backbone of your Section B.",
  },
]

const FAQS = [
  {
    q: "Does SENSay replace the SENCO's judgement?",
    a: 'No. SENSay drafts and the SENCO reviews and signs. Every claim is cited to source, the draft is marked "review before use," and the tool declines to draft sections where evidence is insufficient. Think of it as a very well-prepared junior colleague offering a starting draft.',
  },
  {
    q: 'What about children already using a different AAC tool?',
    a: 'SENSay is designed to work alongside other AAC tools, without the child needing to change communication system. Teachers can log observations in SENSay whichever AAC system a pupil uses, including Grid 3, TD Snap and others. SENSay does not need to replace them.',
  },
  {
    q: "Is it compliant with the UK Children's Code and UK GDPR?",
    a: "SENSay is built to UK GDPR and the ICO Children's Code. The family controls consent, and child profiles use a first name or alias only. Our data processors are Supabase (database, in the EU), Vercel (hosting), Anthropic (AI analysis, in the US) and Resend and Twilio (email and text notifications, in the US). Founding schools receive a data processing agreement and a data protection impact assessment template before any pupil data is entered.",
  },
  {
    q: 'Who built this?',
    a: 'Kirsty Dickinson (co-founder and CEO) and Neil Dickinson (co-founder and CTO), the parents of a non-verbal child.',
  },
  {
    q: 'How much does it cost?',
    a: 'School licences are annual and invoiced annually in advance: Starter £895 a year (up to 5 pupils), Standard £1,495 (up to 15 pupils), Large £2,295 (up to 30 pupils) and Special school £4,495 (up to 80 pupils, then £45 per extra pupil). Prices are + VAT. Maintained schools, academies and most independent and non-maintained special schools can reclaim the VAT. See Pricing on the home page.',
  },
]

const PILOT_MAILTO =
  'mailto:hello@sensay.uk?subject=Founding%20school%20interest%3A%20%5Bschool%20name%5D'

export default function Senco() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="stripe" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">For schools &amp; SENCOs</div>
          <h1>EHCP Section B drafts, from classroom evidence.</h1>
          <p>
            SENSay's EHCP drafting tool takes a pupil's classroom observations, logged during normal
            AAC activities, and drafts professional Section B narratives with every claim cited to
            source. The SENCO reviews, edits and signs.
          </p>
          <div className="senco-hero-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Become a founding school for 2026-27
            </a>
            <a href="#see-it-working" className="btn btn--outline">
              See the output →
            </a>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <section className="section section--white">
        <div className="section-inner">
          <div className="senco-features">
            {FEATURES.map(f => (
              <div key={f.title} className="senco-feature">
                <div className="senco-feature__icon" aria-hidden="true">{f.icon}</div>
                <h2 className="senco-feature__title">{f.title}</h2>
                <p className="senco-feature__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See it working */}
      <section id="see-it-working" className="section section--light">
        <div className="section-inner senco-seeit">
          <div className="section-header">
            <div className="section-tag">Sample output</div>
            <h2>Sample output, from 19 fictional observations</h2>
            <p>
              Below is an excerpt from an EHCP Section B draft SENSay generated for an illustrative
              pupil. Every claim in the text is cited to a specific observation. The draft is marked
              "review before use" throughout: SENSay provides the first draft, the SENCO provides
              the judgement.
            </p>
          </div>

          <DraftSample />

          <p className="senco-seeit__note">
            Every "[14 items]" label links to the evidence appendix. The "Not enough evidence yet"
            card appears automatically when SENSay lacks the minimum observations to draft
            confidently, rather than padding a section with speculation.
          </p>
        </div>
      </section>

      {/* Pilot pitch */}
      <section className="section section--white">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Founding schools</div>
            <h2>We are taking on a small group of founding schools for 2026-27</h2>
          </div>

          <div className="pilot-grid">
            <div className="pilot-col">
              <h3 className="pilot-col__title">Who this is for</h3>
              <ul className="pilot-col__list">
                <li>
                  Special schools in West Yorkshire (Bradford, Leeds, Kirklees, Wakefield,
                  Calderdale) are our early focus
                </li>
                <li>SENCOs and SEN leads with 3 to 5 pupils approaching an EHCP annual review this school year</li>
                <li>Schools willing to give us regular feedback conversations across the year</li>
              </ul>
            </div>
            <div className="pilot-col pilot-col--accent">
              <h3 className="pilot-col__title">What founding schools get</h3>
              <ul className="pilot-col__list">
                <li>The first five schools get their first term free, then the standard licence</li>
                <li>
                  A direct line into the product team. We are the parents of a non-verbal child,
                  and changes based on SENCO feedback move fast
                </li>
                <li>A say in what we build next</li>
              </ul>
            </div>
          </div>

          <div className="pilot-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Become a founding school
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="section-inner senco-faq-wrap">
          <div className="section-header">
            <div className="section-tag">FAQ</div>
            <h2>Common questions from SENCOs</h2>
          </div>

          <div className="senco-faq">
            {FAQS.map((item, i) => {
              const open = openFaq === i
              return (
                <div key={item.q} className={`faq-item${open ? ' faq-item--open' : ''}`}>
                  <button
                    className="faq-item__q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__chev" aria-hidden="true">{open ? '−' : '+'}</span>
                  </button>
                  {open && <div className="faq-item__a">{item.a}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="section section--white">
        <div className="section-inner">
          <div className="founder-note">
            <div className="founder-note__photo" role="img" aria-label="Neil Dickinson">
              <span aria-hidden="true">ND</span>
            </div>
            <div className="founder-note__body">
              <blockquote className="founder-note__quote">
                Kirsty and I built SENSay because we watched our own non-verbal child try to tell us
                what he needed, and saw our own SENCO spending her evenings writing Section B text
                from scratch. We think software can help with both. If you want to be one of the
                first SENCOs in the country to try it, we'd value a 15-minute call.
              </blockquote>
              <div className="founder-note__sig">
                <div className="founder-note__name">Neil Dickinson, co-founder and CTO, SENSay</div>
                <div className="founder-note__contact">
                  <a href="mailto:hello@sensay.uk">hello@sensay.uk</a>
                </div>
              </div>
            </div>
          </div>

          <div className="senco-bottom-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Become a founding school
            </a>
            <Link to="/contact" className="btn btn--outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
