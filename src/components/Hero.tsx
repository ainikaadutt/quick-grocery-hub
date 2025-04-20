
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fresh Groceries <br />
              <span className="text-green-500">Delivered to</span> Your Door
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop for fresh fruits, vegetables, and daily essentials with fast delivery and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
                Shop Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-gray-300 hover:border-green-500 text-gray-700 font-medium py-3 px-6 rounded-full transition duration-300">
                View Categories
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" 
                alt="Fresh groceries" 
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Delivery within</p>
                  <p className="font-semibold">30 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
