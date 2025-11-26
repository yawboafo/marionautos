'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const salesData = [
  { month: 'Jan', revenue: 124000, orders: 18 },
  { month: 'Feb', revenue: 132000, orders: 22 },
  { month: 'Mar', revenue: 148000, orders: 25 },
  { month: 'Apr', revenue: 156000, orders: 28 },
  { month: 'May', revenue: 175000, orders: 31 },
  { month: 'Jun', revenue: 198000, orders: 35 },
]

const vehiclePerformance = [
  { category: 'Sedan', sold: 45, revenue: 8900000 },
  { category: 'SUV', sold: 38, revenue: 12400000 },
  { category: 'Truck', sold: 22, revenue: 7800000 },
  { category: 'Coupe', sold: 15, revenue: 5200000 },
]

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Reports</h1>
          <p className="text-white/60">Track performance and generate insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Avg. Sale Value</p>
            <p className="text-2xl font-bold text-white">₵428,500</p>
            <p className="text-green-400 text-xs mt-1">↑ 12.5%</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Conversion Rate</p>
            <p className="text-2xl font-bold text-white">18.4%</p>
            <p className="text-green-400 text-xs mt-1">↑ 3.2%</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Avg. Days to Sell</p>
            <p className="text-2xl font-bold text-white">28</p>
            <p className="text-red-400 text-xs mt-1">↑ 2 days</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-white/60 text-sm mb-1">Repeat Customers</p>
            <p className="text-2xl font-bold text-white">32%</p>
            <p className="text-green-400 text-xs mt-1">↑ 5.1%</p>
          </div>
        </div>

        {/* Revenue & Orders Chart */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Revenue & Orders Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
              <YAxis yAxisId="left" stroke="rgba(255,255,255,0.6)" />
              <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.6)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#DC143C" strokeWidth={2} name="Revenue ($)" />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={2} name="Orders" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Vehicle Category Performance */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Vehicle Category Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vehiclePerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="category" stroke="rgba(255,255,255,0.6)" />
              <YAxis yAxisId="left" stroke="rgba(255,255,255,0.6)" />
              <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.6)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="sold" fill="#DC143C" name="Units Sold" />
              <Bar yAxisId="right" dataKey="revenue" fill="#3B82F6" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Top Selling Vehicles</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Toyota Camry 2023</p>
                  <p className="text-white/60 text-sm">12 units sold</p>
                </div>
                <p className="text-primary-red font-bold">₵3.48M</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Honda CR-V 2023</p>
                  <p className="text-white/60 text-sm">10 units sold</p>
                </div>
                <p className="text-primary-red font-bold">₵3.20M</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Ford F-150 2022</p>
                  <p className="text-white/60 text-sm">8 units sold</p>
                </div>
                <p className="text-primary-red font-bold">₵2.85M</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Best Customers</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">John Mensah</p>
                  <p className="text-white/60 text-sm">3 purchases</p>
                </div>
                <p className="text-primary-red font-bold">₵850K</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Grace Owusu</p>
                  <p className="text-white/60 text-sm">2 purchases</p>
                </div>
                <p className="text-primary-red font-bold">₵700K</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Kwame Asante</p>
                  <p className="text-white/60 text-sm">1 purchase</p>
                </div>
                <p className="text-primary-red font-bold">₵620K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
