import React from 'react'
import './Pricing.css'

export const FOUNDING_SCHOOL_MAILTO =
  'mailto:hello@sensay.uk?subject=Founding%20school%20interest'
export const FAMILY_INTEREST_MAILTO =
  'mailto:hello@sensay.uk?subject=Family%20plan%20interest'
const CLINICIAN_MAILTO = 'mailto:hello@sensay.uk?subject=Clinician%20plan'

// School licence bands. Annual, invoiced annually in advance, prices exclude VAT.
export const SCHOOL_BANDS = [
  { name: 'Starter',        price: '£895',   pupils: 'Up to 5 pupils' },
  { name: 'Standard',       price: '£1,495', pupils: 'Up to 15 pupils' },
  { name: 'Large',          price: '£2,295', pupils: 'Up to 30 pupils' },
  { name: 'Special school', price: '£4,495', pupils: 'Up to 80 pupils, then £45 per extra pupil' },
]

const PLANS = [
  {
    name: 'Families',
    color: '#00AEEF',
    price: '£7.99',
    period: 'a month, or £79 a year, including VAT. 14-day free trial.',
    availability: 'Available spring 2027 on iPhone, iPad and Android',
    features: [
      'AI pattern insights',
      'Weekly reports',
      'Sharing with school and other adults',
      'Caveats on likely play or repeat taps in reports',
    ],
    cta: 'Register interest',
    href: FAMILY_INTEREST_MAILTO,
    featured: false,
  },
  {
    name: 'Schools',
    color: '#00A651',
    price: 'From £895',
    period: 'a year + VAT, per school. Annual licence, invoiced annually in advance.',
    features: [
      'A communication board for every pupil',
      'Teacher observations logged during normal AAC activities',
      'EHCP Section B drafts, with every claim cited to its source',
      'School dashboard for SENCOs',
      'Home and school sharing, with family consent',
      'Long-term communication trends',
    ],
    cta: 'Become a founding school',
    href: FOUNDING_SCHOOL_MAILTO,
    featured: true,
  },
  {
    name: 'Clinicians',
    color: '#ED1C24',
    price: '£249',
    period: "a year + VAT, for an individual clinician's caseload (caseload limits apply).",
    features: [
      'Communication trends across home and school, shared by families with their consent',
      'Summaries to share ahead of appointments',
      'Caveats on likely play or repeat taps in reports',
    ],
    cta: 'Contact us',
    href: CLINICIAN_MAILTO,
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section section--light" id="pricing">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2>Plans for home, school and clinic</h2>
          {/* NEIL TO CONFIRM */}
          <p>
            A child's ability to communicate (the board, the voice, sending a message) is never
            locked behind payment. The family plan adds the adult side: AI pattern insights, weekly
            reports, and sharing with school and other adults.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              style={plan.featured ? { borderColor: plan.color } : {}}
            >
              <div className="pricing-tier" style={{color: plan.color}}>{plan.name}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-period">
                {plan.period}
                {plan.availability && (
                  <>
                    <br />
                    <strong>{plan.availability}</strong>
                  </>
                )}
              </div>
              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="pricing-dot" style={{background: plan.color}} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`btn pricing-cta${plan.featured ? ' btn--primary' : ' btn--outline'}`}
                style={plan.featured ? {background: plan.color, boxShadow: `0 4px 20px ${plan.color}55`} : {}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-bands">
          <h3 className="pricing-bands__title">School licences</h3>
          <table className="pricing-bands__table">
            <thead>
              <tr>
                <th scope="col">Licence</th>
                <th scope="col">Pupils</th>
                <th scope="col">Price a year (+ VAT)</th>
              </tr>
            </thead>
            <tbody>
              {SCHOOL_BANDS.map(b => (
                <tr key={b.name}>
                  <th scope="row">{b.name}</th>
                  <td>{b.pupils}</td>
                  <td>{b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pricing-bands__note">
            Maintained schools, academies and most independent and non-maintained special schools
            can reclaim the VAT.
          </p>
        </div>

        <div className="pricing-note">
          <p>
            We are taking on a small group of founding schools for 2026-27.{' '}
            {/* NEIL TO CONFIRM */}
            Founding schools get a direct line into the product team.{' '}
            <a href={FOUNDING_SCHOOL_MAILTO}>Email hello@sensay.uk</a> to register your interest.
          </p>
        </div>
      </div>
    </section>
  )
}
