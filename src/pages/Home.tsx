import { Link } from 'react-router-dom';
import { Button } from '@/src/components/Button';
import { ArrowRight, Star, CheckCircle2, Calendar, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Signature Facials',
    description: 'Deep cleansing, exfoliation, and hydration tailored to your skin type.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Acne Treatment',
    description: 'Targeted solutions to clear breakouts and prevent future blemishes.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Body Spa Therapy',
    description: 'Relaxing massages and body scrubs for ultimate rejuvenation.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Skin Rejuvenation',
    description: 'Advanced anti-aging treatments to restore youthful glow and elasticity.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
  },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Regular Client',
    content: 'Calijoe completely transformed my skin. I struggled with adult acne for years, and within 3 months of their targeted treatments, my skin is finally clear and glowing.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Bride-to-be',
    content: 'I booked the bridal glow package and it was the best decision. The team is so professional and the spa environment is incredibly relaxing. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jessica Thompson',
    role: 'First-time Client',
    content: 'From the moment you walk in, you feel pampered. The signature facial left my skin feeling hydrated and looking radiant for weeks.',
    rating: 5,
  },
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000"
            alt="Spa background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-[var(--color-primary-light)]">
              Premium Skincare & Spa
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6">
              Reveal Your Natural Glow
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
              Experience luxury skincare treatments designed to rejuvenate your skin, relax your mind, and restore your confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking">
                <Button size="lg" className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white border-none">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--color-accent)]">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="px-4">
              <div className="font-serif text-4xl text-[var(--color-primary)] mb-2">5k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="px-4">
              <div className="font-serif text-4xl text-[var(--color-primary)] mb-2">10+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="font-serif text-4xl text-[var(--color-primary)] mb-2">4.9</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="px-4">
              <div className="font-serif text-4xl text-[var(--color-primary)] mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Certified Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[var(--color-secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-3 block">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-accent)] mb-6">Tailored Treatments for Your Skin</h2>
            <p className="text-gray-600 leading-relaxed">
              From deep-cleansing facials to advanced anti-aging therapies, our treatments are customized to address your unique skin concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-accent)] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800" 
                  alt="Spa treatment" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-[var(--color-secondary-dark)] p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white">
                      <Star fill="currentColor" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-xl">4.9/5</div>
                      <div className="text-sm text-gray-600">Customer Rating</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"The best skincare clinic I've ever visited. Highly recommended!"</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-3 block">Why Choose Calijoe</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-accent)] mb-6">Expert Care for Radiant Skin</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that healthy skin is the foundation of beauty. Our team of certified estheticians uses premium products and advanced techniques to deliver visible, long-lasting results.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  'Certified & experienced professionals',
                  'Premium, medical-grade skincare products',
                  'Personalized treatment plans',
                  'Relaxing, luxurious spa environment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about">
                <Button variant="default" size="lg">
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--color-secondary-dark)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-3 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-accent)] mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="flex text-[var(--color-primary)] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-serif font-semibold text-lg text-[var(--color-accent)]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-accent)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready for Your Glow Session?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Book your appointment today and take the first step towards healthier, more radiant skin. First-time clients receive a complimentary skin consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white border-none h-14 px-8 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
