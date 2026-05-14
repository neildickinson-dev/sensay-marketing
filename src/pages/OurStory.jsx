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

        <div style={{
          borderLeft: '4px solid var(--blue)',
          paddingLeft: '1.5rem',
          margin: '2rem 0 2.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.2rem', color: 'var(--dark)', lineHeight: 1.6,
            fontStyle: 'italic', margin: 0
          }}>
            "William is non-verbal, autistic, and has compound learning difficulties.
            He's also funny, affectionate, stubborn, and one of the most expressive
            children I know — if you're paying attention. He's taught his dad, his
            brother, his teachers and his therapists more about patience and listening
            than anyone else in our lives. He's taught all of us how to listen with
            our eyes. SENSay is the tool I wish we'd had years ago — the one that
            helps the adults around him keep up."
          </p>
          <p style={{fontSize:13, color:'var(--muted)', marginTop:12, marginBottom:0, fontWeight:600}}>
            — Kirsty Dickinson, co-founder
          </p>
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

        <h2>Why we built SENSay</h2>

        <p>
          For a long time, Kirsty and I were frustrated by how little of William we
          could actually understand. He was learning Makaton, and he was trying to
          tell us things every day — and we kept missing them.
        </p>

        <p>
          The moment that pushed me from "we should build this" to "we have to build
          this" was a school incident. William was excluded from a classroom session,
          and no one could tell us what had actually happened beforehand. What had
          set him off. What he'd been trying to communicate. What the adults in the
          room had missed. There was no record. There was no context. There was just
          an outcome.
        </p>

        <p>
          That decided it. Whatever we built had to do more than give William a
          voice — it had to leave a trail. Capture the situation around each message.
          Make it possible to look back and actually understand. My background is
          engineering, so data collection and analysis come naturally — and they
          went into SENSay from day one, not as a feature, as the foundation.
        </p>

        <p>
          SENSay isn't just an AAC tool. It's an intelligence layer for the adults
          around children like William, so the small signals stop getting lost.
        </p>

        <p style={{fontSize:13, color:'var(--muted)', marginTop:'-0.25rem', marginBottom:'2rem', fontWeight:600}}>
          — Neil Dickinson, co-founder & CTO
        </p>

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
            <p style={{fontSize:14, color:'var(--mid)', lineHeight:1.75, margin:'0 0 0.9rem'}}>
              Kirsty Dickinson is co-founder and CEO of SENSay. She holds a degree in
              Educational Studies and has spent over twenty years working with local
              community groups across West Yorkshire. She currently supports SEND
              families through roles at two local charities — PCAN (the parent carer
              forum for Kirklees) and Barnardo's — and is a governor at a specialist
              school.
            </p>
            <p style={{fontSize:14, color:'var(--mid)', lineHeight:1.75, margin:'0 0 0.9rem'}}>
              Her professional background spans project management in the glass
              industry and outreach work and senior management at Citizens Advice,
              but the thread through all of it is the same: building strong
              relationships, advocating for and supporting people who are often
              unheard, and a drive to improve the systems families have to navigate.
            </p>
            <p style={{fontSize:14, color:'var(--mid)', lineHeight:1.75, margin:0}}>
              The work is personal. Kirsty's son William is non-verbal, autistic,
              and has a severe learning disability. SENSay exists because she brings
              that lived experience to every part of how it's built — and because
              she believes the families and professionals around children like
              William deserve tools that actually work for them.
            </p>
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
