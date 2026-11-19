// Website enquiry form handler (Vercel serverless function).
// Sends each enquiry to hello@sensay.uk through Resend, with Reply-To set to the visitor.
// Needs RESEND_API_KEY in the Vercel project's environment variables. Optional:
// ENQUIRY_TO (default hello@sensay.uk) and ENQUIRY_FROM (default website@sensay.uk,
// which must be on a domain verified in Resend). If the key is missing this returns 503
// and the contact page falls back to opening the visitor's email app.

const TOPICS = {
  demo: 'Demo request',
  school: 'Founding school interest',
  family: 'Family plan interest',
  connect: 'SENSay Connect trial',
  general: 'General enquiry',
}
const TYPES = [
  'Parent or carer',
  'Teacher or SENCO',
  'Headteacher or school leader',
  'Speech and language therapist',
  'AAC service or other healthcare professional',
  'Local authority',
  'Journalist or content creator',
  'Other',
]

const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max)
const oneLine = (v, max) => clean(v, max).replace(/\n+/g, ' ')
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  body = body || {}

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true })

  const name = oneLine(body.name, 120)
  const email = oneLine(body.email, 200)
  const organisation = oneLine(body.organisation, 200)
  const type = TYPES.includes(body.type) ? body.type : 'Other'
  const topicKey = Object.hasOwn(TOPICS, body.topic) ? body.topic : 'general'
  const message = clean(body.message, 5000)
  const page = oneLine(body.page, 300)

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(503).json({ ok: false, error: 'not_configured' })

  const to = process.env.ENQUIRY_TO || 'hello@sensay.uk'
  const from = process.env.ENQUIRY_FROM || 'SENSay website <website@sensay.uk>'
  const subject = `${TOPICS[topicKey]}: ${name}${organisation ? `, ${organisation}` : ''} (${type})`
  const lines = [
    `Topic: ${TOPICS[topicKey]}`,
    `Name: ${name}`,
    `Email: ${email}`,
    organisation ? `Organisation: ${organisation}` : null,
    `I am a: ${type}`,
    page ? `Sent from: ${page}` : null,
    '',
    message,
  ].filter((l) => l !== null)

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text: lines.join('\n'),
        html: `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6">${lines
          .map((l) => (l ? escapeHtml(l) : '&nbsp;'))
          .join('<br>')}</div>`,
      }),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ ok: false, error: 'send_failed' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Enquiry send failed', err)
    return res.status(502).json({ ok: false, error: 'send_failed' })
  }
}
