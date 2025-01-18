import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { ArrowRight, Truck, Shield, Clock, CreditCard, Sparkles } from 'lucide-react';

const featuredProducts = [
  {
    title: "Premium Wireless Earbuds",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800",
    discount: 20
  },
  {
    title: "Smart Fitness Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800",
    discount: 15
  },
  {
    title: "Portable Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609592424825-fe0d0f3d0ce8?auto=format&fit=crop&w=800"
  },
  {
    title: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800",
    discount: 10
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Shop the latest trending products with free worldwide shipping and 30-day money-back guarantee.
            </p>
            <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Shop Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above IQD 100,000</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Quick Delivery</h3>
              <p className="text-sm text-gray-600">10-15 business days</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Special Offer Advertisement */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get 20% Off Your First Order!
              </h2>
              <p className="text-lg text-purple-100 mb-6">
                Use code <span className="font-mono bg-white/20 px-2 py-1 rounded">FIRST20</span> at checkout
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600"
                alt="Special Offer"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transform rotate-12">
                20%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest updates on new products and upcoming sales</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 DropMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;