import React from 'react';
import { motion } from 'framer-motion';
import { MonitorUp, Settings, Zap } from 'lucide-react';

const steps = [
  {
    icon: MonitorUp,
    title: 'HDR Activation',
    description: 'Creates a tiny 1x1 pixel overlay with the brightest HDR color'
  },
  {
    icon: Settings,
    title: 'Discreet Operation',
    description: 'Pixel is hidden behind the rounded corner of your display'
  },
  {
    icon: Zap,
    title: 'Enhanced Brightness',
    description: 'Adjusts gamma values to enhance brightness across all content'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;