import React from 'react'
import { Download } from 'lucide-react';

const DownloadPage = () => {
  return (
    <section id="download" className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Download Trako
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Start managing your finances today with our safe, permission-free app. Available for Android.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          
        <a
            href="../trako-app.apk" // Change this to the correct path of your file
            download="Trako-Beta.apk" // Optional: Renames the file when downloaded
            className="flex items-center justify-center bg-green-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300"
          >
            <Download className="w-6 h-6 mr-2" />
            Download Beta
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadPage