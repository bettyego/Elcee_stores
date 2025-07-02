import { Link } from 'react-router-dom';

const featured = [
  {
    id: 1,
    name: 'Avila Naturalle Face Cleanser',
    price: '₦40,500',
    image: '/aval.jpeg',
  },
  {
    id: 2,
    name: 'Classic Black Leather Bag',
    price: '₦22,000',
    image: '/lather.jpeg',
  },
  {
    id: 3,
    name: 'Hazel Brown Contact Lens',
    price: '₦10,000',
    image: '/lan.jpeg',
  },
  {
    id: 4,
    name: 'Shea Butter Moisturizer',
    price: '₦31,200',
    image: '/carw.jpeg',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">
          Featured Products
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {featured.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] bg-white shadow-lg rounded-xl p-4 flex-shrink-0 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-purple-600 font-medium mb-2">{item.price}</p>
              <Link
                to="/shop"
                className="inline-block mt-2 px-4 py-2 text-sm bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
