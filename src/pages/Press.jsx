import React from 'react'
import './pages.css'

const ASSETS = [
  { icon: '🖼️', label: 'Logo pack', desc: 'PNG and SVG in all variants — light, dark, blue background, four-colour stripe.' },
  { icon: '🎨', label: 'Brand guidelines', desc: 'Colour palette, typography system, logo usage rules and spacing.' },
  { icon: '📸', label: 'Product screenshots', desc: 'High-resolution screenshots of the communication board and analytics dashboard.' },
  { icon: '👤', label: 'Founder headshots', desc: 'High-resolution photos of Kirsty Dickinson (CEO) and Neil Dickinson (CTO).' },
]

export default function Press() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Press & Media</div>
          <h1>Press kit and media resources</h1>
          <p>Everything journalists, podcasters and content creators need to cover SENSay accurately and compellingly.</p>
        </div>
      </div>

      <div className="page-body prose">

        <h2 style={{marginTop:0}}>About SENSay — boilerplate</h2>
        <div style={{
          background:'var(--light)', borderRadius:12, padding:'1.5rem',
          border:'1px solid #e2e8f0', marginBottom:'2rem'
        }}>
          <p style={{margin:0}}>
            SENSay is a configurable communication platform for non-verbal and speech-impaired children,
            built by parents of a child with SEN. The platform combines a pictorial symbol communication
            board — fully configurable for each child — with an AI analytics engine that surfaces
            longitudinal communication patterns for parents, teachers and healthcare professionals.
            Founded in 2025 and headquartered in the UK, SENSay is preparing for its Q3 2026 pilot
            programme across SEN schools and families.
          </p>
        </div>

        <h2>Key facts</h2>
        <ul>
          <li>Founded: 2025 by Kirsty and Neil Dickinson, parents of a non-verbal child with SEN</li>
          <li>Headquarters: United Kingdom</li>
          <li>Target market: 1.4 million children in the UK with long-term SLCN</li>
          <li>Global AAC market: $2.09B (2024), growing at 11.3% CAGR to $3.56B by 2029</li>
          <li>Business model: SaaS — Parent (£9.99/mo), Education (£399/yr), Health (£799/yr)</li>
          <li>Pilot programme: Q3 2026</li>
          <li>Seeking: £350,000 seed investment at £2M initial valuation</li>
          <li>Website: sensay.uk</li>
          <li>Press contact: press@sensay.uk</li>
        </ul>

        <h2>What makes SENSay different</h2>
        <p>
          Unlike existing AAC tools, SENSay generates a longitudinal record of every communication
          interaction and applies AI to surface patterns, triggers and developmental trends — producing
          separate, audience-specific reports for parents, educators and clinicians. This AI analytics
          layer is genuinely novel in the AAC space. The platform also includes false-positive detection:
          it learns when a child is using the app for engagement rather than genuine communication,
          distinguishing play-seeking from real need.
        </p>

        <h2>Media assets</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1rem', marginBottom:'1.5rem'}}>
          {ASSETS.map(a => (
            <div key={a.label} style={{
              background:'var(--light)', borderRadius:12, padding:'1.25rem',
              border:'1px solid #e2e8f0', textAlign:'center'
            }}>
              <div style={{fontSize:32, marginBottom:10}}>{a.icon}</div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, color:'var(--dark)', marginBottom:5}}>{a.label}</div>
              <p style={{fontSize:12.5, color:'var(--muted)', lineHeight:1.6, margin:0}}>{a.desc}</p>
            </div>
          ))}
        </div>

        <p style={{fontSize:13, color:'var(--muted)', margin:'0.75rem 0 0'}}>
          For high-resolution assets, email <a href="mailto:press@sensay.uk">press@sensay.uk</a>.
        </p>

        <h2>Press contact</h2>
        <p>
          For interview requests, press enquiries or media assets, please contact:<br />
          <a href="mailto:press@sensay.uk">press@sensay.uk</a><br />
          We aim to respond to all press enquiries within 24 hours.
        </p>

        <hr />

        <p style={{fontSize:13, color:'var(--muted)'}}>
          SENSay is an early-stage company. All financial projections and market data cited are based
          on publicly available research. For the most current information, please contact us directly.
        </p>

      </div>
    </>
  )
}
