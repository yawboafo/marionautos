'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-neon-cyan font-medium">📜 Legal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-neon-purple to-white bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-white/60 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center text-sm">1</span>
                Acceptance of Terms
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  By accessing and using the Marion Autos website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, you should not use our services.
                </p>
                <p>
                  These Terms and Conditions govern your use of our website, purchase of vehicles, import services, and any other services provided by Marion Autos.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-purple to-neon-pink rounded-lg flex items-center justify-center text-sm">2</span>
                Vehicle Purchase Terms
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p className="font-semibold text-white/90">For Ghana-based vehicles:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All vehicles are sold "as-is" unless otherwise stated in writing</li>
                  <li>Vehicle inspections are available and recommended before purchase</li>
                  <li>Payment terms and financing options will be clearly communicated</li>
                  <li>Title transfer and registration assistance is provided</li>
                </ul>
                
                <p className="font-semibold text-white/90 mt-6">For imported vehicles (USA/Canada):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Import timelines are estimates and subject to shipping and customs variations</li>
                  <li>All import duties, taxes, and fees are the responsibility of the buyer unless otherwise agreed</li>
                  <li>Vehicle condition is verified before shipment with provided documentation</li>
                  <li>Import clearance and registration support is included in our service</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-pink to-neon-orange rounded-lg flex items-center justify-center text-sm">3</span>
                Pricing and Payment
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are listed in US Dollars (USD) unless otherwise stated</li>
                  <li>Prices are subject to change without notice but confirmed prices are honored for active transactions</li>
                  <li>Deposits are required to secure vehicle reservations and import orders</li>
                  <li>Accepted payment methods include bank transfer, mobile money, and cash (for local purchases)</li>
                  <li>Full payment is required before vehicle delivery or shipment</li>
                  <li>Additional costs (shipping, duties, taxes, registration) are clearly itemized in quotes</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-orange to-neon-lime rounded-lg flex items-center justify-center text-sm">4</span>
                Refund and Cancellation Policy
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p className="font-semibold text-white/90">Local Ghana purchases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deposits are refundable within 48 hours of payment if vehicle has not been reserved</li>
                  <li>Once a vehicle is reserved, deposits become non-refundable but can be transferred to another vehicle</li>
                  <li>Test drives and inspections are encouraged before finalizing purchase</li>
                </ul>
                
                <p className="font-semibold text-white/90 mt-6">Import orders:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Import deposits are refundable before vehicle purchase is initiated in USA/Canada</li>
                  <li>Once vehicle is purchased on your behalf, deposits and payments are non-refundable</li>
                  <li>Order cancellations after shipment has begun are not permitted</li>
                  <li>In case of force majeure or unforeseen circumstances, terms will be reviewed on a case-by-case basis</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-lime to-neon-cyan rounded-lg flex items-center justify-center text-sm">5</span>
                Shipping and Delivery
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Estimated delivery timelines are provided but not guaranteed due to factors beyond our control</li>
                  <li>We work with reputable shipping partners for international transport</li>
                  <li>Tracking information is provided once shipment begins</li>
                  <li>Customers are responsible for being available for delivery or customs clearance</li>
                  <li>Storage fees may apply if vehicles are not collected within agreed timelines</li>
                  <li>Vehicle delivery within Ghana can be arranged for an additional fee</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-sm">6</span>
                Warranties and Liability
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marion Autos provides a limited warranty on vehicle condition as described at time of sale</li>
                  <li>We are not liable for mechanical issues not disclosed or discovered during inspection</li>
                  <li>Imported vehicles come with any manufacturer warranties still valid, but Marion Autos does not guarantee such warranties</li>
                  <li>Our liability is limited to the purchase price of the vehicle</li>
                  <li>We are not responsible for delays caused by customs, shipping carriers, or government agencies</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-lg flex items-center justify-center text-sm">7</span>
                Intellectual Property
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  All content on the Marion Autos website, including text, images, logos, graphics, and software, is the property of Marion Autos or its content suppliers and is protected by international copyright laws.
                </p>
                <p>
                  You may not reproduce, distribute, or use any content from our website without express written permission.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-orange to-neon-pink rounded-lg flex items-center justify-center text-sm">8</span>
                User Conduct
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Not engage in fraudulent or illegal activities</li>
                  <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                  <li>Respect the privacy and rights of other users</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-lime rounded-lg flex items-center justify-center text-sm">9</span>
                Dispute Resolution
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  In the event of any dispute arising from these terms or your use of our services, both parties agree to first attempt to resolve the matter through good-faith negotiation.
                </p>
                <p>
                  If a resolution cannot be reached, the dispute will be subject to the jurisdiction of the courts of Ghana, and these terms will be governed by the laws of Ghana.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-purple to-neon-orange rounded-lg flex items-center justify-center text-sm">10</span>
                Changes to Terms
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  Marion Autos reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website.
                </p>
                <p>
                  Your continued use of our services after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-neon-lime to-neon-pink rounded-lg flex items-center justify-center text-sm">11</span>
                Contact Information
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-white/5 rounded-xl p-6 mt-4">
                  <p><strong className="text-white">Email:</strong> legal@marionautos.com</p>
                  <p className="mt-2"><strong className="text-white">Phone:</strong> +233 20 794 6778</p>
                  <p className="mt-2"><strong className="text-white">Address:</strong> 123 Independence Avenue, East Legon, Accra, Ghana</p>
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
