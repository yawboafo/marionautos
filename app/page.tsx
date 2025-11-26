import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import { CarCard } from '@/components/Card'
import Button from '@/components/Button'
import Link from 'next/link'

const featuredCars = [
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
]

const usaCars = [
  {
    id: '5',
    title: 'Ford F-150 2024',
    year: 2024,
    price: 42000,
    mileage: '2,000 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1593450227441-7a38c7ce4fc7?w=800&q=80',
    href: '/cars/usa/5'
  },
  {
    id: '6',
    title: 'Chevrolet Tahoe 2023',
    year: 2023,
    price: 55000,
    mileage: '8,500 miles',
    location: 'USA',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    href: '/cars/usa/6'
  },
]

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Cars in Ghana<br />
              <span className="gradient-text">Import from USA</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-200 mb-12 max-w-2xl mx-auto">
              Buy locally or import your dream car from the USA. Track delivery. Calculate costs. Drive with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/cars/ghana">
                <Button variant="primary" size="lg">
                  Browse Cars in Ghana
                </Button>
              </Link>
              <Link href="/cars/usa">
                <Button variant="secondary" size="lg">
                  Import from USA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-dark-50 -mt-16 relative z-20">
        <div className="container-custom">
          <SearchBar />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/cars/ghana">
              <div className="card p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Buy in Ghana</h3>
                <p className="text-dark-600">Browse premium cars available locally in Ghana</p>
              </div>
            </Link>

            <Link href="/cars/usa">
              <div className="card p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Import from USA</h3>
                <p className="text-dark-600">Access thousands of cars from the USA market</p>
              </div>
            </Link>

            <Link href="/track">
              <div className="card p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Track Delivery</h3>
                <p className="text-dark-600">Monitor your car shipment in real-time</p>
              </div>
            </Link>

            <Link href="/calculator">
              <div className="card p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">Cost Calculator</h3>
                <p className="text-dark-600">Calculate duty & shipping costs instantly</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars Ghana */}
      <section className="py-20 bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Cars in Ghana</h2>
            <p className="section-subtitle">Premium vehicles ready for immediate delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/cars/ghana">
              <Button variant="outline" size="lg">
                View All Ghana Cars →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Import from USA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Import from USA</h2>
            <p className="section-subtitle">Access the largest automotive market in the world</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {usaCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/cars/usa">
              <Button variant="primary" size="lg">
                Browse USA Inventory →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Marion Auto</h2>
            <p className="text-xl text-dark-300">Your trusted partner in automotive excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Trusted & Verified</h3>
              <p className="text-dark-300">Every car is thoroughly inspected and verified before listing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-dark-300">No hidden fees. Calculate all costs upfront with our calculator</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-dark-300">Track your shipment and get your car delivered quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your Dream Car?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Start browsing our inventory or calculate your import costs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars/ghana">
              <Button variant="secondary" size="lg">
                Browse Inventory
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-accent-600">
                Calculate Costs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
