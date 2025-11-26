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
  mileage, 
  location, 
  transmission, 
  fuel,
  href 
}: CarCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden">
        <div className="relative h-56 overflow-hidden bg-dark-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {year}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-900 mb-2">{title}</h3>
          <p className="text-2xl font-bold text-accent-500 mb-4">
            ${price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-dark-600 mb-4">
            {mileage && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {mileage}
              </div>
            )}
            {transmission && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                {transmission}
              </div>
            )}
            {fuel && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                {fuel}
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>
          </div>
          <div className="pt-4 border-t border-dark-100">
            <span className="text-accent-600 font-semibold hover:text-accent-700 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
