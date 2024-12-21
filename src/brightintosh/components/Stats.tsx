import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap } from 'lucide-react';

const Stats = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
      >
        <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="font-semibold mb-2">Simple Setup</h3>
        <p className="text-gray-600 text-sm">Easy to install and use</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
      >
        <Zap className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="font-semibold mb-2">Instant Effect</h3>
        <p className="text-gray-600 text-sm">See results immediately</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
      >
        <Shield className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="font-semibold mb-2">Secure & Safe</h3>
        <p className="text-gray-600 text-sm">No system modifications</p>
      </motion.div>
    </div>
  );
};

export default Stats;