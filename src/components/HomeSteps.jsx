import React from 'react'
import './HomeSteps.css'

/* Brief replaces the original AI-feature section with a simple three-step "How it works".
   Named HomeSteps.jsx (not HowItWorks.jsx) so the existing 4-tab user-groups component
   keeps its filename. The section anchor uses #how-it-works so Nav's existing link works. */

const STEPS = [
  {
    n: '1',
    color: 'blue',
    title: "Build your child's communication tree",
    body: 'Upload photos and short videos as tiles. Organise them into categories that match how your child thinks. Start small (4 tiles) and grow as communication develops.',
  },
  {
    n: '2',
    color: 'green',
    title: 'Children communicate, adults respond',
    body: "When your child taps a tile, SENSay suggests responses you can offer back — turning one-way signalling into genuine two-way conversation.",
  },
  {
    n: '3',
    color: 'yellow',
    title: 'Patterns emerge over time',
    body: "As communications accumulate, SENSay's AI surfaces patterns invisible in the moment: what triggers distress, when engagement peaks, which contexts widen or narrow your child's voice. Summary documents (weekly, termly, annually) make the patterns sharable.",
  },
]

export default function HomeSteps() {
  return (
    <section className="section section--white" id="how-it-works">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">How it works</div>
          <h2>Three steps, from first tile to shared insight</h2>
          {/* Flag: brief didn't specify a section headline or subhead — added a placeholder
              headline. Swap when Neil reviews. */}
        </div>

        <div className="home-steps">
          {STEPS.map(s => (
            <div key={s.n} className={`home-step home-step--${s.color}`}>
              <div className="home-step__num">{s.n}</div>
              <h3 className="home-step__title">{s.title}</h3>
              <p className="home-step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
