import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
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
  {
    name: 'Michael Davis',
    role: 'Monthly Member',
    content: 'As a guy, I was hesitant about going to a spa, but the staff made me feel completely comfortable. The deep cleansing facial is now a staple in my routine.',
    rating: 5,
  },
  {
    name: 'Amanda Lee',
    role: 'Skincare Enthusiast',
    content: 'The chemical peel was gentle yet incredibly effective. My hyperpigmentation has faded significantly, and my skin texture is smoother than ever.',
    rating: 5,
  },
  {
    name: 'Olivia Martinez',
    role: 'Regular Client',
    content: 'I love the aromatherapy massage. It is the perfect way to unwind after a long week. The therapists are highly skilled and attentive to your needs.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-[var(--color-secondary-dark)] py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--color-primary)] mb-4 block">Client Love</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-accent)] mb-6">Real Results, Real Stories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our clients have to say about their experiences and transformations at Calijoe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-[var(--color-primary)] mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.content}"</p>
                <div className="mt-auto">
                  <div className="font-serif font-semibold text-lg text-[var(--color-accent)]">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
