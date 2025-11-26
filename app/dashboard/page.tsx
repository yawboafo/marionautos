'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CarCard } from '@/components/Card'
import Button from '@/components/Button'
import Link from 'next/link'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'saved' | 'orders' | 'tracking'>('saved')

  const savedCars = [
    {
      id: '1',
      title: 'Toyota Camry 2023',
      year: 2023,
      price: 28500,
      mileage: '12,000 km',
      location: 'Accra',
      transmission: 'Automatic',
      fuel: 'Hybrid',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      href: '/cars/ghana/1'
    },
    {
      id: '2',
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
  ]

  const orders = [
    {
      id: 'ORD-2025-001',
      car: 'Honda CR-V 2024',
      price: 35000,
      status: 'Processing',
      date: 'Nov 20, 2025',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80'
    },
    {
      id: 'ORD-2025-002',
      car: 'Mercedes-Benz C-Class 2022',
      price: 45000,
      status: 'Completed',
      date: 'Oct 15, 2025',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80'
    },
  ]

  const trackingItems = [
    {
      id: 'TRK-2025-001',
      car: 'Toyota Land Cruiser 2023',
      status: 'In Transit',
      currentStage: 'At Port',
      estimatedDelivery: 'Dec 10, 2025',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80'
    },
  ]

  return (
    <main>
      <Navbar />
      
      <section className="py-12 bg-dark-50 min-h-screen">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-dark-900 mb-2">My Dashboard</h1>
            <p className="text-dark-600">Manage your saved cars, orders, and shipments</p>
          </div>

          {/* User Info Card */}
          <div className="card p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark-900">John Doe</h2>
                  <p className="text-dark-600">john.doe@example.com</p>
                </div>
              </div>
              <Button variant="outline" size="md">Edit Profile</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dark-600 text-sm mb-1">Saved Cars</p>
                  <p className="text-3xl font-bold text-dark-900">{savedCars.length}</p>
                </div>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dark-600 text-sm mb-1">Total Orders</p>
                  <p className="text-3xl font-bold text-dark-900">{orders.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dark-600 text-sm mb-1">Active Shipments</p>
                  <p className="text-3xl font-bold text-dark-900">{trackingItems.length}</p>
                </div>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="card">
            <div className="border-b border-dark-100">
              <div className="flex gap-8 px-8 pt-6">
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'saved' 
                      ? 'text-accent-600 border-b-2 border-accent-600' 
                      : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  Saved Cars
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'orders' 
                      ? 'text-accent-600 border-b-2 border-accent-600' 
                      : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab('tracking')}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === 'tracking' 
                      ? 'text-accent-600 border-b-2 border-accent-600' 
                      : 'text-dark-600 hover:text-dark-900'
                  }`}
                >
                  Tracking
                </button>
              </div>
            </div>

            <div className="p-8">
              {/* Saved Cars Tab */}
              {activeTab === 'saved' && (
                <div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-6">Saved Cars</h2>
                  {savedCars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedCars.map(car => (
                        <CarCard key={car.id} {...car} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <svg className="w-24 h-24 mx-auto mb-4 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <p className="text-dark-600 mb-4">No saved cars yet</p>
                      <Link href="/cars/ghana">
                        <Button variant="primary" size="md">Browse Cars</Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="flex items-center gap-6 p-6 bg-dark-50 rounded-xl">
                        <img src={order.image} alt={order.car} className="w-32 h-24 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-dark-900 mb-1">{order.car}</h3>
                          <p className="text-dark-600 text-sm mb-2">Order ID: {order.id}</p>
                          <p className="text-dark-600 text-sm">Date: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-dark-900 mb-2">${order.price.toLocaleString()}</p>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-accent-100 text-accent-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tracking Tab */}
              {activeTab === 'tracking' && (
                <div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-6">Active Shipments</h2>
                  <div className="space-y-4">
                    {trackingItems.map(item => (
                      <div key={item.id} className="flex items-center gap-6 p-6 bg-dark-50 rounded-xl">
                        <img src={item.image} alt={item.car} className="w-32 h-24 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-dark-900 mb-1">{item.car}</h3>
                          <p className="text-dark-600 text-sm mb-2">Tracking ID: {item.id}</p>
                          <p className="text-dark-600 text-sm">Current Stage: <span className="font-semibold text-accent-600">{item.currentStage}</span></p>
                          <p className="text-dark-600 text-sm">Est. Delivery: {item.estimatedDelivery}</p>
                        </div>
                        <div>
                          <Link href="/track">
                            <Button variant="primary" size="sm">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
