import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 m-0">Elcee Stores</h1>
        <div>
          <Link
            to="/"
            className="mr-4 text-gray-700 hover:text-blue-600 no-underline transition-colors"
          >
            Home
          </Link>
          {/* Add more navigation links here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
