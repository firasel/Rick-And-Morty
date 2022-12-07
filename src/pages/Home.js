import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-customBlack'>
      <Navbar />
      <Hero/>
    </div>
  );
};

export default Home;