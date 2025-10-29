import React from 'react';

const SupportArtists = () => {
  return (
    <section id="artists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Support Local Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-indian-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Direct Support</h3>
            <p className="text-gray-600">Your purchase directly supports local artisans and their communities</p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-indian-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fair Trade</h3>
            <p className="text-gray-600">We ensure fair compensation and ethical practices</p>
          </div>
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-indian-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💫</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Preserve Culture</h3>
            <p className="text-gray-600">Help preserve traditional art forms for future generations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportArtists;