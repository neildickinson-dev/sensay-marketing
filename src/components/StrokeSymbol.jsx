import React from 'react'

// The app's own core-word symbols (sensay-app src/components/board/core-symbols.ts):
// simple navy stroke drawings on a 24 by 24 grid. Copied unchanged so the
// website shows exactly what a child sees on the board.

const PERSON_HEAD = [[12, 7, 4]]
const PERSON_BODY = 'M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6'

export const SHAPES = {
  i: { circles: PERSON_HEAD, d: [PERSON_BODY] },
  you: { circles: [[15, 7, 3.5]], d: ['M9 21c1.2-3.5 3.4-5.5 6-5.5s4.8 2 6 5.5', 'M2 12h6', 'M5.5 9.5L8 12l-2.5 2.5'] },
  my: { circles: PERSON_HEAD, d: [PERSON_BODY, 'M9.5 18.5h5'] },
  want: { d: ['M4 12h13', 'M13 7l5 5-5 5'] },
  like: { d: ['M7 11v9H4v-9z', 'M7 11l4-7c1.4 0 2.5 1.1 2.5 2.5L13 10h5.3a2 2 0 012 2.4l-1.3 6A2 2 0 0117 20H7'] },
  go: { d: ['M3 8h4', 'M3 16h4', 'M9 12h11', 'M15 7l5 5-5 5'] },
  more: { d: ['M12 5v14', 'M5 12h14'] },
  finished: { rects: [[4, 4, 16, 16, 3]], d: ['M8 12.5l3 3 5-6'] },
  all_done: { d: ['M2.5 12.5l4 4L14 8', 'M10.5 16l.5.5L21.5 6'] },
  hello: { d: ['M7 11V7a2 2 0 014 0v4', 'M11 10V6a2 2 0 014 0v6', 'M15 11a2 2 0 014 0v2a7 7 0 01-14 0v-2'] },
  please: { d: ['M12 4v15', 'M12 4c-2 2.5-5 6.5-5 9.5 0 2.5 1.5 4.5 4 5.5', 'M12 4c2 2.5 5 6.5 5 9.5 0 2.5-1.5 4.5-4 5.5'] },
  not: { circles: [[12, 12, 8]], d: ['M6.5 6.5l11 11'] },
  stop: { d: ['M8 3h8l5 5v8l-5 5H8l-5-5V8z', 'M8 12h8'] },
  eat: { d: ['M4 12h16', 'M5 12a7 7 0 0014 0', 'M9 4v5', 'M12 3v6', 'M15 4v5'] },
  drink: { d: ['M7 4h10l-1.5 16h-7z', 'M7.5 9h9'] },
  make: { rects: [[3.5, 12.5, 7, 7, 1.2], [13.5, 12.5, 7, 7, 1.2], [8.5, 4, 7, 7, 1.2]] },
  look: { d: ['M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12z'], circles: [[12, 12, 3]] },
  big: { d: ['M4 9V4h5', 'M20 9V4h-5', 'M4 15v5h5', 'M20 15v5h-5'], rects: [[8, 8, 8, 8, 1.5]] },
  hot: { d: ['M12 3c3.5 4 6 6.5 6 10.5a6 6 0 01-12 0c0-3 1.8-4.5 3-6.5 1 2 2 2.6 3 1.6.4-1.9-.6-3.6 0-5.6z'] },
  that: { d: ['M3 21l9.5-9.5', 'M7.5 11.5h5v5'], circles: [[17, 7, 4]] },
  it: { rects: [[5, 5, 14, 14, 3]], dots: [[12, 12, 1.4]] },
  help: { circles: [[12, 12, 8.5], [12, 12, 3.5]], d: ['M6 6l3.5 3.5', 'M14.5 14.5L18 18', 'M18 6l-3.5 3.5', 'M9.5 14.5L6 18'] },
  play: { circles: [[12, 12, 8.5]], d: ['M3.5 12h17', 'M12 3.5c3 3 3 14 0 17', 'M12 3.5c-3 3-3 14 0 17'] },
  open: { d: ['M4 20V4h9v16H4', 'M13 4l6 2.5v16L13 20', 'M10 12v1'] },
  again: { d: ['M20 12a8 8 0 11-2.6-5.9', 'M20 4v5h-5'] },
  here: { d: ['M12 3v12', 'M7 10l5 5 5-5', 'M4 20h16'] },
  good: { circles: [[12, 12, 9]], dots: [[9, 10, 1], [15, 10, 1]], d: ['M8 14.5c1 1.8 2.4 2.7 4 2.7s3-.9 4-2.7'] },
  in: { rects: [[9, 4, 11, 16, 2]], d: ['M2 12h11', 'M9.5 8.5L13 12l-3.5 3.5'] },
  out: { rects: [[4, 4, 11, 16, 2]], d: ['M11 12h11', 'M18.5 8.5L22 12l-3.5 3.5'] },
  up: { d: ['M12 20V5', 'M6 11l6-6 6 6'] },
  down: { d: ['M12 4v15', 'M6 13l6 6 6-6'] },
  what: { d: ['M8.5 9a3.5 3.5 0 117 0c0 2.4-3.5 2.8-3.5 5.5'], dots: [[12, 18.5, 1.2]] },
  home: { d: ['M3 11l9-7 9 7', 'M5.5 9.5V20h13V9.5', 'M10 20v-5h4v5'] },
  back: { d: ['M15 5l-7 7 7 7'] },
  folder: { d: ['M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'] },
  topics: { rects: [[3, 3, 7.5, 7.5, 1.5], [13.5, 3, 7.5, 7.5, 1.5], [3, 13.5, 7.5, 7.5, 1.5], [13.5, 13.5, 7.5, 7.5, 1.5]] },
  speaker: { d: ['M4 9.5h3.5L12 5.5v13l-4.5-4H4z', 'M15.5 9a4 4 0 010 6', 'M18 6.5a7.5 7.5 0 010 11'] },
  delete: { d: ['M9 5h11v14H9l-6-7z', 'M12 9.5l5 5', 'M17 9.5l-5 5'] },
  send: { d: ['M4 12l16-8-6 16-2.5-6.5z', 'M11.5 13.5L20 4'] },
  message: { d: ['M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2h-8l-5 4v-4H5a2 2 0 01-2-2V6a2 2 0 012-2z'] },
  feel: { circles: [[12, 12, 9]], dots: [[9, 10.5, 1.1], [15, 10.5, 1.1]], d: ['M7.5 7.6l2.4-.8', 'M16.5 7.6l-2.4-.8', 'M8.5 14.5c1 1.5 2.2 2.2 3.5 2.2s2.5-.7 3.5-2.2'] },
  reach: { circles: [[14, 5.5, 2.5]], d: ['M2.5 14H6l3.5-2h4a1.5 1.5 0 010 3H10', 'M13.5 15H17l3-2.5a1.4 1.4 0 012 2L18 19H9l-3-1.5H2.5'] },
  need: { circles: [[12, 12, 9]], d: ['M12 7v6.5'], dots: [[12, 16.8, 1.2]] },
  love: { d: ['M12 20.5C6.5 16.8 3 13.3 3 9.4A4.6 4.6 0 0112 7.6a4.6 4.6 0 019 1.8c0 3.9-3.5 7.4-9 11.1z'] },
  place: { circles: [[12, 9.5, 2.5]], d: ['M12 21s-6.5-6-6.5-11.5a6.5 6.5 0 0113 0C18.5 15 12 21 12 21z'] },
  people: { circles: [[8.5, 8, 3], [16.5, 9, 2.5]], d: ['M2.5 20c.8-3.6 3.2-5.6 6-5.6s5.2 2 6 5.6', 'M15.2 14.3a5 5 0 011.3-.2c2.6 0 4.5 1.8 5.2 4.9'] },
  game: { d: ['M7 7.5h10a4.5 4.5 0 014.5 4.5v1a4.5 4.5 0 01-8 2.8h-3a4.5 4.5 0 01-8-2.8v-1A4.5 4.5 0 017 7.5z', 'M7.5 10.5v3.5', 'M5.75 12.25h3.5'], dots: [[15.5, 11, 1.1], [17.8, 13.3, 1.1]] },
  body: { circles: [[12, 4.8, 2.3]], d: ['M12 8.5v6.5', 'M5.5 10.5L12 9l6.5 1.5', 'M12 15l-3.5 6', 'M12 15l3.5 6'] },
  quick: { d: ['M2.5 12.5l3 3 5-6.5', 'M14.5 8.5l6 6', 'M20.5 8.5l-6 6'] },
  social: { d: ['M5 3.5h9a2 2 0 012 2v5a2 2 0 01-2 2H9.5L6 15.5v-3H5a2 2 0 01-2-2v-5a2 2 0 012-2z', 'M18.5 8h1A1.5 1.5 0 0121 9.5v5a1.5 1.5 0 01-1.5 1.5H19v3l-3.5-3H12a1.5 1.5 0 01-1.5-1.5'] },
  nav_core: { circles: [[12, 12, 9], [12, 12, 5.5]], dots: [[12, 12, 2]] },
  nav_quick: { d: ['M13 2.5L5 13.5h6l-1 8 8-11h-6z'] },
  nav_lists: { d: ['M9 6h11', 'M9 12h11', 'M9 18h11'], dots: [[4.5, 6, 1.3], [4.5, 12, 1.3], [4.5, 18, 1.3]] },
  nav_topics: { d: ['M4 4.5h11a2 2 0 012 2v6a2 2 0 01-2 2H9l-4 3.5v-3.5H4a2 2 0 01-2-2v-6a2 2 0 012-2z', 'M19.5 8.5h.5a2 2 0 012 2v6a2 2 0 01-2 2H20v3l-3.5-3h-4'] },
  nav_keyboard: { rects: [[2, 6, 20, 12, 2]], d: ['M7 14.5h10'], dots: [[6, 9.5, 0.9], [9.3, 9.5, 0.9], [12.6, 9.5, 0.9], [15.9, 9.5, 0.9], [19, 9.5, 0.9]] },
  nav_mine: { d: ['M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0112 7.2 4.3 4.3 0 0119.5 10c0 5.4-7.5 10-7.5 10z'] },
  search: { circles: [[10.5, 10.5, 6]], d: ['M15 15l5.5 5.5'] },
}

export default function StrokeSymbol({ name, size = 32, color = '#0A1F3D', strokeWidth = 2, title }) {
  const s = SHAPES[name]
  if (!s) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {(s.d || []).map((d, i) => <path key={`d${i}`} d={d} />)}
      {(s.circles || []).map(([cx, cy, r], i) => <circle key={`c${i}`} cx={cx} cy={cy} r={r} />)}
      {(s.rects || []).map(([x, y, w, h, rx], i) => <rect key={`r${i}`} x={x} y={y} width={w} height={h} rx={rx} />)}
      {(s.dots || []).map(([cx, cy, r], i) => <circle key={`o${i}`} cx={cx} cy={cy} r={r} fill={color} stroke="none" />)}
    </svg>
  )
}
