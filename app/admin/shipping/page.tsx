'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'

export default function ShippingPage() {
  const [activeTab, setActiveTab] = useState('active')
  const [calculatorData, setCalculatorData] = useState({
    vehicleValue: '',
    origin: 'USA',
    destination: 'Ghana'
  })

  const shipments = [
    { id: 1, vehicle: '2023 Toyota Camry', customer: 'John Mensah', origin: 'USA', destination: 'Ghana', status: 'In Transit', eta: '2024-12-15', tracking: 'TRK-2024-5678' },
    { id: 2, vehicle: '2022 Honda CR-V', customer: 'Grace Owusu', origin: 'Japan', destination: 'Ghana', status: 'Customs', eta: '2024-12-10', tracking: 'TRK-2024-5679' },
    { id: 3, vehicle: '2023 Ford F-150', customer: 'Kwame Asante', origin: 'USA', destination: 'Ghana', status: 'Departed', eta: '2024-12-20', tracking: 'TRK-2024-5680' },
  ]

  const completedShipments = [
    { id: 4, vehicle: '2022 BMW X5', customer: 'Ama Sarpong', origin: 'Germany', destination: 'Ghana', status: 'Delivered', deliveredDate: '2024-11-15' },
  ]

  const calculateDuty = () => {
    const value = parseFloat(calculatorData.vehicleValue)
    if (!value) return

    const dutyRate = 0.35 // 35%
    const vat = 0.125 // 12.5%
    const levy = 0.05 // 5%

    const duty = value * dutyRate
    const vatAmount = (value + duty) * vat
    const levyAmount = value * levy
    const total = duty + vatAmount + levyAmount

    console.log('Calculated duty:', total)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Shipping & Logistics</h1>
          <p className="text-white/60">Manage shipments and calculate duties</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Active Shipments</p>
            <p className="text-2xl font-bold text-white">{shipments.length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">In Transit</p>
            <p className="text-2xl font-bold text-blue-400">{shipments.filter(s => s.status === 'In Transit').length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">At Customs</p>
            <p className="text-2xl font-bold text-yellow-400">{shipments.filter(s => s.status === 'Customs').length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-400">{completedShipments.length}</p>
          </div>
        </div>

        {/* Duty Calculator */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Duty Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-white/80 mb-2 text-sm">Vehicle Value ($)</label>
              <input
                type="number"
                value={calculatorData.vehicleValue}
                onChange={(e) => setCalculatorData({...calculatorData, vehicleValue: e.target.value})}
                placeholder="Enter value"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2 text-sm">Origin</label>
              <select
                value={calculatorData.origin}
                onChange={(e) => setCalculatorData({...calculatorData, origin: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              >
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Germany">Germany</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 mb-2 text-sm">Destination</label>
              <select
                value={calculatorData.destination}
                onChange={(e) => setCalculatorData({...calculatorData, destination: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              >
                <option value="Ghana">Ghana</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={calculateDuty}
                className="w-full px-4 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium"
              >
                Calculate
              </button>
            </div>
          </div>

          {calculatorData.vehicleValue && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-3">
                <p className="text-white/60 text-xs mb-1">Import Duty (35%)</p>
                <p className="text-white font-bold">${(parseFloat(calculatorData.vehicleValue) * 0.35).toLocaleString()}</p>
              </div>
              <div className="glass-card p-3">
                <p className="text-white/60 text-xs mb-1">VAT (12.5%)</p>
                <p className="text-white font-bold">${((parseFloat(calculatorData.vehicleValue) * 1.35) * 0.125).toLocaleString()}</p>
              </div>
              <div className="glass-card p-3">
                <p className="text-white/60 text-xs mb-1">Levy (5%)</p>
                <p className="text-white font-bold">${(parseFloat(calculatorData.vehicleValue) * 0.05).toLocaleString()}</p>
              </div>
              <div className="glass-card p-3 bg-primary-red/20">
                <p className="text-white/80 text-xs mb-1">Total Cost</p>
                <p className="text-white font-bold text-lg">
                  ${(parseFloat(calculatorData.vehicleValue) * 1.525).toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="glass-card p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'active'
                ? 'bg-primary-red text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Active Shipments
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'completed'
                ? 'bg-primary-red text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Shipments Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Vehicle</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Customer</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Route</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Status</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">{activeTab === 'active' ? 'ETA' : 'Delivered'}</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Tracking</th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'active' ? shipments : completedShipments).map((shipment) => (
                  <tr key={shipment.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">{shipment.vehicle}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80">{shipment.customer}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">{shipment.origin} → {shipment.destination}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        shipment.status === 'In Transit' ? 'bg-blue-500/20 text-blue-400' :
                        shipment.status === 'Customs' ? 'bg-yellow-500/20 text-yellow-400' :
                        shipment.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">
                        {activeTab === 'active' ? shipment.eta : shipment.deliveredDate}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm font-mono">{shipment.tracking || '-'}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 bg-primary-red/20 text-primary-red rounded-lg hover:bg-primary-red hover:text-white transition-all text-sm">
                          Track
                        </button>
                        <button className="px-3 py-1.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm">
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
