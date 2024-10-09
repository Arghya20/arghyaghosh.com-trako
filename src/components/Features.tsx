import React from 'react'
import { PlusCircle, MinusCircle, PieChart, Lock } from 'lucide-react'

const features = [
  { icon: PlusCircle, title: 'Track Income', description: 'Easily log all your income sources in one place.' },
  { icon: MinusCircle, title: 'Manage Expenses', description: 'Keep tabs on where your money goes with detailed expense tracking.' },
  { icon: PieChart, title: 'Visual Reports', description: 'Get insights with beautiful charts and graphs of your financial data.' },
  { icon: Lock, title: 'No Permissions', description: 'Your data stays on your device. No intrusive permissions required.' },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features