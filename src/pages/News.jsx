import React, { useMemo, useState } from 'react'
import { Closing } from '../components/Blocks.jsx'
import news from '../data/news.json'
import './news.css'

const TOPIC_COLOUR = {
  'Policy': 'var(--navy)',
  'Statistics': 'var(--blue)',
  'Speech and language': 'var(--green)',
  'Funding': 'var(--yellow)',
  'Inspection': 'var(--red)',
  'Local': 'var(--orange)',
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function NewsCard({ item, compact }) {
  return (
    <article className={`news-card${compact ? ' news-card--compact' : ''}`} style={{ '--c': TOPIC_COLOUR[item.topic] || 'var(--blue)' }}>
      <div className="news-card__meta">
        <span className="news-card__topic">{item.topic}</span>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>
      <h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
      <p>{item.summary}</p>
      {!compact && item.why && <p className="news-card__why"><strong>Why it matters:</strong> {item.why}</p>}
      <a className="news-card__source" href={item.url} target="_blank" rel="noopener noreferrer">
        Read at {item.source} ↗
      </a>
    </article>
  )
}

export default function News() {
  const topics = useMemo(() => ['All', ...Object.keys(TOPIC_COLOUR).filter(t => news.items.some(i => i.topic === t))], [])
  const [topic, setTopic] = useState('All')
  const items = news.items
    .filter(i => topic === 'All' || i.topic === topic)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <section className="s-hero" style={{ paddingBottom: '1rem' }}>
        <div className="s-wrap s-center">
          <span className="s-eyebrow">SEN news</span>
          <h1 className="s-h1">What's changing in SEND</h1>
          <p className="s-lead">
            The policy, statistics and research that matter to families, schools and therapists of children
            who communicate without speech. Summarised in plain English, with a link to every source.
          </p>
          <p className="s-caption">Updated {formatDate(news.updated)}</p>
        </div>
      </section>
      <section className="s-section s-section--white" style={{ paddingTop: '2rem' }}>
        <div className="s-wrap">
          <div className="news-filters" role="tablist" aria-label="Filter by topic">
            {topics.map(t => (
              <button key={t} type="button" role="tab" aria-selected={topic === t} className={topic === t ? 'is-active' : ''} onClick={() => setTopic(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="news-list">
            {items.map(i => <NewsCard key={i.url} item={i} />)}
          </div>
          <p className="s-caption s-center" style={{ marginTop: '2.5rem' }}>
            Summaries are SENSay's own. Each story belongs to its publisher; follow the link to read it in full.
            Something we should include? Email <a href="mailto:hello@sensay.uk?subject=SEN%20news" style={{ color: 'var(--blue-text)', fontWeight: 800 }}>hello@sensay.uk</a>.
          </p>
        </div>
      </section>
      <Closing />
    </>
  )
}
