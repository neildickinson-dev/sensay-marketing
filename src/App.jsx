import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import About from './pages/About.jsx'
import Families from './pages/Families.jsx'
import Schools from './pages/Schools.jsx'
import Therapists from './pages/Therapists.jsx'
import Connect from './pages/Connect.jsx'
import Guides from './pages/Guides.jsx'
import Press from './pages/Press.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Documentation from './pages/Documentation.jsx'
import NotFound from './pages/NotFound.jsx'
import News from './pages/News.jsx'
import './App.css'
import './site.css'

const SITE_TITLE = 'SENSay: helping every child be heard and understood'

// Scrolls to the #hash target after navigation (for example /#pricing from another
// page), or to the top of the page when there is no hash. Also sets the tab title.
function ScrollManager({ title }) {
  const location = useLocation()
  React.useEffect(() => {
    document.title = title ? `${title} | SENSay` : SITE_TITLE
  }, [title])
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const scroll = () => document.getElementById(id)?.scrollIntoView()
      // Wait a frame so the target section has rendered.
      requestAnimationFrame(scroll)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
}

function Layout({ title, children }) {
  return (
    <div className="app">
      <ScrollManager title={title} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/our-story" element={<Layout title="Our story"><OurStory /></Layout>} />
        <Route path="/about" element={<Layout title="About"><About /></Layout>} />
        <Route path="/families" element={<Layout title="For families"><Families /></Layout>} />
        <Route path="/schools" element={<Layout title="For schools and SENCOs"><Schools /></Layout>} />
        <Route path="/senco" element={<Layout title="For schools and SENCOs"><Schools /></Layout>} />
        <Route path="/therapists" element={<Layout title="For therapists"><Therapists /></Layout>} />
        <Route path="/connect" element={<Layout title="SENSay Connect for AAC services"><Connect /></Layout>} />
        <Route path="/guides" element={<Layout title="Guides"><Guides /></Layout>} />
        <Route path="/press" element={<Layout title="Press and media"><Press /></Layout>} />
        <Route path="/contact" element={<Layout title="Contact"><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout title="Privacy policy"><Privacy /></Layout>} />
        <Route path="/documentation" element={<Layout title="Resources"><Documentation /></Layout>} />
        <Route path="/terms" element={<Layout title="Terms of service"><Terms /></Layout>} />
        <Route path="/news" element={<Layout title="SEN news"><News /></Layout>} />
        <Route path="*" element={<Layout title="Page not found"><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
