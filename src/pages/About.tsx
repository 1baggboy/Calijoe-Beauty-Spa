import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-[var(--color-secondary-dark)] py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-4 block">Our Story</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-accent)] mb-6">About Calijoe</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A sanctuary for your skin, where luxury meets clinical expertise. We are dedicated to helping you achieve your healthiest, most radiant complexion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000"
                alt="Spa interior"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-accent)] mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded on the belief that skincare is an essential part of overall wellness, Calijoe Skincare Salon & Spa was created to provide a haven of relaxation and results-driven treatments.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that every individual's skin is unique. That's why our approach is highly personalized, combining advanced technology, premium products, and expert techniques to address your specific concerns and goals.
              </p>
              
              <div className="space-y-4">
                {[
                  'Holistic approach to skin health',
                  'Medical-grade, cruelty-free products',
                  'Continuous education and training',
                  'Commitment to client satisfaction'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--color-primary)] flex-shrink-0" size={20} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--color-accent)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-3xl text-[var(--color-primary)] mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                To empower individuals to feel confident in their own skin by providing exceptional, personalized skincare treatments in a luxurious and relaxing environment. We strive to educate our clients on proper skincare routines and deliver visible, long-lasting results.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-[var(--color-primary)] mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                To be the premier destination for luxury skincare and wellness, recognized globally for our expertise, innovation, and unwavering commitment to client care. We aim to redefine the spa experience by seamlessly blending clinical efficacy with ultimate relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
