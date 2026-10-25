import React, { useState } from 'react'
import './ConnectedMap.css'

// How one child's record connects home, school and therapy (product guide,
// sections 6 to 10). Click a place to see what those adults add and see.
const NODES = {
  home: {
    name: 'Home',
    who: 'Parents and carers',
    picture: '/symbols/home.svg',
    colour: 'yellow',
    add: [
      'The child\'s profile, people, favourites and photos',
      '"Was this right?" on each message: got it, couldn\'t, playing, not sure',
      'Who sees what: the school link code and therapist sharing',
    ],
    see: [
      'Every message by email or text, with a short brief',
      'Patterns by time of day, day of the week and setting',
      'A weekly report, plus targets and therapy notes from school',
    ],
  },
  school: {
    name: 'School',
    who: 'Teachers, teaching assistants and SENCOs',
    picture: '/symbols/school.svg',
    colour: 'blue',
    add: [
      'Evidence recorded in class, with the pupil\'s own words',
      'Targets, plans and teaching aids sent to the pupil\'s board',
      'The pupil\'s and parent\'s views for reviews',
    ],
    see: [
      'Today\'s urgent messages and reviews coming up',
      'Evidence against each target, over months',
      'Review evidence packs and labelled drafts for Section B',
    ],
  },
  clinic: {
    name: 'Therapy',
    who: 'Speech and language therapists and clinicians',
    picture: '/symbols/therapist.svg',
    colour: 'green',
    add: [
      'Notes with advice for home and school, which both see',
      'Targets agreed with the family and school',
    ],
    see: [
      'Children the family shares: everything, or plans and progress only',
      'Communication between appointments, by setting',
      'A printable appointment summary built from the record',
    ],
  },
}

const RECORD = {
  name: 'The child\'s record',
  lines: [
    'Every message, with time, place and setting',
    'Owned by the family; nothing is shared without them',
    'Stored in the EU, encrypted, with access controls on every table',
  ],
}

export default function ConnectedMap() {
  const [active, setActive] = useState('home')
  const node = NODES[active]

  return (
    <section className="section section--white" id="connected">
      <div className="section-inner section-inner--wide">
        <div className="section-header">
          <div className="section-tag">Home, school and therapy</div>
          <h2>One child. One record. Everyone on the same page.</h2>
          <p>
            Today a child's communication is scattered across a home diary, a school log and a
            therapist's notes. SENSay keeps one record that each adult adds to and sees, with the
            family in control of who sees what.
          </p>
        </div>

        <div className="cmap">
          <div className="cmap-diagram" role="group" aria-label="Home, school and therapy, connected through the child's record">
            <svg className="cmap-lines" viewBox="0 0 600 440" aria-hidden="true" preserveAspectRatio="none">
              <defs>
                <path id="cm-home" d="M120 95 L300 225" />
                <path id="cm-school" d="M480 95 L300 225" />
                <path id="cm-clinic" d="M300 385 L300 225" />
              </defs>
              <use href="#cm-home" className={`cmap-line${active === 'home' ? ' is-on' : ''}`} />
              <use href="#cm-school" className={`cmap-line${active === 'school' ? ' is-on' : ''}`} />
              <use href="#cm-clinic" className={`cmap-line${active === 'clinic' ? ' is-on' : ''}`} />
              {['home', 'school', 'clinic'].map((k, i) => (
                <g key={k} className="cmap-flow">
                  <circle r="5" className={`cmap-dot cmap-dot--${NODES[k].colour}`}>
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 0.9}s`}><mpath href={`#cm-${k}`} /></animateMotion>
                  </circle>
                  <circle r="4" className="cmap-dot cmap-dot--navy">
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 0.9 + 1.6}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href={`#cm-${k}`} /></animateMotion>
                  </circle>
                </g>
              ))}
            </svg>

            {Object.entries(NODES).map(([key, n]) => (
              <button
                key={key}
                type="button"
                className={`cmap-node cmap-node--${key} cmap-node--${n.colour}${active === key ? ' is-active' : ''}`}
                onClick={() => setActive(key)}
                aria-pressed={active === key}
              >
                <img src={n.picture} alt="" width="56" height="56" />
                <span className="cmap-node__name">{n.name}</span>
                <span className="cmap-node__who">{n.who}</span>
              </button>
            ))}

            <div className="cmap-record">
              <img src="/sensay-logo.svg" alt="SENSay" width="104" height="30" />
              <span className="cmap-record__name">{RECORD.name}</span>
            </div>
          </div>

          <div className={`cmap-panel cmap-panel--${node.colour}`} aria-live="polite">
            <div className="cmap-panel__head">
              <img src={node.picture} alt="" width="44" height="44" />
              <div>
                <h3>{node.name}</h3>
                <p>{node.who}</p>
              </div>
            </div>
            <div className="cmap-panel__cols">
              <div>
                <h4>What they add</h4>
                <ul>{node.add.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <h4>What they see</h4>
                <ul>{node.see.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <div className="cmap-panel__record">
              <h4>{RECORD.name}</h4>
              <ul>{RECORD.lines.map(x => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="cmap-tabs" role="tablist" aria-label="Choose a place">
              {Object.entries(NODES).map(([key, n]) => (
                <button key={key} type="button" role="tab" aria-selected={active === key} className={active === key ? 'is-active' : ''} onClick={() => setActive(key)}>{n.name}</button>
              ))}
            </div>
          </div>
        </div>

        <p className="cmap-foot">
          Children who use another communication aid, such as TD Snap or Grid 3, can join the same
          record through <strong>SENSay Connect</strong>, which reads the device's usage reports for
          AAC services and schools.
        </p>
      </div>
    </section>
  )
}
