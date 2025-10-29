import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ArtPiece {
  id: number;
  title: string;
  artist: {
    id: number;
    name: string;
  };
  image: string;
  price: number;
  datePublished: string;
}

const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Madhubani Peacocks",
    artist: { id: 1, name: "Anjali Kumar" },
    image: "https://i.pinimg.com/originals/df/8a/ed/df8aedc93bc5272bda9db5a16321ec39.jpg",
    price: 1500,
    datePublished: "2024-02-15"
  },
  {
    id: 2,
    title: "Serene Warli Painting",
    artist: { id: 2, name: "Ravi Sharma" },
    image: "https://img.freepik.com/premium-vector/serene-rural-bliss-warli-tree-painting-warli-tree-art-rural-enjoyment-traditional-indian_770404-205.jpg",
    price: 2000,
    datePublished: "2024-03-01"
  },
  {
    id: 3,
    title: "Vinayaka Stone work",
    artist: { id: 3, name: "Priya Singh" },
    image: "https://i.ytimg.com/vi/EBCJhmsxKNM/maxresdefault.jpg",
    price: 2500,
    datePublished: "2024-03-10"
  },
  {
    id: 4,
    title: "Shri Ram Metal work",
    artist: { id: 4, name: "Amit Verma" },
    image: "https://www.caleidoscope.in/wp-content/uploads/2020/02/Metal-Crafts-of-India-Pembharti-Metal-Craft-1024x674.jpg",
    price: 1800,
    datePublished: "2024-03-15"
  },
  {
    id: 5,
    title: "Teracotta Art Sun",
    artist: { id: 5, name: "Sita Rao" },
    image: "https://th.bing.com/th/id/OIP.u6ITIao1sQo65Jhg-xsSJgAAAA?rs=1&pid=ImgDetMain",
    price: 1000,
    datePublished: "2024-03-20"
  },
  {
    id: 6,
    title: "Nirmal paintings",
    artist: { id: 6, name: "Karan Mehta" },
    image: "https://cultureandheritage.org/wp-content/uploads/2023/01/image-104.png",
    price: 1200,
    datePublished: "2024-03-25"
  }
  // Add more pieces here if needed...
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleArtistClick = (artistId: number) => {
    navigate(`/artists/${artistId}`);
  };

  return (
    <div className="min-h-screen bg-ivory-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div key={piece.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={piece.image}
                alt={piece.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{piece.title}</h3>
                <button
                  onClick={() => handleArtistClick(piece.artist.id)}
                  className="text-indian-red hover:underline mb-2"
                >
                  {piece.artist.name}
                </button>
                <p className="text-gray-500 text-sm mb-4">
                  Published on {new Date(piece.datePublished).toLocaleDateString()}
                </p>
                <p className="text-xl font-bold text-gray-900">
                  ₹{piece.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;