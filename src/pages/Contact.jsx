import React, { useState } from 'react'
import './pages.css'

const CONTACT_EMAIL = 'hello@sensay.uk'

// There is no form backend. This form builds a pre-filled email and opens the visitor's
// own email app; nothing is sent until they press send there. Do not show a "sent"
// message unless a real backend has accepted the message.
function buildMailto({ name, email, type, message }) {
  const subject = `Website enquiry (${type})`
  const body = [
    message,
    '',
    '---',
    `Name: ${name}`,
    `Email: ${email}`,
    `I am a: ${type}`,
  ].join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const [opened, setOpened] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', type:'Parent or carer', message:'' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailto(form)
    setOpened(true)
  }

  const labelStyle = {fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:8}

  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Contact</div>
          <h1>Let's talk</h1>
          <p>Whether you're a parent, a school or a clinician, we'd love to hear from you. Every message goes to the founders. We reply within one working day.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="contact-grid">

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.3rem',color:'var(--dark)',marginBottom:'0.5rem'}}>Write to us</h2>
            <p style={{fontSize:13.5,color:'var(--muted)',marginBottom:'1.25rem',lineHeight:1.6}}>
              This form opens your own email app with your message filled in, addressed to {CONTACT_EMAIL}.
              It does not send anything by itself: your message is only sent when you press send in your email app.
            </p>
            {opened && (
              <div role="status" style={{background:'#eaf7ff',border:'1px solid #b3e5fc',borderRadius:14,padding:'1.25rem 1.5rem',marginBottom:'1.25rem'}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.05rem',color:'var(--dark)',marginBottom:6}}>Check your email app</div>
                <p style={{color:'var(--mid)',fontSize:14,margin:0,lineHeight:1.6}}>
                  Your email app should have opened with the message ready to send. It has not been sent yet.
                  If nothing opened, email us directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your name</label>
                <input id="contact-name" className="form-input" type="text" placeholder="Jane Smith" required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email address</label>
                <input id="contact-email" className="form-input" type="email" placeholder="jane@example.com" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-type">I am a...</label>
                <select id="contact-type" className="form-select" value={form.type} onChange={e => setForm(f => ({...f, type: e.target.value}))}>
                  <option>Parent or carer</option>
                  <option>Teacher or SENCO</option>
                  <option>Healthcare professional</option>
                  <option>Journalist or content creator</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" className="form-textarea" placeholder="Tell us what you are looking for..." required value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} />
              </div>
              <button type="submit" className="form-submit">Open in my email app</button>
              <p style={{fontSize:12,color:'var(--muted)',marginTop:'0.75rem',textAlign:'center'}}>We reply within one working day.</p>
            </form>
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
            <a href="mailto:hello@sensay.uk?subject=Founding%20school%20interest" className="btn btn--primary" style={{fontSize:13,padding:'10px 20px'}}>Register interest</a>
          </div>
          <div>
            <div style={labelStyle}>Family plan</div>
            <p style={{fontSize:14,color:'var(--mid)',lineHeight:1.7,margin:'0 0 12px'}}>Coming in spring 2027 on iPhone, iPad and Android.</p>
            <a href="mailto:hello@sensay.uk?subject=Family%20plan%20interest" className="btn btn--outline" style={{fontSize:13,padding:'10px 20px'}}>Register interest</a>
          </div>
        </div>

      </div>
    </>
  )
}
