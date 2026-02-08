import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

// PUBLIC_INTERFACE
/**
 * User account page with login and order history
 */
const Account: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderSuccess = searchParams.get('order') === 'success';
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app would call API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {orderSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-success text-white p-4 rounded-lg mb-6 text-center"
            >
              <h3 className="font-bold text-lg mb-2">Order Placed Successfully!</h3>
              <p>Thank you for your purchase. You'll receive a confirmation email shortly.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h1 className="text-3xl font-bold text-text mb-6 text-center">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-text mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <Button type="submit" size="lg" fullWidth>
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>

            {isLogin && (
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-secondary hover:text-text">
                  Forgot password?
                </a>
              </div>
            )}
          </motion.div>

          {/* Mock Order History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-text mb-6">Recent Orders</h2>
            <p className="text-secondary text-center py-8">
              Sign in to view your order history
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Account;
