import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16 pb-24">
      <Helmet>
        <title>About Us - Dhillon Sparkle | Elegant Fashion Jewellery</title>
        <meta name="description" content="Learn more about Dhillon Sparkle, our story, mission, and the craftsmanship behind our elegant fashion jewellery." />
        <meta name="keywords" content="about Dhillon Sparkle, elegant fashion jewellery, jewelry artisan, timeless craftsmanship, quality jewelry" />
        <link rel="canonical" href="https://dhillonsparkle.com/about" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          <section className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=800" 
                alt="Jewelry artisan working" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-square object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Founded in 2018, Dhillon Sparkle Store began with a vision to create elegant jewelry that combines traditional craftsmanship with contemporary designs.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our passion for artistry and quality has helped us become a trusted destination for jewelry lovers, celebrating life's most meaningful moments with brilliance.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-10 rounded-[2rem]">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">To provide beautifully crafted jewelry that celebrates life's most meaningful moments while maintaining the highest standards of quality and customer satisfaction.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2rem]">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">To become a globally recognized jewelry brand known for innovation, trust, and timeless elegance.</p>
            </div>
          </div>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">What We Value</h2>
              <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-gray-100 p-8 rounded-[2rem] hover:border-amber-200 transition-colors">
                <h3 className="font-serif text-xl text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">We use carefully selected materials to ensure lasting beauty and durability.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-[2rem] hover:border-amber-200 transition-colors">
                <h3 className="font-serif text-xl text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">Transparency and customer trust remain at the heart of our business.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-[2rem] hover:border-amber-200 transition-colors">
                <h3 className="font-serif text-xl text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Our designers continuously create fresh collections inspired by evolving fashion trends.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-[2rem] hover:border-amber-200 transition-colors">
                <h3 className="font-serif text-xl text-gray-900 mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">Every customer experience matters to us.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-12 md:p-16 rounded-[2.5rem] text-center">
            <h2 className="text-3xl font-serif mb-6">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Our team consists of experienced jewelry designers, gemologists, artisans, and customer care professionals dedicated to delivering excellence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
