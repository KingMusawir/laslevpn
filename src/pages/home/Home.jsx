import React from 'react';
import Navbar from '../../components/nav/Navbar';
import Hero from '../../components/hero/Hero';
import Connection from '../../components/connection/Connection';
import Features from '../../components/features/Features';
import Pricing from '../../components/pricing/Pricing';
import Global from '../../components/global/Global';
import Testimonial from '../../components/testimonial/Testimonial';
import Subscription from '../../components/subscription/Subscription';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Connection />
      <Features />
      <Pricing />
      <Global />
      <Testimonial />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
