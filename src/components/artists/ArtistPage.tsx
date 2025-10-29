// src/components/artists/ArtistPage.tsx
import React from 'react';

interface Artist {
  name: string;
  image: string;
  biography: string;
}

const artists: Artist[] = [
  {
    name: 'Raja Ravi Varma',
    image: 'https://i0.wp.com/mahabahu.com/wp-content/uploads/2023/03/Self-portrait-of-Raja-Ravi-Varma.jpg?resize=1195%2C1536&ssl=1',
    biography: 'Raja Ravi Varma (1848–1906) was a celebrated Indian painter and artist known for his depictions of Hindu gods and goddesses. His works are characterized by their vibrant colors and intricate details, blending Indian traditions with European techniques.'
  },
  {
    name: 'M.F. Husain',
    image: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/01/Pictures/_413a96c0-b41f-11e9-895a-bbf3eb4ef5e5.jpg',
    biography: 'Maqbool Fida Husain (1915–2011) was one of India\'s most famous painters, known for his bold and vibrant works that often depicted Indian culture and mythology. He was a prominent figure in modern Indian art and was often referred to as the "Picasso of India."'
  },
  {
    name: 'Amrita Sher-Gil',
    image: 'https://sothebys-com.brightspotcdn.com/dims4/default/aa77d8e/2147483647/strip/true/crop/1406x1406+0+0/resize/1200x1200!/quality/90/?url=http:%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fdc%2F9a%2Fec55fd20471a85155609be1e7263%2Famrita-sher-gil.jpg',
    biography: 'Amrita Sher-Gil (1913–1941) was an influential Indian painter, often regarded as one of the pioneers of modern Indian art. Her works reflect a blend of Western and Indian styles, and she is known for her powerful portrayals of women and rural life.'
  },
  {
    name: 'S.H. Raza',
    image: 'https://www.iloveindia.com/indian-heroes/pics/sh-raza.jpg',
    biography: 'Syed Haider Raza (1922–2016) was a prominent Indian painter known for his abstract works that often incorporated elements of Indian philosophy and spirituality. He was a key figure in the Indian modern art movement and received numerous accolades for his contributions to art.'
  }
];

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-ivory-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Famous Artists</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
                <p className="text-gray-600">{artist.biography}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;