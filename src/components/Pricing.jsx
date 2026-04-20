import React from 'react'
import './Pricing.css'

const PLANS = [
  {
    name: 'Parent',
    color: '#00AEEF',
    price: '£9.99',
    period: 'per month · 1 child profile',
    features: [
      'Configurable communication board',
      'Mulberry symbol library (5,500+ symbols)',
      'Custom photo & video symbols',
      'Daily activity timeline',
      'AI weekly insight reports',
      'Home–school data sharing',
    ],
    cta: 'Start free trial',
    href: 'https://app.sensay.uk',
    featured: false,
  },
  {
    name: 'Education',
    color: '#00A651',
    price: '£399',
    period: 'per year · whole classroom',
    features: [
      'Everything in Parent plan',
      'Classroom dashboard (SENCO access)',
      'Multi-child management',
      'EHCP evidence export',
      'AI trigger & pattern analysis',
      'Priority support',
    ],
    cta: 'Get classroom licence',
    href: 'mailto:schools@sensay.uk',
    featured: true,
  },
  {
    name: 'Health',
    color: '#ED1C24',
    price: '£799',
    period: 'per year · specialist licence',
    features: [
      'Everything in Education plan',
      'Clinical longitudinal reports',
      'Development trajectory tracking',
      'False-positive flagging engine',
      'API / EHR integration',
      'Dedicated account manager',
    ],
    cta: 'Contact us',
    href: 'mailto:health@sensay.uk',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section section--light" id="pricing">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Simple pricing</div>
          <h2>Plans for every environment</h2>
          <p>Start free. Scale as your needs grow. Every plan includes the core communication board and AI analytics.</p>
        </div>

        <div className="pricing-grid">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              style={plan.featured ? { borderColor: plan.color } : {}}
            >
              {plan.featured && (
                <div className="pricing-badge" style={{background: plan.color}}>Most popular</div>
              )}
              <div className="pricing-tier" style={{color: plan.color}}>{plan.name} plan</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-period">{plan.period}</div>
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

        <p className="pricing-note">
          All plans include a free 30-day trial. No setup fee. Cancel anytime.<br />
          Pilots available for Q3 2026 — <a href="mailto:hello@sensay.uk">get in touch</a> to register your interest.
        </p>
      </div>
    </section>
  )
}
