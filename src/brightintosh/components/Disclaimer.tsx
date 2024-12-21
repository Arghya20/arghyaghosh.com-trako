import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronDown } from 'lucide-react';

const Disclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="disclaimer" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between p-6 bg-orange-50 rounded-lg cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Important Disclaimer</h2>
            </div>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-orange-50/50 rounded-b-lg mt-1">
                  <p className="text-gray-700 mb-4">
                    This tool should not harm your display as macOS® is in full control over 
                    the display brightness. However this software comes with no warranty or 
                    guarantees.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Users take full responsibility for any problems that arise from the use 
                    of this software.
                  </p>
                  <p className="text-gray-700 font-medium">
                    By using the BrightIntosh application you accept the above.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;