'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { submitContactForm } from '@/lib/wordpress';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'general',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'general',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-[#2c4a3c] mb-8 text-center">Contact Us</h1>
          <p className="text-[#385449] text-lg mb-12 text-center">
            Ready to transform your business? Get in touch with us to discuss how we can help you achieve your goals.
          </p>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-green-100 text-green-800 rounded-md"
            >
              Thank you for your message. We'll get back to you soon!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-100 text-red-800 rounded-md"
            >
              {errorMessage || 'Something went wrong. Please try again.'}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-[#2c4a3c] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#2c4a3c] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-[#2c4a3c] font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-[#2c4a3c] font-medium mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c]"
                disabled={status === 'submitting'}
              >
                <option value="general">General Inquiry</option>
                <option value="ocm">Organizational Change Management</option>
                <option value="ai">AI Workflow Integration</option>
                <option value="mvp">Rapid MVP Development</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#2c4a3c] font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#2c4a3c] text-white py-3 px-6 rounded-md hover:bg-[#446b5d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 