import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import products from '../Data/products';

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [productList, setProductList] = useState(products);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '/api/placeholder/300/300',
    inStock: true
  });

  if (!user || !isAdmin) {
    navigate('/');
    return null;
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: Date.now(),
      price: parseFloat(newProduct.price)
    };
    setProductList([...productList, product]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      description: '',
      image: '/api/placeholder/300/300',
      inStock: true
    });
    setShowAddProduct(false);
  };

  const handleDeleteProduct = (id) => {
    setProductList(productList.filter(product => product.id !== id));
  };

  const mockOrders = [
    { id: 1001, customer: 'John Doe', total: 89.99, status: 'Completed', date: '2024-01-15' },
    { id: 1002, customer: 'Jane Smith', total: 149.99, status: 'Processing', date: '2024-01-14' },
    { id: 1003, customer: 'Bob Johnson', total: 59.99, status: 'Shipped', date: '2024-01-13' },
  ];

  const mockCustomers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: 299.99 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: 189.99 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 2, totalSpent: 119.99 },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your store</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'products', 'orders', 'customers'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800">Total Products</h3>
                    <p className="text-3xl font-bold text-purple-600">{productList.length}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800">Total Orders</h3>
                    <p className="text-3xl font-bold text-green-600">{mockOrders.length}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800">Total Customers</h3>
                    <p className="text-3xl font-bold text-blue-600">{mockCustomers.length}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800">Revenue</h3>
                    <p className="text-3xl font-bold text-yellow-600">$609.97</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Products</h2>
                  <button
                    onClick={() => setShowAddProduct(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Add Product
                  </button>
                </div>

                {showAddProduct && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                    <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                      <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Bags">Bags</option>
                        <option value="Contact Lenses">Contact Lenses</option>
                      </select>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        className="p-3 border border-gray-300 rounded-lg"
                        required
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newProduct.inStock}
                          onChange={(e) => setNewProduct({...newProduct, inStock: e.target.checked})}
                          className="mr-2"
                        />
                        <label>In Stock</label>
                      </div>
                      <textarea
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                        className="col-span-2 p-3 border border-gray-300 rounded-lg"
                        rows="3"
                        required
                      />
                      <div className="col-span-2 flex space-x-4">
                        <button
                          type="submit"
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                        >
                          Add Product
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowAddProduct(false)}
                          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productList.map((product, i) => (
                    <div key={product.id + i} className="border border-gray-200 rounded-lg p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-gray-600">{product.category}</p>
                      <p className="text-purple-600 font-bold">${product.price}</p>
                      <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </p>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="mt-2 text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left">Order ID</th>
                        <th className="border border-gray-200 p-3 text-left">Customer</th>
                        <th className="border border-gray-200 p-3 text-left">Total</th>
                        <th className="border border-gray-200 p-3 text-left">Status</th>
                        <th className="border border-gray-200 p-3 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="border border-gray-200 p-3">#{order.id}</td>
                          <td className="border border-gray-200 p-3">{order.customer}</td>
                          <td className="border border-gray-200 p-3">${order.total}</td>
                          <td className="border border-gray-200 p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="border border-gray-200 p-3">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'customers' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Customers</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left">Name</th>
                        <th className="border border-gray-200 p-3 text-left">Email</th>
                        <th className="border border-gray-200 p-3 text-left">Orders</th>
                        <th className="border border-gray-200 p-3 text-left">Total Spent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCustomers.map((customer) => (
                        <tr key={customer.id}>
                          <td className="border border-gray-200 p-3">{customer.name}</td>
                          <td className="border border-gray-200 p-3">{customer.email}</td>
                          <td className="border border-gray-200 p-3">{customer.orders}</td>
                          <td className="border border-gray-200 p-3">${customer.totalSpent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
