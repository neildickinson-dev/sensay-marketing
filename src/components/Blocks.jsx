import React from 'react'
import { Link } from 'react-router-dom'

/** A real screenshot in a tablet frame. */
export function Tablet({ src, alt, caption }) {
  return (
    <figure>
      <div className="s-tablet"><img src={src} alt={alt} loading="lazy" /></div>
      {caption ? <figcaption className="s-caption">{caption}</figcaption> : null}
    </figure>
  )
}

/** A real screenshot in a browser window. */
export function Browser({ src, alt, caption }) {
  return (
    <figure>
      <div className="s-browser">
        <div className="s-browser__bar"><span /><span /><span /></div>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {caption ? <figcaption className="s-caption">{caption}</figcaption> : null}
    </figure>
  )
}

/** A plain screenshot, such as an email. */
export function Shot({ src, alt, caption, maxWidth }) {
  return (
    <figure style={{ maxWidth, margin: maxWidth ? '0 auto' : undefined }}>
      <img className="s-shot" src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption className="s-caption">{caption}</figcaption> : null}
    </figure>
  )
}

/** Text beside a picture. `flip` puts the picture first on wide screens. */
export function Split({ eyebrow, colour, title, lead, points, children, flip, actions }) {
  return (
    <div className={`s-split${flip ? ' s-split--flip' : ''}`}>
      <div>
        {eyebrow ? <span className={`s-eyebrow${colour ? ` s-eyebrow--${colour}` : ''}`}>{eyebrow}</span> : null}
        <h2 className="s-h2">{title}</h2>
        {lead ? <p className="s-lead">{lead}</p> : null}
        {points ? (
          <ul className="s-list">
            {points.map(([b, t]) => (
              <li key={b}><span className="s-tick" aria-hidden="true">✓</span><span><b>{b}</b> {t}</span></li>
            ))}
          </ul>
        ) : null}
        {actions ? <div className="s-actions">{actions}</div> : null}
      </div>
      <div>{children}</div>
    </div>
  )
}

/** A card that links to a page. */
export function PathCard({ to, who, title, body, colour }) {
  return (
    <Link to={to} className="s-card" style={{ '--c': colour }}>
      <span className="s-card__who">{who}</span>
      <h3 className="s-h3">{title}</h3>
      <p>{body}</p>
      <span className="s-card__more">Find out more</span>
    </Link>
  )
}

/** The three promises, on navy. */
export function Promises() {
  return (
    <section className="s-section s-section--navy">
      <div className="s-wrap">
        <div className="s-center">
          <span className="s-eyebrow">Our promises</span>
          <h2 className="s-h2">Built by a family, for families</h2>
        </div>
        <div className="s-promises">
          <div className="s-promise">
            <h3>A voice is never for sale</h3>
            <p>The board, the voice and sending a message always work, on every plan, with or without AI. If the AI is off or busy, the board sends exactly what the child tapped.</p>
          </div>
          <div className="s-promise">
            <h3>The child's words come first</h3>
            <p>Every message leads with what the child said. Anything SENSay adds is labelled as a suggestion for the adult, never as the child's words, and never shown to the child.</p>
          </div>
          <div className="s-promise">
            <h3>Children's data is protected</h3>
            <p>Held in the EU, encrypted, never sold and never used to train AI. Families decide who sees it, and can delete it at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Closing call to action. */
export function Closing({ title = 'See SENSay for yourself', lead = 'Try the live demo with example data, or book a 20-minute walk-through with Kirsty.' }) {
  return (
    <section className="s-section s-section--white">
      <div className="s-wrap s-center">
        <h2 className="s-h2">{title}</h2>
        <p className="s-lead">{lead}</p>
        <div className="s-actions" style={{ justifyContent: 'center' }}>
          <a className="s-btn s-btn--primary" href="https://app.sensay.uk">Try the live demo</a>
          <a className="s-btn s-btn--ghost" href="mailto:hello@sensay.uk?subject=SENSay%20demo">Book a demo</a>
        </div>
      </div>
    </section>
  )
}
