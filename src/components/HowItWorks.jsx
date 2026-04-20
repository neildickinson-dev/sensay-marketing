import React, { useState } from 'react'
import './HowItWorks.css'

const TABS = [
  {
    id: 'child',
    label: '🌟 The child',
    color: 'blue',
    heading: 'Simple, joyful and empowering',
    body: 'The child sees large, colourful picture symbols on a clear board. One tap communicates a feeling, need or request — instantly. The board grows as the child grows.',
    features: [
      'Big, clear pictorial symbols — Mulberry library + custom photos',
      'Configurable number of choices — simple or detailed boards',
      'Sound and visual feedback on every tap',
      'Works offline, syncs automatically in the background',
    ],
  },
  {
    id: 'parent',
    label: '❤️ Parents',
    color: 'green',
    heading: 'Insight you\'ve never had before',
    body: 'Parents see a daily and weekly timeline of what their child communicated, when, and in what context — at home, at school, with healthcare. Trends surface automatically.',
    features: [
      'Real-time notification when your child communicates',
      'Daily activity timeline across all environments',
      'AI-generated weekly insight reports in plain English',
      'Share reports directly with school or health teams',
    ],
  },
  {
    id: 'school',
    label: '🏫 Schools',
    color: 'red',
    heading: 'A richer picture for every child',
    body: 'Teachers and SENCOs access a classroom dashboard showing communication activity, flagged patterns, and AI-generated context — GDPR-compliant and secure.',
    features: [
      'Classroom licence covers all children in your care',
      'AI identifies triggers and environmental factors automatically',
      'Connects school data with home data securely',
      'Structured evidence export for EHCPs and review meetings',
    ],
  },
  {
    id: 'health',
    label: '⚕️ Healthcare',
    color: 'yellow',
    heading: 'Clinical-grade longitudinal data',
    body: 'Speech therapists, paediatricians and psychologists access a specialist view — months of timestamped communication data, development trajectories, and AI-powered insights.',
    features: [
      'Months of timestamped communication history',
      'Development trajectory tracking over time',
      'Export reports for clinical documentation',
      'False-positive flagging (play-seeking vs genuine need)',
    ],
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
    <section className="section section--white" id="how-it-works">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Who is SENSay for?</div>
          <h2>Built for every perspective</h2>
          <p>SENSay serves the whole ecosystem around a child — from the child's direct experience to the professionals who support their development.</p>
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
            <p>{tab.body}</p>
            <ul className="hiw-features">
              {tab.features.map(f => (
                <li key={f}>
                  <span className="hiw-check" style={{background: c.dot}}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
