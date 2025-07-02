const Shipping = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Shipping & Delivery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast and reliable delivery across Nigeria. We deliver to all 36 states and FCT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Zones */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Zones & Rates</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-green-700 mb-2">Zone 1 - Imo State (Local)</h3>
                <p className="text-gray-600 mb-2">New Owerri, Owerri Municipal, Owerri North, Owerri West</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">1-2 business days</span>
                  <span className="font-bold text-green-600">₦1,500</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-blue-700 mb-2">Zone 2 - South East States</h3>
                <p className="text-gray-600 mb-2">Abia, Anambra, Ebonyi, Enugu</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2-4 business days</span>
                  <span className="font-bold text-blue-600">₦2,500</span>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-purple-700 mb-2">Zone 3 - Major Cities</h3>
                <p className="text-gray-600 mb-2">Lagos, Abuja, Port Harcourt, Kano, Ibadan</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">3-5 business days</span>
                  <span className="font-bold text-purple-600">₦3,500</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-orange-700 mb-2">Zone 4 - Other States</h3>
                <p className="text-gray-600 mb-2">All remaining Nigerian states</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">4-7 business days</span>
                  <span className="font-bold text-orange-600">₦4,500</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium">🎉 FREE SHIPPING on orders above ₦50,000!</p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Partners</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <span className="text-red-600 text-xl">🚚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">GIG Logistics</h3>
                    <p className="text-sm text-gray-600">Fast delivery across Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-blue-600 text-xl">📦</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">DHL Nigeria</h3>
                    <p className="text-sm text-gray-600">Express delivery service</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-green-600 text-xl">🏍️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Dispatch</h3>
                    <p className="text-sm text-gray-600">Same-day delivery in Owerri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Process</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Order Confirmation</h3>
                    <p className="text-sm text-gray-600">You'll receive SMS and email confirmation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Processing</h3>
                    <p className="text-sm text-gray-600">We prepare your order within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dispatch</h3>
                    <p className="text-sm text-gray-600">Your order is handed to our delivery partner</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Delivery</h3>
                    <p className="text-sm text-gray-600">Package delivered to your doorstep</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Notes</h2>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>All deliveries require signature confirmation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>We deliver Monday to Saturday (excluding public holidays)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Delivery time starts counting from dispatch date</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>You can track your order using the tracking number provided</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Contact us immediately if you're not satisfied with delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Delivery Issues */}
        <div className="bg-purple-600 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Delivery Issues?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our customer service team for any delivery-related concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348153387439"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📞 Call: +234 815 338 7439
            </a>
            <a
              href="https://wa.me/2348153387439"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
