import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.css';

// ✅ Import images from assets folder
import bg from '../../assets/bg.jpg';
import sk from '../../assets/sk.avif';
import lens from '../../assets/lence.avif';

const slides = [
  {
    image: bg,
    title: 'Elevate Your Glow & Style',
    subtitle: 'Discover premium skincare, fashion bags & contact lenses',
    description: 'Transform your beauty routine with our curated collection of authentic products',
    buttonText: 'Explore Collection',
    accent: 'from-purple-600 to-pink-600',
    stats: { products: '500+', customers: '10K+', rating: '4.9★' }
  },
  {
    image: sk,
    title: '100% Avila Naturalle Skincare',
    subtitle: 'Nourish your skin the natural way',
    description: 'Premium natural skincare products crafted for the Nigerian climate',
    buttonText: 'Shop Skincare',
    accent: 'from-green-500 to-emerald-600',
    stats: { discount: '25% OFF', shipping: 'Free Delivery', guarantee: '30-Day Return' }
  },
  {
    image: lens,
    title: 'See the World in Style',
    subtitle: 'Premium contact lenses for every occasion',
    description: 'Safe, comfortable, and stunning colored contact lenses',
    buttonText: 'View Lenses',
    accent: 'from-blue-500 to-cyan-600',
    stats: { colors: '12 Colors', comfort: '24H Comfort', safety: 'FDA Approved' }
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[90vh] pb-16">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
            bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100'
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-30">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log(`Failed to load: ${slide.image}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
              <div className={`absolute inset-0 bg-gradient-to-t ${slide.accent} opacity-10 z-10`} />

              {/* Content Container with proper spacing */}
              <div className="relative z-20 min-h-[80vh] flex items-center py-8">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-8">

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-sm font-medium">Available 24/7 in Nigeria</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="block">{slide.title.split(' ').slice(0, 2).join(' ')}</span>
                      <span className={`block bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                        {slide.title.split(' ').slice(2).join(' ')}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-200 font-light">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 py-4">
                      {Object.entries(slide.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        to="/shop"
                        className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r ${slide.accent} rounded-full hover:opacity-90 transition-opacity duration-200`}
                      >
                        <span>{slide.buttonText}</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>

                      <Link
                        to="/about"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center space-x-6 pt-6 border-t border-white/20">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-300">Authentic Products</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <span className="text-sm text-gray-300">Fast Delivery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-300">Expert Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Feature Cards */}
                  <div className="hidden lg:block">
                    <div className="grid grid-cols-1 gap-6">

                      {/* Feature Card 1 */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${slide.accent} rounded-xl flex items-center justify-center`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Premium Quality</h3>
                            <p className="text-gray-300 text-sm">Authentic imported products</p>
                          </div>
                        </div>
                      </div>

                      {/* Feature Card 2 */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${slide.accent} rounded-xl flex items-center justify-center`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Best Prices</h3>
                            <p className="text-gray-300 text-sm">Competitive Nigerian rates</p>
                          </div>
                        </div>
                      </div>

                      {/* Feature Card 3 */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${slide.accent} rounded-xl flex items-center justify-center`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">24/7 Support</h3>
                            <p className="text-gray-300 text-sm">Always here to help</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center space-y-2 text-white/60">
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>

        {/* Custom Navigation Dots */}
        <div className="absolute bottom-8 left-8 z-30 hidden md:block">
          <div className="flex flex-col space-y-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
