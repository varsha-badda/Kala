import React from 'react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Art Collector',
    content: 'KALA has transformed how I discover and collect traditional Indian art. The quality and authenticity are unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Priya Patel',
    role: 'Artist',
    content: 'As an artist, KALA has given me a platform to reach art enthusiasts globally while preserving our cultural heritage.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    name: 'Amit Verma',
    role: 'Customer',
    content: 'The variety of traditional art pieces available on KALA is amazing. Each piece tells a unique story.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    name: 'Meera Reddy',
    role: 'Art Curator',
    content: 'KALA brings together the finest artisans from across India. The platform is a treasure trove of authentic art.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;