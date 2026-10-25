import React from 'react'
import { Browser, Closing, Promises, Split } from '../components/Blocks.jsx'
import { guideHref } from '../data/guides.js'

export default function Therapists() {
  return (
    <>
      <section className="s-hero">
        <div className="s-wrap s-hero__grid">
          <div>
            <span className="s-eyebrow s-eyebrow--red">For therapists</span>
            <h1 className="s-h1">Plan sessions and write reports from evidence</h1>
            <p className="s-lead">
              Families share their child with you, one child at a time. You see one record of the child's communication
              across home, school and therapy, and your advice reaches every adult around them.
            </p>
            <div className="s-actions">
              <a className="s-btn s-btn--primary" href="https://app.sensay.uk/signup">Create your account</a>
              <a className="s-btn s-btn--ghost" href={guideHref('therapists')}>Read the therapists' guide</a>
            </div>
          </div>
          <Browser src="/img/clinician-caseload.jpg" alt="A therapist's caseload: each child's last message, urgent messages and next appointment" />
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Between sessions"
            colour="red"
            title="What happened since you last saw them"
            lead="Every message the child sent at home and school, by week, with what came before it. Choose the last 4, 6, 8 or 12 weeks."
            points={[
              ['The child\'s own use,', 'with adult modelling left out and bursts of play counted once.'],
              ['Targets and evidence', 'from school, with the level of support for each observation.'],
              ['An appointment summary', 'to print, built only from counts in the record, with no AI.'],
              ['Notes with advice for home and school', 'that the family and the school both see.'],
            ]}
          >
            <Browser src="/img/clinician-child.jpg" alt="A child's page for the therapist: summary of the period" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <div className="s-center">
            <span className="s-eyebrow">Consent and safety</span>
            <h2 className="s-h2">The family decides, every time</h2>
          </div>
          <table className="s-table" style={{ marginTop: '2rem' }}>
            <tbody>
              <tr><td>Access</td><td>A parent shares a child with your email and chooses everything, or plans and progress only. They can change it or stop at any time.</td></tr>
              <tr><td>Caseload</td><td>Up to 40 children for £249 a year plus VAT. Ask us about larger caseloads.</td></tr>
              <tr><td>Clinical judgement</td><td>SENSay shows what the child communicated. It does not diagnose, assess or recommend a device; status flags are prompts for your judgement.</td></tr>
              <tr><td>Data</td><td>Stored in the EU, encrypted, never sold and never used to train AI.</td></tr>
              <tr><td>NHS assurance</td><td>Data Security and Protection Toolkit, Digital Technology Assessment Criteria and a DCB0129 clinical safety case in progress.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <Promises />
      <Closing title="Working with children on other devices?" lead="SENSay Connect reads usage from TD Snap, Grid 3, PRC-Saltillo devices and others, across your whole caseload. See the Connect page, or book a demo." />
    </>
  )
}
