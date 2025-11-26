'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Link from 'next/link'

export default function CarDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    'https://images.unsplash.com/photo-1583267746897-a659a5e87a36?w=1200&q=80',
  ]

  return (
    <main>
      <Navbar />
      
      <section className="py-12">
        <div className="container-custom">
          <Link href="/cars/ghana" className="text-accent-600 hover:text-accent-700 font-medium mb-6 inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            {/* Image Gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-dark-100 mb-4">
                <img 
                  src={images[selectedImage]} 
                  alt="Car"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden ${selectedImage === idx ? 'ring-4 ring-accent-500' : ''}`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                Available in Ghana
              </div>
              <h1 className="text-4xl font-bold text-dark-900 mb-2">Toyota Camry 2023</h1>
              <p className="text-3xl font-bold text-accent-500 mb-6">$28,500</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-dark-200">
                <div>
                  <p className="text-dark-600 text-sm mb-1">Year</p>
                  <p className="text-dark-900 font-semibold">2023</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Mileage</p>
                  <p className="text-dark-900 font-semibold">12,000 km</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Transmission</p>
                  <p className="text-dark-900 font-semibold">Automatic</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Fuel Type</p>
                  <p className="text-dark-900 font-semibold">Hybrid</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Location</p>
                  <p className="text-dark-900 font-semibold">Accra, Ghana</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Body Type</p>
                  <p className="text-dark-900 font-semibold">Sedan</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Color</p>
                  <p className="text-dark-900 font-semibold">Silver</p>
                </div>
                <div>
                  <p className="text-dark-600 text-sm mb-1">Engine</p>
                  <p className="text-dark-900 font-semibold">2.5L 4-Cylinder</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-dark-900 mb-4">Description</h3>
                <p className="text-dark-600 leading-relaxed">
                  This stunning 2023 Toyota Camry Hybrid is in excellent condition with low mileage. 
                  Features include leather interior, navigation system, backup camera, lane departure warning, 
                  adaptive cruise control, and premium sound system. This vehicle has been meticulously maintained 
                  with full service history available. Perfect for both city driving and long journeys.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-dark-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Leather Seats
                  </li>
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Navigation
                  </li>
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Backup Camera
                  </li>
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sunroof
                  </li>
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cruise Control
                  </li>
                  <li className="flex items-center gap-2 text-dark-700">
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bluetooth
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="flex-1">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
