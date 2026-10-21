import React from 'react'
import './pages.css'

const ASSETS = [
  { icon: '🖼️', label: 'Logo pack', desc: 'PNG and SVG in light, dark, blue background and four-colour stripe variants. Available on request.' },
  { icon: '🎨', label: 'Brand guidelines', desc: 'Colour palette, typography, logo usage and spacing. Available on request.' },
  { icon: '📸', label: 'Product screenshots', desc: 'Screenshots of the communication board and AI pattern reports. Available on request.' },
  { icon: '👤', label: 'Founder headshots', desc: 'Photos of Kirsty Dickinson (co-founder and CEO) and Neil Dickinson (co-founder and CTO). Available on request.' },
]

export default function Press() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Press and media</div>
          <h1>Press kit and media resources</h1>
          <p>What journalists, podcasters and content creators need to cover SENSay accurately.</p>
        </div>
      </div>

      <div className="page-body prose">

        <h2 style={{marginTop:0}}>About SENSay: boilerplate</h2>
        <div style={{
          background:'var(--light)', borderRadius:12, padding:'1.5rem',
          border:'1px solid #e2e8f0', marginBottom:'2rem'
        }}>
          <p style={{margin:0}}>
            SENSay is a communication app for pre-verbal and non-verbal children, built by the
            parents of a non-verbal child. It combines a picture and symbol communication board, set
            up for each child, with AI pattern reports that show long-term communication patterns to
            parents, teachers and healthcare professionals. Founded in 2025 and based in the UK,
            SENSay is taking on a small group of founding schools for 2026-27, with the family plan
            arriving in January 2027.
          </p>
        </div>

        <h2>Key facts</h2>
        <ul>
          <li>Founded: 2025 by Kirsty and Neil Dickinson, the parents of a non-verbal child</li>
          <li>Headquarters: United Kingdom</li>
          <li>Context: 718,838 EHCPs in England in January 2026 (Department for Education)</li>
          <li>Policy: digital Individual Support Plans proposed in the February 2026 Schools White Paper, to become statutory from September 2029, subject to legislation</li>
          <li>Business model: subscription. School licences from £895 to £4,495 a year + VAT; family plan £7.99 a month or £79 a year including VAT (from January 2027); clinicians £249 a year + VAT</li>
          <li>Founding schools: a small group for 2026-27</li>
          <li>Website: sensay.uk</li>
          <li>Press contact: hello@sensay.uk</li>
        </ul>

        <h2>What makes SENSay different</h2>
        <p>
          SENSay keeps a long-term record of a child's communication and uses AI to surface
          patterns, triggers and trends, with reports written for parents, educators and clinicians.
          Reports flag when a pattern may reflect play or repeated tapping rather than a genuine
          request, so adults do not over-read the data. Teachers can also log classroom observations
          and generate EHCP Section B drafts with every claim cited to its source.
        </p>

        <h2>Media assets</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
          {ASSETS.map(a => (
            <div key={a.label} style={{
              background:'var(--light)', borderRadius:12, padding:'1.25rem',
              border:'1px solid #e2e8f0', textAlign:'center'
            }}>
              <div style={{fontSize:32, marginBottom:10}} aria-hidden="true">{a.icon}</div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, color:'var(--dark)', marginBottom:5}}>{a.label}</div>
              <p style={{fontSize:12.5, color:'var(--muted)', lineHeight:1.6, margin:0}}>{a.desc}</p>
            </div>
          ))}
        </div>

        <p style={{fontSize:13, color:'var(--muted)', margin:'0.75rem 0 0'}}>
          For full-size assets, email <a href="mailto:hello@sensay.uk">hello@sensay.uk</a>.
        </p>

        <h2>Press contact</h2>
        <p>
          For interview requests, press enquiries or media assets, please contact:<br />
          <a href="mailto:hello@sensay.uk">hello@sensay.uk</a><br />
          We aim to respond to press enquiries within one working day.
        </p>

        <hr />

        <p style={{fontSize:13, color:'var(--muted)'}}>
          SENSay is an early-stage company. Sources: EHCP figure from the Department for Education,
          Education, Health and Care Plans statistics (January 2026); digital Individual Support Plans
          from the Department for Education Schools White Paper (February 2026). For the most current
          information, please contact us directly.
        </p>

      </div>
    </>
  )
}
