'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CarCard } from '@/components/Card'
import Button from '@/components/Button'

const usaCars = [
  {
    id: '1',
    title: 'Ford F-150 2024',
    year: 2024,
    price: 42000,
    mileage: '2,000 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1593450227441-7a38c7ce4fc7?w=800&q=80',
    href: '/cars/usa/1'
  },
  {
    id: '2',
    title: 'Chevrolet Tahoe 2023',
    year: 2023,
    price: 55000,
    mileage: '8,500 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    href: '/cars/usa/2'
  },
  {
    id: '3',
    title: 'Tesla Model 3 2024',
    year: 2024,
    price: 48000,
    mileage: '1,200 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Electric',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    href: '/cars/usa/3'
  },
  {
    id: '4',
    title: 'Ram 1500 2023',
    year: 2023,
    price: 46000,
    mileage: '5,000 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    href: '/cars/usa/4'
  },
  {
    id: '5',
    title: 'Jeep Grand Cherokee 2024',
    year: 2024,
    price: 52000,
    mileage: '3,800 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/usa/5'
  },
  {
    id: '6',
    title: 'GMC Sierra 2023',
    year: 2023,
    price: 58000,
    mileage: '7,200 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    href: '/cars/usa/6'
  },
]

export default function USACarsPage() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null)
  const [showEstimate, setShowEstimate] = useState(false)

  const calculateTotalCost = (basePrice: number) => {
    const shipping = 2500
    const duty = basePrice * 0.35
    const total = basePrice + shipping + duty
    return { shipping, duty, total }
  }

  return (
    <main>
      <Navbar />
      
      <section className="py-12 bg-dark-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">Import Cars from USA</h1>
          <p className="text-xl text-dark-600 mb-8">Access thousands of premium vehicles from the US market</p>
          
          <div className="relative glass-card p-8 mb-12 border-2 border-neon-cyan/30 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 animate-pulse-slow"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-neon-cyan/50">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  How Import Works
                  <span className="text-neon-cyan animate-pulse">✨</span>
                </h3>
                <div className="text-white/80 text-lg leading-relaxed">
                  <span className="text-neon-cyan font-semibold">Select a car</span> → 
                  <span className="text-neon-purple font-semibold"> We calculate total costs</span> (car + shipping + duty) → 
                  <span className="text-neon-pink font-semibold"> Complete payment</span> → 
                  <span className="text-neon-orange font-semibold"> We handle shipping & customs</span> → 
                  <span className="text-neon-lime font-semibold"> Track delivery</span> → 
                  <span className="text-neon-cyan font-semibold"> Car delivered to Ghana</span> 🚗
                </div>
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usaCars.map(car => {
              const costs = calculateTotalCost(car.price)
              return (
                <div key={car.id} className="card overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-dark-100">
                    <img 
                      src={car.image} 
                      alt={car.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      USA
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-900 mb-2">{car.title}</h3>
                    <div className="mb-4">
                      <p className="text-sm text-dark-600 mb-1">Base Price (USA)</p>
                      <p className="text-2xl font-bold text-dark-900">${car.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-dark-50 rounded-lg p-4 mb-4 text-sm">
                      <div className="flex justify-between mb-2">
                        <span className="text-dark-600">Shipping Est.</span>
                        <span className="font-semibold text-dark-900">${costs.shipping.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-dark-600">Duty Est. (35%)</span>
                        <span className="font-semibold text-dark-900">${costs.duty.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-dark-200">
                        <span className="font-bold text-dark-900">Total Est. Cost</span>
                        <span className="font-bold text-accent-600">${costs.total.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-dark-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {car.mileage}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        {car.transmission}
                      </div>
                    </div>
                    
                    <Button variant="primary" size="md" className="w-full">
                      Request Import
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
