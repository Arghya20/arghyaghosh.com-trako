import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Trako. All rights reserved.</p>
          </div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer