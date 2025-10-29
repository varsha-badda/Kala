import React from 'react';
import Hero from './Hero';
import CategoryGrid from './CategoryGrid';
import DiscoverSection from './DiscoverSection';
import SupportArtists from './SupportArtists';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="categories">
        <CategoryGrid />
      </section>
      <DiscoverSection />
      <SupportArtists />
      <Testimonials />
    </>
  );
};

export default HomePage;