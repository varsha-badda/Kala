import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const slides = [
    {
      image: "https://cms.qz.com/wp-content/uploads/2019/10/craft-e1571864120234.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
      title: "Support the Local Artisans of India",
      description: "Help them get the value they deserve!"
    },
    {
      image: "https://mapacademy.io/wp-content/uploads/2022/04/warli-painting-2m.jpg",
      title: "Immerse in the depths of Warli paintings",
      description: "Ancient tribal art form from Maharashtra"
    },
    {
      image: "https://cdn-images.prepp.in/public/image/a073b1cb1709923a578fde9a5edc6e89.png?tr=w-512,h-341,c-force",
      title: "Stand up for Vocal for Local",
      description: "Intricate designs and arts from across India"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleExploreClick = () => {
    navigate('/category'); // Redirect to the CategoryPage
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
  <div className="max-w-3xl px-4">
    <h2 className="text-5xl font-bold text-white mb-4">{slide.title}</h2>
    <p className="text-xl text-white mb-8">{slide.description}</p>
    <button 
       // Directly use navigate here
      className="bg-indian-red text-white px-8 py-3 rounded-full hover:bg-indian-red/90 transition-colors">
        <a href = "/category/CategoryPage.tsx">Explore Collection</a>
    </button>
  </div>
</div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;