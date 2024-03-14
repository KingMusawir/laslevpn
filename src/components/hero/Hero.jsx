import React from 'react';
import '../../App.css';
import HeroImg from '../../assets/Hero-img.png';

const Hero = () => {
  return (
    <div>
      <div className='hero container'>
        <div className='hero-text-box'>
          <h1 className='primary-header'>
            Want anything to be easy with <span>LaslesVPN.</span>
          </h1>
          <p className='subheading'>
            Provide a network for all your needs with ease and fun using{' '}
            <span>LaslesVPN</span> discover interesting features from us.
          </p>
          <a href='#' className='hero-btn'>
            Get Started
          </a>
        </div>
        <div className='hero-image-box'>
          <img src={HeroImg} alt='Hero Illustration Image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
