'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dark-900">Marion Auto</h1>
              <p className="text-xs text-dark-600">Premium Cars</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/cars/ghana" className="text-dark-700 hover:text-accent-600 font-medium transition-colors">
              Buy in Ghana
            </Link>
            <Link href="/cars/usa" className="text-dark-700 hover:text-accent-600 font-medium transition-colors">
              Import from USA
            </Link>
            <Link href="/track" className="text-dark-700 hover:text-accent-600 font-medium transition-colors">
              Track Delivery
            </Link>
            <Link href="/calculator" className="text-dark-700 hover:text-accent-600 font-medium transition-colors">
              Calculator
            </Link>
            <Link href="/dashboard">
              <Button variant="primary" size="sm">Dashboard</Button>
            </Link>
          </div>

          <button 
            className="md:hidden text-dark-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-dark-100">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link href="/cars/ghana" className="text-dark-700 hover:text-accent-600 font-medium py-2">
              Buy in Ghana
            </Link>
            <Link href="/cars/usa" className="text-dark-700 hover:text-accent-600 font-medium py-2">
              Import from USA
            </Link>
            <Link href="/track" className="text-dark-700 hover:text-accent-600 font-medium py-2">
              Track Delivery
            </Link>
            <Link href="/calculator" className="text-dark-700 hover:text-accent-600 font-medium py-2">
              Calculator
            </Link>
            <Link href="/dashboard" className="py-2">
              <Button variant="primary" size="md" className="w-full">Dashboard</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
