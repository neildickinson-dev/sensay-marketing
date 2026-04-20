import React from 'react'
import './Testimonials.css'

const QUOTES = [
  {
    quote: "For the first time, we could see exactly what was driving his anxiety — and when. That changed everything about how we support him at school.",
    name: "Sarah M.",
    role: "Parent of 9-year-old with autism",
    color: "#00AEEF",
    initials: "SM",
  },
  {
    quote: "The EHCP evidence it generates would have taken me weeks to compile manually. Now it's just there, structured and dated, every review cycle.",
    name: "Rachel T.",
    role: "SENCO, primary school",
    color: "#00A651",
    initials: "RT",
  },
  {
    quote: "I can finally see the full picture — what happens at home feeds into what I see clinically. The longitudinal data is genuinely useful.",
    name: "Dr. James K.",
    role: "Paediatric speech therapist",
    color: "#ED1C24",
    initials: "JK",
  },
]

export default function Testimonials() {
  return (
    <section className="section section--white" id="for-schools">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">What people say</div>
          <h2>Trusted by families, schools and clinicians</h2>
          <p>SENSay is designed by parents of non-verbal children, for the whole community that supports them.</p>
        </div>

        <div className="testimonials-grid">
          {QUOTES.map(q => (
            <div key={q.name} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;{q.quote}&rdquo;</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background:`${q.color}22`, color: q.color}}>
                  {q.initials}
                </div>
                <div>
                  <div className="testimonial-name">{q.name}</div>
                  <div className="testimonial-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <div className="testimonials-cta__text">
            <h3>Ready to give your child a voice that's truly heard?</h3>
            {/* Brief didn't specify a sub-line — left blank. Re-add if needed. */}
          </div>
          <div className="testimonials-cta__btns">
            <a
              href="mailto:hello@sensay.uk?subject=Pilot%20interest"
              className="btn btn--primary"
            >
              Book a pilot conversation →
            </a>
            <a
              href="mailto:parents@sensay.uk?subject=Waiting%20list"
              className="btn btn--outline"
            >
              Join the parent waiting list
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
