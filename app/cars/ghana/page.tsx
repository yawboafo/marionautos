'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CarCard } from '@/components/Card'
import Button from '@/components/Button'

const ghanaCars = [
  {
    id: '1',
    title: 'Toyota Camry 2023',
    year: 2023,
    price: 28500,
    mileage: '12,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    href: '/cars/ghana/1'
  },
  {
    id: '2',
    title: 'Mercedes-Benz C-Class 2022',
    year: 2022,
    price: 45000,
    mileage: '18,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    href: '/cars/ghana/2'
  },
  {
    id: '3',
    title: 'Honda CR-V 2024',
    year: 2024,
    price: 35000,
    mileage: '5,000 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/3'
  },
  {
    id: '4',
    title: 'BMW X5 2023',
    year: 2023,
    price: 62000,
    mileage: '8,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    href: '/cars/ghana/4'
  },
  {
    id: '5',
    title: 'Toyota Land Cruiser 2023',
    year: 2023,
    price: 78000,
    mileage: '10,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    href: '/cars/ghana/5'
  },
  {
    id: '6',
    title: 'Audi A6 2022',
    year: 2022,
    price: 48000,
    mileage: '22,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800&q=80',
    href: '/cars/ghana/6'
  },
  {
    id: '7',
    title: 'Nissan Patrol 2023',
    year: 2023,
    price: 55000,
    mileage: '15,000 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/ghana/7'
  },
  {
    id: '8',
    title: 'Honda Accord 2024',
    year: 2024,
    price: 32000,
    mileage: '3,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    href: '/cars/ghana/8'
  },
  {
    id: '9',
    title: 'Lexus RX 350 2023',
    year: 2023,
    price: 58000,
    mileage: '9,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/9'
  },
  {
    id: '10',
    title: 'Range Rover Evoque 2022',
    year: 2022,
    price: 52000,
    mileage: '20,000 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/ghana/10'
  },
  {
    id: '11',
    title: 'Hyundai Tucson 2024',
    year: 2024,
    price: 29000,
    mileage: '4,500 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/11'
  },
  {
    id: '12',
    title: 'Volkswagen Tiguan 2023',
    year: 2023,
    price: 34000,
    mileage: '11,000 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/12'
  },
  {
    id: '13',
    title: 'Mazda CX-5 2024',
    year: 2024,
    price: 31000,
    mileage: '2,800 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/13'
  },
  {
    id: '14',
    title: 'Ford Explorer 2023',
    year: 2023,
    price: 42000,
    mileage: '13,500 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/ghana/14'
  },
  {
    id: '15',
    title: 'Kia Sportage 2024',
    year: 2024,
    price: 28000,
    mileage: '5,200 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    href: '/cars/ghana/15'
  },
  {
    id: '16',
    title: 'Chevrolet Traverse 2023',
    year: 2023,
    price: 38000,
    mileage: '14,000 km',
    location: 'Accra',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/ghana/16'
  },
  {
    id: '17',
    title: 'Jeep Wrangler 2023',
    year: 2023,
    price: 48000,
    mileage: '16,000 km',
    location: 'Kumasi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/cars/ghana/17'
  },
]

export default function GhanaCarsPage() {
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    year: ''
  })

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-primary-red font-medium">🇬🇭 Local Inventory</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Cars Available in Ghana
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Browse our premium selection of locally available vehicles ready for immediate delivery
            </p>
          </div>
          
          {/* Filters */}
          <div className="glass-card p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Make</label>
                <select className="input-modern" value={filters.make} onChange={(e) => setFilters({...filters, make: e.target.value})}>
                  <option value="">All Makes</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                  <option value="nissan">Nissan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Price Range</label>
                <select className="input-modern" value={filters.priceRange} onChange={(e) => setFilters({...filters, priceRange: e.target.value})}>
                  <option value="">All Prices</option>
                  <option value="0-30000">$0 - $30,000</option>
                  <option value="30000-50000">$30,000 - $50,000</option>
                  <option value="50000-70000">$50,000 - $70,000</option>
                  <option value="70000+">$70,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Year</label>
                <select className="input-modern" value={filters.year} onChange={(e) => setFilters({...filters, year: e.target.value})}>
                  <option value="">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button variant="primary" size="md" className="w-full">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-white/60">Showing <span className="text-primary-red font-semibold">{ghanaCars.length}</span> vehicles</p>
            <select className="input-modern w-auto">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest First</option>
            </select>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ghanaCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3">
            <Button variant="outline" size="sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
