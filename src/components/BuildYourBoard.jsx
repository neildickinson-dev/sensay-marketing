import React, { useState } from 'react'
import BoardTile from './BoardTile.jsx'
import StrokeSymbol from './StrokeSymbol.jsx'
import './BuildYourBoard.css'

// How the profile, documents and pictures shape a child's board (parents
// guide section 2; product guide section 4). An illustrative family.

const STEPS = [
  { key: 'profile', title: 'Tell us about your child', short: 'Profile' },
  { key: 'docs', title: 'Add their documents', short: 'Documents' },
  { key: 'pictures', title: 'Use real pictures', short: 'Pictures' },
  { key: 'board', title: 'Their board, ready', short: 'The board' },
]

const PROFILE = [
  ['Name', 'William, 11'],
  ['People', 'Mum, Dad, his brother, Nanny Sue'],
  ['School days', 'Monday to Friday'],
  ['Favourites', 'Vimto, crisps, the trampoline'],
  ['What helps him feel calm', 'Music'],
]

const SUGGESTIONS = [
  { id: 'swim', text: 'Enjoys swimming on Saturdays', from: 'EHCP, section A', adds: 'Swimming on Activities' },
  { id: 'nuts', text: 'Nut allergy', from: 'GP letter', adds: 'Hides nuts everywhere on the board', restriction: true },
  { id: 'level', text: 'Uses 2 to 3 symbols in a message', from: 'Speech and language report', adds: 'Board level: Growing' },
  { id: 'break', text: 'Asks for a break by pushing work away', from: 'EHCP, section B', adds: '"I need a break" on Quick talk' },
]

function Pill({ children, tone = 'blue' }) {
  return <span className={`byb-pill byb-pill--${tone}`}>{children}</span>
}

export default function BuildYourBoard() {
  const [step, setStep] = useState(0)
  const [accepted, setAccepted] = useState({ swim: true, nuts: true, level: true, break: false })
  const [realPicture, setRealPicture] = useState(true)
  const [photoFamily, setPhotoFamily] = useState(true)

  const toggle = (id) => setAccepted(a => ({ ...a, [id]: !a[id] }))
  const s = STEPS[step]

  // The board preview, built from what has been chosen so far.
  const people = [
    { word: 'Mum', picture: photoFamily ? 'mum_parent' : null, symbol: 'i', badge: 'Profile' },
    { word: 'Dad', picture: photoFamily ? 'dad_parent' : null, symbol: 'i', badge: 'Profile' },
    { word: 'Brother', picture: photoFamily ? 'family' : null, symbol: 'people', badge: 'Profile' },
    { word: 'Nanny Sue', picture: 'grandmother', badge: 'Profile' },
  ]
  const food = [
    { word: 'Vimto', picture: realPicture ? 'w-vimto.svg' : 'drink', badge: realPicture ? 'Real picture' : 'Profile' },
    { word: 'crisps', picture: 'crisps', badge: 'Profile' },
    { word: 'milk', picture: 'milk' },
    { word: 'chips', picture: 'chips' },
    accepted.nuts ? { hidden: true } : { word: 'nuts', picture: 'nuts' },
    { word: 'sweets', picture: 'sweet' },
  ]
  const activities = [
    { word: 'trampoline', picture: 'trampoline', badge: 'Profile' },
    { word: 'music', picture: 'music', badge: 'Profile' },
    accepted.swim ? { word: 'swimming', picture: 'swim_to', badge: 'EHCP' } : { hidden: true },
  ]

  return (
    <section className="section section--white" id="build">
      <div className="section-inner section-inner--wide">
        <div className="section-header">
          <div className="section-tag">Setting up</div>
          <h2>A board that already knows your child</h2>
          <p>
            Most boards start blank and take weeks to fill. SENSay builds the first version from what you
            tell it, the documents you already have and real pictures of the things your child loves.
            Try it with William's example.
          </p>
        </div>

        <ol className="byb-steps" aria-label="Setting up steps">
          {STEPS.map((x, i) => (
            <li key={x.key}>
              <button type="button" className={`byb-step${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`} onClick={() => setStep(i)} aria-current={i === step ? 'step' : undefined}>
                <span className="byb-step__num">{i < step ? '✓' : i + 1}</span>
                <span className="byb-step__name">{x.short}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="byb">
          <div className="byb-panel">
            <h3>{s.title}</h3>

            {s.key === 'profile' && (
              <>
                <p>A few questions when you sign up, about ten minutes. Everything here can be changed later.</p>
                <dl className="byb-profile">
                  {PROFILE.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
                </dl>
                <p className="byb-note"><StrokeSymbol name="people" size={18} /> The people you add appear on the People pages with the right picture. Favourite foods, places and activities appear on the matching word lists.</p>
              </>
            )}

            {s.key === 'docs' && (
              <>
                <p>Upload an EHCP, a therapy report or a letter, as a PDF, Word file, photo or pasted text. SENSay's AI reads it and suggests what to add. <strong>Nothing is saved until you check each item.</strong></p>
                <div className="byb-docs">
                  {['EHCP 2026.pdf', 'Speech and language report.docx', 'GP letter.jpg'].map(d => (
                    <span key={d} className="byb-doc"><StrokeSymbol name="folder" size={16} /> {d}</span>
                  ))}
                </div>
                <ul className="byb-suggest">
                  {SUGGESTIONS.map(x => (
                    <li key={x.id} className={accepted[x.id] ? 'is-on' : ''}>
                      <label>
                        <input type="checkbox" checked={!!accepted[x.id]} onChange={() => toggle(x.id)} />
                        <span>
                          <strong>{x.text}</strong>
                          <small>Found in: {x.from} · {x.adds}</small>
                        </span>
                      </label>
                      {x.restriction && <Pill tone="red">Restriction</Pill>}
                    </li>
                  ))}
                </ul>
                <p className="byb-note"><StrokeSymbol name="need" size={18} /> Allergies and food rules hide matching words everywhere. If they can't be loaded, food and drink stay hidden until they can.</p>
              </>
            )}

            {s.key === 'pictures' && (
              <>
                <p>Every word has a symbol already. You can swap any of them for something your child will recognise straight away.</p>
                <div className="byb-swap">
                  <div className="byb-swap__row">
                    <div className="byb-swap__tile"><BoardTile word="Vimto" type="things" picture="drink" /></div>
                    <span className="byb-arrow" aria-hidden="true">→</span>
                    <div className="byb-swap__tile"><BoardTile word="Vimto" type="things" picture="w-vimto.svg" /></div>
                    <div className="byb-swap__text">
                      <strong>Find a real picture</strong>
                      <span>SENSay searches open picture libraries and Open Food Facts for branded food and drink, and picks the clearest. Vimto gets the real bottle.</span>
                      <label className="byb-toggle"><input type="checkbox" checked={realPicture} onChange={e => setRealPicture(e.target.checked)} /> Use the real picture</label>
                    </div>
                  </div>
                  <div className="byb-swap__row">
                    <div className="byb-swap__tile"><BoardTile word="Mum" type="people" symbol="i" /></div>
                    <span className="byb-arrow" aria-hidden="true">→</span>
                    <div className="byb-swap__tile"><BoardTile word="Mum" type="people" picture="mum_parent" /></div>
                    <div className="byb-swap__text">
                      <strong>Your own photos</strong>
                      <span>Add a photo of Mum, Nanny Sue, the school gate or a favourite toy. The tile stays in the same place.</span>
                      <label className="byb-toggle"><input type="checkbox" checked={photoFamily} onChange={e => setPhotoFamily(e.target.checked)} /> Use family pictures</label>
                    </div>
                  </div>
                </div>
                <p className="byb-caption">On this page the family photos are shown as symbols, to keep a real family's pictures private.</p>
              </>
            )}

            {s.key === 'board' && (
              <>
                <p>William's board opens on the core words every child shares, and his own words are already where he will look for them.</p>
                <ul className="byb-summary">
                  <li><Pill>Profile</Pill> 4 people, 3 favourites and what helps him feel calm</li>
                  <li><Pill tone="green">EHCP</Pill> {Object.values(accepted).filter(Boolean).length} suggestions you confirmed</li>
                  <li><Pill tone="yellow">Pictures</Pill> {realPicture ? 'The real Vimto bottle' : 'Built-in symbols'}{photoFamily ? ' and family pictures' : ''}</li>
                  {accepted.nuts && <li><Pill tone="red">Hidden</Pill> Nuts, on every page, because of the allergy</li>}
                  {accepted.level && <li><Pill tone="navy">Level</Pill> Growing: about 32 core words, with room to grow</li>}
                </ul>
              </>
            )}

            <div className="byb-nav">
              <button type="button" className="btn btn--outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>Back</button>
              {step < STEPS.length - 1
                ? <button type="button" className="btn btn--primary" onClick={() => setStep(step + 1)}>Next: {STEPS[step + 1].short}</button>
                : <a className="btn btn--primary" href="https://app.sensay.uk">Try the live demo</a>}
            </div>
          </div>

          <div className="byb-preview" aria-label="William's board, as it builds">
            <div className="byb-preview__bar">
              <span>William's board</span>
              <span className="byb-preview__chip">Builds as you go</span>
            </div>
            <div className="byb-preview__body">
              <div className="byb-page">
                <h4><StrokeSymbol name="people" size={16} /> People</h4>
                <div className="byb-grid">
                  {people.map(p => (
                    <div key={p.word} className="byb-cell">
                      <BoardTile word={p.word} type="people" picture={p.picture || undefined} symbol={p.picture ? undefined : p.symbol} size="sm" />
                      {p.badge && step >= 0 && <span className="byb-badge">{p.badge}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="byb-page">
                <h4><StrokeSymbol name="eat" size={16} /> Food and drink</h4>
                <div className="byb-grid byb-grid--6">
                  {food.map((f, i) => f.hidden
                    ? <div key={`h${i}`} className="byb-cell"><BoardTile empty size="sm" /><span className="byb-badge byb-badge--red">Hidden</span></div>
                    : (
                      <div key={f.word} className="byb-cell">
                        <BoardTile word={f.word} type="things" picture={f.picture} size="sm" />
                        {f.badge && <span className={`byb-badge${f.badge === 'Real picture' ? ' byb-badge--yellow' : ''}`}>{f.badge}</span>}
                      </div>
                    ))}
                </div>
              </div>
              <div className="byb-page">
                <h4><StrokeSymbol name="game" size={16} /> Things to do</h4>
                <div className="byb-grid">
                  {activities.map((a, i) => a.hidden
                    ? <div key={`a${i}`} className="byb-cell"><BoardTile empty size="sm" /></div>
                    : (
                      <div key={a.word} className="byb-cell">
                        <BoardTile word={a.word} type="actions" picture={a.picture} size="sm" />
                        {a.badge && <span className={`byb-badge${a.badge === 'EHCP' ? ' byb-badge--green' : ''}`}>{a.badge}</span>}
                      </div>
                    ))}
                  <div className="byb-cell"><BoardTile empty size="sm" /></div>
                </div>
              </div>
              {accepted.break && (
                <div className="byb-page">
                  <h4><StrokeSymbol name="nav_quick" size={16} /> Quick talk</h4>
                  <div className="byb-grid">
                    <div className="byb-cell"><BoardTile word="I need a break" type="social" size="sm" /><span className="byb-badge byb-badge--green">EHCP</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
