import React, { useState } from 'react'
import './Hero.css'

// Same symbols, labels and emoji as the app's own "I feel...", "I need..."
// and "I want..." categories, so the preview matches what a child sees.
const SYMBOLS = [
  { emoji: '😄', label: 'Happy',    theme: 'blue'   },
  { emoji: '😢', label: 'Sad',      theme: 'red'    },
  { emoji: '😟', label: 'Worried',  theme: 'yellow' },
  { emoji: '😴', label: 'Tired',    theme: 'green'  },
  { emoji: '😨', label: 'Scared',   theme: 'yellow' },
  { emoji: '😠', label: 'Angry',    theme: 'red'    },
  { emoji: '🆘', label: 'Help',     theme: 'blue'   },
  { emoji: '🎮', label: 'To play',  theme: 'green'  },
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
          <div className="hero-badge"><span aria-hidden="true">✨</span> Communication. Analytics. Insight.</div>
          <h1>
            Every child deserves to be{' '}
            <span className="hero-accent--blue">heard</span>
            {', '}and{' '}
            <span className="hero-accent--green">understood</span>.
          </h1>
          <p>
            SENSay is a two-way communication app for pre-verbal and non-verbal children.
            Your own photos and videos become communication tiles. Adults can reply, and get AI
            pattern reports that show what lies behind a child's messages across home, school and
            clinical settings.
          </p>
          <div className="hero-btns">
            <a
              href="mailto:hello@sensay.uk?subject=Founding%20school%20interest"
              className="btn btn--primary"
            >
              Become a founding school →
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
            <span className="demo-label">SENSay: William's board</span>
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
                  <span className="symbol-emoji" aria-hidden="true">{s.emoji}</span>
                  <span className="symbol-label">{s.label}</span>
                </button>
              ))}
            </div>
            <div className={`demo-insight${tapped ? ' demo-insight--visible' : ''}`} aria-live="polite">
              <span className="demo-insight__dot" />
              <span>
                <strong style={{color:'var(--green)'}}>Recorded: </strong>
                William chose &ldquo;{tapped}&rdquo;. Added to his pattern record, with time and place.
              </span>
            </div>
          </div>
          <div className="demo-caption">
            Adults add their own photos and videos as tiles. This is an example.
          </div>
        </div>
      </div>
    </section>
  )
}
