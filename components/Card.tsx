import React from 'react'
import Link from 'next/link'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
  
  return (
    <div className={`card ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

interface CarCardProps {
  id: string
  image: string
  title: string
  year: number
  price: number
  currency?: string
  mileage?: string
  location: string
  transmission?: string
  fuel?: string
  href: string
}

export function CarCard({ 
  image, 
  title, 
  year, 
  price, 
  currency = 'USD',
  mileage, 
  location, 
  transmission, 
  fuel,
  href 
}: CarCardProps) {
  return (
    <Link href={href} className="group">
      <div className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-brand-silver/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        <div className="relative h-56 overflow-hidden bg-black/40">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-red to-primary-crimson text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-primary-red/30">
            {year}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-red transition-colors">{title}</h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-primary-red to-primary-crimson bg-clip-text text-transparent mb-4">
            {currency === 'GHS' ? '₵' : '$'}{price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/60 mb-4">
            {mileage && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{mileage}</span>
              </div>
            )}
            {transmission && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span>{transmission}</span>
              </div>
            )}
            {fuel && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span>{fuel}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-primary-red font-semibold group-hover:text-white transition-colors flex items-center gap-2">
              View Details
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
