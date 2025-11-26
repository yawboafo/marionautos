'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'

const customers = [
  { id: 1, name: 'John Mensah', email: 'john@example.com', phone: '+233 XX XXX XXXX', orders: 3, spent: 850000, currency: 'GHS', joined: '2024-01-15', status: 'Active' },
  { id: 2, name: 'Grace Owusu', email: 'grace@example.com', phone: '+233 XX XXX XXXX', orders: 2, spent: 700000, currency: 'GHS', joined: '2024-03-20', status: 'Active' },
  { id: 3, name: 'Kwame Asante', email: 'kwame@example.com', phone: '+233 XX XXX XXXX', orders: 1, spent: 620000, currency: 'GHS', joined: '2024-06-10', status: 'Active' },
  { id: 4, name: 'Ama Sarpong', email: 'ama@example.com', phone: '+233 XX XXX XXXX', orders: 1, spent: 450000, currency: 'GHS', joined: '2024-09-05', status: 'Active' },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Customer Management</h1>
          <p className="text-white/60">View and manage customer information</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Total Customers</p>
            <p className="text-2xl font-bold text-white">{customers.length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Active</p>
            <p className="text-2xl font-bold text-green-400">{customers.filter(c => c.status === 'Active').length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-white">{customers.reduce((sum, c) => sum + c.orders, 0)}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-white">₵{customers.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}</p>
          </div>
        </div>

        {/* Search */}
        <div className="glass-card p-6">
          <div className="relative">
            <svg className="w-5 h-5 text-white/40 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red transition-all"
            />
          </div>
        </div>

        {/* Customers Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Customer</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Contact</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Orders</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Total Spent</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Joined</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Status</th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-red to-primary-crimson rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{customer.name.charAt(0)}</span>
                        </div>
                        <p className="text-white font-medium">{customer.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">{customer.email}</p>
                      <p className="text-white/60 text-sm">{customer.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">{customer.orders}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">
                        {customer.currency === 'GHS' ? '₵' : '$'}{customer.spent.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">{customer.joined}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 bg-primary-red/20 text-primary-red rounded-lg hover:bg-primary-red hover:text-white transition-all text-sm">
                          View
                        </button>
                        <button className="px-3 py-1.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm">
                          Message
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
