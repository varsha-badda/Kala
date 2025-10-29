import React from 'react';
import { Clock } from 'lucide-react';

const auctions = [
  {
    id: 1,
    title: "Rare Madhubani Painting Collection",
    artist: "Rama Devi",
    startingBid: 10000,
    currentBid: 10000,
    image: "https://cdn.exoticindia.com/images/products/original/paintings-2019/mix205.jpg",
    timeLeft: "1 hour",
    description: "A collection of rare Madhubani paintings depicting ancient Indian mythology."
  },
  {
    id: 2,
    title: "Antique Bronze Sculptures",
    artist: "Karthik Raja",
    startingBid: 15000,
    currentBid: 15000,
    image: "https://i.pinimg.com/originals/81/d7/17/81d717eb8203028799dbdf396945a93f.jpg",
    timeLeft: "1 hour 30 minutes",
    description: "Set of three antique bronze sculptures from South India, showcasing exquisite craftsmanship and intricate detailing."
  }
];

const AuctionsPage = () => {
  return (
    <div className="min-h-screen bg-ivory-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Live Auctions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={auction.image}
                alt={auction.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{auction.title}</h2>
                <p className="text-gray-600 mb-4">{auction.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Artist</p>
                    <p className="font-semibold">{auction.artist}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Starting Bid</p>
                    <p className="font-semibold">₹{auction.currentBid.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-indian-red">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{auction.timeLeft}</span>
                  </div>
                  <button className="bg-indian-red text-white px-6 py-2 rounded-md hover:bg-indian-red/90">
                    <a href="https://zoom.us/join">Place Bid
                  </a>
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;