import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Amaka N.',
    text: "I’ve been using the Avila Naturalle products for months and my skin is glowing! elcee_stores is my plug!",
  },
  {
    name: 'Chinonso O.',
    text: "Their bags are really stylish and affordable. I love how fast the delivery was too.",
  },
  {
    name: 'Sandra K.',
    text: "The contact lenses are high quality and comfy. I’ll definitely be ordering again!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg mb-4 italic">"{review.text}"</p>
                <h4 className="text-purple-700 font-semibold text-lg">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
