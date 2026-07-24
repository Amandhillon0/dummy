import { ShoppingBag, Heart, X, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products, categories } from '../data/products';
import { useCurrency } from '../contexts/CurrencyContext';

export default function Products() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { formatPrice } = useCurrency();
  
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const allPrices = products.map(p => parseInt(p.price.replace(/[^\d]/g, ''), 10));
  const minPriceBound = Math.min(...allPrices);
  const maxPriceBound = Math.max(...allPrices);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(Math.ceil(maxPriceBound / 5000) * 5000);

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jewelry_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jewelry_recently_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('jewelry_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('jewelry_recently_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const toggleWishlist = (name: string) => {
    setWishlist(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };
  
  const handleViewProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setRecentlyViewed(prev => {
      const filtered = prev.filter(name => name !== product.name);
      return [product.name, ...filtered].slice(0, 4); // Keep last 4 viewed
    });
  };

  const filteredProducts = products.filter(product => {
    const searchString = searchQuery.toLowerCase();
    const matchesSearch = searchString 
      ? product.name.toLowerCase().includes(searchString) || 
        product.desc.toLowerCase().includes(searchString) || 
        product.specs.toLowerCase().includes(searchString)
      : true;
      
    // A simple category match based on keywords in product name/desc
    const matchesCategory = activeCategory
      ? product.name.toLowerCase().includes(activeCategory.toLowerCase().replace(/s$/, '')) || 
        product.desc.toLowerCase().includes(activeCategory.toLowerCase().replace(/s$/, ''))
      : true;
      
    const productPrice = parseInt(product.price.replace(/[^\d]/g, ''), 10);
    const matchesPrice = productPrice <= maxPriceFilter;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <Helmet>
        <title>Our Collection - Dhillon Sparkle | Elegant Fashion Jewellery</title>
        <meta name="description" content="Shop the finest elegant fashion jewellery collection. Browse rings, necklaces, earrings, bracelets, pendants, and wedding collections at Dhillon Sparkle." />
        <meta name="keywords" content="our collection, elegant fashion jewellery, luxury rings, pearl elegance earrings, wedding collections, bracelets, pendants" />
        <link rel="canonical" href="https://dhillonsparkle.com/products" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Our Collection</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          {searchQuery && (
            <p className="mt-6 text-gray-600 text-lg">
              Search results for "{searchQuery}"
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 lg:sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl text-gray-900">Categories</h3>
                {activeCategory && (
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className="text-xs text-amber-600 font-medium hover:text-amber-700"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                      className={`text-base font-medium w-full text-left transition-colors ${
                        activeCategory === cat ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-xl text-gray-900">Price Range</h3>
                  <span className="text-sm font-medium text-amber-600">
                    Up to {formatPrice(maxPriceFilter)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={Math.floor(minPriceBound / 5000) * 5000} 
                  max={Math.ceil(maxPriceBound / 5000) * 5000} 
                  step={1000}
                  value={maxPriceFilter}
                  onChange={(e) => setMaxPriceFilter(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{formatPrice(Math.floor(minPriceBound / 5000) * 5000)}</span>
                  <span>{formatPrice(Math.ceil(maxPriceBound / 5000) * 5000)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm">
                <h3 className="text-xl font-serif text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or selecting a different category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product, i) => (
                  <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group">
                    <div 
                      className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
                      onClick={() => handleViewProduct(product)}
                    >
                      <img 
                        src={product.img} 
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 font-medium px-6 py-2.5 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-4 h-4" />
                          <span>Quick View</span>
                        </span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.name);
                        }}
                        className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all duration-200 group/btn"
                        aria-label={wishlist.includes(product.name) ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors ${wishlist.includes(product.name) ? 'fill-amber-500 text-amber-500' : 'text-gray-600 group-hover/btn:text-amber-500'}`} 
                        />
                      </button>
                    </div>
                    <div className="p-8">
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-3 gap-2">
                        <h3 className="text-xl font-serif text-gray-900">{product.name}</h3>
                        <span className="font-medium text-amber-600 text-lg xl:ml-auto">{formatPrice(product.price)}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-4 uppercase tracking-wider font-medium">{product.specs}</p>
                      <p className="text-gray-600 text-sm mb-8 line-clamp-2 leading-relaxed">{product.desc}</p>
                      <button className="w-full py-3.5 flex items-center justify-center space-x-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-colors">
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

        {/* Recently Viewed Section */}
        {recentlyViewed.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-serif text-gray-900 mb-8">Recently Viewed</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products
                .filter(p => recentlyViewed.includes(p.name))
                .sort((a, b) => recentlyViewed.indexOf(a.name) - recentlyViewed.indexOf(b.name))
                .map((product, i) => (
                <div key={i} className="group cursor-pointer" onClick={() => handleViewProduct(product)}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="font-serif text-gray-900 truncate">{product.name}</h4>
                  <span className="text-amber-600 text-sm font-medium">{formatPrice(product.price)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 text-left">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)} />
          <div className="bg-white rounded-[3rem] shadow-2xl relative w-full max-w-5xl overflow-hidden flex flex-col md:flex-row transform transition-all max-h-[90vh]">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="md:w-1/2 relative bg-gray-100 h-64 md:h-auto">
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
              <div className="flex-grow">
                <span className="text-amber-600 font-medium text-sm tracking-wider uppercase mb-3 block">
                  {selectedProduct.specs.split(' | ')[0]}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">{selectedProduct.name}</h2>
                <span className="text-2xl text-gray-900 font-medium mb-6 block">{formatPrice(selectedProduct.price)}</span>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedProduct.desc}</p>
                
                <div className="space-y-4 mb-8 pb-8 border-b border-gray-100">
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-widest">Specifications</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {selectedProduct.specs.split(' | ').map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-auto pt-4">
                <button className="flex-1 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Bag</span>
                </button>
                <button 
                  onClick={() => toggleWishlist(selectedProduct.name)}
                  className={`p-4 rounded-full border transition-colors ${
                    wishlist.includes(selectedProduct.name) 
                      ? 'border-amber-500 bg-amber-50 text-amber-500' 
                      : 'border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(selectedProduct.name) ? 'fill-amber-500' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
