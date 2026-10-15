import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

const VALUES = [
  { icon: '👶', color: '#eaf7ff', title: 'Child first, always', body: 'Every decision starts with the child. The app must be joyful, clear and easy to use, never clinical or intimidating.' },
  { icon: '🔍', color: '#edfff4', title: 'Insight over data',   body: 'We don\'t just collect data. We turn it into understanding, surfacing the patterns and triggers that actually matter to families.' },
  { icon: '🤝', color: '#fff3f3', title: 'Built for the whole team', body: 'A child\'s support network is parents, teachers and clinicians working together. SENSay connects all of them.' },
  { icon: '🌱', color: '#fffbee', title: 'Grows with the child', body: 'No two children are the same. SENSay adapts, from a handful of symbols to a rich, complex communication system.' },
]

const TIMELINE = [
  { year: 'Jan 2023', label: 'The idea', desc: 'SENSay began as an answer to a real family problem.' },
  { year: '2025',     label: 'Company formed', desc: 'SENSay Ltd set up and development of the app began.' },
  { year: '2026 to 2027', label: 'Founding schools', desc: 'A small group of founding schools for the 2026-27 school year.' },
  { year: 'Spring 2027', label: 'Family plan', desc: 'The family plan arrives on iPhone, iPad and Android, connecting home and school.' },
  { year: '2028',     label: 'Wider rollout', desc: 'More schools, families and clinicians across the UK.' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">About SENSay</div>
          <h1>A communication tool built from lived experience</h1>
          <p>SENSay exists because existing tools weren't good enough, and the people who knew that best were the families living it every day.</p>
        </div>
      </div>

      <div className="page-body">

        {/* Mission */}
        <div className="prose">
          <h2 style={{marginTop:0}}>Our mission</h2>
          <p className="lead">
            To help every pre-verbal and non-verbal child communicate, and to give the adults
            around them the insight they need to understand.
          </p>
          <p>
            SENSay is a communication app for pre-verbal and non-verbal children, with AI pattern
            reports that show long-term communication patterns to parents, teachers and healthcare
            professionals. It brings together a joyful child-facing board and careful, evidence-based
            reporting for the adults around the child.
          </p>
        </div>

        {/* Values */}
        <h2 style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.6rem', color:'var(--dark)', margin:'3rem 0 1.25rem', letterSpacing:'-0.3px'}}>What we stand for</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1rem', marginBottom:'3rem'}}>
          {VALUES.map(v => (
            <div key={v.title} style={{background:v.color, borderRadius:14, padding:'1.5rem', border:'1px solid rgba(0,0,0,0.05)'}}>
              <div style={{fontSize:32, marginBottom:10}} aria-hidden="true">{v.icon}</div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1rem', color:'var(--dark)', marginBottom:6}}>{v.title}</div>
              <p style={{fontSize:13.5, color:'var(--muted)', lineHeight:1.7, margin:0}}>{v.body}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="prose">
          <h2>How we got here</h2>
        </div>
        <div style={{position:'relative', paddingLeft:28, marginBottom:'3rem'}}>
          <div style={{position:'absolute', left:8, top:8, bottom:8, width:2, background:'#e2e8f0', borderRadius:2}} />
          {TIMELINE.map((t, i) => (
            <div key={t.year} style={{position:'relative', marginBottom:'1.75rem', paddingLeft:24}}>
              <div style={{
                position:'absolute', left:-20, top:4,
                width:12, height:12, borderRadius:'50%',
                background:['var(--blue)','var(--green)','var(--yellow)','var(--blue)','var(--red)'][i],
                border:'2px solid #fff', boxShadow:'0 0 0 2px #e2e8f0'
              }} />
              <div style={{fontSize:11, fontWeight:800, letterSpacing:1, textTransform:'uppercase', color:'var(--muted)', marginBottom:3}}>{t.year}</div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1rem', color:'var(--dark)', marginBottom:4}}>{t.label}</div>
              <p style={{fontSize:14, color:'var(--muted)', lineHeight:1.65, margin:0}}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Market */}
        <div className="prose">
          <h2>Why now</h2>
          <p>
            In January 2026 there were 718,838 Education, Health and Care Plans (EHCPs) in England
            (Department for Education). Councils carry historic high-needs deficits of about £5bn.
            The February 2026 Schools White Paper proposes digital Individual Support Plans, to
            become statutory from September 2029, subject to legislation. Schools will need clear,
            dated evidence of how each child communicates.
          </p>
          <p>
            SENSay serves three groups around the child (parents, schools and clinicians), each with
            their own plan and their own view. The AI pattern reports, which build a long-term picture
            of a child's communication, are at the centre of what we offer.
          </p>

          <hr />

          <p style={{textAlign:'center'}}>
            Want to know the whole story behind SENSay?<br />
            <Link to="/our-story">Read how it all began →</Link>
          </p>
        </div>

      </div>
    </>
  )
}
