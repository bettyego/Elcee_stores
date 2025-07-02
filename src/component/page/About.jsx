const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Elcee Stores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for premium skincare, stylish bags, and quality contact lenses. 
            We're passionate about helping you look and feel your best.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to make premium beauty and lifestyle products accessible to everyone in Nigeria,
                Elcee Stores has been serving customers across Imo State and beyond with dedication and excellence.
              </p>
              <p>
                We believe that everyone deserves to feel confident and beautiful. That's why we carefully
                curate our collection to include only the finest Avila Naturalle skincare products, most stylish bags,
                and highest quality contact lenses for the Nigerian market.
              </p>
              <p>
                Our commitment to quality, customer satisfaction, and affordable luxury has made us a
                trusted name in the Nigerian beauty and fashion industry, serving customers 24/7.
              </p>
            </div>
          </div>
          <div className="bg-purple-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To empower individuals to express their unique style and enhance their natural beauty 
              through carefully selected, high-quality products at accessible prices.
            </p>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become the leading online destination for beauty and lifestyle products, 
              known for our exceptional customer service and product quality.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest products from trusted brands and manufacturers, 
                ensuring every item meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide exceptional customer service 
                and support throughout your shopping journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new and innovative products to bring you the latest 
                trends and breakthrough solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-gray-800 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">Safe and encrypted payment processing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">↩️</div>
              <h3 className="font-bold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">Hassle-free return and exchange policy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-6 opacity-90">
            Discover our amazing collection of skincare, bags, and contact lenses
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
