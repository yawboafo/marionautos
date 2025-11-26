'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

type ShipmentStatus = 'purchased' | 'shipped' | 'port' | 'clearing' | 'ready' | 'delivered'

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState<any>(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock tracking data
    setTrackingData({
      id: trackingId,
      car: 'Toyota Camry 2023',
      status: 'clearing' as ShipmentStatus,
      estimatedDelivery: 'December 15, 2025',
      timeline: [
        { stage: 'purchased', title: 'Purchased', date: 'Nov 1, 2025', completed: true },
        { stage: 'shipped', title: 'Shipped from USA', date: 'Nov 5, 2025', completed: true },
        { stage: 'port', title: 'Arrived at Port', date: 'Nov 20, 2025', completed: true },
        { stage: 'clearing', title: 'Customs Clearing', date: 'Nov 25, 2025', completed: true },
        { stage: 'ready', title: 'Ready for Pickup', date: 'Pending', completed: false },
        { stage: 'delivered', title: 'Delivered', date: 'Pending', completed: false },
      ]
    })
  }

  return (
    <main>
      <Navbar />
      
      <section className="py-20 bg-dark-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">Track Your Delivery</h1>
            <p className="text-xl text-dark-600">Enter your tracking ID to monitor your shipment</p>
          </div>

          {/* Tracking Form */}
          <form onSubmit={handleTrack} className="card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="input-field flex-1"
                placeholder="Enter Tracking ID (e.g., MA-2025-001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
              />
              <Button type="submit" variant="primary" size="lg" className="md:w-auto">
                Track Shipment
              </Button>
            </div>
          </form>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-8">
              {/* Summary Card */}
              <div className="card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm text-dark-600 mb-1">Tracking ID</p>
                    <p className="text-2xl font-bold text-dark-900">{trackingData.id}</p>
                  </div>
                  <div className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold">
                    In Transit
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-dark-600 mb-1">Vehicle</p>
                    <p className="text-lg font-semibold text-dark-900">{trackingData.car}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dark-600 mb-1">Estimated Delivery</p>
                    <p className="text-lg font-semibold text-accent-600">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-8">Shipment Progress</h2>
                <div className="relative">
                  {trackingData.timeline.map((item: any, index: number) => (
                    <div key={item.stage} className="relative flex gap-6 pb-12 last:pb-0">
                      {/* Line */}
                      {index !== trackingData.timeline.length - 1 && (
                        <div className={`absolute left-6 top-12 bottom-0 w-0.5 ${item.completed ? 'bg-accent-500' : 'bg-dark-200'}`}></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.completed ? 'bg-accent-500' : 'bg-dark-200'
                      }`}>
                        {item.completed ? (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <h3 className={`text-lg font-bold mb-1 ${item.completed ? 'text-dark-900' : 'text-dark-500'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm ${item.completed ? 'text-dark-600' : 'text-dark-400'}`}>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">Need Help?</h3>
                    <p className="text-primary-800 mb-4">
                      If you have questions about your shipment, our support team is here to help.
                    </p>
                    <Button variant="secondary" size="sm">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
