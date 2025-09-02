import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from './Hero'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Amazing Contact Form | Get In Touch</title>
        <meta name="description" content="Get in touch with our amazing team. Professional contact form with real-time validation and beautiful design." />
        <meta name="keywords" content="contact form, get in touch, web development, react contact form" />
      </Helmet>
      
      <Hero />
      <ContactForm />
    </>
  )
}

export default ContactPage
