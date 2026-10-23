import React from 'react'
import { Link } from 'react-router-dom'
import { Browser, Closing, Promises, Shot, Split, Tablet } from '../components/Blocks.jsx'

const FAQ = [
  ['Does my child need a special device?', 'No. SENSay runs on an iPad, an Android tablet, a phone or a computer, in the browser at app.sensay.uk. Apps for the App Store and Google Play follow in 2027.'],
  ['My child already uses another AAC app. Do we have to switch?', 'No. If your child uses TD Snap, Grid 3, TouchChat, LAMP Words for Life, CoughDrop or Speak for Yourself, SENSay Connect can read the usage that app already records. Connect is available now through schools and AAC services, and for families from 2027; nothing your child does has to change.'],
  ['What if my child just likes tapping?', 'That is part of learning a board. SENSay counts a burst of the same message once, you can mark a message as play, and repeats do not flood your phone. The patterns stay honest.'],
  ['Is AI making decisions about my child?', 'No. AI can suggest what a message might mean, always labelled as a suggestion and never shown to your child. You can switch it off in Board settings, and the board works exactly the same.'],
  ['Who can see my child\'s messages?', 'You, and only the school staff and therapists you link or share with. You can stop sharing at any time. Data is held in the EU, encrypted, never sold and never used to train AI.'],
  ['What does it cost?', 'The board is free for every child. The family plan is £7.99 a month or £79 a year including VAT, and opens in 2027. It is free if your child\'s school has a SENSay licence. A support price of £3.99 a month is available on request.'],
]

export default function Families() {
  return (
    <>
      <section className="s-hero">
        <div className="s-wrap s-hero__grid">
          <div>
            <span className="s-eyebrow s-eyebrow--yellow">For families</span>
            <h1 className="s-h1">Understand what your child is telling you</h1>
            <p className="s-lead">
              Your child taps words and the board speaks for them. You get each message the moment it is sent, and over
              the weeks you see the patterns: what they ask for, when, where, and what came just before.
            </p>
            <div className="s-actions">
              <a className="s-btn s-btn--primary" href="https://app.sensay.uk/signup">Start free</a>
              <a className="s-btn s-btn--ghost" href="/guides/sensay-guide-for-parents-and-carers.pdf">Read the parents' guide</a>
            </div>
          </div>
          <Tablet src="/img/board-people.jpg" alt="The People page of the board, with Nanny Sue, Mrs Patel and Josh added from the child's profile" caption="The people in your child's life appear on their board automatically." />
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Set up in 15 minutes"
            colour="yellow"
            title="A board that knows your child from day one"
            lead="Tell SENSay about your child once. Their people, favourite foods, drinks, places and activities appear on the right pages, with the right pictures. Upload an EHCP or a therapy report and SENSay's AI suggests what to add; nothing is saved until you check it."
            points={[
              ['Start small and grow.', 'First words shows about 16 core words. Move up a level and new words appear around the ones your child knows. Nothing ever moves.'],
              ['Make every word theirs.', 'Rename it, change what it says, use your own photo, or find the real product picture.'],
              ['Allergies respected everywhere.', 'A food your child must not have never appears as a choice.'],
              ['Adults stay out of the way.', 'Settings sit behind a press-and-hold and a simple sum.'],
            ]}
          >
            <Tablet src="/img/word-editor.jpg" alt="The word editor: changing a word to Vimto with a picture" />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--soft">
        <div className="s-wrap">
          <Split
            flip
            eyebrow="Wherever you are"
            colour="green"
            title="Every message, straight to your phone"
            lead="By email, by text, or both. Each one leads with your child's words, then what SENSay noticed and one practical suggestion. Add grandparents, a teacher or a therapist, each with every message or urgent messages only."
            points={[
              ['Urgent always gets through:', 'pain, feeling ill, help, feeling scared, the toilet.'],
              ['Repeats do not flood you:', 'the same message within 10 minutes is sent once.'],
              ['Reply and they hear you:', 'your reply is read aloud on their board.'],
            ]}
          >
            <Shot src="/img/email-urgent.jpg" alt="An urgent email: William says I have pain in my tummy, with advice to check on him now" maxWidth={520} />
          </Split>
        </div>
      </section>

      <section className="s-section s-section--white">
        <div className="s-wrap">
          <Split
            eyebrow="Patterns"
            title="Walk into every meeting with evidence"
            lead="Words and insights, analytics, the week at a glance and a weekly report you can download or turn into a letter. When school or a therapist asks how your child communicates, you can show them."
            points={[
              ['Link to school with a code.', 'Their targets and progress appear in your app, and you add your views before reviews.'],
              ['Share with a therapist.', 'Choose what they see, and stop sharing at any time.'],
            ]}
          >
            <Browser src="/img/family-words.jpg" alt="Words and insights: William's messages with Was this right? buttons" />
          </Split>
        </div>
      </section>

      <Promises />

      <section className="s-section s-section--soft">
        <div className="s-wrap" style={{ maxWidth: 860 }}>
          <div className="s-center"><h2 className="s-h2">Questions families ask</h2></div>
          <div className="s-faq">
            {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
          <p className="s-caption" style={{ marginTop: '1.5rem' }}>More in the <Link to="/guides" style={{ color: '#0077A8', fontWeight: 800 }}>guide for parents and carers</Link>.</p>
        </div>
      </section>

      <Closing title="Give your child a voice today" lead="The board is free. Set it up in 15 minutes, or try the demo with William's example data first." />
    </>
  )
}
