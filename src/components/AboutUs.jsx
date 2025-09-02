import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Users, Heart, Target, Sparkles, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const teamValues = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our hearts into every project, creating digital experiences that truly matter."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every line of code serves a purpose, every design choice drives towards your success."
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Your vision combined with our expertise creates something truly extraordinary."
    }
  ]

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Helmet>
        <title>About Us - ContactForm | Passionate Web Developers</title>
        <meta name="description" content="Learn about our passionate team of web developers creating amazing digital experiences with React, Tailwind CSS, and modern technologies." />
        <meta name="keywords" content="web development, react developers, tailwind css, about us, team" />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20 pointer-events-none"></div>
        
        {/* Main Content */}
        <main className="relative z-10 py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-effect mb-8">
                <Users className="w-10 h-10 text-primary-400" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're a passionate team of developers and designers who believe in creating 
                digital experiences that not only look amazing but also deliver real value.
              </p>
              
              <div className="flex justify-center items-center space-x-2">
                <Sparkles className="w-6 h-6 text-primary-400 animate-bounce-gentle" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
                <Sparkles className="w-6 h-6 text-secondary-400 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary-400 to-transparent"></div>
                <Sparkles className="w-6 h-6 text-primary-400 animate-bounce-gentle" style={{ animationDelay: '2s' }} />
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Story Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="glass-effect rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
                  Our Story
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    It all started with a simple belief: <strong className="text-primary-400">beautiful design and clean code can change the world.</strong> 
                    Our journey began when we realized that many businesses were struggling with outdated, 
                    unresponsive websites that didn't reflect their true potential.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    We decided to bridge that gap by combining cutting-edge technologies like <strong className="text-secondary-400">React</strong>, 
                    <strong className="text-primary-400"> Tailwind CSS</strong>, and modern JavaScript frameworks 
                    with thoughtful design principles that put user experience first.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Today, we're proud to have helped dozens of businesses transform their digital presence, 
                    creating websites and applications that not only look stunning but also drive real results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
                What Drives Us
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 mb-4 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="glass-effect rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's bring your vision to life with stunning design and flawless functionality.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 btn-primary group"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </>
  )
}

export default AboutUs
