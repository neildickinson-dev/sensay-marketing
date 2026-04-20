import React from 'react'
import './DraftSample.css'

/**
 * Styled EHCP Section B draft excerpt.
 * Shared between /senco (See it working) and /home (Proof, not promises).
 * Copy stays in one place so both pages stay in sync.
 */
export default function DraftSample() {
  return (
    <div className="draft-block" role="region" aria-label="Sample EHCP Section B draft">
      <div className="draft-block__banner">[DRAFT — REVIEW BEFORE USE]</div>
      <div className="draft-block__meta">
        Generated 20 Apr 2026 · 19 evidence observations · claude-sonnet-4-6 · prompt v1.1.0
      </div>

      <h4 className="draft-block__heading">OVERALL SUMMARY</h4>
      <p className="draft-block__p">
        Sophie is developing a functional symbol-based communication system, with at least four
        symbols now produced independently and a consistent upward vocabulary trajectory across
        the term; her symbol use is most reliable in structured 1:1 sessions with a familiar adult
        during morning hours, and varies markedly in whole-class and afternoon contexts. She also
        demonstrates an emerging capacity to identify and independently manage her own sensory
        needs, selecting ear defenders and quiet spaces without adult prompting across multiple
        observed occasions. Three EHCP areas lack sufficient evidence to support a narrative at
        this time and are flagged for further observation.
      </p>

      <h4 className="draft-block__heading">
        COMMUNICATION AND INTERACTION <span className="draft-block__items">[14 items]</span>
      </h4>
      <p className="draft-block__p">
        Sophie demonstrates a growing functional symbol vocabulary across the evidence window. She
        independently produces 'more', 'yes', 'finished', and 'help' in appropriate contexts
        without adult prompting…
      </p>

      <p className="draft-block__pattern">
        Pattern: Sophie's symbol response latency is consistently higher in afternoon sessions than
        morning sessions, a difference observed across four separate weeks this term.
      </p>

      <h4 className="draft-block__heading">COGNITION AND LEARNING</h4>
      <div className="draft-block__nev">
        Not enough evidence yet — 0 of 3 rows. Run a few more activities in this area before
        regenerating.
      </div>
    </div>
  )
}
