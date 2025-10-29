import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Madhubani Art',
    image: 'https://img.artpal.com/979782/8-23-7-23-9-14-49m.jpg',
    description: 'Traditional art from Bihar'
  },
  {
    title: 'Warli Paintings',
    image: 'https://www.himanshuartinstitute.com/art-and-craft-articles/drawing-painting-art-and-craft-news-n-articles-in-india/about-indian-art-warli-painting-from-western-ghats-of-india-3.jpg',
    description: 'Tribal art from Maharashtra'
  },
  {
    title: 'Stone Crafts',
    image: 'https://d35l77wxi0xou3.cloudfront.net/collab/craft1576560938Soap%20Stone%20showcase%204.jpg',
    description: 'Intricate stone carvings'
  },
  {
    title: 'Metal Work',
    image: 'https://www.gitagged.com/wp-content/uploads/2020/09/Bastar-Dhokra-Elephant-Candle-Holder-1.jpg',
    description: 'Traditional metalwork'
  }
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/category/CategoryPage.tsx'); // Redirect to the CategoryPage
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleCategoryClick} // Attach click handler to redirect
          >
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer" // Add cursor-pointer for better UX
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;