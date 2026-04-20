import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'
import './senco.css'

const FEATURES = [
  {
    icon: '🔗',
    title: 'Traceable',
    body: 'Every claim in the draft is linked to the specific observation it came from. Audit any sentence in one click — defensible in a tribunal, trusted in a review.',
  },
  {
    icon: '⚖️',
    title: 'Evidence-calibrated language',
    body: 'A single observation gets cautious language. Four consistent observations get confident language. SENSay never overclaims what was seen — because Section B written to the wrong strength is Section B thrown out.',
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
    a: 'No. SENSay drafts; the SENCO reviews and signs. Every claim is cited to source, the draft is marked "review before use," and the tool declines to draft sections where evidence is insufficient. Think of it as a very well-prepared junior colleague offering a starting draft.',
  },
  {
    q: 'What about children already using a different AAC tool?',
    a: 'SENSay is designed to work alongside other AAC tools. Teachers can log evidence observations into SENSay without the child needing to switch communication platforms. For schools already using Tobii Dynavox, CoughDrop, or Grid for Schools, SENSay sits above as the insight layer.',
  },
  {
    q: "Is it compliant with the UK Children's Code and UK GDPR?",
    a: 'Yes. Consent managed by the family. Data processors: Supabase, Anthropic, Stripe, Vercel. Privacy policy undergoing legal review before go-live. A formal data-sharing agreement template is available for pilot schools.',
  },
  {
    q: 'Who built this?',
    a: "Neil Dickinson (co-founder and technical lead) and Kirsty Dickinson (CEO). Both are parents of a non-verbal child. Jo Holmes, an independent AAC expert, has validated SENSay's cross-context analytics as genuinely unique in the market.",
  },
  {
    q: 'How much does it cost after pilot?',
    a: 'Founding partner pricing is offered to pilot schools. Full pricing is tiered by school type and size. Typical mainstream primary: £5,000–£8,000/year. Typical special school: up to £52,000/year full tier. See Pricing for details.',
  },
]

const PILOT_MAILTO =
  'mailto:senco@sensay.uk?subject=Pilot%20interest%20%E2%80%94%20%5Bschool%20name%5D'

export default function Senco() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="stripe" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">For schools &amp; SENCOs</div>
          <h1>EHCP Section B drafts, from classroom evidence, in under a minute.</h1>
          <p>
            SENSay's EHCP drafting tool takes a pupil's classified classroom observations — logged
            during normal AAC activities — and drafts professional Section B narratives with every
            claim cited to source. The SENCO reviews, edits, and signs. Generation takes 20–40
            seconds.
          </p>
          <div className="senco-hero-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Book a pilot — Summer Term 2026
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
                <h3 className="senco-feature__title">{f.title}</h3>
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
            <h2>Real output, from 19 evidence observations</h2>
            <p>
              Below is an excerpt from an EHCP Section B draft SENSay generated this week for a
              4-year-old pupil with autism. Every claim in the text is cited to a specific
              observation. The draft is marked "review before use" throughout — SENSay provides the
              first draft, the SENCO provides the judgement.
            </p>
          </div>

          <div className="draft-block" role="region" aria-label="Sample EHCP Section B draft">
            <div className="draft-block__banner">[DRAFT — REVIEW BEFORE USE]</div>
            <div className="draft-block__meta">
              Generated 20 Apr 2026 · 19 evidence observations · claude-sonnet-4-6 · prompt v1.1.0
            </div>

            <h4 className="draft-block__heading">OVERALL SUMMARY</h4>
            <p className="draft-block__p">
              Sophie is developing a functional symbol-based communication system, with at least
              four symbols now produced independently and a consistent upward vocabulary trajectory
              across the term; her symbol use is most reliable in structured 1:1 sessions with a
              familiar adult during morning hours, and varies markedly in whole-class and afternoon
              contexts. She also demonstrates an emerging capacity to identify and independently
              manage her own sensory needs, selecting ear defenders and quiet spaces without adult
              prompting across multiple observed occasions. Three EHCP areas lack sufficient
              evidence to support a narrative at this time and are flagged for further observation.
            </p>

            <h4 className="draft-block__heading">
              COMMUNICATION AND INTERACTION <span className="draft-block__items">[14 items]</span>
            </h4>
            <p className="draft-block__p">
              Sophie demonstrates a growing functional symbol vocabulary across the evidence window.
              She independently produces 'more', 'yes', 'finished', and 'help' in appropriate
              contexts without adult prompting…
            </p>

            <p className="draft-block__pattern">
              Pattern: Sophie's symbol response latency is consistently higher in afternoon sessions
              than morning sessions, a difference observed across four separate weeks this term.
            </p>

            <h4 className="draft-block__heading">COGNITION AND LEARNING</h4>
            <div className="draft-block__nev">
              Not enough evidence yet — 0 of 3 rows. Run a few more activities in this area before
              regenerating.
            </div>
          </div>

          <p className="senco-seeit__note">
            Every "[14 items]" label links to the evidence appendix. The "Not enough evidence yet"
            card appears automatically when SENSay lacks the minimum observations to draft
            confidently — it will never pad a section with speculation.
          </p>
        </div>
      </section>

      {/* Pilot pitch */}
      <section className="section section--white">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Pilot programme</div>
            <h2>Pilot SENSay across Summer Term 2026</h2>
          </div>

          <div className="pilot-grid">
            <div className="pilot-col">
              <h3 className="pilot-col__title">Who this is for</h3>
              <ul className="pilot-col__list">
                <li>
                  West Yorkshire special schools (Bradford, Leeds, Kirklees, Wakefield, Calderdale)
                  — our early-adoption focus
                </li>
                <li>SENCOs and SEN leads with 3–5 pupils approaching EHCP review this summer</li>
                <li>Schools willing to give us four half-hour feedback conversations across the term</li>
              </ul>
            </div>
            <div className="pilot-col pilot-col--accent">
              <h3 className="pilot-col__title">What pilot schools get</h3>
              <ul className="pilot-col__list">
                <li>The tool, training, and technical support at no cost during pilot</li>
                <li>EHCP drafting for your named pilot pupils</li>
                <li>
                  Direct line to the founders — we're parents of a non-verbal child, and product
                  changes based on SENCO feedback move fast
                </li>
                <li>Founding partner pricing if you choose to continue beyond the pilot</li>
              </ul>
            </div>
          </div>

          <div className="pilot-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Apply to pilot
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
            <div className="founder-note__photo" aria-label="Founder photo placeholder">
              {/* Placeholder — real founder photo to follow */}
              <span>ND</span>
            </div>
            <div className="founder-note__body">
              <blockquote className="founder-note__quote">
                Kirsty and I built SENSay because we watched our own non-verbal child try to tell us
                what he needed, and saw our own SENCO spending her evenings writing Section B text
                from scratch. We think software can help with both. If you want to be one of the
                first SENCOs in the country to try it, we'd value a 15-minute call.
              </blockquote>
              <div className="founder-note__sig">
                <div className="founder-note__name">— Neil Dickinson, co-founder, SENSay</div>
                <div className="founder-note__contact">
                  <a href="mailto:neil@sensay.uk">neil@sensay.uk</a>
                  <br />
                  Greenfield House, Halifax Road, Liversedge, WF15 8HL
                </div>
              </div>
            </div>
          </div>

          <div className="senco-bottom-cta">
            <a href={PILOT_MAILTO} className="btn btn--primary">
              Apply to pilot
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
