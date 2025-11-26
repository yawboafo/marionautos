'use client'

import React, { useState } from 'react'
import Button from './Button'

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void
}

interface SearchFilters {
  make: string
  model: string
  yearFrom: string
  yearTo: string
  priceFrom: string
  priceTo: string
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    make: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(filters)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Make</label>
          <select 
            className="input-modern"
            value={filters.make}
            onChange={(e) => setFilters({...filters, make: e.target.value})}
          >
            <option value="">All Makes</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="nissan">Nissan</option>
            <option value="mercedes">Mercedes-Benz</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="ford">Ford</option>
            <option value="chevrolet">Chevrolet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Model</label>
          <input 
            type="text"
            className="input-modern"
            placeholder="Any Model"
            value={filters.model}
            onChange={(e) => setFilters({...filters, model: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Year From</label>
          <select 
            className="input-modern"
            value={filters.yearFrom}
            onChange={(e) => setFilters({...filters, yearFrom: e.target.value})}
          >
            <option value="">Any</option>
            {Array.from({length: 15}, (_, i) => 2024 - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Year To</label>
          <select 
            className="input-modern"
            value={filters.yearTo}
            onChange={(e) => setFilters({...filters, yearTo: e.target.value})}
          >
            <option value="">Any</option>
            {Array.from({length: 15}, (_, i) => 2024 - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Price From</label>
          <input 
            type="number"
            className="input-modern"
            placeholder="Min Price"
            value={filters.priceFrom}
            onChange={(e) => setFilters({...filters, priceFrom: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Price To</label>
          <input 
            type="number"
            className="input-modern"
            placeholder="Max Price"
            value={filters.priceTo}
            onChange={(e) => setFilters({...filters, priceTo: e.target.value})}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto min-w-[200px]">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search Cars
        </Button>
      </div>
    </form>
  )
}
