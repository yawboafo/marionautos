'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    carPrice: '',
    engineSize: '',
    year: '',
    source: 'usa',
    shippingMethod: 'roro'
  })

  const [results, setResults] = useState<any>(null)

  const calculateCosts = (e: React.FormEvent) => {
    e.preventDefault()
    
    const price = parseFloat(formData.carPrice)
    const engine = parseFloat(formData.engineSize)
    
    // Duty calculation (example formula - Ghana customs)
    const dutyRate = formData.year >= '2020' ? 0.35 : 0.40
    const duty = price * dutyRate
    
    // Shipping calculation
    const shipping = formData.shippingMethod === 'roro' ? 1500 : 2500
    
    // Processing fees
    const processingFee = 500
    const customsClearance = 800
    
    // Total
    const total = price + duty + shipping + processingFee + customsClearance
    
    setResults({
      carPrice: price,
      duty,
      shipping,
      processingFee,
      customsClearance,
      subtotal: duty + shipping + processingFee + customsClearance,
      total
    })
  }

  return (
    <main>
      <Navbar />
      
      <section className="py-20 bg-dark-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">Duty & Shipping Calculator</h1>
            <p className="text-xl text-dark-600">Calculate your total import costs instantly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Vehicle Information</h2>
              <form onSubmit={calculateCosts} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Car Price (USD)</label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="e.g., 25000"
                    value={formData.carPrice}
                    onChange={(e) => setFormData({...formData, carPrice: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Engine Size (Liters)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="input-field"
                    placeholder="e.g., 2.5"
                    value={formData.engineSize}
                    onChange={(e) => setFormData({...formData, engineSize: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Year</label>
                  <select 
                    className="select-field"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    required
                  >
                    <option value="">Select Year</option>
                    {Array.from({length: 15}, (_, i) => 2025 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Source Location</label>
                  <select 
                    className="select-field"
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                  >
                    <option value="usa">USA</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Shipping Method</label>
                  <select 
                    className="select-field"
                    value={formData.shippingMethod}
                    onChange={(e) => setFormData({...formData, shippingMethod: e.target.value})}
                  >
                    <option value="roro">RORO (Roll-on/Roll-off)</option>
                    <option value="container">Container Shipping</option>
                  </select>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Calculate Total Cost
                </Button>
              </form>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="card p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-dark-900 mb-6">Cost Breakdown</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-dark-100">
                      <span className="text-dark-600">Car Price</span>
                      <span className="font-semibold text-dark-900">${results.carPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark-100">
                      <span className="text-dark-600">Import Duty</span>
                      <span className="font-semibold text-dark-900">${results.duty.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark-100">
                      <span className="text-dark-600">Shipping Fee</span>
                      <span className="font-semibold text-dark-900">${results.shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark-100">
                      <span className="text-dark-600">Processing Fee</span>
                      <span className="font-semibold text-dark-900">${results.processingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark-100">
                      <span className="text-dark-600">Customs Clearance</span>
                      <span className="font-semibold text-dark-900">${results.customsClearance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-4 bg-dark-50 rounded-lg px-4 mt-4">
                      <span className="text-lg font-bold text-dark-900">Total Landing Cost</span>
                      <span className="text-2xl font-bold text-accent-600">${results.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <p className="text-sm text-primary-900">
                      <strong>Note:</strong> This is an estimated calculation. Final costs may vary based on actual customs valuation and additional fees.
                    </p>
                  </div>

                  <Button variant="primary" size="lg" className="w-full mt-6">
                    Proceed with Import
                  </Button>
                </div>
              ) : (
                <div className="card p-8 h-full flex items-center justify-center text-center">
                  <div>
                    <svg className="w-24 h-24 mx-auto mb-6 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-dark-900 mb-2">Ready to Calculate</h3>
                    <p className="text-dark-600">Fill in the form to see your estimated costs</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-900 mb-2">Accurate Estimates</h3>
              <p className="text-sm text-dark-600">Based on current Ghana customs rates and regulations</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-dark-600">All costs clearly broken down for transparency</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark-900 mb-2">Instant Results</h3>
              <p className="text-sm text-dark-600">Get your cost estimate in seconds</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
