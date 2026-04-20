import React from 'react'
import { Link } from 'react-router-dom'
import DraftSample from './DraftSample.jsx'
import './Proof.css'

export default function Proof() {
  return (
    <section className="section section--light" id="proof">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Proof, not promises</div>
          <h2>What SENSay actually produces</h2>
          <p className="proof-intro">
            Here's an excerpt from an EHCP Section B draft SENSay generated this week from 19
            evidence observations for a 4-year-old pupil with autism.
          </p>
        </div>

        <DraftSample />

        <p className="proof-caption">
          Every numbered item links to the original observation. Every claim in the narrative is
          traceable. The draft is marked "review before use" throughout — SENSay provides the first
          draft, the SENCO provides the judgement.
        </p>

        <div className="proof-cta">
          <Link to="/senco" className="btn btn--outline">
            See the full SENCO feature →
          </Link>
        </div>
      </div>
    </section>
  )
}
