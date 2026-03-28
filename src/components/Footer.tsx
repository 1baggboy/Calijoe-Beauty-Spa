import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-[var(--color-primary)]">
              CALIJOE
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Reveal your natural glow with our premium skincare treatments. We combine luxury, expertise, and personalized care to help you achieve your best skin.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Signature Facials</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Acne Treatment</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Body Spa Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Skin Rejuvenation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Bridal Glow Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@calijoeskincare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Calijoe Skincare Salon & Spa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
