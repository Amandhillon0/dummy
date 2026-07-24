import { ShoppingBag, Heart, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { useCurrency } from '../contexts/CurrencyContext';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jewelry_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const { formatPrice } = useCurrency();

  useEffect(() => {
    localStorage.setItem('jewelry_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const removeFromWishlist = (name: string) => {
    setWishlist(prev => prev.filter(item => item !== name));
  };

  const wishlistProducts = products.filter(product => wishlist.includes(product.name));

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <Helmet>
        <title>My Wishlist - Dhillon Sparkle | Elegant Fashion Jewellery</title>
        <meta name="description" content="View your saved elegant fashion jewellery items in your wishlist at Dhillon Sparkle." />
        <meta name="keywords" content="wishlist, elegant fashion jewellery, saved jewelry, Dhillon Sparkle wishlist" />
        <link rel="canonical" href="https://dhillonsparkle.com/wishlist" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">My Wishlist</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-16 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You haven't saved any items yet. Explore our collection and add your favorite jewelry pieces to your wishlist.
            </p>
            <Link 
              to="/products"
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistProducts.map((product, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-crosshair">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.name);
                    }}
                    className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 hover:bg-red-50 text-gray-400 hover:text-red-500 active:scale-95 transition-all duration-200"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-xl font-serif text-gray-900 mb-2">{product.name}</h3>
                    <span className="font-medium text-amber-600 text-lg block">{formatPrice(product.price)}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-4 uppercase tracking-wider font-medium">{product.specs}</p>
                  <button className="w-full mt-auto py-3.5 flex items-center justify-center space-x-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
