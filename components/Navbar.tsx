'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="Marion Autos Logo" 
                width={48} 
                height={48} 
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-red to-primary-crimson opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Marion Autos</h1>
              <p className="text-xs text-primary-red font-medium">Premium Active Cars</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/cars/ghana" className="text-white/80 hover:text-primary-red font-medium transition-all duration-300 hover:scale-105">
              Buy in Ghana
            </Link>
            <Link href="/cars/usa" className="text-white/80 hover:text-primary-red font-medium transition-all duration-300 hover:scale-105">
              Import from USA or Canada
            </Link>
            <Link href="/track" className="text-white/80 hover:text-primary-red font-medium transition-all duration-300 hover:scale-105">
              Track Delivery
            </Link>
            <Link href="/calculator" className="text-white/80 hover:text-primary-red font-medium transition-all duration-300 hover:scale-105">
              Duty Calculator
            </Link>
            <Link href="/login">
              <Button variant="primary" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all"
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
        <div className="md:hidden backdrop-blur-xl bg-black/95 border-t border-white/10 animate-slide-up">
          <div className="container-custom py-6 flex flex-col gap-4">
            <Link href="/cars/ghana" className="text-white hover:text-primary-red font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all">
              Buy in Ghana
            </Link>
            <Link href="/cars/usa" className="text-white hover:text-primary-red font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all">
              Import from USA or Canada
            </Link>
            <Link href="/track" className="text-white hover:text-primary-red font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all">
              Track Delivery
            </Link>
            <Link href="/calculator" className="text-white hover:text-primary-red font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all">
              Duty Calculator
            </Link>
            <Link href="/login" className="mt-2">
              <Button variant="primary" size="md" className="w-full">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
