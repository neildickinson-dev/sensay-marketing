import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

const CHARITIES = [
  {
    name: 'Communication Matters',
    url: 'https://www.communicationmatters.org.uk',
    desc: 'The UK\'s leading AAC organisation. Excellent resources on augmentative and alternative communication for children and adults. Runs an annual conference.',
    tag: 'AAC',
  },
  {
    name: 'I CAN',
    url: 'https://www.ican.org.uk',
    desc: 'Children\'s communication charity providing support, information and resources for children with speech, language and communication needs (SLCN).',
    tag: 'SLCN',
  },
  {
    name: 'The National Autistic Society',
    url: 'https://www.autism.org.uk',
    desc: 'The UK\'s largest autism charity. Extensive guides for parents on communication, education, healthcare rights and navigating the SEN system.',
    tag: 'Autism',
  },
  {
    name: 'Contact',
    url: 'https://contact.org.uk',
    desc: 'Formerly Contact a Family — supports families with disabled children. Excellent helpline and guides on EHCPs, benefits and local support.',
    tag: 'Families',
  },
  {
    name: 'IPSEA',
    url: 'https://www.ipsea.org.uk',
    desc: 'Independent Provider of Special Education Advice. Free legal advice and support on SEN law, EHCPs and challenging local authority decisions.',
    tag: 'Legal & EHCP',
  },
  {
    name: 'Makaton Charity',
    url: 'https://makaton.org',
    desc: 'Makaton uses symbols, signs and speech together to support communication. Many non-verbal children use Makaton alongside digital communication tools.',
    tag: 'Signing & symbols',
  },
  {
    name: 'Mencap',
    url: 'https://www.mencap.org.uk',
    desc: 'Leading charity for people with learning disabilities. Strong resources on communication, health, education and social care for children and adults.',
    tag: 'Learning disabilities',
  },
  {
    name: 'SCOPE',
    url: 'https://www.scope.org.uk',
    desc: 'Disability equality charity. Practical guides on communication, assistive technology and navigating the education and healthcare systems.',
    tag: 'Disability',
  },
  {
    name: 'Speech and Language UK',
    url: 'https://speechandlanguage.org.uk',
    desc: 'Formerly AFASIC — supports children and young people with speech, language and communication needs, and the families and professionals around them.',
    tag: 'Speech & language',
  },
]

const DOWNLOADS = [
  { icon: '📋', title: 'SENSay terms and conditions', desc: 'Full terms of service governing use of the SENSay platform.', href: '/terms' },
  { icon: '🔒', title: 'SENSay privacy policy', desc: 'How we collect, use and protect your data and your child\'s data.', href: '/privacy' },
]

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('charities')

  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Documentation & Resources</div>
          <h1>Everything you need to get the most from SENSay</h1>
          <p>Learning guides, useful organisations, and all the official documentation in one place.</p>
        </div>
      </div>

      <div className="page-body" style={{maxWidth:900}}>

        {/* Tabs */}
        <div style={{display:'flex',gap:8,marginBottom:'2.5rem',flexWrap:'wrap'}}>
          {[
            ['charities', '🤝 Useful organisations'],
            ['docs',      '📄 Official documents'],
          ].map(([id, label]) => (
            <button key={id}
              onClick={() => setActiveTab(id)}
              style={{
                padding:'10px 22px', borderRadius:50, fontFamily:'var(--font-display)',
                fontWeight:800, fontSize:14, cursor:'pointer', transition:'all 0.2s',
                border: activeTab === id ? '2px solid var(--blue)' : '2px solid #e2e8f0',
                background: activeTab === id ? '#eaf7ff' : 'var(--light)',
                color: activeTab === id ? 'var(--blue)' : 'var(--muted)',
              }}
            >{label}</button>
          ))}
        </div>

        {/* CHARITIES */}
        {activeTab === 'charities' && (
          <div>
            <div className="prose" style={{marginBottom:'1.5rem'}}>
              <p>
                The following organisations provide free, high-quality resources for families, schools and
                healthcare professionals supporting children with speech, language and communication needs.
                All links open the organisation's own website — SENSay is not affiliated with any of these
                organisations and does not receive any referral fees.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {CHARITIES.map(c => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    background:'#fff', borderRadius:14, padding:'1.25rem 1.5rem',
                    border:'1px solid #e2e8f0', display:'flex', gap:'1rem',
                    alignItems:'flex-start', textDecoration:'none',
                    transition:'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
                >
                  <div style={{flex:1}}>
                    <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:5}}>
                      <span style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'1rem',color:'var(--dark)'}}>{c.name}</span>
                      <span style={{fontSize:11,fontWeight:700,letterSpacing:0.5,textTransform:'uppercase',color:'var(--blue)',background:'#eaf7ff',padding:'2px 8px',borderRadius:50}}>{c.tag}</span>
                    </div>
                    <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.65,margin:0}}>{c.desc}</p>
                  </div>
                  <span style={{color:'var(--blue)',fontWeight:700,fontSize:18,flexShrink:0,marginTop:2}}>↗</span>
                </a>
              ))}
            </div>
            <div className="prose" style={{marginTop:'2rem'}}>
              <p style={{fontSize:13}}>
                <strong>Know of a useful organisation we've missed?</strong> Email us at <a href="mailto:hello@sensay.uk">hello@sensay.uk</a> and
                we'll consider adding it. We only list organisations that offer free resources and are appropriate for all families.
              </p>
            </div>
          </div>
        )}

        {/* DOCUMENTS */}
        {activeTab === 'docs' && (
          <div>
            <div className="prose" style={{marginBottom:'1.5rem'}}>
              <p>Official SENSay documentation for users, schools and healthcare providers.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
              {DOWNLOADS.map(d => (
                <Link key={d.title} to={d.href} style={{background:'#fff',borderRadius:12,padding:'1.25rem 1.5rem',border:'1px solid #e2e8f0',display:'flex',gap:'1rem',alignItems:'center',textDecoration:'none',transition:'box-shadow 0.2s'}}>
                  <span style={{fontSize:28,flexShrink:0}}>{d.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'0.95rem',color:'var(--dark)',marginBottom:3}}>{d.title}</div>
                    <div style={{fontSize:13,color:'var(--muted)'}}>{d.desc}</div>
                  </div>
                  <span style={{color:'var(--blue)',fontWeight:700,fontSize:18}}>→</span>
                </Link>
              ))}
            </div>
            <div className="prose" style={{marginTop:'2rem'}}>
              <p style={{fontSize:13,color:'var(--muted)'}}>
                For data processing agreements and other legal documentation required for your organisation,
                please contact <a href="mailto:hello@sensay.uk">hello@sensay.uk</a>.
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
