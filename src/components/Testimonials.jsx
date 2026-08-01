import Person1 from "../assets/Testimonial-1.jpg"
import Person3 from "../assets/Testimonial-2.jpg"
import Person2 from "../assets/Testimonial-3.jpg"

const Testimonials = () => {
  const testimonials = [
    {
      image: Person1,
      name: "Sarah Johnson",
      country: "United States",
      review:
        "TravelX made our vacation unforgettable. Everything was perfectly organized.",
    },
    {
      image: Person2,
      name: "Emma Wilson",
      country: "United Kingdom",
      review:
        "Amazing service and beautiful destinations. Highly recommended!",
    },
    {
      image: Person3,
      name: "Ali Khan",
      country: "Pakistan",
      review:
        "Best travel experience ever. I will definitely book my next trip again.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold text-center">
        What Our Clients Say
      </h2>

      <p className="text-center text-gray-500 mt-4">
        Thousands of travelers trust TravelX for unforgettable journeys.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />

            <h3 className="text-2xl font-bold mt-4">
              {testimonial.name}
            </h3>

            <p className="text-blue-600 font-medium">
              {testimonial.country}
            </p>

            <p className="text-yellow-500 mt-3">
              ⭐⭐⭐⭐⭐
            </p>

            <p className="text-gray-600 mt-4">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;