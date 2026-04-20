import React from 'react'
import './Stats.css'

const STATS = [
  { num: '1.4M', label: 'Children with SLCN in the UK alone' },
  { num: '10%',  label: 'Of all children — 2–3 per classroom' },
  { num: '3',    label: 'Integrated views: home, school, healthcare' },
  { num: '∞',    label: 'Tiles you can personalise per child' },
]

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map(s => (
        <div key={s.label} className="stats-item">
          <div className="stats-num">{s.num}</div>
          <div className="stats-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
