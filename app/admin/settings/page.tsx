'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-white/60">Manage your dealership settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="glass-card p-2 flex gap-2 overflow-x-auto">
          {['general', 'currency', 'shipping', 'users', 'notifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-primary-red text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">General Settings</h2>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Dealership Name</label>
              <input
                type="text"
                defaultValue="Marion Autos"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Contact Email</label>
              <input
                type="email"
                defaultValue="info@marionautos.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                defaultValue="+233 XX XXX XXXX"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Address</label>
              <textarea
                rows={3}
                defaultValue="Accra, Ghana"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <button className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium">
              Save Changes
            </button>
          </div>
        )}

        {/* Currency Settings */}
        {activeTab === 'currency' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Currency & Tax Settings</h2>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Default Currency</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red">
                <option value="USD">USD - US Dollar</option>
                <option value="GHS">GHS - Ghana Cedi</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Tax Rate (%)</label>
              <input
                type="number"
                defaultValue="7.5"
                step="0.1"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Currency Display</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="currency" defaultChecked className="text-primary-red" />
                  <span className="text-white">Symbol ($1,000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="currency" className="text-primary-red" />
                  <span className="text-white">Code (USD 1,000)</span>
                </label>
              </div>
            </div>

            <button className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium">
              Save Changes
            </button>
          </div>
        )}

        {/* Shipping Settings */}
        {activeTab === 'shipping' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Shipping & Duty Settings</h2>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Shipping Zones</label>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white">Ghana (Local)</span>
                  <span className="text-primary-red font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white">West Africa</span>
                  <span className="text-primary-red font-medium">$500</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white">International</span>
                  <span className="text-primary-red font-medium">$1,200</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Default Duty Rate (%)</label>
              <input
                type="number"
                defaultValue="35"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
              <p className="text-white/60 text-xs mt-1">Used in duty calculator</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white font-medium">Enable Duty Calculator</p>
                <p className="text-white/60 text-sm">Allow customers to calculate import duties</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
              </label>
            </div>

            <button className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium">
              Save Changes
            </button>
          </div>
        )}

        {/* User Management */}
        {activeTab === 'users' && (
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Admin Users</h2>
              <button className="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-crimson transition-all text-sm">
                Add User
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-red to-primary-crimson rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SA</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Samuel Ankrah</p>
                    <p className="text-white/60 text-sm">samuel@marionautos.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 bg-primary-red/20 text-primary-red rounded text-xs">Admin</span>
                  <button className="text-white/60 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Jane Doe</p>
                    <p className="text-white/60 text-sm">jane@marionautos.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Manager</span>
                  <button className="text-white/60 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Notification Preferences</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">New Order Notifications</p>
                  <p className="text-white/60 text-sm">Get notified when new orders are placed</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Customer Inquiries</p>
                  <p className="text-white/60 text-sm">Receive alerts for new customer messages</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Inventory Alerts</p>
                  <p className="text-white/60 text-sm">Low stock and inventory updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Weekly Reports</p>
                  <p className="text-white/60 text-sm">Summary of sales and activity</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                </label>
              </div>
            </div>

            <button className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium">
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
