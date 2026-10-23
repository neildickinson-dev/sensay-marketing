import React from 'react'
import { Link } from 'react-router-dom'
import Pricing from '../components/Pricing.jsx'
import { Browser, Closing, PathCard, Promises, Shot, Split, Tablet } from '../components/Blocks.jsx'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="s-hero">
        <div className="s-wrap s-hero__grid">
          <div>
            <span className="s-eyebrow">For pre-verbal and non-verbal children</span>
            <h1 className="s-h1">Every child heard. Every message understood.</h1>
            <p className="s-lead">
              SENSay gives your child a board that speaks for them, and gives every adult around them a record of
              what they are saying: at home, at school and in therapy.
            </p>
            <ul className="s-hero__points">
              <li style={{ '--c': 'var(--blue)' }}>A board children learn by position, with words that never move</li>
              <li style={{ '--c': 'var(--green)' }}>Every message to your phone, with what SENSay noticed</li>
              <li style={{ '--c': 'var(--yellow)' }}>Patterns over weeks and months, not one moment</li>
              <li style={{ '--c': 'var(--red)' }}>Urgent messages reach you straight away</li>
            </ul>
            <div className="s-actions">
              <a className="s-btn s-btn--primary" href="https://app.sensay.uk">Try the live demo</a>
              <a className="s-btn s-btn--ghost" href="mailto:hello@sensay.uk?subject=SENSay%20school%20demo">Book a school demo</a>
            </div>
          </div>
          <Tablet src="/img/board-tablet.jpg" alt="The SENSay board on a tablet: core words in fixed places, with the message I want more in the message bar" />
        </div>
      </section>

      {/* The problem, in numbers */}
      <section className="s-section s-section--navy" style={{ padding: '3.5rem 0' }}>
        <div className="s-wrap s-stats">
          <div className="s-stat"><b>718,838</b><span>education, health and care plans in England, up 12.5% in a year (DfE, 2026)</span></div>
          <div className="s-stat"><b>46%</b><span>of new plans issued within the 20-week legal limit in 2025 (DfE)</span></div>
          <div className="s-stat"><b>60-120k</b><span>school-age children in England who are minimally verbal or likely to use AAC (SENSay estimate)</span></div>
          <div className="s-stat"><b>2029</b><span>digital support plans proposed for every child with SEND (Schools White Paper 2026, subject to legislation)</span></div>
        </div>
      </section>

      {/* One record, five views */}
      <section className="s-section s-section--white" id="how-it-works">
        <div className="s-wrap">
          <div className="s-center">
            <span className="s-eyebrow">How it works</span>
            <h2 className="s-h2">One record of what the child says, for everyone around them</h2>
            <p className="s-lead">The child taps; the board speaks. Each adult sees what they need, from the same record, with the family in control of who sees what.</p>
          </div>
          <div className="s-cards">
            <PathCard to="/families" who="Families" colour="var(--yellow)" title="Understand your child" body="Every message by email or text, the patterns behind them, and evidence to take into every meeting." />
            <PathCard to="/schools" who="Schools and SENCOs" colour="var(--green)" title="Evidence without the paperwork" body="Evidence against targets, review packs on time, and pupils' own words in every review." />
            <PathCard to="/therapists" who="Therapists" colour="var(--red)" title="Work from evidence" body="One record across home, school and therapy, with modelling and play kept out of the counts." />
            <PathCard to="/connect" who="AAC services" colour="var(--blue)" title="See your whole caseload" body="Usage from TD Snap, Grid 3 and other devices, compared over months, with who needs you this week." />
          </div>
        </div>
      </section>

      {/* The board */}
      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            eyebrow="The board"
            title="A board children learn by position"
            lead="Built on the same core-word principles AAC specialists use, with SENSay's own design. Words keep their place on every page, at every level, after every change."
            points={[
              ['43 core words in fixed places,', 'with folders for people, actions, describing words, questions and little words.'],
              ['Yes, no, stop, help, pain and toilet', 'on every page, in the same place.'],
              ['32 word lists and 36 everyday topics,', 'from snack time to the dentist, plus a keyboard that learns the child\'s own words.'],
              ['Made for this child.', 'Start with 16 words and grow. Rename any word, add your own photos, or find the real Vimto bottle.'],
              ['Their own voice.', 'Seven character voices, including children\'s voices, with speed and pitch.'],
            ]}
          >
            <Tablet src="/img/word-editor.jpg" alt="Changing a word on the board: the tile says Vimto with a picture of a drink, and SENSay's own word kept underneath" caption="Change any word for this child. It stays in the same place." />
          </Split>
        </div>
      </section>

      {/* Messages */}
      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            flip
            eyebrow="Every message"
            colour="green"
            title="Not just what they said. What it means."
            lead="Every message reaches the adults you choose by email or text, with a short note built from the child's own history. No AI needed."
            points={[
              ['The child\'s words first,', 'exactly as they said them.'],
              ['What SENSay noticed:', '"2nd time today", "often says this around 4pm", "new word: thirsty", or what came just before.'],
              ['How you might respond,', 'one practical suggestion.'],
              ['Urgent messages always come through:', 'pain, feeling ill, needing help, feeling unsafe, the toilet.'],
              ['Reply in a tap.', 'Your reply is read aloud on the child\'s board.'],
            ]}
          >
            <Shot src="/img/email.jpg" alt="An email from SENSay: William says I want Vimto, 2nd time today, often says this around 4pm" maxWidth={520} />
          </Split>
        </div>
      </section>

      {/* Patterns */}
      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            eyebrow="Patterns"
            colour="yellow"
            title="Weeks of messages, turned into a picture you can use"
            lead="What a child asks for, when, where and what came before. The picture that no single moment shows, and the evidence a parent, teacher or therapist needs in the room."
            points={[
              ['Play is not counted as need.', 'A burst of the same tap counts once, and families can mark a message as play.'],
              ['Modelling is kept separate.', 'Adults showing the board never count as the child\'s words.'],
              ['AI is labelled as a suggestion,', 'never as the child\'s words, and it can be switched off.'],
            ]}
          >
            <Browser src="/img/family-analytics.jpg" alt="SENSay analytics: what William is telling you, with patterns by time and place" />
          </Split>
        </div>
      </section>

      {/* Schools and therapists */}
      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Schools"
            colour="green"
            title="Who needs you today, and the evidence for every target"
            lead="A Today page with urgent messages, reviews coming up and targets short of evidence. Evidence recorded in seconds in class, with the pupil's own board words filled in."
            actions={<Link className="s-btn s-btn--navy" to="/schools">SENSay for schools</Link>}
          >
            <Browser src="/img/school-today.jpg" alt="The school Today page: urgent messages, reviews due and pupils with their targets" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            flip
            eyebrow="AAC services"
            title="Already on TD Snap or Grid 3? SENSay Connect brings it together."
            lead="SENSay Connect reads the usage data children's devices already record, keeps it, and shows a whole caseload over months: who has stopped, whose use is dropping, whose vocabulary is growing."
            actions={<Link className="s-btn s-btn--navy" to="/connect">SENSay Connect</Link>}
          >
            <Browser src="/img/connect-caseload.jpg" alt="SENSay Connect caseload: children on TD Snap and Grid 3, with who needs you this week" />
          </Split>
        </div>
      </section>

      <Promises />
      <Pricing />

      {/* Story */}
      <section className="s-section s-section--white">
        <div className="s-wrap s-center">
          <span className="s-eyebrow s-eyebrow--red">Why we built it</span>
          <h2 className="s-h2">Built by the parents of a non-verbal child</h2>
          <p className="s-lead">
            Our son William is ten, autistic, and has never spoken. He tells us things all day long. For years we kept
            missing them, and by the next school meeting the moment had gone. SENSay is the tool we wish we had had.
          </p>
          <div className="s-actions" style={{ justifyContent: 'center' }}>
            <Link className="s-btn s-btn--ghost" to="/our-story">Read our story</Link>
            <Link className="s-btn s-btn--ghost" to="/guides">Download the guides</Link>
          </div>
        </div>
      </section>

      <Closing />
    </>
  )
}
