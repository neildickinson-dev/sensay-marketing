import React, { useState } from 'react'
import './Hero.css'

const SYMBOLS = [
  { emoji: '😊', label: 'Happy',   theme: 'blue'   },
  { emoji: '😢', label: 'Sad',     theme: 'red'    },
  { emoji: '😟', label: 'Anxious', theme: 'yellow' },
  { emoji: '😴', label: 'Tired',   theme: 'green'  },
  { emoji: '🍔', label: 'Hungry',  theme: 'green'  },
  { emoji: '🎮', label: 'Play',    theme: 'blue'   },
  { emoji: '🤝', label: 'Help me', theme: 'yellow' },
  { emoji: '🔥', label: 'Pain',    theme: 'red'    },
]

export default function Hero() {
  const [tapped, setTapped] = useState(null)

  const handleTap = (label) => {
    setTapped(label)
    setTimeout(() => setTapped(null), 1800)
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">✨ Empowering every child to communicate</div>
          <h1>
            Every child deserves a{' '}
            <span className="hero-accent--blue">voice</span>
            {' '}— and someone to{' '}
            <span className="hero-accent--green">truly listen</span>
          </h1>
          <p>
            SENSay is a configurable communication app for non-verbal and
            speech-impaired children — with AI analytics that reveal the
            patterns, triggers and trends hidden in every interaction.
          </p>
          <div className="hero-btns">
            <a href="https://app.sensay.uk" className="btn btn--primary">
              Start free trial
            </a>
            <a href="#how-it-works" className="btn btn--outline">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-demo">
          <div className="demo-bar">
            <span className="demo-dot" style={{background:'#ff5f57'}} />
            <span className="demo-dot" style={{background:'#febc2e'}} />
            <span className="demo-dot" style={{background:'#28c840'}} />
            <span className="demo-label">SENSay — Liam's board</span>
          </div>
          <div className="demo-body">
            <div className="demo-prompt">How are you feeling right now?</div>
            <div className="demo-grid">
              {SYMBOLS.map(s => (
                <button
                  key={s.label}
                  className={`symbol-card symbol-card--${s.theme}${tapped === s.label ? ' symbol-card--tapped' : ''}`}
                  onClick={() => handleTap(s.label)}
                  aria-label={s.label}
                >
                  <span className="symbol-emoji">{s.emoji}</span>
                  <span className="symbol-label">{s.label}</span>
                </button>
              ))}
            </div>
            <div className={`demo-insight${tapped ? ' demo-insight--visible' : ''}`}>
              <span className="demo-insight__dot" />
              <span>
                <strong style={{color:'var(--green)'}}>AI insight: </strong>
                Liam has selected &ldquo;{tapped}&rdquo; — pattern analysis updating.{' '}
                <span style={{color:'var(--blue)', fontWeight:700}}>View full report ›</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
