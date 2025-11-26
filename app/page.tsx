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
    <main className="bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-card animate-fade-in">
              <span className="text-neon-cyan font-medium">🚗 Premium Active Cars</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Premium Cars in Ghana
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-shimmer">
                Import from USA or Canada
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Buy locally or import your dream car from the USA or Canada. Track delivery. Calculate costs. Drive with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link href="/cars/ghana">
                <Button variant="primary" size="lg" className="group">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Browse Cars in Ghana
                </Button>
              </Link>
              <Link href="/cars/usa">
                <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Import from USA or Canada
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 relative z-20">
        <div className="container-custom">
          <SearchBar />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Explore Our Services</h2>
            <p className="text-white/60 text-lg">Everything you need in one platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/cars/ghana" className="group">
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-cyan/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Buy in Ghana</h3>
                  <p className="text-white/60">Browse premium cars available locally</p>
                </div>
              </div>
            </Link>

            <Link href="/cars/usa" className="group">
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-purple/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Import from USA/Canada</h3>
                  <p className="text-white/60">Access thousands of cars worldwide</p>
                </div>
              </div>
            </Link>

            <Link href="/track" className="group">
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-pink/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Track Delivery</h3>
                  <p className="text-white/60">Monitor your shipment in real-time</p>
                </div>
              </div>
            </Link>

            <Link href="/calculator" className="group">
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-orange to-neon-lime rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-orange/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cost Calculator</h3>
                  <p className="text-white/60">Calculate duty & shipping instantly</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars Ghana */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Cars in Ghana</h2>
            <p className="text-white/60 text-lg">Premium vehicles ready for immediate delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/cars/ghana">
              <Button variant="primary" size="lg">
                <span>View All Ghana Cars</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Import from USA */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Import from USA or Canada</h2>
            <p className="text-white/60 text-lg">Access the largest automotive markets in North America</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {usaCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/cars/usa">
              <Button variant="primary" size="lg">
                <span>Browse USA/Canada Inventory</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Marion Autos</h2>
            <p className="text-white/60 text-lg">Your trusted partner in automotive excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-cyan/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trusted & Verified</h3>
              <p className="text-white/60">Every car is thoroughly inspected and verified before listing</p>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-purple/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Pricing</h3>
              <p className="text-white/60">No hidden fees. Calculate all costs upfront with our calculator</p>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-neon-orange to-neon-lime rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-orange/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Delivery</h3>
              <p className="text-white/60">Track your shipment and get your car delivered quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
            Ready to Get Your Dream Car?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
            Start browsing our inventory or calculate your import costs today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/cars/ghana">
              <Button variant="primary" size="lg" className="min-w-[200px]">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Inventory
              </Button>
            </Link>
            <Link href="/calculator">
              <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate Costs
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
