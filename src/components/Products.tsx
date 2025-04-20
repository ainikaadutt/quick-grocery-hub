
import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Organic Bananas',
    price: 2.99,
    discount: 3.99,
    image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?w=500&q=80',
    rating: 4.5,
    reviews: 42,
    category: 'fruits'
  },
  {
    id: 2,
    name: 'Fresh Red Tomatoes',
    price: 1.49,
    discount: null,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&q=80',
    rating: 4.8,
    reviews: 36,
    category: 'vegetables'
  },
  {
    id: 3,
    name: 'Whole Milk',
    price: 3.29,
    discount: 3.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',
    rating: 4.3,
    reviews: 28,
    category: 'dairy'
  },
  {
    id: 4,
    name: 'Brown Eggs (12 pcs)',
    price: 4.99,
    discount: null,
    image: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?w=500&q=80',
    rating: 4.7,
    reviews: 53,
    category: 'dairy'
  },
  {
    id: 5,
    name: 'Avocado Hass',
    price: 2.49,
    discount: 2.99,
    image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=500&q=80',
    rating: 4.6,
    reviews: 31,
    category: 'fruits'
  },
  {
    id: 6,
    name: 'Fresh Broccoli',
    price: 1.99,
    discount: null,
    image: 'https://images.unsplash.com/photo-1615485925600-97424cded02f?w=500&q=80',
    rating: 4.2,
    reviews: 24,
    category: 'vegetables'
  },
  {
    id: 7,
    name: 'Sourdough Bread',
    price: 3.99,
    discount: 4.99,
    image: 'https://images.unsplash.com/photo-1601233242964-900d4046596f?w=500&q=80',
    rating: 4.9,
    reviews: 62,
    category: 'bakery'
  },
  {
    id: 8,
    name: 'Fresh Orange Juice',
    price: 4.49,
    discount: null,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80',
    rating: 4.4,
    reviews: 38,
    category: 'beverages'
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'dairy', name: 'Dairy & Eggs' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'beverages', name: 'Beverages' },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
          <p className="text-gray-600 mt-2">Discover our best-selling grocery items</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 mx-1 my-2 rounded-full text-sm font-medium transition ${
                activeTab === category.id 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart size={18} className="text-gray-600" />
                </button>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                  <div className="flex items-center ml-auto">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                    {product.discount && (
                      <span className="text-sm text-gray-500 line-through ml-2">${product.discount.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="flex items-center font-medium text-green-500 hover:text-green-600 border-2 border-green-500 hover:border-green-600 px-8 py-3 rounded-full transition">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
