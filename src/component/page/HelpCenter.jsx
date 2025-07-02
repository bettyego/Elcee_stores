import { useState } from 'react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'orders', name: 'Orders & Shipping', icon: '📦' },
    { id: 'returns', name: 'Returns & Exchanges', icon: '↩️' },
    { id: 'products', name: 'Product Information', icon: '🛍️' },
    { id: 'account', name: 'Account & Billing', icon: '👤' },
    { id: 'technical', name: 'Technical Support', icon: '🔧' }
  ];

  const faqs = [
    {
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Order History" section. You\'ll receive tracking information via email once your order ships.'
    },
    {
      category: 'orders',
      question: 'What are your shipping options and costs?',
      answer: 'We offer standard shipping ($5.00, 5-7 business days) and express shipping ($15.00, 2-3 business days). Free shipping on orders over $75.'
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in original packaging. Contact our support team to initiate a return.'
    },
    {
      category: 'returns',
      question: 'How do I exchange an item?',
      answer: 'To exchange an item, contact our customer service team with your order number and the item you\'d like to exchange. We\'ll guide you through the process.'
    },
    {
      category: 'products',
      question: 'Are your skincare products suitable for sensitive skin?',
      answer: 'Many of our skincare products are formulated for sensitive skin. Check the product description for specific ingredients and recommendations.'
    },
    {
      category: 'products',
      question: 'How do I choose the right contact lens prescription?',
      answer: 'You\'ll need a valid prescription from an eye care professional. Our contact lenses are available in various prescriptions and brands.'
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the top navigation, fill out the registration form with your details, and verify your email address.'
    },
    {
      category: 'account',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email we send you.'
    },
    {
      category: 'technical',
      question: 'The website is not loading properly. What should I do?',
      answer: 'Try clearing your browser cache, disabling browser extensions, or using a different browser. Contact us if the problem persists.'
    },
    {
      category: 'technical',
      question: 'I\'m having trouble with checkout. What can I do?',
      answer: 'Ensure your payment information is correct, try a different payment method, or contact our support team for assistance.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to frequently asked questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">Speak with our support team</p>
            <p className="text-purple-600 font-medium">+234 815 338 7439</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">Get instant help online</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">
              Start Chat
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">Send us a message</p>
            <a href="/contact" className="text-purple-600 font-medium hover:text-purple-700">
              Contact Form
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition flex items-center space-x-3 ${
                      activeCategory === category.id
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  {activeCategory === 'all' ? 'All Topics' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredFaqs.length} article{filteredFaqs.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div key={index} className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or browse different categories
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Still Need Help */}
            <div className="bg-purple-600 text-white rounded-lg p-8 mt-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-lg mb-6 opacity-90">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Contact Support
                </a>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
