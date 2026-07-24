import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Diamond, Menu, X, Search, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const links = [
    { name: t('nav.home', 'Home'), path: '/' },
    { name: t('nav.about', 'About Us'), path: '/about' },
    { name: t('nav.products', 'Products'), path: '/products' },
    { name: t('nav.blog', 'Blog'), path: '/blog' },
    { name: t('nav.contact', 'Contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Diamond className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-serif text-gray-900 tracking-tight">{t('nav.brand', 'Dhillon Sparkle')}</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.search', 'Search jewelry...')}
                className="w-48 xl:w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors bg-gray-50 hover:bg-amber-50 px-3 py-2 rounded-full text-sm font-medium border border-gray-200"
              title="Switch Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as any)}
              className="text-gray-600 bg-gray-50 border border-gray-200 focus:outline-none rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:text-amber-600 hover:bg-amber-50 cursor-pointer"
              title="Switch Currency"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
            <Link
              to="/wishlist"
              className={`flex items-center text-gray-600 hover:text-amber-600 transition-colors ${
                isActive('/wishlist') ? 'text-amber-600' : ''
              }`}
              title={t('nav.wishlist', 'Wishlist')}
            >
              <Heart className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/wishlist"
              className={`text-gray-600 hover:text-amber-600 transition-colors ${
                isActive('/wishlist') ? 'text-amber-600' : ''
              }`}
            >
              <Heart className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors bg-gray-50 hover:bg-amber-50 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as any)}
              className="text-gray-600 bg-gray-50 border border-gray-200 focus:outline-none rounded-full px-2 py-1.5 text-sm font-medium transition-colors hover:text-amber-600 hover:bg-amber-50 cursor-pointer"
              title="Switch Currency"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            <form onSubmit={handleSearch} className="px-3 py-2 mb-2 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.search', 'Search jewelry...')}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-6 top-5 h-5 w-5 text-gray-400" />
            </form>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
