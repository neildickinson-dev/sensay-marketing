// The child's board, mirrored from the app (sensay-app src/domain/board-core.ts,
// src/constants/brand-tokens.ts). Keep in step with the app when it changes.

// Colour by word type (modified Fitzgerald key on the SENSay colours).
export const WORD_TYPES = {
  people:     { fill: '#FFE9A8', border: '#FDB913', name: 'People',          example: 'I, you, mum' },
  actions:    { fill: '#C8EED6', border: '#00A651', name: 'Actions',         example: 'want, go, eat' },
  describing: { fill: '#C9EDFB', border: '#00AEEF', name: 'Describing words', example: 'more, big, hot' },
  things:     { fill: '#FFD9B3', border: '#F28C28', name: 'Things and folders', example: 'that, it, food' },
  social:     { fill: '#F7D3E6', border: '#D9559A', name: 'Social words',    example: 'hello, please' },
  no:         { fill: '#FBCACC', border: '#ED1C24', name: 'No and stop',     example: 'not, stop' },
}

const w = (word, type, symbol) => ({ word, type, symbol })

// Core words in the app's priority order (first 32 of the 43).
export const CORE_WORDS = [
  w('I', 'people', 'i'), w('you', 'people', 'you'), w('want', 'actions', 'want'), w('like', 'actions', 'like'),
  w('go', 'actions', 'go'), w('more', 'describing', 'more'), w('finished', 'social', 'finished'), w('hello', 'social', 'hello'),
  w('not', 'no', 'not'), w('eat', 'actions', 'eat'), w('drink', 'actions', 'drink'), w('make', 'actions', 'make'),
  w('look', 'actions', 'look'), w('big', 'describing', 'big'), w('hot', 'describing', 'hot'), w('please', 'social', 'please'),
  w('that', 'things', 'that'), w('it', 'things', 'it'), w('help', 'actions', 'help'), w('play', 'actions', 'play'),
  w('open', 'actions', 'open'), w('again', 'describing', 'again'), w('here', 'describing', 'here'), w('my', 'people', 'my'),
  w('stop', 'no', 'stop'), w('good', 'describing', 'good'), w('all done', 'social', 'all_done'), w('in', 'describing', 'in'),
  w('out', 'describing', 'out'), w('up', 'describing', 'up'), w('down', 'describing', 'down'), w('what', 'describing', 'what'),
]

// Always on screen, always in this order, always red.
export const QUICK_WORDS = ['yes', 'no', 'stop', 'help', 'pain', 'toilet']

// Topic folders along the bottom row of the core page.
export const FOLDERS = [
  { word: 'Feelings', symbol: 'feel' },
  { word: 'I want', symbol: 'reach' },
  { word: 'I need', symbol: 'need' },
  { word: 'I love', symbol: 'love' },
  { word: 'Places', symbol: 'place' },
  { word: 'People', symbol: 'people' },
  { word: 'Things to do', symbol: 'game' },
  { word: 'My body', symbol: 'body' },
]

// The board's six sections, as in the left-hand column of the app.
export const SECTIONS = [
  {
    key: 'core', nav: 'nav_core', name: 'Core words', count: '43 words, 5 folders',
    text: 'The words children use most, such as I, want, more, help, go and all done, in fixed places so a child learns them by position, not by reading.',
    pictures: [],
  },
  {
    key: 'quick', nav: 'nav_quick', name: 'Quick talk', count: 'Phrases and feelings',
    text: 'Ready-made phrases, feelings and social language: hello, thank you, I need a break, it hurts, I don\'t understand.',
    pictures: ['happy_man', 'sad_man', 'worried_man', 'afraid_man'],
  },
  {
    key: 'lists', nav: 'nav_lists', name: 'Word lists', count: '32 lists',
    text: 'Food, drinks, animals, people, body, health, clothes, home, places, school, toys, transport, colours, time and weather.',
    pictures: ['pizza', 'apple', 'drink', 'toys'],
  },
  {
    key: 'topics', nav: 'nav_topics', name: 'Topics', count: '36 everyday situations',
    text: 'Words for the moment the child is in, from arriving at school to bath time, the shops, swimming and the trampoline.',
    pictures: ['school', 'swim_to', 'trampoline', 'bed_time'],
  },
  {
    key: 'keyboard', nav: 'nav_keyboard', name: 'Keyboard', count: 'Letters and prediction',
    text: 'Letters, numbers and word prediction that learns from the child\'s own words first, for children who are starting to spell.',
    pictures: [],
  },
  {
    key: 'mine', nav: 'nav_mine', name: 'My words', count: 'The family\'s own pages',
    text: 'The family\'s own pages, photos, videos and favourites. A favourite drink can be the real bottle, not a drawing.',
    pictures: ['family', 'mum_parent', 'football', 'music'],
  },
]

// Levels: hidden words leave empty cells, so nothing moves as the board grows.
export const LEVELS = [
  { key: 'first', name: 'First words', words: 16, text: 'About 16 core words for a child who is just starting.' },
  { key: 'growing', name: 'Growing', words: 32, text: 'About 32 words. New words appear around the ones the child already knows.' },
  { key: 'full', name: 'Full', words: 43, text: 'All 43 core words and 5 folders.' },
]
