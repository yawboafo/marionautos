'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function EditVehiclePage() {
  const params = useParams()
  const router = useRouter()
  const [formData, setFormData] = useState({
    make: 'Toyota',
    model: 'Camry',
    year: '2023',
    vin: '1HGBH41JXMN109186',
    price: '32000',
    color: 'Silver',
    location: 'USA',
    condition: 'Used',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: '15000',
    status: 'Available',
    description: 'Well-maintained sedan with full service history.',
    featured: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Updated vehicle:', formData)
    router.push('/admin/vehicles')
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Edit Vehicle</h1>
            <p className="text-white/60">Update vehicle information</p>
          </div>
          <button
            onClick={() => router.push('/admin/vehicles')}
            className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
          >
            Back to Vehicles
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm">Make *</label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Model *</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Year *</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">VIN *</label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm">Location *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="USA">USA</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Japan">Japan</option>
                  <option value="Germany">Germany</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                  <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Transmission</label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Fuel Type</label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Mileage</label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">Status *</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Reserved">Reserved</option>
                  <option value="In Transit">In Transit</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              placeholder="Enter vehicle description..."
            />
          </div>

          {/* Images */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Vehicle Images</h2>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center">
              <svg className="w-12 h-12 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/60 mb-2">Drag and drop images here, or click to select</p>
              <input type="file" multiple accept="image/*" className="hidden" id="vehicle-images" />
              <label htmlFor="vehicle-images" className="inline-block px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                Browse Files
              </label>
            </div>
          </div>

          {/* Featured */}
          <div className="glass-card p-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 text-primary-red bg-white/5 border-white/10 rounded focus:ring-primary-red"
              />
              <div>
                <span className="text-white font-medium">Featured Vehicle</span>
                <p className="text-white/60 text-sm">Display this vehicle prominently on the homepage</p>
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium"
            >
              Update Vehicle
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/vehicles')}
              className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
