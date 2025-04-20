
import { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80',
    count: '24 items'
  },
  {
    id: 2,
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80',
    count: '32 items'
  },
  {
    id: 3,
    name: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    count: '18 items'
  },
  {
    id: 4,
    name: 'Meat',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80',
    count: '12 items'
  },
  {
    id: 5,
    name: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    count: '15 items'
  },
  {
    id: 6,
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1596803244618-8dab45a43f2d?w=500&q=80',
    count: '20 items'
  }
];

const Categories = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Shop by Categories</h2>
            <p className="text-gray-600 mt-2">Browse through our product categories</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-green-500 hover:text-green-600 font-medium flex items-center">
            View All Categories 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredId === category.id ? 'scale-110' : 'scale-100'}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
