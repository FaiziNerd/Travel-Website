const Packages = () => {
  const packages = [
    {
      title: "Adventure Tour",
      days: "5 Days",
      price: "$499",
      rating: "⭐⭐⭐⭐⭐",
      description: "Experience thrilling adventures in beautiful mountains.",
    },
    {
      title: "Beach Holiday",
      days: "7 Days",
      price: "$699",
      rating: "⭐⭐⭐⭐⭐",
      description: "Relax on crystal-clear beaches with luxury resorts.",
    },
    {
      title: "Honeymoon Trip",
      days: "6 Days",
      price: "$899",
      rating: "⭐⭐⭐⭐⭐",
      description: "A romantic getaway for unforgettable memories.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        Popular Packages
      </h2>

      <p className="text-center text-gray-500 mt-4">
        Choose the perfect travel package for your next adventure.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8 mt-12">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 text-center">
              {pkg.title}
            </h3>

            <p className="mt-3 text-gray-600 text-center">
              {pkg.description}
            </p>

            <div className="mt-8">
              <p className="text-lg">
                {pkg.rating}
              </p>

              <p className="mt-2 font-semibold">
                Duration: {pkg.days}
              </p>

              <p className="text-xl font-bold text-green-600 mt-2">
                {pkg.price}
              </p>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;