'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    category: 'Buying in Ghana',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, mobile money (MTN, Vodafone, AirtelTigo), credit/debit cards, and cash payments at our office. We also offer flexible financing options through our partner banks.'
      },
      {
        q: 'Can I test drive a vehicle before purchasing?',
        a: 'Absolutely! We encourage test drives. Simply contact us to schedule an appointment. Bring a valid driver\'s license and we\'ll arrange everything for you.'
      },
      {
        q: 'Do you offer warranties?',
        a: 'Yes, all vehicles come with a comprehensive warranty. Local cars have a 6-month warranty, while imported vehicles include manufacturer warranties plus our own service guarantee.'
      },
      {
        q: 'How long does the purchase process take?',
        a: 'Once payment is confirmed, you can drive away the same day! We handle all paperwork including registration, insurance, and documentation on your behalf.'
      }
    ]
  },
  {
    category: 'Importing from USA/Canada',
    questions: [
      {
        q: 'How long does shipping take from USA/Canada?',
        a: 'Shipping typically takes 4-6 weeks from the USA and 6-8 weeks from Canada, depending on the port and shipping method (RORO vs Container).'
      },
      {
        q: 'What are the import duties and taxes?',
        a: 'Import duties range from 35-40% based on the vehicle\'s year, engine size, and type. Use our calculator to get an accurate estimate for your specific vehicle.'
      },
      {
        q: 'Can you help me find a specific car in the USA?',
        a: 'Yes! We have partnerships with major auction houses and dealerships across the USA and Canada. Share your requirements and we\'ll find the perfect match.'
      },
      {
        q: 'What shipping methods are available?',
        a: 'We offer RORO (Roll-On/Roll-Off) for cost-effectiveness (~$1,500) and Container shipping for premium protection (~$2,500). We\'ll recommend the best option for your vehicle.'
      }
    ]
  },
  {
    category: 'Tracking & Delivery',
    questions: [
      {
        q: 'How can I track my shipment?',
        a: 'You\'ll receive a unique tracking ID once your car ships. Enter it on our tracking page to see real-time updates including location, customs status, and estimated arrival.'
      },
      {
        q: 'What happens after the car arrives in Ghana?',
        a: 'We handle customs clearance, duty payments, and delivery to your doorstep. You\'ll receive notifications at every stage and can pick up or have it delivered within Accra.'
      },
      {
        q: 'Do you deliver outside Accra?',
        a: 'Yes! We deliver nationwide. Delivery fees vary by location: Kumasi (GHS 500), Takoradi (GHS 600), Tamale (GHS 800), and other regions upon request.'
      }
    ]
  },
  {
    category: 'Financing & Payment',
    questions: [
      {
        q: 'Do you offer car financing?',
        a: 'Yes, through our partner banks including GCB, Ecobank, and Fidelity. We offer up to 80% financing with flexible repayment terms from 1-5 years.'
      },
      {
        q: 'What documents do I need for financing?',
        a: 'You\'ll need a valid Ghana Card, proof of income (pay slips/bank statements), proof of residence, and guarantor information. Our team will guide you through the process.'
      },
      {
        q: 'Can I trade in my old car?',
        a: 'Absolutely! We accept trade-ins. Bring your car for evaluation and we\'ll offer a fair market value that can be applied towards your new purchase.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-primary-red font-medium">💬 Got Questions?</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-red to-white bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Find answers to the most common questions about buying cars in Ghana and importing from abroad
            </p>
          </div>

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-red"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openIndex === key
                  return (
                    <div key={questionIndex} className="glass-card overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
                        <svg
                          className={`w-6 h-6 text-primary-red flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-white/70 leading-relaxed border-t border-white/10 pt-5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="glass-card p-12 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-white/60 mb-6">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@marionautos.com" className="btn-neon px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a href="tel:+233XXXXXXXXX" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
