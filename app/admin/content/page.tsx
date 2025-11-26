'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import './quill.css'

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('about')
  const [aboutContent, setAboutContent] = useState(`
    <h2>About Marion Autos</h2>
    <p>Marion Autos is Ghana's premier international auto dealership, specializing in sourcing high-quality vehicles from the USA, Japan, and Europe.</p>
  `)
  const [servicesContent, setServicesContent] = useState('')
  const [faqContent, setFaqContent] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const handleSave = () => {
    console.log('Saving content for:', activeTab)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
          <p className="text-white/60">Manage website content and pages</p>
        </div>

        {/* Tabs */}
        <div className="glass-card p-2 flex gap-2 overflow-x-auto">
          {['about', 'services', 'faq', 'blog'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-primary-red text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* About Page Editor */}
        {activeTab === 'about' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">About Page Content</h2>
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Page Title</label>
              <input
                type="text"
                defaultValue="About Marion Autos"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm">Content</label>
              <div className="bg-white rounded-xl overflow-hidden">
                <ReactQuill 
                  theme="snow" 
                  value={aboutContent} 
                  onChange={setAboutContent}
                  modules={modules}
                  className="h-64"
                />
              </div>
            </div>

            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium mt-16"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Services Editor */}
        {activeTab === 'services' && (
          <div className="glass-card p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Services Content</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2">Vehicle Sourcing</h3>
                <textarea
                  rows={4}
                  defaultValue="We source quality vehicles from trusted auctions and dealers worldwide."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2">Shipping & Logistics</h3>
                <textarea
                  rows={4}
                  defaultValue="Full shipping and logistics services with tracking from origin to Ghana."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2">Import Documentation</h3>
                <textarea
                  rows={4}
                  defaultValue="We handle all import documentation and customs clearance."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
              <div className="glass-card p-4">
                <h3 className="text-white font-bold mb-2">Duty Calculation</h3>
                <textarea
                  rows={4}
                  defaultValue="Use our duty calculator to estimate import costs before purchase."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
              </div>
            </div>

            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium"
            >
              Save Services
            </button>
          </div>
        )}

        {/* FAQ Editor */}
        {activeTab === 'faq' && (
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">FAQ Management</h2>
              <button className="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-crimson transition-all text-sm">
                Add FAQ
              </button>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How long does shipping take?', a: 'Typically 4-6 weeks from USA to Ghana.' },
                { q: 'What payment methods do you accept?', a: 'Bank transfer, mobile money, and cash.' },
                { q: 'Do you provide warranty?', a: 'Yes, warranty options available on all vehicles.' },
              ].map((faq, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <input
                        type="text"
                        defaultValue={faq.q}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                      <textarea
                        rows={2}
                        defaultValue={faq.a}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                    </div>
                    <button className="text-red-400 hover:text-red-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-primary-red text-white rounded-xl hover:bg-primary-crimson transition-all font-medium"
            >
              Save FAQs
            </button>
          </div>
        )}

        {/* Blog Editor */}
        {activeTab === 'blog' && (
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Blog Posts</h2>
              <button className="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-crimson transition-all text-sm">
                New Post
              </button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Top 10 SUVs for Ghana Roads in 2024', date: '2024-11-15', status: 'Published' },
                { title: 'Understanding Import Duties', date: '2024-11-10', status: 'Published' },
                { title: 'Electric vs Hybrid: Which is Better?', date: '2024-11-08', status: 'Draft' },
              ].map((post, index) => (
                <div key={index} className="glass-card p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{post.title}</h3>
                    <p className="text-white/60 text-sm">Published: {post.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      post.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {post.status}
                    </span>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
