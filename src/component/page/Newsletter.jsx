const Newsletter = () => {
  return (
    <section className="bg-purple-700 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated & Save Big!
        </h2>
        <p className="text-lg mb-6">
          Join our newsletter to get exclusive offers and first access to new arrivals.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
