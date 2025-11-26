'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-neon-cyan font-medium">📞 Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-neon-pink to-white bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Have a question or ready to start your car buying journey? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-2xl p-6 text-center">
                  <svg className="w-16 h-16 text-neon-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="input-modern"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="input-modern"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="input-modern"
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Subject *</label>
                    <select
                      required
                      className="input-modern"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="buy-ghana">Buying in Ghana</option>
                      <option value="import">Import from USA/Canada</option>
                      <option value="tracking">Shipment Tracking</option>
                      <option value="financing">Financing Options</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="input-modern"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Office Address</div>
                      <div className="text-white/60">123 Independence Avenue<br />East Legon, Accra, Ghana</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Phone Numbers</div>
                      <div className="text-white/60">
                        +233 20 794 6778<br />
                        +233 20 794 6778 (WhatsApp)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Email</div>
                      <div className="text-white/60">
                        info@marionautos.com<br />
                        support@marionautos.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-orange to-neon-lime rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Business Hours</div>
                      <div className="text-white/60">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-white/60 mb-6">Stay updated with our latest inventory and news</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/marionn_autos/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-pink hover:border-neon-pink hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="https://snapchat.com/add/Marionautos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-lime hover:border-neon-lime hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .633-.09.962-.09.328 0 .674.089 1.033.297.36.208.583.55.583 1.009 0 .557-.36.897-.978 1.114-.21.074-.42.148-.63.222l-.64.225c-.12.042-.24.084-.36.126-.45.149-.735.3-.735.645 0 .3.215.54.54.735.72.42 1.41.927 2.01 1.65.51.624.87 1.35.87 2.22 0 .93-.39 1.65-1.065 2.01-.629.337-1.41.495-2.355.495-.225 0-.375-.015-.57-.045-.06 0-.12-.015-.18-.015-.06 0-.12 0-.18.015-.36.045-.66.12-1.02.225-.66.195-1.47.42-2.55.42-1.08 0-1.89-.225-2.55-.42-.36-.105-.66-.18-1.02-.225-.06-.015-.12-.015-.18-.015-.06 0-.12.015-.18.015-.195.03-.345.045-.57.045-.945 0-1.725-.157-2.355-.495-.675-.36-1.065-1.08-1.065-2.01 0-.87.36-1.596.87-2.22.6-.723 1.29-1.23 2.01-1.65.195-.12.54-.36.54-.735 0-.345-.285-.495-.735-.645-.12-.042-.24-.084-.36-.126l-.64-.225c-.21-.074-.42-.148-.63-.222-.618-.216-.978-.557-.978-1.114 0-.458.223-.8.583-1.009.36-.208.706-.297 1.033-.297.33 0 .662.09.962.09.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821zm.002 1.5c-.734 0-3.784.22-5.097 3.195-.394.888-.314 2.647-.214 4.158l.004.065c.012.18.023.36.033.539.015.315.015.634-.015.933-.03.3-.104.584-.314.794-.21.21-.495.3-.794.33-.3.03-.599.03-.898.015-.195 0-.375-.015-.54-.015-.06 0-.12 0-.165.015 0 0-.015 0-.015.015 0 0 0 .015.015.015.015 0 .015 0 .03.015.015 0 .045.015.075.03.09.03.18.06.27.105l.645.225c.195.075.405.15.6.24.705.285 1.29.705 1.29 1.545 0 .87-.585 1.38-1.335 1.785-.705.405-1.38.87-1.95 1.485-.435.48-.705 1.035-.705 1.695 0 .54.195 1.02.555 1.275.375.255.96.375 1.695.375.18 0 .315-.015.48-.03.075-.015.15-.015.225-.015.075 0 .15 0 .225.015.405.045.765.135 1.155.255.66.195 1.53.435 2.715.435 1.185 0 2.055-.24 2.715-.435.39-.12.75-.21 1.155-.255.075-.015.15-.015.225-.015.075 0 .15 0 .225.015.165.015.3.03.48.03.735 0 1.32-.12 1.695-.375.36-.255.555-.735.555-1.275 0-.66-.27-1.215-.705-1.695-.57-.615-1.245-1.08-1.95-1.485-.75-.405-1.335-.915-1.335-1.785 0-.84.585-1.26 1.29-1.545.195-.09.405-.165.6-.24l.645-.225c.09-.045.18-.075.27-.105.03-.015.06-.03.075-.03.015 0 .015 0 .03-.015.015 0 .015-.015.015-.015 0-.015-.015-.015-.015-.015-.045-.015-.105-.015-.165-.015-.165 0-.345.015-.54.015-.3.015-.599.015-.898-.015-.3-.03-.584-.12-.794-.33-.21-.21-.285-.495-.314-.794-.03-.3-.03-.618-.015-.933.01-.18.021-.36.033-.539l.004-.065c.1-1.511.18-3.27-.214-4.158-1.313-2.975-4.363-3.195-5.097-3.195z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/233207946778" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-cyan hover:border-neon-cyan hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
