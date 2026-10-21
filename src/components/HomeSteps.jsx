import React from 'react'
import './HomeSteps.css'

/* Three-step "How it works". The section anchor is #how-it-works, used by the nav. */

const STEPS = [
  {
    n: '1',
    color: 'blue',
    title: "Build your child's communication board",
    body: 'Upload photos and short videos as tiles. Organise them into categories that match how your child thinks. Start small (4 tiles) and grow as communication develops.',
  },
  {
    n: '2',
    color: 'green',
    title: 'Children communicate, adults respond',
    body: "When your child taps a tile, the message can be spoken aloud and sent to the adults around them, who can reply. One-way signalling becomes two-way conversation.",
  },
  {
    n: '3',
    color: 'yellow',
    title: 'Patterns emerge over time',
    body: "As communications accumulate, SENSay's AI surfaces patterns invisible in the moment: what triggers distress, when engagement peaks, which contexts widen or narrow your child's voice. Weekly summaries make the patterns easy to share.",
  },
]

export default function HomeSteps() {
  return (
    <section className="section section--white" id="how-it-works">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">How it works</div>
          <h2>Three steps, from first tile to shared insight</h2>
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
