import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function NotFound() {
  return (
    <div style={{
      minHeight:'60vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'4rem 1.5rem', textAlign:'center'
    }}>
      <div style={{fontSize:72, marginBottom:'1rem'}}>🧩</div>
      <h1 style={{
        fontFamily:'var(--font-display)', fontWeight:900, fontSize:'2.5rem',
        color:'var(--dark)', letterSpacing:'-1px', marginBottom:'0.75rem'
      }}>
        Page not found
      </h1>
      <p style={{color:'var(--muted)', fontSize:'1.05rem', maxWidth:420, lineHeight:1.8, marginBottom:'2rem'}}>
        Sorry — we can't find that page. It may have moved, or the link may be incorrect.
      </p>
      <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center'}}>
        <Link to="/" className="btn btn--primary">Back to home</Link>
        <Link to="/contact" className="btn btn--outline">Contact us</Link>
      </div>
    </div>
  )
}
