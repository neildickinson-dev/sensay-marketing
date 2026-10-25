import React from 'react'
import { Link } from 'react-router-dom'
import DraftSample from '../components/DraftSample.jsx'
import { Browser, Closing, Promises, Split } from '../components/Blocks.jsx'
import { guideHref } from '../data/guides.js'

const FAQ = [
  ['Does SENSay replace the SENCO\'s judgement?', 'No. SENSay gathers the evidence and drafts; the SENCO checks, edits and decides. Every draft is marked for review, every statement links to the observation it came from, and SENSay declines to draft where there is not enough evidence.'],
  ['What about pupils who use another AAC device?', 'Staff can record evidence for any pupil, whatever they communicate with. SENSay Connect also reads the usage data from TD Snap, Grid 3, PRC-Saltillo devices and others, so those pupils sit in the same records. Connect is included in Large and Special school licences.'],
  ['How do pupils get onto our school?', 'Through their family. Each family generates a one-time link code in their app and gives it to you. Consent stays with the family, and the school never holds a pupil the family has not linked.'],
  ['Is it compliant with UK GDPR and the Children\'s Code?', 'SENSay is designed to UK GDPR and the ICO Children\'s Code. The school is the controller for the records it creates and SENSay is the processor; we sign a data processing agreement and provide an impact assessment template before any pupil data is entered. Records are stored in the EU. Our processors are Supabase (database, EU), Vercel (hosting), Anthropic (AI, US) and Resend and Twilio (email and text, US), each under contract with UK GDPR safeguards for transfers.'],
  ['How do we buy it?', 'One annual licence by number of pupils, plus VAT, invoiced a year in advance. Every price is under £10,000, which most schools can buy with a quote and a purchase order. Multi-academy trusts get 5% to 15% off.'],
]

export default function Schools() {
  return (
    <>
      <section className="s-hero">
        <div className="s-wrap s-hero__grid">
          <div>
            <span className="s-eyebrow s-eyebrow--green">For schools and SENCOs</span>
            <h1 className="s-h1">Every pupil heard. Every target evidenced.</h1>
            <p className="s-lead">
              SENSay gives pre-verbal and non-verbal pupils a board they learn by position, and gives staff the evidence
              behind what those pupils are telling them, from class and from home, ready for every review.
            </p>
            <div className="s-actions">
              <a className="s-btn s-btn--primary" href="mailto:hello@sensay.uk?subject=SENSay%20school%20demo">Book a school demo</a>
              <a className="s-btn s-btn--ghost" href={guideHref('schools')}>Read the schools guide</a>
            </div>
          </div>
          <Browser src="/img/school-today.jpg" alt="The school Today page with urgent messages, reviews due and pupils" />
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Evidence"
            colour="green"
            title="Evidence in seconds, in the middle of a lesson"
            lead="Choose the pupil and the target, the help they needed from full physical support to independent, and save. What they said is filled in from their own board messages. It works offline."
            points={[
              ['Targets with progress by week,', 'coloured by level of support.'],
              ['Communication by week and half term:', 'words, feelings, new words and anything worth a look.'],
              ['Quick questions', 'with picture answers, recorded as evidence with the time taken.'],
              ['Adult modelling kept separate,', 'so pupils\' own words are counted honestly.'],
            ]}
          >
            <Browser src="/img/school-targets.jpg" alt="A pupil record with three targets and progress charts by level of support" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            flip
            eyebrow="Reviews"
            title="Review packs on time, with the pupil's own voice in them"
            lead="Countdowns to every meeting, with warnings at six, four and two weeks and paperwork due 14 days before. The pack gathers the pupil's views from their own board messages, the parent's views, progress, provision and draft proposals, with every number checked against the records."
            points={[
              ['Section B drafts', 'for the school\'s advice, built from at least eight pieces of evidence, with every statement cited.'],
              ['Exports as a PDF,', 'and cannot be marked ready without the pupil\'s and parent\'s views.'],
            ]}
          >
            <Browser src="/img/school-reviews.jpg" alt="EHCP and reviews: countdowns and paperwork deadlines" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--white" id="see-it-working">
        <div className="s-wrap">
          <div className="s-center">
            <span className="s-eyebrow">Sample output</span>
            <h2 className="s-h2">What a draft looks like</h2>
            <p className="s-lead">An excerpt from a Section B draft that SENSay generated from 19 fictional evidence observations about an illustrative pupil.</p>
          </div>
          <div style={{ marginTop: '2rem' }}><DraftSample /></div>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            eyebrow="Teaching aids"
            colour="yellow"
            title="Visual supports from the same symbols as the board"
            lead="Visual timetables, first and then, choice boards, lesson boards, feelings check-ins, token boards, social stories, sequences, timers and communication passports. Send them to a pupil's device or the class screen, or print them."
          >
            <Browser src="/img/school-aids.jpg" alt="The teaching aids library" />
          </Split>
        </div>
      </section>

      <Promises />

      <section className="s-section s-section--white">
        <div className="s-wrap" style={{ maxWidth: 860 }}>
          <div className="s-center"><h2 className="s-h2">Questions schools ask</h2></div>
          <div className="s-faq">
            {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
          <p className="s-caption" style={{ marginTop: '1.5rem' }}>Prices are on the <Link to="/#pricing" style={{ color: 'var(--blue-text)', fontWeight: 800 }}>pricing section</Link>. Founding schools for 2026 to 2027 get a direct line into the product team.</p>
        </div>
      </section>

      <Closing title="See it with your own pupils in mind" lead="A 20-minute demo with the teacher demo account, and a written quote in your band with VAT shown." />
    </>
  )
}
