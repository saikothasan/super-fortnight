import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
    </main>
  );
};

export default Home;