import React from 'react';

const artworks = [
  {
    title: "Traditional Craftsmanship",
    description: "Traditional craftsmanship preserves India's heritage, blending ancient techniques with timeless artistry. Each piece tells a story of skill and legacy.",
    image: "https://media.craftmaestros.com/media/magefan_blog/The_culture_of_Indian_craft.png"
  },
  {
    title: "Contemporary Art",
    description: "Contemporary art reimagines traditional Indian forms, blending heritage with modern creativity. It’s tradition with a twist!",
    image: "https://www.tallengestore.com/cdn/shop/collections/contemprory.jpg?v=1442495490"
  },
  {
    title: "Regional Masterpieces",
    description: "Regional masterpieces showcase India’s diversity, with each region's art reflecting its culture and tradition. Vibrant and unique, they celebrate local heritage.",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458"
  },
  {
    title: "Sustainable Creations",
    description: "Eco-friendly art preserving tradition and nature.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119"
  }
];

const DiscoverSection = () => {
  return (
    <section id="discover" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Discover Unique Arts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((artwork, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{artwork.title}</h3>
                  <p className="text-gray-200">{artwork.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;