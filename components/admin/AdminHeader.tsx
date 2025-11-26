'use client'

import { useState } from 'react'

export default function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-white/60 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div>
            <h1 className="text-white text-xl font-bold">Dashboard</h1>
            <p className="text-white/40 text-sm">Welcome back, Samuel</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 border border-white/10">
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-white text-sm outline-none w-64 placeholder-white/40"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary-red rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10">
                  <h3 className="text-white font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-white/5 cursor-pointer border-b border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-red rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">New order received</p>
                        <p className="text-white/40 text-xs mt-1">Order #1234 - Toyota Camry 2024</p>
                        <p className="text-white/30 text-xs mt-1">5 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 hover:bg-white/5 cursor-pointer border-b border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-silver rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Vehicle shipped</p>
                        <p className="text-white/40 text-xs mt-1">Order #1230 is now in transit</p>
                        <p className="text-white/30 text-xs mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 hover:bg-white/5 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-silver rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">New customer inquiry</p>
                        <p className="text-white/40 text-xs mt-1">Contact form submission</p>
                        <p className="text-white/30 text-xs mt-1">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-white/10 text-center">
                  <button className="text-primary-red text-sm hover:text-primary-crimson transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-red to-primary-crimson rounded-xl text-white hover:shadow-lg hover:shadow-primary-red/30 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium text-sm">Add Vehicle</span>
          </button>
        </div>
      </div>
    </header>
  )
}
