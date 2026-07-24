import { Calendar } from 'lucide-react';

const articles = [
  {
    title: "How to Choose the Perfect Engagement Ring",
    date: "March 15, 2025",
    excerpt: "Choosing an engagement ring involves considering diamond quality, ring style, metal type, and personal preferences. Understanding the 4Cs can help you make a confident decision.",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Jewelry Care Tips to Maintain Lasting Shine",
    date: "April 2, 2025",
    excerpt: "Proper cleaning, safe storage, and routine inspections can keep your jewelry looking beautiful for years.",
    img: "https://images.unsplash.com/photo-1599643477877-52648fb59a1f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Top Jewelry Trends for 2025",
    date: "May 10, 2025",
    excerpt: "Minimalist gold pieces, colored gemstones, layered necklaces, and personalized jewelry continue to dominate fashion trends.",
    img: "https://images.unsplash.com/photo-1511253819057-54070da6b5cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Understanding Diamond Certification",
    date: "June 5, 2025",
    excerpt: "Diamond certification provides information about a diamond's quality, authenticity, and grading standards.",
    img: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Choosing Jewelry for Special Occasions",
    date: "July 1, 2025",
    excerpt: "Whether attending weddings, anniversaries, or formal events, selecting the right jewelry can elevate your appearance and confidence.",
    img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80&w=800"
  }
];

import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <Helmet>
        <title>Blog - Dhillon Sparkle | Elegant Fashion Jewellery</title>
        <meta name="description" content="Read the latest articles on elegant fashion jewellery trends, jewelry care, and style guides at the Dhillon Sparkle blog." />
        <meta name="keywords" content="jewelry blog, elegant fashion jewellery, jewelry trends, fashion jewellery tips, Dhillon Sparkle blog" />
        <link rel="canonical" href="https://dhillonsparkle.com/blog" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Latest Articles</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {articles.map((article, i) => (
            <article key={i} className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-[2rem] p-4 md:pr-10 overflow-hidden border border-gray-100">
              <div className="w-full md:w-2/5 md:flex-shrink-0">
                <img 
                  src={article.img} 
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-72 object-cover rounded-3xl"
                />
              </div>
              <div className="w-full md:w-3/5 py-4 px-4 md:px-0">
                <div className="flex items-center text-sm font-medium text-amber-600 mb-4 tracking-wide uppercase">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h2 className="text-2xl font-serif text-gray-900 mb-4 leading-snug">
                  <a href="#" className="hover:text-amber-600 transition-colors">{article.title}</a>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
                <a href="#" className="inline-flex items-center font-medium text-gray-900 hover:text-amber-600 transition-colors border-b border-gray-900 hover:border-amber-600 pb-1">
                  Read Full Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
