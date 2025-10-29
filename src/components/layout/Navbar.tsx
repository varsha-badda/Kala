import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import LoginModal from '../auth/LoginModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="sticky top-0 bg-ivory-white border-b border-gray-200 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indian-red">Home</button>
              <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-indian-red">Categories</button>
              <button onClick={() => scrollToSection('discover')} className="text-gray-700 hover:text-indian-red">Discover</button>
              <Link to="/auctions" className="text-gray-700 hover:text-indian-red">Auctions</Link>
              <Link to="/artists/ArtistPage.tsx" className="text-gray-700 hover:text-indian-red">Artists</Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search artworks..."
                  className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indian-red"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-md">
              <a href="/category/CategoryPage.tsx" className="flex items-center">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </a>
              </button>

              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-indian-red text-white px-6 py-2 rounded-md hover:bg-indian-red/90"
              >
                Sign In
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-indian-red focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indian-red hover:bg-gray-50">Home</button>
              <button onClick={() => scrollToSection('categories')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indian-red hover:bg-gray-50">Categories</button>
              <button onClick={() => scrollToSection('discover')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indian-red hover:bg-gray-50">Discover</button>
              <Link to="/auctions" className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indian-red hover:bg-gray-50">Auctions</Link>
              <button onClick={() => scrollToSection('artists')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indian-red hover:bg-gray-50">Artists</button>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-indian-red hover:bg-gray-50"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;