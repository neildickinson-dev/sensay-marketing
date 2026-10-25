// Downloadable guides in public/guides. File names keep their spaces; links encode them.
const href = (name) => `/guides/${encodeURIComponent(name)}`

export const GUIDES = [
  {
    key: 'families', who: 'Families', colour: 'var(--yellow)',
    title: 'Guide for parents and carers',
    body: 'Setting up and changing the board, messages by email and text with replies, the patterns behind them, sharing with school and therapists, and your choices about AI and data.',
    file: 'SENSay Guide for Parents and Carers.pdf', pages: 7, size: '616 KB',
  },
  {
    key: 'schools', who: 'Schools and SENCOs', colour: 'var(--green)',
    title: 'Guide for teachers and SENCOs',
    body: 'Setting up your school, the board in class, the Today page, recording evidence, review packs and Section B drafts, teaching aids, data protection and licences.',
    file: 'SENSay Guide for Teachers and SENCOs.pdf', pages: 6, size: '452 KB',
  },
  {
    key: 'therapists', who: 'Therapists', colour: 'var(--red)',
    title: 'Guide for therapists',
    body: 'How families share a child with you, your caseload, appointment summaries, notes with advice for home and school, and what the data can and cannot tell you.',
    file: 'SENSay Guide for Therapists.pdf', pages: 5, size: '284 KB',
  },
  {
    key: 'connect', who: 'AAC services', colour: 'var(--blue)',
    title: 'SENSay Connect guide for AAC services',
    body: 'Reading usage from TD Snap, Grid 3, PRC-Saltillo devices and others, who needs you this week, the service summary, and the free 90-day trial.',
    file: 'SENSay Guide for AAC Services.pdf', pages: 6, size: '304 KB',
  },
  {
    key: 'product', who: 'Everyone', colour: 'var(--navy)',
    title: 'SENSay product guide',
    body: 'The whole of SENSay in one place: the board, the message brief, the family, school and clinician sides, Connect, and how data is kept safe.',
    file: 'SENSay Product Guide.pdf', pages: 7, size: '748 KB',
  },
].map(g => ({ ...g, href: href(g.file) }))

export const guideHref = (key) => GUIDES.find(g => g.key === key).href
