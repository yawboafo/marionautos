'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import Link from 'next/link'
import { useState } from 'react'

export default function AddVehiclePage() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    vin: '',
    price: '',
    location: 'Ghana',
    condition: 'New',
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '',
    color: '',
    description: '',
    featured: false,
    status: 'Active'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Vehicle data:', formData)
    // Handle form submission
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Add New Vehicle</h1>
            <p className="text-white/60">Fill in the details to add a new vehicle to inventory</p>
          </div>
          <Link href="/admin/vehicles">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Make *</label>
                <input
                  type="text"
                  required
                  value={formData.make}
                  onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., Toyota"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Model *</label>
                <input
                  type="text"
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., Camry"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Year *</label>
                <input
                  type="number"
                  required
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., 2024"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">VIN *</label>
                <input
                  type="text"
                  required
                  value={formData.vin}
                  onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="17-character VIN"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Price (USD) *</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., 28500"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Color</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., Silver"
                />
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="Ghana">Ghana</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Condition *</label>
                <select
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                  <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Transmission *</label>
                <select
                  value={formData.transmission}
                  onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Fuel Type *</label>
                <select
                  value={formData.fuel}
                  onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Mileage</label>
                <input
                  type="text"
                  value={formData.mileage}
                  onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="e.g., 12,000 km or 5,000 miles"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="Active">Active</option>
                  <option value="Sold">Sold</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Reserved">Reserved</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <textarea
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
              placeholder="Enter detailed description of the vehicle..."
            />
          </div>

          {/* Images */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Images</h2>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-primary-red transition-colors cursor-pointer">
              <svg className="w-12 h-12 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-white/60 mb-2">Click to upload or drag and drop</p>
              <p className="text-white/40 text-sm">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Options */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Options</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-primary-red focus:ring-primary-red focus:ring-offset-0"
                />
                <div>
                  <span className="text-white font-medium">Featured Vehicle</span>
                  <p className="text-white/60 text-sm">Display this vehicle on the homepage</p>
                </div>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <Link href="/admin/vehicles">
              <button type="button" className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all">
                Cancel
              </button>
            </Link>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary-red to-primary-crimson text-white rounded-xl hover:shadow-lg hover:shadow-primary-red/30 transition-all">
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
