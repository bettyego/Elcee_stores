import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './component/context/CartContext';
import { AuthProvider } from './component/context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';

// Components
import Navbar from './component/page/Navbar';
import Home from './component/Home';
import Shop from './component/page/Shop';
import Cart from './component/page/Cart';
import Checkout from './component/page/Checkout';
import Login from './component/page/Login';
import Signup from './component/page/Signup';
import Account from './component/page/Account';
import AdminDashboard from './component/page/AdminDashboard';
import About from './component/page/About';
import Contact from './component/page/Contact';
import HelpCenter from './component/page/HelpCenter';
import PrivacyPolicy from './component/page/PrivacyPolicy';
import TermsOfService from './component/page/TermsOfService';
import Shipping from './component/page/Shipping';
import Footer from './component/page/Footer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
