import React, { useState } from 'react'
import BoardTile from './BoardTile.jsx'
import StrokeSymbol from './StrokeSymbol.jsx'
import { CORE_WORDS, QUICK_WORDS, FOLDERS } from '../data/board.js'
import { FOUNDING_SCHOOL_MAILTO } from './Pricing.jsx'
import './Hero.css'

const URGENT = new Set(['stop', 'help', 'pain', 'toilet'])

function speak(text) {
  try {
    const synth = window.speechSynthesis
    if (!synth || !text) return
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'en-GB'
    u.rate = 0.95
    synth.speak(u)
  } catch { /* speech is a nicety; the board works without it */ }
}

// The three-part brief an adult receives with every message (product guide, section 5).
function briefFor(words) {
  const text = words.join(' ')
  const urgent = words.some(w => URGENT.has(w))
  const has = (...xs) => xs.some(x => words.includes(x))
  let noticed = 'Example: the third time this week, usually after lunch. Repeated taps within a few minutes are counted once.'
  let respond = 'Say it back in your own words, then model one more word on the board: "You want more. More please."'
  if (urgent) {
    noticed = 'Urgent words are decided on the server and always sent at once, marked urgent, never held back.'
    respond = has('pain') ? 'Go to William now. Show him the body page so he can point to where it hurts.'
      : has('toilet') ? 'Go to William now and help him to the toilet.'
      : 'Go to William now and check what he needs. Stop what is happening if he asked you to.'
  } else if (has('eat', 'drink')) {
    respond = 'Offer two choices he can point to, and name each one as you offer it.'
  } else if (has('play', 'go', 'open', 'out')) {
    respond = 'If you can, say yes and do it. If not now, show him when on the board: "later, after tea".'
  } else if (has('finished', 'all done', 'not', 'stop')) {
    respond = 'Respect it: stop the activity, then tell him what happens next.'
  }
  return { text, urgent, noticed, respond }
}

export default function Hero() {
  const [message, setMessage] = useState([])
  const [pressed, setPressed] = useState(null)
  const [brief, setBrief] = useState(null)

  const tap = (word) => {
    setBrief(null)
    setPressed(word)
    setTimeout(() => setPressed(null), 180)
    setMessage(m => (m.length >= 8 ? m : [...m, word]))
    speak(word)
  }
  const send = () => {
    if (!message.length) return
    speak(message.join(' '))
    setBrief(briefFor(message))
  }
  const clear = () => { setMessage([]); setBrief(null) }

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">Communication app · Evidence for home, school and therapy</div>
          <h1>
            Every child deserves to be{' '}
            <span className="hero-accent--blue">heard</span>
            {', '}and{' '}
            <span className="hero-accent--green">understood</span>.
          </h1>
          <p>
            SENSay gives pre-verbal and non-verbal children a voice, and gives the adults around
            them the evidence behind what the child is telling them. One record across home,
            school and therapy, built by the parents of a non-verbal child.
          </p>
          <div className="hero-btns">
            <a href={FOUNDING_SCHOOL_MAILTO} className="btn btn--primary">Become a founding school →</a>
            <a href="#board" className="btn btn--outline">See the board</a>
          </div>
          <p className="hero-try">Try it: tap words on the board, then press <strong>Send</strong>.</p>
        </div>

        <div className="hero-device" aria-label="An example of William's board. Tap words to build a message.">
          <div className="device-bar">
            <span className="device-title">William's board</span>
            <span className="device-chip">Example</span>
          </div>

          <div className="device-body">
            <div className="quick-strip" role="toolbar" aria-label="Quick words">
              {QUICK_WORDS.map(q => (
                <button
                  key={q}
                  type="button"
                  className={`quick-key${pressed === q ? ' quick-key--pressed' : ''}`}
                  onClick={() => tap(q)}
                >{q}</button>
              ))}
            </div>

            <div className="message-bar">
              <div className="message-words" aria-live="polite">
                {message.length === 0
                  ? <span className="message-placeholder">Tap words to build a message</span>
                  : message.map((m, i) => <span key={i} className="message-word">{m}</span>)}
              </div>
              <button type="button" className="message-btn" onClick={() => speak(message.join(' '))} aria-label="Speak the message" disabled={!message.length}>
                <StrokeSymbol name="speaker" size={20} />
              </button>
              <button type="button" className="message-btn" onClick={clear} aria-label="Clear the message" disabled={!message.length}>
                <StrokeSymbol name="delete" size={20} />
              </button>
              <button type="button" className="message-send" onClick={send} disabled={!message.length}>
                <StrokeSymbol name="send" size={18} /> Send
              </button>
            </div>

            <div className="board-grid">
              {CORE_WORDS.slice(0, 24).map((c, i) => (
                <div key={c.word} className={i >= 16 ? 'hide-narrow' : undefined}>
                  <BoardTile word={c.word} type={c.type} symbol={c.symbol} onTap={() => tap(c.word.toLowerCase() === 'i' ? 'I' : c.word)} pressed={pressed === c.word} />
                </div>
              ))}
              {FOLDERS.map((f, i) => (
                <div key={f.word} className={i >= 4 ? 'hide-narrow' : undefined}>
                  <BoardTile word={f.word} type="things" symbol={f.symbol} folder />
                </div>
              ))}
            </div>

            {brief && (
              <div className={`brief${brief.urgent ? ' brief--urgent' : ''}`} role="status">
                <div className="brief-head">
                  <StrokeSymbol name="message" size={18} />
                  <span>{brief.urgent ? 'Urgent message to Mum, sent at once' : 'Message to Mum'}</span>
                </div>
                <ol className="brief-list">
                  <li><strong>William said:</strong> &ldquo;{brief.text}&rdquo;</li>
                  <li><strong>What SENSay noticed:</strong> {brief.noticed}</li>
                  <li><strong>How you might respond:</strong> {brief.respond}</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="hero-caption">
        An example board: the same core words, colours and symbols as the app. Families add their own photos and words.
      </p>
    </section>
  )
}
