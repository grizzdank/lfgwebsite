'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgjzlzz");

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

          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-green-100 text-green-800 rounded-md"
            >
              Thank you for your message. We will get back to you soon!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-[#2c4a3c] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#2c4a3c] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#2c4a3c] font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                  disabled={state.submitting}
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#2c4a3c] font-medium mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c]"
                  disabled={state.submitting}
                >
                  <option value="general">General Inquiry</option>
                  <option value="ocm">Organizational Change Management</option>
                  <option value="ai">AI Workflow Integration</option>
                  <option value="mvp">Rapid MVP Development</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#2c4a3c] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[#2c4a3c]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c4a3c] focus:border-transparent text-[#2c4a3c] placeholder-[#385449]/50"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#2c4a3c] text-white py-3 px-6 rounded-md hover:bg-[#446b5d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </motion.button>
              <ValidationError errors={state.errors} />
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
} 