import React from 'react'
import './pages.css'

const POSTS = [
  {
    emoji: '💬', bg: '#eaf7ff',
    tag: 'Communication',
    title: 'Why every AAC interaction is a data point — and why that matters',
    desc: 'Most communication apps stop at the tap. SENSay starts there. Here\'s why the data behind every interaction is where the real value lies.',
    date: 'Coming soon',
  },
  {
    emoji: '🧠', bg: '#edfff4',
    tag: 'AI & Analytics',
    title: 'How we built a false-positive detector for communication boards',
    desc: 'When a child taps "food" for the tenth time in an hour, is it hunger — or is it play? Teaching an AI to tell the difference turned out to be one of our hardest problems.',
    date: 'Coming soon',
  },
  {
    emoji: '🏫', bg: '#fff3f3',
    tag: 'Schools',
    title: 'What a SENCO actually needs from a communication platform',
    desc: 'We spent time with SENCOs across the UK before writing a line of code. Here\'s what they told us — and how it shaped SENSay\'s education tier.',
    date: 'Coming soon',
  },
  {
    emoji: '👨‍👩‍👦', bg: '#fffbee',
    tag: 'For parents',
    title: 'The question every SEN parent asks — and the one SENSay tries to answer',
    desc: '"What is actually going on with my child?" It\'s the question behind every school meeting, every clinical appointment. We built SENSay to help answer it.',
    date: 'Coming soon',
  },
  {
    emoji: '📊', bg: '#eaf7ff',
    tag: 'Product',
    title: 'Building a communication app offline-first — and why it matters',
    desc: 'Classrooms lose wifi. Families are in the car. Healthcare appointments are in basements. SENSay works everywhere, always — here\'s how.',
    date: 'Coming soon',
  },
  {
    emoji: '🌱', bg: '#edfff4',
    tag: 'Our story',
    title: 'From parents to founders: why we built SENSay',
    desc: 'Kirsty and Neil Dickinson on the moment they decided to stop looking for the right tool and start building it.',
    date: 'Coming soon',
  },
]

export default function Blog() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Blog</div>
          <h1>Thoughts on communication, childhood and AI</h1>
          <p>Articles from the SENSay team on building better tools for the SEN community — and the thinking behind them.</p>
        </div>
      </div>

      <div className="page-body">
        <div style={{
          background:'#fffbee', border:'1px solid #ffe082', borderRadius:12,
          padding:'1rem 1.25rem', marginBottom:'2rem',
          fontSize:14, color:'#92610a', fontWeight:600
        }}>
          📝 Our blog is launching soon. These are the articles we're working on — subscribe below to be notified when they're published.
        </div>

        <div className="card-grid">
          {POSTS.map(p => (
            <div key={p.title} className="content-card" style={{opacity:0.8}}>
              <div className="content-card__img" style={{background:p.bg}}>{p.emoji}</div>
              <div className="content-card__body">
                <div className="content-card__tag">{p.tag}</div>
                <div className="content-card__title">{p.title}</div>
                <p className="content-card__desc">{p.desc}</p>
              </div>
              <div className="content-card__footer">{p.date}</div>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div style={{
          marginTop:'3rem', background:'var(--dark)', borderRadius:20,
          padding:'2.5rem', textAlign:'center'
        }}>
          <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.4rem', color:'#fff', marginBottom:8}}>
            Get notified when we publish
          </div>
          <p style={{color:'rgba(255,255,255,0.5)', fontSize:14, marginBottom:'1.5rem'}}>
            No spam. Just useful articles about SEN communication, AI analytics and the SENSay journey.
          </p>
          <div style={{display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap'}}>
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input"
              style={{maxWidth:280, background:'rgba(255,255,255,0.08)', borderColor:'rgba(255,255,255,0.15)', color:'#fff'}}
            />
            <button className="btn btn--primary">Notify me</button>
          </div>
        </div>
      </div>
    </>
  )
}
