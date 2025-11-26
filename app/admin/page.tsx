'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const salesData = [
  { month: 'Jan', sales: 45, orders: 12 },
  { month: 'Feb', sales: 52, orders: 15 },
  { month: 'Mar', sales: 48, orders: 13 },
  { month: 'Apr', sales: 61, orders: 18 },
  { month: 'May', sales: 55, orders: 16 },
  { month: 'Jun', sales: 67, orders: 20 },
]

const vehicleData = [
  { name: 'In Stock', value: 45, color: '#DC143C' },
  { name: 'Sold', value: 32, color: '#3B82F6' },
  { name: 'In Transit', value: 18, color: '#10B981' },
]

const formatPrice = (price: number, currency: string) => {
  const symbol = currency === 'GHS' ? '₵' : '$'
  return `${symbol}${price.toLocaleString()}`
}

const recentOrders = [
  { id: '#1234', customer: 'John Mensah', vehicle: 'Toyota Camry 2024', status: 'Pending', amount: '$28,500', date: '2 hours ago' },
  { id: '#1233', customer: 'Grace Owusu', vehicle: 'Honda CR-V 2023', status: 'Shipped', amount: '$35,000', date: '5 hours ago' },
  { id: '#1232', customer: 'Kwame Asante', vehicle: 'BMW X5 2024', status: 'Delivered', amount: '$62,000', date: '1 day ago' },
  { id: '#1231', customer: 'Ama Sarpong', vehicle: 'Mercedes C-Class 2023', status: 'Processing', amount: '$45,000', date: '1 day ago' },
]

const recentActivity = [
  { action: 'New order received', details: 'Order #1234 - Toyota Camry', time: '5 min ago', type: 'order' },
  { action: 'Vehicle added', details: 'Ford F-150 2024 added to inventory', time: '1 hour ago', type: 'vehicle' },
  { action: 'Customer inquiry', details: 'New message from John Doe', time: '2 hours ago', type: 'message' },
  { action: 'Payment received', details: '$45,000 for Order #1230', time: '3 hours ago', type: 'payment' },
  { action: 'Vehicle shipped', details: 'Order #1229 departed from USA', time: '5 hours ago', type: 'shipping' },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-white/60">Welcome back! Here's what's happening with your dealership today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Revenue */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-primary-crimson rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">+12.5%</span>
            </div>
            <h3 className="text-white/60 text-sm mb-1">Total Revenue</h3>
            <p className="text-2xl font-bold text-white">$1,245,680</p>
            <p className="text-white/40 text-xs mt-2">This month</p>
          </div>

          {/* Total Orders */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-silver to-brand-gray rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">+8.2%</span>
            </div>
            <h3 className="text-white/60 text-sm mb-1">Total Orders</h3>
            <p className="text-2xl font-bold text-white">94</p>
            <p className="text-white/40 text-xs mt-2">45 pending, 32 shipped</p>
          </div>

          {/* Inventory */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-crimson to-primary-dark rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-red-400 text-sm font-medium">-3.1%</span>
            </div>
            <h3 className="text-white/60 text-sm mb-1">Inventory</h3>
            <p className="text-2xl font-bold text-white">95</p>
            <p className="text-white/40 text-xs mt-2">45 active listings</p>
          </div>

          {/* Customers */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gray to-brand-lightgray rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">+15.3%</span>
            </div>
            <h3 className="text-white/60 text-sm mb-1">Total Customers</h3>
            <p className="text-2xl font-bold text-white">1,524</p>
            <p className="text-white/40 text-xs mt-2">89 new this month</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-bold mb-4">Sales Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="month" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                  labelStyle={{ color: '#ffffff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#DC143C" strokeWidth={2} name="Sales ($K)" />
                <Line type="monotone" dataKey="orders" stroke="#C0C0C0" strokeWidth={2} name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Vehicle Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-bold mb-4">Vehicle Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vehicleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {vehicleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-bold">Recent Orders</h3>
              <button className="text-primary-red text-sm hover:text-primary-crimson transition-colors">
                View all
              </button>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium text-sm">{order.id}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                        order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm truncate">{order.vehicle}</p>
                    <p className="text-white/40 text-xs">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">{order.amount}</p>
                    <p className="text-white/40 text-xs">{order.customer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h3 className="text-white text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'order' ? 'bg-primary-red' :
                    activity.type === 'vehicle' ? 'bg-blue-400' :
                    activity.type === 'message' ? 'bg-yellow-400' :
                    activity.type === 'payment' ? 'bg-green-400' :
                    'bg-brand-silver'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{activity.action}</p>
                    <p className="text-white/60 text-sm">{activity.details}</p>
                    <p className="text-white/40 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
