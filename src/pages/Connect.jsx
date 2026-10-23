import React from 'react'
import { Browser, Closing, Split } from '../components/Blocks.jsx'

const DEVICES = [
  ['TD Snap', 'Usage report from myTobiiDynavox (.xlsx)', 'Yes'],
  ['Grid 3', 'The user\'s spoken history (history.sqlite)', 'No'],
  ['TouchChat, LAMP Words for Life, Accent', 'Data logging file (logFile.txt)', 'No'],
  ['CoughDrop', 'Open Board Logs (.obl)', 'Where recorded'],
  ['Speak for Yourself', 'History export (.csv)', 'No'],
  ['Any other system', 'A spreadsheet of words or buttons used', 'If it has a column for it'],
]

export default function Connect() {
  return (
    <>
      <section className="s-hero">
        <div className="s-wrap s-hero__grid">
          <div>
            <span className="s-eyebrow">SENSay Connect, for AAC services</span>
            <h1 className="s-h1">Your whole caseload, across devices, over months</h1>
            <p className="s-lead">
              Children's devices already record how they are used. Connect keeps that data, compares it over time and
              tells your team who needs you this week. No new device, and nothing for the child to learn.
            </p>
            <div className="s-actions">
              <a className="s-btn s-btn--primary" href="mailto:hello@sensay.uk?subject=SENSay%20Connect%20trial">Start a free 90-day trial</a>
              <a className="s-btn s-btn--ghost" href="/guides/sensay-connect-guide-for-aac-services.pdf">Read the Connect guide</a>
            </div>
          </div>
          <Browser src="/img/connect-caseload.jpg" alt="The Connect caseload: children on TD Snap and Grid 3, with who needs you this week" />
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Who needs you"
            title="Abandonment caught early, not at the annual review"
            lead="A weekly list of children who have stopped, whose use has halved, whose target words are unused, or whose upload is out of date."
            points={[
              ['Active, use dropping, or not used for 14 days,', 'with the date the data runs to.'],
              ['The child\'s own use kept separate', 'from adult modelling, where the device records it.'],
              ['Vocabulary growth by month,', 'with new words and core vocabulary share.'],
              ['Target words:', 'how often used and when first used.'],
            ]}
          >
            <Browser src="/img/connect-grid3.jpg" alt="A child on Grid 3 in Connect, with the upload steps for their device" caption="Each child's page shows the upload steps for their own device, here Grid 3." />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            flip
            eyebrow="Evidence"
            colour="green"
            title="A service summary for managers and commissioners"
            lead="The NHS specification for specialised AAC asks services to measure adoption and abandonment, but gives no method. Connect's printable service summary is that measure, from data your devices already record: devices in regular use, devices unused for 14 days or more, median vocabulary, new words and target words."
            points={[
              ['A paragraph for every review,', 'ready to paste into an EHCP contribution or a report to the referrer.'],
              ['About ten minutes per child per month.', 'Connect shows exactly what it has read before anything is saved.'],
            ]}
          >
            <Browser src="/img/connect-summary.jpg" alt="The Connect service summary" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap" style={{ maxWidth: 940 }}>
          <div className="s-center">
            <span className="s-eyebrow">Devices</span>
            <h2 className="s-h2">What Connect reads</h2>
            <p className="s-lead">Children on different systems sit on one caseload, and each child's page shows the steps for their own device.</p>
          </div>
          <table className="s-table" style={{ marginTop: '2rem' }}>
            <thead><tr><th>System</th><th>What you upload</th><th>Modelling separated</th></tr></thead>
            <tbody>{DEVICES.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody>
          </table>
          <p className="s-caption" style={{ marginTop: '1rem' }}>Proloquo2Go and Proloquo do not offer a usage export yet; those children can still sit on the caseload with their goals. Connect does not judge which device a child should have, and it never contacts your families.</p>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <div className="s-center">
            <span className="s-eyebrow s-eyebrow--yellow">The trial</span>
            <h2 className="s-h2">Free for 90 days, for up to 40 children</h2>
          </div>
          <table className="s-table" style={{ marginTop: '2rem' }}>
            <tbody>
              <tr><td>Cost</td><td>Free for 90 days. No card and no automatic charge.</td></tr>
              <tr><td>What we ask</td><td>One named contact, monthly uploads, and two 30-minute feedback calls in weeks 6 and 12.</td></tr>
              <tr><td>What you get</td><td>Full use of Connect, help setting it up, and the service summary at the end for your managers or commissioners.</td></tr>
              <tr><td>At the end</td><td>Continue on a price agreed with you before the trial ends, or stop and we delete everything within 30 days.</td></tr>
              <tr><td>Data</td><td>Stored in the EU, encrypted, never sold and never used to train AI. Your team uses its own references; no child's name is needed.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <Closing title="See your caseload in Connect" lead="A 30-minute walk-through with your own anonymised exports, then a trial set up the same week." />
    </>
  )
}
