import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Check, Info } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Laptop,
      title: 'How it Works',
      description: 'BrightIntosh intelligently manages your display brightness settings, allowing full HDR capabilities in any application.'
    },
    {
      icon: Check,
      title: 'Compatibility',
      description: 'Supports all MacBook Pro models with Liquid Retina XDR display (2021 and newer).'
    },
    {
      icon: Info,
      title: 'Disclaimer',
      description: 'BrightIntosh is an independent tool and is not affiliated with or endorsed by Apple Inc.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Features & Information</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how BrightIntosh enhances your MacBook Pro experience with these key features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;