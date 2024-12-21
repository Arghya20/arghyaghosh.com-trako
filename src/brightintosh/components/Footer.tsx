import React from 'react';
import { Monitor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Monitor className="h-6 w-6" />
            <span className="text-xl font-bold">BrightIntosh</span>
          </div>
          <p className="text-gray-400">
            Unlock your MacBook Pro's full display potential
          </p>
          <div className="text-center text-gray-400 text-sm mt-8">
            <p>© {new Date().getFullYear()} <a target="_blank" href="https://github.com/niklasr22/BrightIntosh" className='underline underline-offset-1'>BrightIntosh.</a> All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;