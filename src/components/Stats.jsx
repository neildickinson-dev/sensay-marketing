import React from 'react'
import './Stats.css'

// Sourced figures only. Update the source with the figure.
const STATS = [
  { num: '718,838', label: 'EHCPs in England, January 2026 (DfE)' },
  { num: '£5bn',    label: 'Approximate historic high-needs deficits in England' },
  { num: '2029',    label: 'Proposed start for statutory digital Individual Support Plans, subject to legislation (Schools White Paper, Feb 2026)' },
  { num: '3',       label: 'Views around one child: home, school and clinical' },
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
