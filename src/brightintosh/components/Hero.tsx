import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Stats from './Stats';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock your MacBook Pro®'s Full Brightness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            BrightIntosh enables your MacBook Pro® to use the increased brightness (1000 nits) 
            of its Liquid Retina XDR® display anytime. By default this is only possible when 
            displaying HDR content. Please check the compatibility section for more information.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium 
                     hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1Z0Q7rpVABqjW3yqaAlv2Ynhj5womr4k6&export=download"> <span>Explore BrightIntosh</span> </a>
            
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
        <Stats />
      </div>
    </section>
  );
};

export default Hero;