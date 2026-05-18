import React, { useState } from 'react'
import './pages.css'

const CONTACTS = [
  { label: 'General enquiries',  value: 'hello@sensay.uk',        desc: 'General questions about SENSay, the platform or getting started' },
  { label: 'Sales',              value: 'hello@sensay.uk',       desc: 'Licensing, plans and pricing enquiries' },
  { label: 'Parents & carers',   value: 'hello@sensay.uk',     desc: 'Support and questions for families using SENSay at home' },
  { label: 'Technical support',  value: 'hello@sensay.uk',     desc: 'Help with the app, technical issues or account problems' },
  { label: 'Healthcare',         value: 'hello@sensay.uk',  desc: 'Clinical enquiries, NHS integration and specialist licences' },
  { label: 'Education',          value: 'hello@sensay.uk',   desc: 'School licences, SENCO enquiries and the pilot programme' },
  { label: 'Accounts & billing', value: 'hello@sensay.uk',    desc: 'Invoices, billing queries and subscription management' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', type:'Parent or carer', message:'' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Contact</div>
          <h1>Let's talk</h1>
          <p>Whether you're a parent, a school, a clinician or an investor — we'd love to hear from you. Use the right address below and you'll reach the right person directly.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="contact-grid">

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.3rem',color:'var(--dark)',marginBottom:'1.25rem'}}>Send us a message</h2>
            {sent ? (
              <div style={{background:'#edfff4',border:'1px solid #b2dfdb',borderRadius:14,padding:'2rem',textAlign:'center'}}>
                <div style={{fontSize:48,marginBottom:12}}>✅</div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.2rem',color:'var(--dark)',marginBottom:8}}>Message sent!</div>
                <p style={{color:'var(--muted)',fontSize:14,margin:0}}>Thanks for getting in touch. We will get back to you within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your name</label>
                  <input className="form-input" type="text" placeholder="Jane Smith" required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input className="form-input" type="email" placeholder="jane@example.com" required value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                </div>
                <div className="form-group">
                  <label className="form-label">I am a...</label>
                  <select className="form-select" value={form.type} onChange={e => setForm(f => ({...f, type: e.target.value}))}>
                    <option>Parent or carer</option>
                    <option>Teacher or SENCO</option>
                    <option>Healthcare professional</option>
                    <option>Investor</option>
                    <option>Journalist or content creator</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell us what you are looking for..." required value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} />
                </div>
                <button type="submit" className="form-submit">Send message</button>
                <p style={{fontSize:12,color:'var(--muted)',marginTop:'0.75rem',textAlign:'center'}}>We aim to respond within one working day.</p>
              </form>
            )}
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1.3rem',color:'var(--dark)',marginBottom:'0.5rem'}}>Email us directly</h2>
            <p style={{fontSize:13.5,color:'var(--muted)',marginBottom:'1rem',lineHeight:1.6}}>Each address reaches the right team — no switchboards, no delays.</p>
            <div className="contact-info">
              {CONTACTS.map(c => (
                <div key={c.label} className="contact-info-item">
                  <div className="contact-info-item__label">{c.label}</div>
                  <a href={`mailto:${c.value}`} className="contact-info-item__value">{c.value}</a>
                  <div className="contact-info-item__desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{marginTop:'2.5rem',background:'var(--light)',border:'1px solid #e2e8f0',borderRadius:16,padding:'2rem',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'2rem'}}>
          <div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>Registered office</div>
            <div style={{fontSize:14,color:'var(--dark)',lineHeight:1.9,fontWeight:600}}>
              SENSay Ltd<br/>Greenfield House<br/>Halifax Road<br/>Liversedge<br/>WF15 8HL
            </div>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>Company details</div>
            <div style={{fontSize:14,color:'var(--mid)',lineHeight:1.9}}>
              <div><span style={{color:'var(--muted)'}}>Company number: </span>TBC</div>
              <div><span style={{color:'var(--muted)'}}>VAT number: </span>TBC</div>
              <div><span style={{color:'var(--muted)'}}>Incorporated in: </span>England &amp; Wales</div>
            </div>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>Q3 2026 pilot</div>
            <p style={{fontSize:14,color:'var(--mid)',lineHeight:1.7,margin:'0 0 12px'}}>Free pilot places available for families and schools ahead of our full launch.</p>
            <a href="mailto:hello@sensay.uk?subject=Pilot programme interest" className="btn btn--primary" style={{fontSize:13,padding:'10px 20px'}}>Register interest</a>
          </div>
        </div>

      </div>
    </>
  )
}
