
import { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-green-500 text-2xl font-bold mr-2">
                Fresh
              </span>
              <span className="text-orange-500 text-2xl font-bold">Cart</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
              Offers
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
              Contact
            </a>
          </nav>

          {/* Search, User and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} className="text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
                Offers
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 font-medium">
                Contact
              </a>
            </nav>
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                  <User size={20} className="text-gray-700" />
                  <span>Account</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 relative">
                  <ShoppingCart size={20} className="text-gray-700" />
                  <span>Cart</span>
                  <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
