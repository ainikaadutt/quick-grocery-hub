
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      position: 'Regular Customer',
      rating: 5,
      review: 'FreshCart has completely changed how I grocery shop. The produce is always fresh, and the delivery is consistently on time. I love the wide variety of organic options!'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      position: 'Busy Professional',
      rating: 4,
      review: 'As someone with a hectic schedule, FreshCart saves me so much time. Their app is intuitive, and I can get all my groceries delivered within 30 minutes. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emily Parker',
      image: 'https://randomuser.me/api/portraits/women/26.jpg',
      position: 'Health Enthusiast',
      rating: 5,
      review: 'The quality of produce at FreshCart is exceptional. Everything arrives fresh and lasts longer than what I used to get at other stores. Their customer service is also top-notch.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who shop with us regularly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.review}"</p>
              <div className="flex items-center">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-green-500 font-medium border-2 border-green-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
