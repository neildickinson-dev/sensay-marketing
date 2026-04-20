import React from 'react'
import './pages.css'

const VALUES = [
  { icon: '👶', color: '#eaf7ff', title: 'Child first, always', body: 'Every decision starts with the child. The app must be joyful, clear and empowering — never clinical or intimidating.' },
  { icon: '🔍', color: '#edfff4', title: 'Insight over data',   body: 'We don\'t just collect data. We turn it into understanding — surfacing the patterns and triggers that actually matter to families.' },
  { icon: '🤝', color: '#fff3f3', title: 'Built for the whole team', body: 'A child\'s support network is parents, teachers and clinicians working together. SENSay connects all of them.' },
  { icon: '🌱', color: '#fffbee', title: 'Grows with the child', body: 'No two children are the same. SENSay adapts — from a handful of symbols to a rich, complex communication system.' },
]

const TIMELINE = [
  { year: 'Jan 2023', label: 'The idea', desc: 'SENSay concept first developed as a solution to a real family problem.' },
  { year: '2025',     label: 'Fundraise', desc: 'Seed funding secured. Company formally established. Development begins.' },
  { year: 'Q3 2026',  label: 'Pilots',   desc: 'First pilot licences with parents and schools across the UK.' },
  { year: '2027',     label: 'Rollout',  desc: 'Full SEN school rollout. Home and school environments connected.' },
  { year: '2028',     label: 'Health',   desc: 'Healthcare plan launched. NHS and specialist integration.' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">About SENSay</div>
          <h1>A communication tool built from lived experience</h1>
          <p>SENSay exists because existing tools weren't good enough — and the people who knew that best were the families living it every day.</p>
        </div>
      </div>

      <div className="page-body">

        {/* Mission */}
        <div className="prose">
          <h2 style={{marginTop:0}}>Our mission</h2>
          <p className="lead">
            To empower every non-verbal and speech-impaired child to communicate — and to give the
            adults around them the insight they need to truly understand.
          </p>
          <p>
            SENSay is a configurable communication platform for non-verbal and speech-impaired children,
            layered with an AI analytics engine that surfaces longitudinal communication patterns for
            parents, teachers and healthcare professionals. It sits at the intersection of EdTech and
            HealthTech — combining a joyful child-facing interface with genuinely powerful data intelligence.
          </p>
        </div>

        {/* Values */}
        <h2 className="prose" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.6rem', color:'var(--dark)', margin:'3rem 0 1.25rem', letterSpacing:'-0.3px'}}>What we stand for</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1rem', marginBottom:'3rem'}}>
          {VALUES.map(v => (
            <div key={v.title} style={{background:v.color, borderRadius:14, padding:'1.5rem', border:'1px solid rgba(0,0,0,0.05)'}}>
              <div style={{fontSize:32, marginBottom:10}}>{v.icon}</div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1rem', color:'var(--dark)', marginBottom:6}}>{v.title}</div>
              <p style={{fontSize:13.5, color:'var(--muted)', lineHeight:1.7, margin:0}}>{v.body}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="prose">
          <h2>Our journey</h2>
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
          <h2>The market we're addressing</h2>
          <p>
            Around 1.4 million children in the UK have long-term speech, language and communication
            needs they won't grow out of — that's 10% of all children, two or three in every classroom.
            Globally, the Augmentative and Alternative Communication (AAC) devices market was valued
            at $2.09 billion in 2024 and is growing at 11.3% CAGR, projected to reach $3.56 billion by 2029.
          </p>
          <p>
            SENSay operates across three audiences — parents, schools and healthcare — each with their
            own subscription tier and their own data needs. The AI analytics layer, which generates
            longitudinal communication insights, is genuinely novel in the AAC space and represents
            our core competitive advantage.
          </p>

          <hr />

          <p style={{textAlign:'center'}}>
            Want to know the whole story behind SENSay?<br />
            <a href="/our-story">Read how it all began →</a>
          </p>
        </div>

      </div>
    </>
  )
}
