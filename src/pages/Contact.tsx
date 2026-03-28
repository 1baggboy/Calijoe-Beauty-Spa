import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/src/components/Button';

export function Contact() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-[var(--color-secondary-dark)] py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-4 block">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-accent)] mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our services, products, or booking an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-[var(--color-accent)] mb-8">Visit Our Spa</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary-dark)] rounded-full flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-accent)] mb-2">Location</h3>
                    <p className="text-gray-600">123 Luxury Avenue<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary-dark)] rounded-full flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-accent)] mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary-dark)] rounded-full flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-accent)] mb-2">Email</h3>
                    <p className="text-gray-600">hello@calijoeskincare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-secondary-dark)] rounded-full flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-accent)] mb-2">Business Hours</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                      <li>Saturday: 10:00 AM - 5:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none h-14 px-8 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="bg-[var(--color-secondary)] p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="font-serif text-3xl text-[var(--color-accent)] mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none bg-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white h-14 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
