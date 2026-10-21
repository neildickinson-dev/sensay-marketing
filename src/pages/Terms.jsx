import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function Terms() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Legal</div>
          <h1>Terms of Service</h1>
          {/* Solicitor review recommended before paid plans go live. */}
          <p>Last updated: 16 October 2026. Please read these terms before using SENSay.</p>
        </div>
      </div>

      <div className="page-body prose">

        {/* Internal note: these terms still need review by a qualified solicitor before launch. */}
        <h2 style={{marginTop:0}}>1. Acceptance of terms</h2>
        <p>
          By creating an account or using SENSay, you agree to these Terms of Service
          and our Privacy Policy. If you are setting up an account on behalf of a school or healthcare
          organisation, you confirm you have authority to bind that organisation.
        </p>

        <h2>2. The service</h2>
        <p>
          SENSay provides a communication app for pre-verbal and non-verbal children, together with
          AI pattern reports for parents, educators and healthcare professionals. Paid plans are: the
          Family plan (monthly or annual), the School licence (annual) and the Clinician licence
          (annual). A child's ability to communicate (the board, the voice and sending a message) is
          never locked behind payment.
        </p>

        <h2>3. Subscriptions and payment</h2>
        <ul>
          <li>The Family plan is billed monthly or annually. School and Clinician licences are invoiced annually in advance</li>
          <li>The Family plan includes a 14-day free trial</li>
          <li>School and Clinician prices are shown excluding VAT. Family plan prices include VAT</li>
          <li>You may cancel at any time. Cancellation takes effect at the end of the billing period</li>
          <li>Refunds are considered on a case-by-case basis. Contact hello@sensay.uk</li>
          <li>School and Clinician licences are invoiced and paid by bank transfer</li>
          <li>Family plan subscriptions bought in the app are billed by Apple (App Store) or Google (Google Play) under their terms, and are managed or cancelled in your App Store or Google Play account</li>
          <li>SENSay never sees or stores payment card details</li>
        </ul>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use SENSay for any purpose other than supporting the communication of a named child</li>
          <li>Share account credentials with unauthorised parties</li>
          <li>Attempt to reverse engineer, copy or redistribute any part of the service</li>
          <li>Upload content that is unlawful, harmful or inappropriate</li>
          <li>Use the service in a way that could harm a child's wellbeing</li>
        </ul>

        <h2>5. Data and privacy</h2>
        <p>
          Your use of data within SENSay is governed by our{' '}
          <Link to="/privacy">Privacy Policy</Link>, which forms part of these terms.
          You are responsible for ensuring that any data you enter about a child has been collected
          lawfully and that appropriate consents are in place.
        </p>

        <h2>6. AI-generated insights</h2>
        <p>
          The AI analytics features of SENSay are designed to assist, not replace, professional
          judgement. AI-generated insights should be considered alongside other information and
          professional assessment. SENSay accepts no liability for decisions made solely on the basis
          of AI-generated reports.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The SENSay app, brand and underlying technology are the intellectual property of
          SENSay Ltd. Communication board configurations, custom symbols and data you create remain
          your property and can be exported at any time.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          SENSay is provided in good faith as a communication and analytics tool. We do not accept
          liability for any clinical decisions made on the basis of data in the app. The service is
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
