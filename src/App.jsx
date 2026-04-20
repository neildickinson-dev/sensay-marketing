import React from 'react'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import OurStory from './pages/OurStory.jsx'
import About from './pages/About.jsx'
import Senco from './pages/Senco.jsx'
import Blog from './pages/Blog.jsx'
import Press from './pages/Press.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Documentation from './pages/Documentation.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function ScrollToTop() {
  React.useEffect(() => { window.scrollTo(0, 0) }, [])
  return null
}

function Layout({ children }) {
  return (
    <div className="app">
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
        <Route path="/" element={<Layout><ScrollToTop /><Home /></Layout>} />
        <Route path="/our-story" element={<Layout><ScrollToTop /><OurStory /></Layout>} />
        <Route path="/about" element={<Layout><ScrollToTop /><About /></Layout>} />
        <Route path="/senco" element={<Layout><ScrollToTop /><Senco /></Layout>} />
        <Route path="/blog" element={<Layout><ScrollToTop /><Blog /></Layout>} />
        <Route path="/press" element={<Layout><ScrollToTop /><Press /></Layout>} />
        <Route path="/contact" element={<Layout><ScrollToTop /><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout><ScrollToTop /><Privacy /></Layout>} />
        <Route path="/documentation" element={<Layout><ScrollToTop /><Documentation /></Layout>} />
        <Route path="/terms" element={<Layout><ScrollToTop /><Terms /></Layout>} />
        <Route path="*" element={<Layout><ScrollToTop /><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
