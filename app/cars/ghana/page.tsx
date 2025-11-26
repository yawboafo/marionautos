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
]

export default function GhanaCarsPage() {
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    year: ''
  })

  return (
    <main>
      <Navbar />
      
      <section className="py-12 bg-dark-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">Cars Available in Ghana</h1>
          <p className="text-xl text-dark-600 mb-8">Browse our premium selection of locally available vehicles</p>
          
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Make</label>
                <select className="select-field" value={filters.make} onChange={(e) => setFilters({...filters, make: e.target.value})}>
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
                <label className="block text-sm font-medium text-dark-700 mb-2">Price Range</label>
                <select className="select-field" value={filters.priceRange} onChange={(e) => setFilters({...filters, priceRange: e.target.value})}>
                  <option value="">All Prices</option>
                  <option value="0-30000">$0 - $30,000</option>
                  <option value="30000-50000">$30,000 - $50,000</option>
                  <option value="50000-70000">$50,000 - $70,000</option>
                  <option value="70000+">$70,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Year</label>
                <select className="select-field" value={filters.year} onChange={(e) => setFilters({...filters, year: e.target.value})}>
                  <option value="">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button variant="primary" size="md" className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ghanaCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
