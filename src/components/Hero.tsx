import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Master Your Finances
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Track your income and expenses effortlessly with Trako. No permissions required, just pure financial clarity.
          </p>
          <a 
            href="#download" 
            className="bg-green-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300"
          >
            Start Tracking
          </a>
        </div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Budget tracking illustration" 
            className="rounded-lg shadow-2xl opacity-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero