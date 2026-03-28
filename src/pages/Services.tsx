import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Facials',
    description: 'Customized facials to cleanse, exfoliate, and nourish your skin.',
    services: [
      {
        name: 'Signature Glow Facial',
        description: 'Our most popular treatment. Deep cleansing, gentle exfoliation, extractions, and a customized mask to reveal your natural radiance.',
        duration: '60 min',
        price: '$120',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
      },
      {
        name: 'Hydra-Boost Facial',
        description: 'Intense hydration for dry, dehydrated skin using advanced serums and a moisture-infusing mask.',
        duration: '75 min',
        price: '$150',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
      },
      {
        name: 'Anti-Aging Lift Facial',
        description: 'Targeted treatment to reduce fine lines, improve elasticity, and stimulate collagen production.',
        duration: '90 min',
        price: '$180',
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: 'Acne Treatment',
    description: 'Specialized care to clear breakouts, reduce inflammation, and prevent future blemishes.',
    services: [
      {
        name: 'Clarifying Acne Facial',
        description: 'Deep pore cleansing, thorough extractions, and high-frequency therapy to kill acne-causing bacteria.',
        duration: '75 min',
        price: '$140',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
      },
      {
        name: 'Chemical Peel',
        description: 'Exfoliates dead skin cells, unclogs pores, and improves skin texture and tone.',
        duration: '45 min',
        price: '$110',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    title: 'Body Spa Therapy',
    description: 'Relaxing treatments to rejuvenate your body and mind.',
    services: [
      {
        name: 'Aromatherapy Massage',
        description: 'A deeply relaxing massage using custom-blended essential oils to relieve tension and stress.',
        duration: '60/90 min',
        price: '$100/$140',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
      },
      {
        name: 'Exfoliating Body Scrub',
        description: 'Removes dead skin cells, leaving your skin soft, smooth, and glowing from head to toe.',
        duration: '45 min',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
];

export function Services() {
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
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-4 block">Our Offerings</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-accent)] mb-6">Spa & Skincare Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium treatments designed to enhance your natural beauty and provide ultimate relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-24 last:mb-0">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-accent)] mb-4">{category.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, srvIndex) => (
                  <motion.div
                    key={srvIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: srvIndex * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="font-serif text-2xl text-[var(--color-accent)] mb-3">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={16} className="mr-2 text-[var(--color-primary)]" />
                          {service.duration}
                        </div>
                        <div className="flex items-center font-semibold text-[var(--color-accent)]">
                          {service.price}
                        </div>
                      </div>
                      
                      <Link to={`/booking?service=${encodeURIComponent(service.name)}`}>
                        <Button className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
