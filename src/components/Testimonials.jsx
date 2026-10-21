import React from 'react'
import { FOUNDING_SCHOOL_MAILTO, FAMILY_INTEREST_MAILTO } from './Pricing.jsx'
import './Testimonials.css'

// No testimonials until we have named pilot participants who have given written permission.
export default function Testimonials() {
  return (
    <section className="section section--white" id="for-schools">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Why we built it</div>
          <h2>Built by a family who needed it</h2>
          <p>
            SENSay was designed by the parents of a non-verbal child, with input from teachers and
            therapists. We are taking on a small group of founding schools for 2026-27, and the
            family plan arrives in January 2027.
          </p>
        </div>

        <div className="testimonials-cta">
          <div className="testimonials-cta__text">
            <h3>Ready to give your child a voice that's truly heard?</h3>
          </div>
          <div className="testimonials-cta__btns">
            <a href={FOUNDING_SCHOOL_MAILTO} className="btn btn--primary">
              Become a founding school →
            </a>
            <a href={FAMILY_INTEREST_MAILTO} className="btn btn--outline">
              Register interest in the family plan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
