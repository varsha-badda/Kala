import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/home/HomePage';
import CategoryPage from './components/categories/CategoryPage';
import ArtistPage from './components/artists/ArtistPage';
import AuctionsPage from './components/auctions/AuctionsPage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/artists/:id" element={<ArtistPage />} />
            <Route path="/auctions" element={<AuctionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;