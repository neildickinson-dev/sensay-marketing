import React, { useState } from 'react'
import BoardTile from './BoardTile.jsx'
import StrokeSymbol from './StrokeSymbol.jsx'
import { CORE_WORDS, CORE_GRID, QUICK_WORDS, SECTIONS, LEVELS, WORD_TYPES } from '../data/board.js'
import './BoardMap.css'

const QUICK_TALK = [
  { word: 'happy', type: 'describing', picture: 'happy_man' },
  { word: 'sad', type: 'describing', picture: 'sad_man' },
  { word: 'worried', type: 'describing', picture: 'worried_man' },
  { word: 'scared', type: 'describing', picture: 'afraid_man' },
  { word: 'hello', type: 'social', picture: 'hello' },
  { word: 'thank you', type: 'social' },
  { word: 'wait please', type: 'social' },
  { word: 'my turn', type: 'social' },
  { word: 'I need a break', type: 'social' },
  { word: 'it hurts', type: 'no', picture: 'headache' },
  { word: "I don't understand", type: 'social' },
  { word: 'all done', type: 'social', symbol: 'all_done' },
]
const LISTS = [
  { word: 'Food', picture: 'pizza' }, { word: 'Drinks', picture: 'drink' }, { word: 'Fruit', picture: 'apple' },
  { word: 'Toys', picture: 'toys' }, { word: 'Music', picture: 'music' }, { word: 'Home', picture: 'house' },
  { word: 'School', picture: 'school' }, { word: 'Shops', picture: 'shop' }, { word: 'Sport', picture: 'football' },
  { word: 'Body', picture: 'headache' }, { word: 'People', picture: 'family' }, { word: 'Outside', picture: 'play_area' },
]
const TOPICS = [
  { word: 'Arriving at school', picture: 'school' }, { word: 'Swimming', picture: 'swim_to' },
  { word: 'Trampoline', picture: 'trampoline' }, { word: 'Bedtime', picture: 'bed_time' },
  { word: 'The shops', picture: 'shop' }, { word: 'The beach', picture: 'beach' },
  { word: 'Play time', picture: 'play_area' }, { word: 'Story time', picture: 'read_to' },
  { word: 'Ball games', picture: 'ball' }, { word: 'Snack time', picture: 'apple' },
  { word: 'Music lesson', picture: 'music' }, { word: 'Tablet time', picture: 'touch_screen' },
]
const MINE = [
  { word: 'Mum', picture: 'mum_parent', type: 'people' }, { word: 'Dad', picture: 'dad_parent', type: 'people' },
  { word: 'My family', picture: 'family', type: 'people' }, { word: 'Football', picture: 'football' },
  { word: 'Trampoline', picture: 'trampoline' }, { word: 'My music', picture: 'music' },
]
const KEYS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

function SectionView({ section, level }) {
  if (section === 'core') {
    // Which words show at each level follows the app's priority order; words
    // beyond the level leave an empty cell, so nothing else moves.
    const rank = new Map(CORE_WORDS.map((c, i) => [c.word.toLowerCase(), i]))
    const visible = (c) => {
      if (c.folder || level === 'full') return true
      const r = rank.get(c.word.toLowerCase())
      return r !== undefined && r < (level === 'first' ? 16 : 32)
    }
    return (
      <div className="bmap-grid bmap-grid--8">
        {CORE_GRID.map(c => (visible(c)
          ? <BoardTile key={c.word} word={c.word} type={c.type} symbol={c.symbol} picture={c.picture} folder={c.folder} size="sm" />
          : <BoardTile key={c.word} empty size="sm" />))}
      </div>
    )
  }
  if (section === 'quick') {
    return <div className="bmap-grid bmap-grid--6">{QUICK_TALK.map(q => <BoardTile key={q.word} word={q.word} type={q.type} picture={q.picture} symbol={q.symbol} size="sm" />)}</div>
  }
  if (section === 'lists') {
    return <div className="bmap-grid bmap-grid--6">{LISTS.map(q => <BoardTile key={q.word} word={q.word} type="things" picture={q.picture} folder size="sm" />)}</div>
  }
  if (section === 'topics') {
    return <div className="bmap-grid bmap-grid--6">{TOPICS.map(q => <BoardTile key={q.word} word={q.word} type="things" picture={q.picture} folder size="sm" />)}</div>
  }
  if (section === 'keyboard') {
    return (
      <div className="bmap-keyboard">
        <div className="bmap-predict">{['swimming', 'swing', 'sweets'].map(p => <span key={p}>{p}</span>)}</div>
        {KEYS.map(row => (
          <div key={row} className="bmap-keyrow">{row.split('').map(k => <span key={k} className="bmap-key">{k}</span>)}</div>
        ))}
        <div className="bmap-keyrow"><span className="bmap-key bmap-key--space">space</span></div>
      </div>
    )
  }
  return (
    <div className="bmap-grid bmap-grid--6">
      {MINE.map(q => <BoardTile key={q.word} word={q.word} type={q.type || 'things'} picture={q.picture} size="sm" />)}
      <div className="bmap-photo-note">Families add their own photos and videos here. A favourite drink can be the real bottle.</div>
    </div>
  )
}

export default function BoardMap() {
  const [section, setSection] = useState('core')
  const [level, setLevel] = useState('growing')
  const s = SECTIONS.find(x => x.key === section)

  return (
    <section className="section section--light" id="board">
      <div className="section-inner section-inner--wide">
        <div className="section-header">
          <div className="section-tag">The board</div>
          <h2>A board built to be learned, then left alone</h2>
          <p>
            Words keep their place on every page, at every level, after every change, because children
            learn a board by position. Six sections, one colour key, and six words that are always there.
          </p>
        </div>

        <div className="bmap">
          <div className="bmap-device">
            <div className="bmap-strip" aria-label="Always on screen">
              {QUICK_WORDS.map(q => <span key={q} className="bmap-strip__key">{q}</span>)}
            </div>
            <div className="bmap-body">
              <nav className="bmap-nav" aria-label="Board sections">
                {SECTIONS.map(x => (
                  <button
                    key={x.key}
                    type="button"
                    className={section === x.key ? 'is-active' : ''}
                    onClick={() => setSection(x.key)}
                    aria-pressed={section === x.key}
                  >
                    <StrokeSymbol name={x.nav} size={20} />
                    <span>{x.name}</span>
                  </button>
                ))}
              </nav>
              <div className="bmap-view">
                <SectionView section={section} level={level} />
              </div>
            </div>
          </div>

          <div className="bmap-info">
            <div className="bmap-card">
              <div className="bmap-card__count">{s.count}</div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              {section === 'core' && (
                <div className="bmap-levels" role="radiogroup" aria-label="Vocabulary level">
                  {LEVELS.map(l => (
                    <button key={l.key} type="button" role="radio" aria-checked={level === l.key} className={level === l.key ? 'is-active' : ''} onClick={() => setLevel(l.key)}>
                      {l.name}
                    </button>
                  ))}
                  <p className="bmap-levels__text">{LEVELS.find(l => l.key === level).text} Hidden words leave empty cells, so nothing moves.</p>
                </div>
              )}
            </div>

            <div className="bmap-card bmap-card--strip">
              <h4>Always there</h4>
              <p><strong>Yes, no, stop, help, pain</strong> and <strong>toilet</strong> sit in the same strip on every page. Pain, help, stop and toilet reach adults at once, marked urgent.</p>
            </div>

            <div className="bmap-card">
              <h4>Colour by word type</h4>
              <ul className="bmap-key-list">
                {Object.entries(WORD_TYPES).map(([k, t]) => (
                  <li key={k}>
                    <span className="bmap-swatch" style={{ background: t.fill, borderColor: t.border }} />
                    <span><strong>{t.name}</strong> {t.example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="bmap-foot">Symbols: Mulberry Symbol Set, Steve Lee, CC BY-SA 4.0. Core words use SENSay's own symbols.</p>
      </div>
    </section>
  )
}
