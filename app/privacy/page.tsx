'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 rounded-full glass-card">
              <span className="text-primary-red font-medium">🔒 Privacy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-red to-white bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-white/60 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-crimson rounded-lg flex items-center justify-center text-sm">📋</span>
                Introduction
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  At Marion Autos, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our services.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-silver to-brand-gray rounded-lg flex items-center justify-center text-sm">1</span>
                Information We Collect
              </h2>
              <div className="text-white/70 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-white/90 mb-2">Personal Information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Government-issued identification for vehicle purchases and imports</li>
                    <li>Financial information for payment processing (securely handled by payment processors)</li>
                    <li>Driver's license information when applicable</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-white/90 mb-2">Transaction Information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vehicle preferences, search queries, and browsing history on our website</li>
                    <li>Purchase history and transaction details</li>
                    <li>Communication history with our team</li>
                    <li>Shipping and tracking information</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-white/90 mb-2">Technical Information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address, browser type, and device information</li>
                    <li>Cookies and similar tracking technologies data</li>
                    <li>Website usage data and analytics</li>
                    <li>Location data (with your permission)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-crimson to-primary-dark rounded-lg flex items-center justify-center text-sm">2</span>
                How We Use Your Information
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white/90">Service Delivery:</strong> To process vehicle purchases, manage imports, arrange shipping, and provide customer support</li>
                  <li><strong className="text-white/90">Communication:</strong> To send you updates about your orders, respond to inquiries, and provide important service notifications</li>
                  <li><strong className="text-white/90">Personalization:</strong> To customize your experience and show you relevant vehicle recommendations</li>
                  <li><strong className="text-white/90">Marketing:</strong> To send promotional materials, newsletters, and special offers (with your consent)</li>
                  <li><strong className="text-white/90">Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements</li>
                  <li><strong className="text-white/90">Improvement:</strong> To analyze website usage and improve our services, features, and user experience</li>
                  <li><strong className="text-white/90">Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-lightgray rounded-lg flex items-center justify-center text-sm">3</span>
                Information Sharing and Disclosure
              </h2>
              <div className="text-white/70 leading-relaxed space-y-4">
                <p>We may share your information with:</p>
                
                <div>
                  <p className="font-semibold text-white/90 mb-2">Service Providers:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Payment processors for secure transaction handling</li>
                    <li>Shipping and logistics partners for vehicle delivery</li>
                    <li>Customs brokers and clearing agents for import services</li>
                    <li>IT and website hosting providers</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-white/90 mb-2">Legal Requirements:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Government agencies and regulatory bodies when required by law</li>
                    <li>Law enforcement in response to legal requests</li>
                    <li>Legal counsel in connection with legal proceedings</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-white/90 mb-2">Business Transfers:</p>
                  <p className="pl-6">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                  </p>
                </div>
                
                <p className="font-semibold text-primary-red mt-4">
                  We do NOT sell your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-crimson rounded-lg flex items-center justify-center text-sm">4</span>
                Cookies and Tracking Technologies
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences.
                </p>
                
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <p><strong className="text-white/90">Essential Cookies:</strong> Required for website functionality</p>
                  <p><strong className="text-white/90">Analytics Cookies:</strong> Help us understand how visitors use our website</p>
                  <p><strong className="text-white/90">Marketing Cookies:</strong> Used to show relevant advertisements</p>
                  <p><strong className="text-white/90">Preference Cookies:</strong> Remember your settings and preferences</p>
                </div>
                
                <p>
                  You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-silver to-brand-gray rounded-lg flex items-center justify-center text-sm">5</span>
                Data Security
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                  <li>Secure servers with restricted access</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Strong password requirements and access controls</li>
                </ul>
                <p className="text-primary-red font-semibold">
                  However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but continuously work to maintain the highest standards.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-crimson to-primary-dark rounded-lg flex items-center justify-center text-sm">6</span>
                Your Privacy Rights
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white/90">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-white/90">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-white/90">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong className="text-white/90">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong className="text-white/90">Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong className="text-white/90">Object:</strong> Object to certain processing of your personal information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <span className="text-primary-red">privacy@marionautos.com</span>
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-lightgray rounded-lg flex items-center justify-center text-sm">7</span>
                Data Retention
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transaction records: 7 years (for tax and legal compliance)</li>
                  <li>Customer account information: While account is active plus 2 years</li>
                  <li>Marketing data: Until you opt-out or request deletion</li>
                  <li>Website analytics: Aggregated data retained indefinitely</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-crimson rounded-lg flex items-center justify-center text-sm">8</span>
                Children's Privacy
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-silver to-brand-gray rounded-lg flex items-center justify-center text-sm">9</span>
                International Data Transfers
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
                </p>
                <p>
                  When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your privacy in accordance with this policy and applicable laws.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-crimson to-primary-dark rounded-lg flex items-center justify-center text-sm">10</span>
                Third-Party Links
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  Our website may contain links to third-party websites, plugins, and applications. We are not responsible for the privacy practices of these third parties.
                </p>
                <p>
                  We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Marion Autos.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-lightgray rounded-lg flex items-center justify-center text-sm">11</span>
                Changes to This Privacy Policy
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised "Last Updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-crimson rounded-lg flex items-center justify-center text-sm">✉️</span>
                Contact Us About Privacy
              </h2>
              <div className="text-white/70 leading-relaxed space-y-3">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-xl p-6 mt-4 space-y-2">
                  <p><strong className="text-white">Privacy Officer</strong></p>
                  <p><strong className="text-white/70">Email:</strong> privacy@marionautos.com</p>
                  <p><strong className="text-white/70">Phone:</strong> +233 20 794 6778</p>
                  <p><strong className="text-white/70">Address:</strong> 123 Independence Avenue, East Legon, Accra, Ghana</p>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
