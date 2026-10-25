import React from 'react'
import StrokeSymbol from './StrokeSymbol.jsx'
import { WORD_TYPES } from '../data/board.js'
import './BoardTile.css'

// One cell of the child's board, drawn the way the app draws it: filled in
// its word-type colour with a 3 px border in the stronger shade, a navy
// symbol above a Nunito label. Folders carry a small folder mark.
export default function BoardTile({ word, type = 'things', symbol, picture, folder, empty, onTap, size = 'md', pressed }) {
  if (empty) return <div className={`btile btile--${size} btile--empty`} aria-hidden="true" />
  const textOnly = !picture && !symbol
  const c = WORD_TYPES[type] || WORD_TYPES.things
  const style = { background: pressed ? c.border : c.fill, borderColor: c.border }
  const content = (
    <>
      {folder && <span className="btile__folder" aria-hidden="true"><StrokeSymbol name="folder" size={12} strokeWidth={2.4} /></span>}
      {!textOnly && <span className="btile__pic" aria-hidden="true">
        {picture
          ? <img src={`/symbols/${picture.includes('.') ? picture : `${picture}.png`}`} alt="" loading="lazy" width="64" height="64" />
          : <StrokeSymbol name={symbol} size={size === 'sm' ? 18 : 30} />}
      </span>}
      <span className={`btile__label${textOnly ? ' btile__label--big' : ''}${word.length > 6 ? ' btile__label--long' : ''}`}>{word}</span>
    </>
  )
  if (!onTap) return <div className={`btile btile--${size}`} style={style}>{content}</div>
  return (
    <button type="button" className={`btile btile--${size}`} style={style} onClick={onTap} aria-label={word}>
      {content}
    </button>
  )
}
