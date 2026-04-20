import React from 'react'
import './AISection.css'

const CARDS = [
  {
    icon: '📊',
    color: '#00AEEF',
    title: 'Pattern recognition',
    body: 'Identifies recurring triggers — time of day, environment, preceding activities — that correlate with specific communication needs or distress signals.',
  },
  {
    icon: '🌱',
    color: '#00A651',
    title: 'Development tracking',
    body: 'Monitors vocabulary expansion, communication frequency, and response patterns over months — building an evidence base for clinical and educational assessment.',
  },
  {
    icon: '⚠️',
    color: '#FDB913',
    title: 'False positive detection',
    body: 'Learns when a child is using the app for engagement rather than genuine communication — distinguishing "I want food" as a game from a real hunger signal.',
  },
  {
    icon: '📄',
    color: '#ED1C24',
    title: 'Audience-specific reports',
    body: 'Generates separate plain-English reports for parents, teachers and clinicians — each with the context and vocabulary most useful to that audience.',
  },
]

const INSIGHTS = [
  { tag: 'Pattern found', tagColor: '#FDB913', text: '"Liam selects \'anxious\' most often on Monday mornings and Thursday afternoons — possible transition trigger. Recommend discussing with school SENCO."' },
  { tag: 'Progress noted', tagColor: '#00A651', text: '"Freya has used 4 new symbols this week that she didn\'t use last month. Her communication vocabulary is expanding."' },
  { tag: 'Alert',          tagColor: '#ED1C24', text: '"\'Pain\' has been selected 5× in 2 days — higher than baseline. Worth checking in with your GP or paediatrician."' },
]

export default function AISection() {
  return (
    <section className="section section--dark ai-section" id="ai">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag section-tag--yellow">AI intelligence</div>
          <h2 className="on-dark">Not just communication — understanding</h2>
          <p className="on-dark">SENSay's AI analyses patterns across thousands of interactions to surface insights no human could spot alone.</p>
        </div>

        <div className="ai-cards">
          {CARDS.map(c => (
            <div key={c.title} className="ai-card">
              <div className="ai-card__icon" style={{background:`${c.color}22`}}>
                <span style={{fontSize:24}}>{c.icon}</span>
              </div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="ai-insights">
          <div className="ai-insights__label">Sample AI insights</div>
          {INSIGHTS.map(ins => (
            <div key={ins.tag} className="ai-insight-row">
              <span className="ai-insight-tag" style={{color: ins.tagColor, borderColor: `${ins.tagColor}44`}}>
                {ins.tag}
              </span>
              <p>{ins.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
