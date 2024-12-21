import React from 'react';
import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

const compatibleModels = [
  'M1 Pro, M1 Max (2021)',
  'M2 Pro, M2 Max (2023)',
  'M3, M3 Pro, M3 Max (2023)',
  'M4, M4 Pro, M4 Max (2024)',
  'Pro Display XDR'
];

const Compatibility = () => {
  return (
    <section id="compatibility" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Laptop className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8">Compatible Devices</h2>
          <div className="space-y-4">
            {compatibleModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {model}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compatibility;