import React from 'react'
import './pages.css'

export default function Terms() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Legal</div>
          <h1>Terms of Service</h1>
          <p>Last updated: April 2026. Please read these terms before using SENSay.</p>
        </div>
      </div>

      <div className="page-body prose">

        <div className="placeholder-block">
          <div className="placeholder-block__label">Legal review needed before going live</div>
          <p>Full terms of service should be drafted and reviewed by a qualified solicitor. The sections below are placeholders outlining the key areas to be covered.</p>
        </div>

        <h2 style={{marginTop:'2rem'}}>1. Acceptance of terms</h2>
        <p>
          By creating an account or using the SENSay platform, you agree to these Terms of Service
          and our Privacy Policy. If you are setting up an account on behalf of a school or healthcare
          organisation, you confirm you have authority to bind that organisation.
        </p>

        <h2>2. The service</h2>
        <p>
          SENSay provides a configurable communication platform for non-verbal and speech-impaired
          children, together with AI-powered analytics tools for parents, educators and healthcare
          professionals. The service is provided on a subscription basis across three tiers: Parent,
          Education and Health.
        </p>

        <h2>3. Subscriptions and payment</h2>
        <ul>
          <li>Subscriptions are billed monthly (Parent) or annually (Education, Health)</li>
          <li>A free 30-day trial is available for all plans — no payment required to start</li>
          <li>You may cancel at any time — cancellation takes effect at the end of the billing period</li>
          <li>Refunds are considered on a case-by-case basis — contact hello@sensay.uk</li>
          <li>Payments are processed by Stripe — SENSay does not store payment card details</li>
        </ul>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for any purpose other than supporting the communication of a named child</li>
          <li>Share account credentials with unauthorised parties</li>
          <li>Attempt to reverse engineer, copy or redistribute any part of the platform</li>
          <li>Upload content that is unlawful, harmful or inappropriate</li>
          <li>Use the platform in a way that could harm a child's wellbeing</li>
        </ul>

        <h2>5. Data and privacy</h2>
        <p>
          Your use of data within SENSay is governed by our{' '}
          <a href="/privacy">Privacy Policy</a>, which forms part of these terms.
          You are responsible for ensuring that any data you enter about a child has been collected
          lawfully and that appropriate consents are in place.
        </p>

        <h2>6. AI-generated insights</h2>
        <p>
          The AI analytics features of SENSay are designed to assist — not replace — professional
          judgement. AI-generated insights should be considered alongside other information and
          professional assessment. SENSay accepts no liability for decisions made solely on the basis
          of AI-generated reports.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The SENSay platform, brand and underlying technology are the intellectual property of
          SENSay Ltd. Communication board configurations, custom symbols and data you create remain
          your property and can be exported at any time.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          SENSay is provided in good faith as a communication and analytics tool. We do not accept
          liability for any clinical decisions made on the basis of platform data. The platform is
          not a medical device and should not be used as a substitute for professional healthcare advice.
        </p>

        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. We will notify you by email of any material
          changes at least 30 days before they take effect.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any questions about these terms:<br />
          <a href="mailto:hello@sensay.uk">hello@sensay.uk</a>
        </p>

      </div>
    </>
  )
}
