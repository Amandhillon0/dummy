import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Sparkles, Lock, Globe, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dhillon Sparkle - Elegant Fashion Jewellery | Rings, Necklaces & More</title>
        <meta name="description" content="Discover handcrafted elegant fashion jewellery designed to celebrate every milestone. Shop our exquisite collection of rings, necklaces, earrings, and more at Dhillon Sparkle." />
        <meta name="keywords" content="elegant fashion jewellery, Dhillon Sparkle, luxury rings, pearl elegance earrings, necklaces, timeless jewelry" />
        <link rel="canonical" href="https://dhillonsparkle.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-amber-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight leading-tight mb-6">
                Where Elegance Meets<br />Timeless Craftsmanship
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover handcrafted jewelry designed to celebrate every milestone. From stunning engagement rings to elegant necklaces and everyday essentials, our collections bring brilliance to every occasion.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/products" className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                  Shop Collection
                </Link>
                <Link to="/products" className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 text-base font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                  Explore New Arrivals
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-amber-300 rounded-[3rem] blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" 
                alt="Exquisite diamond jewelry" 
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto object-cover rounded-[2.5rem] shadow-2xl aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30 mix-blend-multiply"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Categories</h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Diamond Rings",
                desc: "Exquisite diamond rings crafted with precision and exceptional quality.",
                img:"/photo/ring.webp",
                link: "/products"
              },
              {
                title: "Gold Necklaces",
                desc: "Elegant gold necklaces that add sophistication to any outfit.",
                img: "/photo/jewellery 2.webp",
                link: "/products"
              },
              {
                title: "Earrings",
                desc: "Modern and classic earring designs for every style.",
                img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
                link: "/products"
              },
              {
                title: "Bracelets",
                desc: "Beautiful bracelets designed to complement your unique personality.",
                img: "braclet.webp",
                link: "/products"
              }
            ].map((cat, i) => (
              <Link to={cat.link} key={i} className="group block cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                  <img src={cat.img} alt={cat.title} referrerPolicy="no-referrer" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Certified Quality",
                desc: "Every piece is crafted using premium materials and undergoes strict quality checks."
              },
              {
                icon: Sparkles,
                title: "Handcrafted Designs",
                desc: "Unique jewelry collections inspired by modern trends and timeless beauty."
              },
              {
                icon: Lock,
                title: "Secure Shopping",
                desc: "Safe payments, secure checkout, and trusted customer service."
              },
              {
                icon: Globe,
                title: "Worldwide Delivery",
                desc: "Fast and reliable shipping across multiple countries."
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=1600" 
            alt="Jewelry sale" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Summer Sparkle Sale</h2>
          <p className="text-amber-400 text-lg md:text-xl mb-8">Get up to 20% off on selected jewelry collections.</p>
          <Link to="/products" className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Shop the Sale <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Customer Testimonials</h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-8 md:p-10 rounded-3xl relative">
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"I purchased a diamond ring for my anniversary, and the craftsmanship exceeded my expectations."</p>
              <div className="font-medium text-gray-900">— Priya Sharma</div>
            </div>
            <div className="bg-amber-50 p-8 md:p-10 rounded-3xl relative">
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"Beautiful designs and excellent customer service. Highly recommended!"</p>
              <div className="font-medium text-gray-900">— Arjun Singh</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
