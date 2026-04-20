import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

const SECTION = ({id, title, children}) => (
  <div id={id} style={{marginBottom:'2rem'}}>
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.25rem',color:'var(--dark)',marginBottom:'0.75rem',paddingTop:'0.5rem'}}>{title}</h2>
    {children}
  </div>
)

const TOC = [
  ['who-we-are',        '1. Who we are'],
  ['what-we-collect',   '2. What data we collect'],
  ['lawful-basis',      '3. Lawful basis for processing'],
  ['how-we-use',        '4. How we use your data'],
  ['childrens-data',    '5. Children\'s data — special provisions'],
  ['data-sharing',      '6. Data sharing and processors'],
  ['international',     '7. International transfers'],
  ['retention',         '8. Data retention'],
  ['your-rights',       '9. Your rights under UK GDPR'],
  ['cookies',           '10. Cookies and tracking'],
  ['security',          '11. Security'],
  ['changes',           '12. Changes to this policy'],
  ['contact',           '13. Contact and complaints'],
]

export default function Privacy() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Legal</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: April 2026. SENSay Ltd is committed to protecting your privacy — and the privacy of the children who use our platform.</p>
        </div>
      </div>

      <div className="page-body">

        {/* Children's data callout */}
        <div style={{background:'#eaf7ff',border:'2px solid var(--blue)',borderRadius:14,padding:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1rem',color:'var(--blue)',marginBottom:8}}>
            Our commitment to children's data
          </div>
          <p style={{fontSize:14,color:'var(--mid)',lineHeight:1.75,margin:0}}>
            SENSay is designed for use with children who have special educational needs. We apply the highest
            standards of data protection to all child data — going beyond standard UK GDPR requirements to
            comply with the <strong>UK Children's Code (Age Appropriate Design Code)</strong>. Child data is
            never used for advertising, never sold to third parties, and never used to train AI models without
            explicit written consent. All child data is stored under a pseudonymous profile — the platform
            does not require a child's full name.
          </p>
        </div>

        {/* Table of contents */}
        <div style={{background:'var(--light)',border:'1px solid #e2e8f0',borderRadius:12,padding:'1.5rem',marginBottom:'2.5rem'}}>
          <div style={{fontSize:12,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:'0.75rem'}}>Contents</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6px 2rem'}}>
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`} style={{fontSize:13.5,color:'var(--blue)',fontWeight:600,textDecoration:'none'}}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="prose">

          <SECTION id="who-we-are" title="1. Who we are">
            <p>SENSay Ltd (<strong>"SENSay"</strong>, <strong>"we"</strong>, <strong>"us"</strong>) is the data controller for personal data collected through sensay.uk and the SENSay application.</p>
            <p><strong>Registered office:</strong> Greenfield House, Halifax Road, Liversedge, WF15 8HL, England</p>
            <p><strong>Data protection contact:</strong> <a href="mailto:info@sensay.uk">info@sensay.uk</a></p>
            <p>We are registered with the Information Commissioner's Office (ICO). Our ICO registration number will be published here once confirmed.</p>
          </SECTION>

          <SECTION id="what-we-collect" title="2. What data we collect">
            <p>We collect the following categories of personal data:</p>
            <ul>
              <li><strong>Account data:</strong> name, email address, role (parent, teacher, healthcare professional), password hash</li>
              <li><strong>Child profile data:</strong> first name or pseudonym/alias, age range, SEN category (optional), communication board configuration and symbol preferences</li>
              <li><strong>Communication data:</strong> timestamped symbol selections, intensity ratings, session duration, caregiver context logs (activity, environment, people present)</li>
              <li><strong>Usage data:</strong> feature interactions, device type, browser type, app version (anonymised and aggregated)</li>
              <li><strong>Payment data:</strong> processed by Stripe — we do not store full card numbers or bank details</li>
              <li><strong>Support data:</strong> messages sent to our support team, including any information you choose to include</li>
            </ul>
            <p>We do <strong>not</strong> collect biometric data, location data, or any data from a child's device directly. All child data is entered by an authorised adult.</p>
          </SECTION>

          <SECTION id="lawful-basis" title="3. Lawful basis for processing">
            <p>Under UK GDPR Article 6, we rely on the following lawful bases:</p>
            <ul>
              <li><strong>Contract (Art. 6(1)(b)):</strong> processing necessary to provide the SENSay service under your subscription agreement</li>
              <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> improving the platform, fraud prevention, and security — subject to a balancing test in your favour</li>
              <li><strong>Legal obligation (Art. 6(1)(c)):</strong> retaining financial records as required by UK law</li>
              <li><strong>Consent (Art. 6(1)(a)):</strong> marketing communications and optional analytics features — you may withdraw consent at any time</li>
            </ul>
            <p>For <strong>special category data</strong> (including health-related SEN information), we rely on:</p>
            <ul>
              <li><strong>Explicit consent (Art. 9(2)(a)):</strong> obtained at account setup for any health or SEN category data entered</li>
              <li><strong>Substantial public interest (Art. 9(2)(g)) / Schedule 1 DPA 2018:</strong> where processing supports the educational or healthcare needs of a child with a disability or SEN</li>
            </ul>
          </SECTION>

          <SECTION id="how-we-use" title="4. How we use your data">
            <ul>
              <li>To provide, operate and improve the SENSay communication platform</li>
              <li>To generate AI-powered insights and reports for authorised users of your account</li>
              <li>To send transactional communications (account confirmation, password reset, subscription notices)</li>
              <li>To send service updates — you may opt out of non-essential communications at any time</li>
              <li>To process payments and manage your subscription</li>
              <li>To respond to support requests and enquiries</li>
              <li>To meet legal and regulatory obligations</li>
            </ul>
            <p>We <strong>never</strong> use your data or your child's data for advertising, behavioural profiling for third parties, or any purpose unrelated to delivering and improving the SENSay service.</p>
          </SECTION>

          <SECTION id="childrens-data" title="5. Children's data — special provisions">
            <p>SENSay operates under the <strong>UK Children's Code</strong> (ICO Age Appropriate Design Code). We apply the following additional protections for all child-related data:</p>
            <ul>
              <li>Child profiles use a first name or pseudonym — a child's full name, date of birth, or NHS number are never required</li>
              <li>Child communication data is stored separately from adult account data and is only accessible to authorised users you have approved</li>
              <li>Child data is <strong>never</strong> used for advertising, behavioural targeting, or profiling for any purpose other than supporting that specific child</li>
              <li>AI analysis of child communication data is performed solely to generate insights for that child's benefit — not for product improvement without consent</li>
              <li>We do not use nudge techniques, push notifications, or engagement-maximising design in the child-facing interface</li>
              <li>Child data is stored on UK/EU servers only and is not transferred to countries without adequate data protection</li>
              <li>Parents and authorised carers can request full deletion of a child's data at any time by contacting <a href="mailto:info@sensay.uk">info@sensay.uk</a></li>
            </ul>
          </SECTION>

          <SECTION id="data-sharing" title="6. Data sharing and processors">
            <p>We share data only with the following categories of third party, and only as strictly necessary to deliver the service. All processors are bound by data processing agreements (DPAs) under UK GDPR Article 28:</p>
            <ul>
              <li><strong>Supabase Inc.:</strong> database hosting, authentication and storage — EU/UK servers. <a href="https://supabase.com/privacy" target="_blank" rel="noopener">Privacy policy</a></li>
              <li><strong>Anthropic PBC:</strong> AI processing for communication pattern analysis. Data submitted to Anthropic's API is not retained for model training under our enterprise agreement. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener">Privacy policy</a></li>
              <li><strong>Stripe Inc.:</strong> payment processing. Stripe is PCI-DSS compliant. We share only the minimum data required for payment. <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener">Privacy policy</a></li>
              <li><strong>Vercel Inc.:</strong> website and web app hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">Privacy policy</a></li>
            </ul>
            <p>We do <strong>not</strong> sell personal data. We do not share data with advertisers. We do not share data with government bodies unless legally required to do so, in which case we will notify you where permitted by law.</p>
          </SECTION>

          <SECTION id="international" title="7. International transfers">
            <p>
              Some of our processors (Anthropic, Stripe, Vercel) are based in the United States. Where personal
              data is transferred outside the UK, we ensure adequate safeguards are in place through either:
            </p>
            <ul>
              <li>UK adequacy regulations</li>
              <li>Standard Contractual Clauses (SCCs) approved by the ICO</li>
              <li>UK International Data Transfer Agreements (IDTAs)</li>
            </ul>
            <p>Child communication data is stored in EU/UK data centres only and is not transferred to the United States or any country without an adequacy decision.</p>
          </SECTION>

          <SECTION id="retention" title="8. Data retention">
            <ul>
              <li><strong>Account data:</strong> retained for the duration of your subscription plus 90 days, then deleted</li>
              <li><strong>Child communication data:</strong> retained for up to 3 years to support longitudinal analysis, unless you request earlier deletion</li>
              <li><strong>Financial records:</strong> retained for 7 years as required by HMRC regulations</li>
              <li><strong>Support correspondence:</strong> retained for 2 years from the date of last contact</li>
            </ul>
            <p>You can request deletion of all data at any time — see Section 9 below. Financial records required by law cannot be deleted ahead of their legal retention period.</p>
          </SECTION>

          <SECTION id="your-rights" title="9. Your rights under UK GDPR">
            <p>You have the following rights. To exercise any of them, contact <a href="mailto:info@sensay.uk">info@sensay.uk</a>. We will respond within one calendar month.</p>
            <ul>
              <li><strong>Right of access (Art. 15):</strong> request a copy of the personal data we hold about you</li>
              <li><strong>Right to rectification (Art. 16):</strong> correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure (Art. 17):</strong> request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to restrict processing (Art. 18):</strong> ask us to pause processing in certain circumstances</li>
              <li><strong>Right to data portability (Art. 20):</strong> receive your data in a structured, machine-readable format</li>
              <li><strong>Right to object (Art. 21):</strong> object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time without affecting prior processing</li>
            </ul>
            <p>If you believe we have not handled your data correctly, you have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a> or by calling 0303 123 1113.</p>
          </SECTION>

          <SECTION id="cookies" title="10. Cookies and tracking">
            <p>The SENSay website uses only the following cookies:</p>
            <ul>
              <li><strong>Essential cookies:</strong> required for the site and app to function (session management, authentication). These cannot be disabled.</li>
              <li><strong>Preference cookies:</strong> remember your settings and preferences. You may disable these without affecting functionality.</li>
            </ul>
            <p>We do <strong>not</strong> use advertising cookies, third-party tracking pixels, or social media tracking. We do not use Google Analytics or similar third-party analytics services that involve personal data transfer.</p>
            <p>The SENSay app uses local device storage (not cookies) for offline functionality — this data stays on your device and is not transmitted to us unless you are connected.</p>
          </SECTION>

          <SECTION id="security" title="11. Security">
            <p>We implement appropriate technical and organisational measures to protect personal data, including:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Row-level security on all database tables — users can only access data they are authorised to see</li>
              <li>Magic link authentication — no passwords stored in plaintext</li>
              <li>Regular security reviews and dependency updates</li>
              <li>Access controls limiting staff access to personal data to those with a business need</li>
            </ul>
            <p>In the event of a data breach that is likely to result in risk to your rights and freedoms, we will notify you and the ICO within 72 hours of becoming aware, as required by UK GDPR Article 33.</p>
          </SECTION>

          <SECTION id="changes" title="12. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you by email of any material
              changes at least 30 days before they take effect, and will always maintain a dated version history.
              Your continued use of SENSay after changes take effect constitutes acceptance of the updated policy.
            </p>
          </SECTION>

          <SECTION id="contact" title="13. Contact and complaints">
            <p>For any privacy queries, data subject requests, or to report a concern:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@sensay.uk">info@sensay.uk</a></li>
              <li><strong>Post:</strong> SENSay Ltd, Greenfield House, Halifax Road, Liversedge, WF15 8HL</li>
            </ul>
            <p>We take all privacy concerns seriously and will acknowledge your contact within 2 working days.</p>
            <p>You also have the right to complain directly to the ICO at <a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener">ico.org.uk/make-a-complaint</a>.</p>
          </SECTION>

          <hr />
          <p style={{fontSize:13,color:'var(--muted)'}}>
            <strong>Note:</strong> This policy should be reviewed by a qualified solicitor with data protection expertise
            before going live, particularly regarding the ICO registration number, DPA references with processors, and
            the Schedule 1 DPA 2018 conditions cited for special category data. Contact <a href="mailto:info@sensay.uk">info@sensay.uk</a> with any queries.
          </p>

        </div>
      </div>
    </>
  )
}
