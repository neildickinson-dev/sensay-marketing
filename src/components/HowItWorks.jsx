import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HowItWorks.css'

/* Brief drops the feature bullet lists in each tab — kept as empty arrays so the existing
   .hiw-features rendering simply produces nothing. If Neil wants bullets back, repopulate. */
const TABS = [
  {
    id: 'child',
    label: '🌟 The child',
    color: 'blue',
    heading: 'Their voice, their way',
    body: 'The child taps tiles to communicate feelings, needs, and requests. Tiles use photos, videos, or voice recordings personal to them — not generic symbols. The tree grows as the child develops, from 4 tiles at starting, to 40+ as communication expands.',
    features: [],
  },
  {
    id: 'parent',
    label: '❤️ Parents',
    color: 'green',
    heading: 'Understand what your child is telling you',
    body: "See patterns you'd never catch in the moment. When does your child seek \"quiet time\"? What triggers distress? Which communications appear only at school and not at home? SENSay surfaces the signal in the data — with clear summary documents you can share with your child's school or therapist.",
    features: [],
  },
  {
    id: 'school',
    label: '🏫 Schools',
    color: 'red',
    heading: 'From observation to EHCP draft',
    body: 'Teachers log simple classroom observations during normal AAC activities. At EHCP review time, SENSay drafts Section B text grouped by area of need, with every claim cited to the source observation. SENCOs audit before signing. The tool hedges its language when evidence is thin and speaks confidently when evidence is consistent — it never overclaims what was seen.',
    features: [],
    link: { to: '/senco', label: 'See the SENCO feature →' },
  },
  {
    id: 'health',
    label: '⚕️ Healthcare',
    color: 'yellow',
    heading: 'Longitudinal evidence, not session snapshots',
    body: "Speech therapists, paediatricians, and specialist nurses see a child's communication trajectory across months, not minutes. Cross-context analytics reveal how communication shifts between 1:1 and group, morning and afternoon, familiar and unfamiliar adults. Auto-generated quarterly summaries align to clinical reporting frameworks.",
    features: [],
  },
]

const COLOR_MAP = {
  blue:   { dot: '#00AEEF', bg: '#eaf7ff' },
  green:  { dot: '#00A651', bg: '#edfff4' },
  red:    { dot: '#ED1C24', bg: '#fff3f3' },
  yellow: { dot: '#c8850a', bg: '#fffbee' },
}

export default function HowItWorks() {
  const [active, setActive] = useState('child')
  const tab = TABS.find(t => t.id === active)
  const c = COLOR_MAP[tab.color]

  return (
    <section className="section section--white" id="user-groups">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Who is SENSay for?</div>
          <h2>One child. Three views. Shared insight.</h2>
          <p>SENSay is designed for the ecosystem around the child — parent, school, and healthcare professional — each seeing the insight relevant to their role, with consent managed by the family.</p>
        </div>

        <div className="hiw-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`hiw-tab${active === t.id ? ' hiw-tab--active' : ''}`}
              style={active === t.id ? { background: COLOR_MAP[t.color].bg, color: COLOR_MAP[t.color].dot, borderColor: COLOR_MAP[t.color].dot } : {}}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="hiw-panel">
          <div className="hiw-visual" style={{ background: c.bg }}>
            <div className="hiw-visual__icon">
              {active === 'child'  && <span style={{fontSize:72}}>👶</span>}
              {active === 'parent' && <span style={{fontSize:72}}>👨‍👩‍👦</span>}
              {active === 'school' && <span style={{fontSize:72}}>📚</span>}
              {active === 'health' && <span style={{fontSize:72}}>🏥</span>}
            </div>
          </div>
          <div className="hiw-text">
            <h3>{tab.heading}</h3>
            <p>
              {tab.body}
              {tab.link && (
                <>
                  {' '}
                  <Link to={tab.link.to} className="hiw-inline-link" style={{ color: c.dot }}>
                    {tab.link.label}
                  </Link>
                </>
              )}
            </p>
            {tab.features.length > 0 && (
              <ul className="hiw-features">
                {tab.features.map(f => (
                  <li key={f}>
                    <span className="hiw-check" style={{background: c.dot}}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
