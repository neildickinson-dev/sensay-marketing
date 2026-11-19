import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './pages.css'

const CONTACT_EMAIL = 'hello@sensay.uk'

const TOPICS = {
  demo: { label: 'Book a demo', heading: 'Book a demo', defaultType: 'Teacher or SENCO' },
  school: { label: 'Founding school interest', heading: 'Register your school\'s interest', defaultType: 'Teacher or SENCO' },
  family: { label: 'Family plan (January 2027)', heading: 'Tell me when the family plan opens', defaultType: 'Parent or carer' },
  connect: { label: 'SENSay Connect free trial', heading: 'Start a SENSay Connect trial', defaultType: 'AAC service or other healthcare professional' },
  general: { label: 'Something else', heading: 'Write to us', defaultType: 'Parent or carer' },
}
const TYPES = [
  'Parent or carer',
  'Teacher or SENCO',
  'Headteacher or school leader',
  'Speech and language therapist',
  'AAC service or other healthcare professional',
  'Local authority',
  'Journalist or content creator',
  'Other',
]

// Used only if the form backend is not available: builds a pre-filled email instead.
function buildMailto({ name, email, organisation, type, topic, message }) {
  const subject = `${TOPICS[topic].label}: ${name}`
  const body = [
    message,
    '',
    '---',
    `Name: ${name}`,
    `Email: ${email}`,
    organisation ? `Organisation: ${organisation}` : '',
    `I am a: ${type}`,
  ].filter(Boolean).join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const [params] = useSearchParams()
  const initialTopic = Object.hasOwn(TOPICS, params.get('topic') || '') ? params.get('topic') : 'general'
  const [status, setStatus] = useState('idle') // idle | sending | sent | fallback | error
  const [form, setForm] = useState({
    name: '', email: '', organisation: '', type: TOPICS[initialTopic].defaultType,
    topic: initialTopic, message: '', website: '',
  })
  useEffect(() => {
    setForm((f) => (f.topic === initialTopic ? f : { ...f, topic: initialTopic, type: TOPICS[initialTopic].defaultType }))
    setStatus('idle')
  }, [initialTopic])
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, page: window.location.pathname + window.location.search }),
      })
      if (r.ok) {
        setStatus('sent')
        return
      }
      if (r.status === 400) {
        setStatus('error')
        return
      }
    } catch {
      // network problem: fall through to the email app
    }
    window.location.href = buildMailto(form)
    setStatus('fallback')
  }

  const labelStyle = {fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:8}

  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Contact</div>
          <h1>{initialTopic === 'general' ? "Let's talk" : TOPICS[initialTopic].heading}</h1>
          <p>Whether you're a parent, a school or a clinician, we'd love to hear from you. Every message goes to the founders. We reply within one working day.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="contact-grid">

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.3rem',color:'var(--dark)',marginBottom:'0.5rem'}}>Write to us</h2>
            <p style={{fontSize:13.5,color:'var(--muted)',marginBottom:'1.25rem',lineHeight:1.6}}>
              Your message goes straight to the founders at {CONTACT_EMAIL}. We reply within one working day.
            </p>
            {status === 'sent' ? (
              <div role="status" style={{background:'#eafaf0',border:'1px solid #b7e4c7',borderRadius:14,padding:'1.25rem 1.5rem',marginBottom:'1.25rem'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.05rem',color:'var(--dark)',marginBottom:6}}>Thank you, your message has been sent</div>
                <p style={{color:'var(--mid)',fontSize:14,margin:0,lineHeight:1.6}}>
                  We will reply to {form.email} within one working day. While you wait, our <Link to="/guides">free guides</Link> are a good place to start.
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit}>
              {status === 'fallback' && (
                <div role="status" style={{background:'#eaf7ff',border:'1px solid #b3e5fc',borderRadius:14,padding:'1.25rem 1.5rem',marginBottom:'1.25rem'}}>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.05rem',color:'var(--dark)',marginBottom:6}}>Check your email app</div>
                  <p style={{color:'var(--mid)',fontSize:14,margin:0,lineHeight:1.6}}>
                    We could not send the form just now, so your email app should have opened with the message ready to send.
                    If nothing opened, email us directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <p role="alert" style={{color:'#b42318',fontSize:14,marginBottom:'1rem'}}>Please check your name, email address and message, then try again.</p>
              )}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-topic">What is it about?</label>
                <select id="contact-topic" className="form-select" value={form.topic} onChange={set('topic')}>
                  {Object.entries(TOPICS).map(([k, t]) => <option key={k} value={k}>{t.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your name</label>
                <input id="contact-name" className="form-input" type="text" autoComplete="name" placeholder="Jane Smith" required value={form.name} onChange={set('name')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email address</label>
                <input id="contact-email" className="form-input" type="email" autoComplete="email" placeholder="jane@example.com" required value={form.email} onChange={set('email')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-type">I am a...</label>
                <select id="contact-type" className="form-select" value={form.type} onChange={set('type')}>
                  {TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-org">School or organisation (optional)</label>
                <input id="contact-org" className="form-input" type="text" autoComplete="organization" placeholder="e.g. Oakfield Primary School" value={form.organisation} onChange={set('organisation')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" className="form-textarea" placeholder="Tell us what you are looking for..." required value={form.message} onChange={set('message')} />
              </div>
              <div aria-hidden="true" style={{position:'absolute',left:'-10000px',width:1,height:1,overflow:'hidden'}}>
                <label htmlFor="contact-website">Leave this empty</label>
                <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              <p style={{fontSize:12,color:'var(--muted)',marginTop:'0.75rem',textAlign:'center'}}>
                We use your details only to reply to you. Please do not include details about a child. See our <Link to="/privacy">privacy policy</Link>.
              </p>
            </form>
            )}
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.3rem',color:'var(--dark)',marginBottom:'0.5rem'}}>Email us directly</h2>
            <p style={{fontSize:13.5,color:'var(--muted)',marginBottom:'1rem',lineHeight:1.6}}>Every message goes to the founders. We reply within one working day.</p>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-item__label">All enquiries</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-info-item__value">{CONTACT_EMAIL}</a>
                <div className="contact-info-item__desc">Families, schools, clinicians, press, and questions about SENSay or getting started</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop:'2.5rem',background:'var(--light)',border:'1px solid #e2e8f0',borderRadius:16,padding:'2rem',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'2rem'}}>
          <div>
            <div style={labelStyle}>Company details</div>
            <div style={{fontSize:14,color:'var(--mid)',lineHeight:1.9}}>
              <div style={{fontWeight:600,color:'var(--dark)'}}>SENSay Ltd</div>
              <div><span style={{color:'var(--muted)'}}>Registered in: </span>England and Wales</div>
              {/* NEIL TO CONFIRM: add the company number and a registered office service
                  address (not a home address) once confirmed. */}
              <div><span style={{color:'var(--muted)'}}>Email: </span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            </div>
          </div>
          <div>
            <div style={labelStyle}>Founding schools 2026-27</div>
            <p style={{fontSize:14,color:'var(--mid)',lineHeight:1.7,margin:'0 0 12px'}}>We are taking on a small group of founding schools for 2026-27.</p>
            <Link to="/contact?topic=school" className="btn btn--primary" style={{fontSize:13,padding:'10px 20px'}}>Register interest</Link>
          </div>
          <div>
            <div style={labelStyle}>Family plan</div>
            <p style={{fontSize:14,color:'var(--mid)',lineHeight:1.7,margin:'0 0 12px'}}>Coming in January 2027 on iPhone, iPad and Android.</p>
            <Link to="/contact?topic=family" className="btn btn--outline" style={{fontSize:13,padding:'10px 20px'}}>Register interest</Link>
          </div>
        </div>

      </div>
    </>
  )
}
