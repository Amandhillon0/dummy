import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Diamond, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter an email address.');
      return;
    }
    
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! Check your inbox soon.');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="border-b border-gray-800 pb-12 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-white font-serif text-2xl mb-2">Join our Newsletter</h3>
            <p className="text-gray-400 text-sm">Subscribe to receive updates, access to exclusive deals, and early access to sales.</p>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md">
            <form onSubmit={handleNewsletterSubmit} className="relative flex flex-col gap-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full pl-5 pr-12 py-3.5 bg-gray-800 border-none rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                  disabled={status === 'loading' || status === 'success'}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className="absolute right-1.5 p-2 bg-amber-500 text-gray-900 rounded-full hover:bg-amber-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Validation Messages */}
              {status === 'error' && (
                <div className="flex items-center text-red-400 text-xs px-4">
                  <AlertCircle className="w-3 h-3 mr-1.5" />
                  <span>{message}</span>
                </div>
              )}
              {status === 'success' && (
                <div className="flex items-center text-green-400 text-xs px-4">
                  <CheckCircle2 className="w-3 h-3 mr-1.5" />
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Diamond className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-serif tracking-tight">Dhillon Sparkle</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where Elegance Meets Timeless Craftsmanship. Discover handcrafted jewelry designed to celebrate every milestone.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.008 20.893c-4.908 0-8.892-3.984-8.892-8.893 0-4.908 3.984-8.892 8.892-8.892 4.908 0 8.893 3.984 8.893 8.892 0 4.909-3.985 8.893-8.893 8.893zm3.76-8.893l-5.632 3.251V8.749l5.632 3.251z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-amber-500 transition-colors">Shop Jewelry</Link></li>
              <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Our Blog</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>125 Fashion Avenue<br />Sector 17 Market<br />Chandigarh, India 160017</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>+91 85698 94361</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>dhillonaman783@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-medium mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday – Friday:</span>
                <span>10:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-amber-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dhillon Sparkle Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
