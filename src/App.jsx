import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import ContactPage from './components/ContactPage'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <Layout>
      <Navigation />
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Layout>
  )
}

export default App
