import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function OurStory() {
  return (
    <>
      <div className="page-hero">
        <div className="stripe" style={{position:'absolute',bottom:0,left:0,right:0}} />
        <div className="page-hero-inner">
          <div className="page-hero__tag">Our Story</div>
          <h1>Learning to listen with our eyes</h1>
          <p>SENSay didn't start in a boardroom. It started at home, with William — our amazing, non-verbal ten-year-old — and a question every SEN parent knows: how do I truly understand what my child is telling me?</p>
        </div>
      </div>

      <div className="page-body prose">

        {/* Pull quote */}
        <div style={{
          borderLeft: '4px solid var(--blue)',
          paddingLeft: '1.5rem',
          margin: '0 0 2.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.35rem', color: 'var(--dark)', lineHeight: 1.5,
            fontStyle: 'italic', margin: 0
          }}>
            "We have been learning to listen using our eyes rather than our ears."
          </p>
          <p style={{fontSize:13, color:'var(--muted)', marginTop:8, marginBottom:0, fontWeight:600}}>
            — Neil Dickinson, Co-founder & CTO
          </p>
        </div>

        <h2 style={{marginTop:0}}>William</h2>

        <p className="lead">
          SENSay has been a passion project for several years now. William, our own amazing little
          boy, is the inspiration behind everything we do.
        </p>

        <p>
          William is 10 years old. He has never been verbal. He is on the autistic spectrum and has
          compound learning difficulties — and he has one of the most distinctive, powerful personalities
          of anyone we know. He communicates constantly. Just not with words.
        </p>

        <p>
          As his mum and dad, we have spent a decade learning to read him — his expressions, his
          movements, his rhythms, his patterns. We have become fluent in a language that has no
          dictionary and no formal grammar. And in doing so, we have come to understand something
          that took us a long time to fully appreciate: <strong>non-verbal children are not silent.
          They are just speaking in ways the world hasn't learned to hear yet.</strong>
        </p>

        <div className="placeholder-block">
          <div className="placeholder-block__label">Add more about William here — optional</div>
          <p>A moment, a memory, something that captures who he is. This doesn't need to be long — even one specific detail makes him real to the reader.</p>
        </div>

        <h2>The battles</h2>

        <p>
          If you are the parent of a non-verbal SEN child, you already know what the battles look like.
          The school meetings where you have to explain — again — what your child can and can't do.
          The healthcare appointments where you describe behaviours from memory, knowing that without
          evidence, without data, your observations carry less weight than they should.
          The exhausting, relentless work of being your child's translator to a world that was
          not built with them in mind.
        </p>

        <p>
          We have lived those battles. The education system. The healthcare system. The endless
          cycle of assessments, reviews and reports that ask parents to recall months of behaviour
          from the top of their heads. We know exactly how much is lost in those gaps — and we know
          that what is lost matters.
        </p>

        <h2>The gap we kept seeing</h2>

        <p>
          There are a number of methods of communicating mood and need with non-verbal children —
          and every family, every school, every therapist finds their own way of doing it. Physical
          cues, symbol boards, signing, picture cards. Each one helps. None of them talk to each other.
          And almost none of them generate the one thing that could transform how we support these children:
          <strong> a record.</strong>
        </p>

        <p>
          So much information is never captured. A child communicates distress on a Tuesday morning —
          but by Thursday's school meeting, that moment is gone, existing only in a parent's memory
          competing with everything else that week. A pattern that would be obvious from three months
          of data stays invisible because no one has three months of data.
        </p>

        <p>
          As the use of data becomes more important in every part of our lives, and as the tools to
          collect and understand it become more powerful and more accessible, it becomes more important
          than ever that we start applying them to the people who need them most.
          <strong> Our children.</strong>
        </p>

        <h2>Why we built SENSay</h2>

        <p>
          We are not academics or healthcare professionals. We are parents — a commercial engineer
          and a project manager — who saw a problem up close every day, looked for a solution, found
          that nothing quite fitted, and decided to build one.
        </p>

        <p>
          SENSay started as a question: what if every tap on a communication board was also a data
          point? What if, over weeks and months, those data points began to reveal something — a
          pattern, a trigger, a trend — that no individual moment could show on its own?
        </p>

        <p>
          What if a parent could show a doctor not just "he seemed anxious this week" but a chart
          showing that anxiety spikes every Monday morning, consistently, for the past three months —
          and that it correlates with a change in routine that nobody had connected before?
        </p>

        <p>
          That is SENSay. A communication tool, yes — but one that remembers everything, learns from
          everything, and turns the accumulated story of a child's communication into something that
          every adult around them can finally understand.
        </p>

        <div className="placeholder-block">
          <div className="placeholder-block__label">The moment you decided to build it — optional</div>
          <p>Was there a specific conversation, appointment or moment of frustration that crystallised the decision? If so, it belongs here. Specific moments are more powerful than general descriptions.</p>
        </div>

        <h2>What we believe</h2>

        <p>
          All machines talk to us now. Our phones, our cars, our bodies — everything generates data
          that helps us understand it better. It is time that the communication of our non-verbal
          children did the same.
        </p>

        <p>
          We believe every non-verbal child deserves a voice. We believe every parent deserves to
          truly understand what their child is telling them. And we believe every teacher, therapist
          and clinician deserves the evidence they need to do their jobs well — without having to
          rely on the fallible, incomplete picture that currently passes for a record.
        </p>

        <p>
          William taught us how to listen differently. SENSay is our attempt to help the world do
          the same.
        </p>

        <hr />

        <h2>Where we are now</h2>

        <p>
          SENSay is preparing for its Q3 2026 pilot programme, working with a small group of families
          and schools across the UK to refine the platform ahead of wider rollout. We are currently
          seeking seed investment of £350,000 to accelerate development and bring SENSay to the
          families and schools that need it most.
        </p>

        <p>
          If you are a parent, a school, a clinician or an investor who believes in what we are
          building — we would genuinely love to hear from you.
        </p>

        <hr />

        {/* Founder cards — Kirsty (CEO) first, Neil (CTO) second */}
        <div style={{
          background:'var(--light)', borderRadius:16, padding:'2rem',
          border:'1px solid #e2e8f0', display:'flex', gap:'1.5rem',
          alignItems:'flex-start', flexWrap:'wrap', marginBottom:'1.5rem'
        }}>
          <div style={{
            width:72, height:72, borderRadius:'50%',
            background:'var(--red)', display:'flex', alignItems:'center',
            justifyContent:'center', fontFamily:'var(--font-display)',
            fontWeight:900, fontSize:24, color:'#fff', flexShrink:0
          }}>
            KD
          </div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.1rem', color:'var(--dark)', marginBottom:4}}>
              Kirsty Dickinson
            </div>
            <div style={{fontSize:13, color:'var(--muted)', marginBottom:12, fontWeight:600}}>
              Co-founder & CEO · Parent of William
            </div>
            <div className="placeholder-block" style={{margin:0, textAlign:'left'}}>
              <div className="placeholder-block__label">Kirsty bio — to be filled in</div>
              <p>2–3 sentences establishing Kirsty's background, why she leads SENSay, and how it connects to her role as William's mother. Same length and tone as Neil's bio below.</p>
            </div>
          </div>
        </div>

        <div style={{
          background:'var(--light)', borderRadius:16, padding:'2rem',
          border:'1px solid #e2e8f0', display:'flex', gap:'1.5rem',
          alignItems:'flex-start', flexWrap:'wrap'
        }}>
          <div style={{
            width:72, height:72, borderRadius:'50%',
            background:'var(--blue)', display:'flex', alignItems:'center',
            justifyContent:'center', fontFamily:'var(--font-display)',
            fontWeight:900, fontSize:24, color:'#fff', flexShrink:0
          }}>
            ND
          </div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.1rem', color:'var(--dark)', marginBottom:4}}>
              Neil Dickinson
            </div>
            <div style={{fontSize:13, color:'var(--muted)', marginBottom:12, fontWeight:600}}>
              Co-founder & CTO · Parent of William · Commercial & technical engineer
            </div>
            <p style={{fontSize:14, color:'var(--mid)', lineHeight:1.75, margin:0}}>
              Neil is the father of William, a 10-year-old non-verbal child with autism and compound
              learning difficulties. He co-founded SENSay with Kirsty and leads engineering. With a
              background in commercial engineering and project delivery, Neil brings the technical
              grounding to build a tool that genuinely serves the SEN community.
            </p>
          </div>
        </div>

        <div style={{marginTop:'2.5rem', display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center'}}>
          <Link to="/contact" className="btn btn--primary">
            Get in touch →
          </Link>
          <Link to="/about" className="btn btn--outline">
            About SENSay
          </Link>
        </div>

      </div>
    </>
  )
}
