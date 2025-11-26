import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-neon-cyan font-medium">About Marion Autos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
                Your Trusted Partner
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Leading Ghana's premium automotive market with integrity, transparency, and exceptional service since our inception
            </p>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="glass-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Marion Autos was founded with a simple mission: to revolutionize the car buying experience in Ghana by combining local expertise with global reach.
                </p>
                <p>
                  We recognized that Ghanaians deserved access to premium vehicles without the complexity and uncertainty that often comes with international imports. Our team of automotive experts works tirelessly to ensure every vehicle meets our stringent quality standards.
                </p>
                <p>
                  Today, we're proud to be Ghana's most trusted automotive platform, serving thousands of satisfied customers across the nation.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&q=80" 
                alt="About Marion Autos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="text-white/60 text-lg">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-cyan/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-white/60">Honest and transparent in every transaction</p>
              </div>
              <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-purple/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-white/60">Committed to premium quality in everything we deliver</p>
              </div>
              <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-orange to-neon-lime rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-neon-orange/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Customer First</h3>
                <p className="text-white/60">Your satisfaction is our ultimate priority</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card p-12 mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-white/60">Cars Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-white/60">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-pink to-neon-orange bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-white/60">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-orange to-neon-lime bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-white/60">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Car?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trusted Marion Autos with their automotive needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cars/ghana">
                <Button variant="primary" size="lg">Browse Inventory</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
