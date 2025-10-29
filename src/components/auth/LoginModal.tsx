import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [userType, setUserType] = useState<'customer' | 'artist'>('customer');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In to KALA</h2>
        
        <div className="flex gap-4 mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-lg ${
              userType === 'customer'
                ? 'bg-indian-red text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setUserType('customer')}
          >
            Customer
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg ${
              userType === 'artist'
                ? 'bg-indian-red text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setUserType('artist')}
          >
            Artist
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indian-red focus:border-indian-red"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indian-red focus:border-indian-red"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indian-red text-white py-2 px-4 rounded-lg hover:bg-indian-red/90"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="text-indian-red hover:underline">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;