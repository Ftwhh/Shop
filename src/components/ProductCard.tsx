import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  discount?: number;
}

export default function ProductCard({ title, price, image, discount }: ProductCardProps) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-blue-600">${price.toFixed(2)}</span>
            {discount && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${(price / (1 - discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
          <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}