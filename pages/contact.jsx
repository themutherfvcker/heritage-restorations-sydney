import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  })

  return (
    <>
      <Head>
        <title>Contact Heritage Restoration Specialists | Get a Quote</title>
        <meta name="description" content="Get a free heritage restoration assessment and quote. Contact our Sydney specialists for roof, window, and stone restoration." />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get a Heritage Restoration Quote</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Our Specialists</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Heritage Roof Restoration</option>
                  <option>Timber Window Restoration</option>
                  <option>Sandstone Repair</option>
                  <option>Other Heritage Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-700 text-white py-3 px-4 rounded-md hover:bg-green-800 transition-colors font-semibold">
                Get Free Assessment
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Specialists?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Heritage council approval expertise</li>
              <li>✅ Traditional materials & techniques</li>
              <li>✅ Local Sydney tradespeople</li>
              <li>✅ Free assessments & quotes</li>
              <li>✅ Period-appropriate solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
