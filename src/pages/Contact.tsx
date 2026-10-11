import { MapPin, Phone, Mail, Send } from 'lucide-react';

const faqs = [
  {
    q: "Do you offer custom jewelry?",
    a: "Yes, we create personalized jewelry according to customer requirements."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit cards, debit cards, UPI, and net banking."
  },
  {
    q: "Do you provide international shipping?",
    a: "Yes, worldwide shipping is available for most products."
  },
  {
    q: "Is your jewelry certified?",
    a: "Yes, selected diamond and gemstone jewelry comes with certification."
  }
];

import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <Helmet>
        <title>Contact Us - Dhillon Sparkle | Elegant Fashion Jewellery</title>
        <meta name="description" content="Get in touch with Dhillon Sparkle for inquiries about our elegant fashion jewellery, custom designs, orders, and support." />
        <meta name="keywords" content="contact Dhillon Sparkle, jewelry support, elegant fashion jewellery inquiries, custom jewelry design" />
        <link rel="canonical" href="https://dhillonsparkle.com/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Reach out for inquiries, orders, custom designs, or support.</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="mb-16">
          <img 
            src = "/photo/service.jpg" 
            alt="Customer service representative" 
            className="w-full h-64 md:h-96 object-cover rounded-[2.5rem] shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-gray-900 text-white p-10 md:p-14">
            <h2 className="text-2xl font-serif mb-10 text-amber-50">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Store Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Dhillon Sparkle Store<br />
                    125 Fashion Avenue<br />
                    Sector 17 Market<br />
                    Chandigarh, India 160017
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Phone Number</h3>
                  <p className="text-gray-400 text-sm">+91 85698 94361</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-200 mb-2">Email Address</h3>
                  <p className="text-gray-400 text-sm">dhillonaman783@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-gray-800">
              <h3 className="font-medium text-gray-200 mb-6">Business Hours</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white">10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-amber-500 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 md:p-14">
            <h2 className="text-2xl font-serif text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="flex items-center justify-center w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors focus:ring-4 focus:ring-gray-900/20">
                <Send className="w-4 h-4 mr-2" />
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-serif text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
