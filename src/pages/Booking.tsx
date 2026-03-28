import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function Booking() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 bg-[var(--color-secondary)] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-accent)] mb-4">Book Your Appointment</h1>
          <p className="text-gray-600">
            Fill out the form below to request an appointment. We will contact you shortly to confirm your booking.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-2xl shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-serif text-3xl text-[var(--color-accent)] mb-4">Booking Request Received!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Thank you for choosing Calijoe Skincare Salon & Spa. Our team will review your request and contact you within 24 hours to confirm your appointment details.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Book Another Appointment
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Choose a service...</option>
                    <optgroup label="Facials">
                      <option value="Signature Glow Facial">Signature Glow Facial</option>
                      <option value="Hydra-Boost Facial">Hydra-Boost Facial</option>
                      <option value="Anti-Aging Lift Facial">Anti-Aging Lift Facial</option>
                    </optgroup>
                    <optgroup label="Acne Treatment">
                      <option value="Clarifying Acne Facial">Clarifying Acne Facial</option>
                      <option value="Chemical Peel">Chemical Peel</option>
                    </optgroup>
                    <optgroup label="Body Spa Therapy">
                      <option value="Aromatherapy Massage">Aromatherapy Massage</option>
                      <option value="Exfoliating Body Scrub">Exfoliating Body Scrub</option>
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      id="time"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="" disabled>Choose a time...</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                      <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes (Optional)</label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any specific skin concerns or preferences?"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white h-14 text-lg">
                  Request Appointment
                </Button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-[var(--color-secondary-dark)] p-8 rounded-2xl">
                <h3 className="font-serif text-2xl text-[var(--color-accent)] mb-4">Prefer to chat?</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  You can also book your appointment directly through WhatsApp. Our team is ready to assist you with scheduling and answering any questions.
                </p>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none h-12">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl text-[var(--color-accent)] mb-4">Booking Policy</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    Please arrive 10 minutes before your scheduled time.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    Cancellations must be made at least 24 hours in advance.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    A 50% deposit may be required for certain premium treatments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
