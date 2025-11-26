'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const orders = [
  { id: '#1234', customer: 'John Mensah', email: 'john@example.com', vehicle: 'Toyota Camry 2024', price: 285000, currency: 'GHS', status: 'Pending', date: '2024-11-26', payment: 'Paid' },
  { id: '#1233', customer: 'Grace Owusu', email: 'grace@example.com', vehicle: 'Honda CR-V 2023', price: 35000, currency: 'USD', status: 'Shipped', date: '2024-11-25', payment: 'Paid' },
  { id: '#1232', customer: 'Kwame Asante', email: 'kwame@example.com', vehicle: 'BMW X5 2024', price: 620000, currency: 'GHS', status: 'Delivered', date: '2024-11-24', payment: 'Paid' },
  { id: '#1231', customer: 'Ama Sarpong', email: 'ama@example.com', vehicle: 'Mercedes C-Class 2023', price: 450000, currency: 'GHS', status: 'Processing', date: '2024-11-23', payment: 'Pending' },
]

export default function OrdersPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Order Management</h1>
          <p className="text-white/60">Manage and track all customer orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-white">{orders.length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-400">{orders.filter(o => o.status === 'Pending').length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Shipped</p>
            <p className="text-2xl font-bold text-blue-400">{orders.filter(o => o.status === 'Shipped').length}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-400">{orders.filter(o => o.status === 'Delivered').length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <svg className="w-5 h-5 text-white/40 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-red transition-all"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red transition-all"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Order ID</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Customer</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Vehicle</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Price</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Payment</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Status</th>
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-medium">Date</th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-white font-mono">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">{order.customer}</p>
                      <p className="text-white/60 text-sm">{order.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80">{order.vehicle}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-primary-red font-bold">
                        {order.currency === 'GHS' ? '₵' : '$'}{order.price.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        order.payment === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                        order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white/80 text-sm">{order.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => router.push(`/admin/orders/${order.id.replace('#', '')}`)}
                          className="px-3 py-1.5 bg-primary-red/20 text-primary-red rounded-lg hover:bg-primary-red hover:text-white transition-all text-sm"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => console.log('Generate invoice for', order.id)}
                          className="px-3 py-1.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm"
                        >
                          Invoice
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
