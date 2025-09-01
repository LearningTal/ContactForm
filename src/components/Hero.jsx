import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Hero Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-effect mb-6">
            <EnvelopeIcon className="w-10 h-10 text-primary-400" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
        >
          Get In{' '}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to start a conversation? Drop us a message and we'll get back to you faster than you can say "amazing design"!
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center items-center space-x-2 mb-12"
        >
          <SparklesIcon className="w-6 h-6 text-primary-400 animate-bounce-gentle" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
          <SparklesIcon className="w-6 h-6 text-secondary-400 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary-400 to-transparent"></div>
          <SparklesIcon className="w-6 h-6 text-primary-400 animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        </motion.div>

        {/* Call to Action Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="animate-bounce-gentle"
        >
          <svg 
            className="w-8 h-8 text-white/60 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
