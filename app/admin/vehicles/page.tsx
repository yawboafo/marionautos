'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const vehicles = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 285000,
    currency: 'GHS',
    location: 'Ghana',
    status: 'Active',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80',
    vin: 'JT2BF18K0V0123456',
    mileage: '12,000 km'
  },
  {
    id: 2,
    make: 'Ford',
    model: 'F-150',
    year: 2024,
    price: 42000,
    currency: 'USD',
    location: 'USA',
    status: 'Active',
    featured: true,
    image: 'https://images.unsplash.com/photo-1564694202883-46e7448c1b26?w=400&q=80',
    vin: 'F150ABC123456789',
    mileage: '2,000 miles'
  },
  {
    id: 3,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    price: 45000,
    location: 'Ghana',
    status: 'Sold',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80',
    vin: 'WDDWF8DB0KA123456',
    mileage: '18,000 km'
  },
  {
    id: 4,
    make: 'Honda',
    model: 'CR-V',
    year: 2024,
    price: 35000,
    location: 'Ghana',
    status: 'Active',
    featured: false,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80',
    vin: 'HRV456789ABC1234',
    mileage: '5,000 km'
  },
  {
    id: 5,
    make: 'BMW',
    model: 'X5',
    year: 2023,
    price: 620000,
    currency: 'GHS',
    location: 'Ghana',
    status: 'Active',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80',
    vin: 'WBAKB8C55JE123456',
    mileage: '8,000 km'
  },
  {
    id: 6,
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 48000,
    currency: 'USD',
    location: 'USA',
    status: 'In Transit',
    featured: false,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80',
    vin: 'TESLA12345XYZ6789',
    mileage: '1,200 miles'
  },
]

export default function VehiclesPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterLocation, setFilterLocation] = useState('All')

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.vin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || vehicle.status === filterStatus
    const matchesLocation = filterLocation === 'All' || vehicle.location === filterLocation
    return matchesSearch && matchesStatus && matchesLocation
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Vehicle Management</h1>
            <p className="text-white/60">Manage your vehicle inventory</p>
          </div>
          <Link href="/admin/vehicles/add">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-red to-primary-crimson rounded-xl text-white hover:shadow-lg hover:shadow-primary-red/30 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-medium">Add Vehicle</span>
            </button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <svg className="w-5 h-5 text-white/40 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by make, model, or VIN..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Sold">Sold</option>
              <option value="In Transit">In Transit</option>
            </select>

            {/* Location Filter */}
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
            >
              <option value="All">All Locations</option>
              <option value="Ghana">Ghana</option>
              <option value="USA">USA</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Total Vehicles</p>
                <p className="text-2xl font-bold text-white">{vehicles.length}</p>
              </div>
              <div className="w-10 h-10 bg-primary-red/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Active</p>
                <p className="text-2xl font-bold text-white">{vehicles.filter(v => v.status === 'Active').length}</p>
              </div>
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Sold</p>
                <p className="text-2xl font-bold text-white">{vehicles.filter(v => v.status === 'Sold').length}</p>
              </div>
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Featured</p>
                <p className="text-2xl font-bold text-white">{vehicles.filter(v => v.featured).length}</p>
              </div>
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Vehicle</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">VIN</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Price</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Location</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Status</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Mileage</th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <p className="text-white font-medium">{vehicle.make} {vehicle.model}</p>
                          <p className="text-white/60 text-sm">{vehicle.year}</p>
                          {vehicle.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs mt-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm font-mono">{vehicle.vin}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">${vehicle.price.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-white/10 text-white/80 rounded text-sm">
                        {vehicle.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        vehicle.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        vehicle.status === 'Sold' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">{vehicle.mileage}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/vehicles/${vehicle.id}/edit`}>
                          <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                        </Link>
                        <button className="p-2 text-white/60 hover:text-primary-red hover:bg-primary-red/10 rounded-lg transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white/60">No vehicles found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
