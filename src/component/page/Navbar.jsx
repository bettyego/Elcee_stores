import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../../assets/elc logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const navLinks = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <Link to="/">
          <img src={logo} alt="elcee_stores logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="search"
            placeholder="Search products..."
            className="flex-grow px-4 py-2 border rounded-l-md border-purple-200 focus:outline-none"
          />
          <button className="px-4 bg-purple-700 text-white rounded-r-md hover:bg-purple-800">
            Search
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((name) => (
            <Link
              key={name}
              to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
              className={`text-sm font-medium transition ${
                location.pathname === (name === 'Home' ? '/' : `/${name.toLowerCase()}`)
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-600 hover:text-purple-700'
              }`}
            >
              {name}
            </Link>
          ))}
          <Link to="/cart" className="relative text-gray-600 hover:text-purple-700">
            <ShoppingCart className="w-6 h-6" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-2 bg-purple-700 text-white rounded-full px-1 text-xs min-w-[18px] h-[18px] flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>

          {/* User Menu */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/account" className="text-gray-600 hover:text-purple-700 text-sm">
                Hi, {user?.firstName}
              </Link>
              {isAdmin && (
                <Link to="/admin" className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700">
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-gray-600 hover:text-purple-700 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-purple-700 text-sm">
                Login
              </Link>
              <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-purple-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="p-4 space-y-2">
            {navLinks.map((name) => (
              <Link
                key={name}
                to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 py-2 font-medium hover:bg-purple-50 rounded"
              >
                {name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="flex items-center text-gray-700 py-2 hover:bg-purple-50 rounded"
            >
              <ShoppingCart className="w-6 h-6 mr-2"/>
              Cart (3)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
