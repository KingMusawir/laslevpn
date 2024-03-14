import React, { useRef } from 'react';
import '../../App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Component } from 'react';
import ClientSlider from './ClientSlider';
import Robert from '../../assets/testimonialsImg/Robert.png';
import Yessica from '../../assets/testimonialsImg/Yessica.png';
import Kim from '../../assets/testimonialsImg/kim.png';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const data = [
  // Your testimonial data objects here
  {
    name: `Viezh Robert`,
    location: `Warsaw, Poland`,
    img: Robert,
    review: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`,
  },
  {
    name: 'Yessica Christy',
    location: 'Shanxi, China',
    img: Yessica,
    review: `“I like it because I like to travel far and still can connect with high speed.”`,
  },
  {
    name: 'Kim Young Jou',
    location: 'Seoul, South Korea',
    img: Kim,
    review: `“This is very unusual for my business that currently requires a virtual private network that has high security.”`,
  },
];

function Testimonial() {
  const arrowRef = useRef(null);
  let clientData = '';
  clientData = data.map((d, i) => <ClientSlider item={d} key={i} />);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='testimonial'>
      <div className='container'>
        <div className='testimonial-header'>
          <h2 className='secondary-header'>
            Trusted by Thousands of <br /> Happy Customer
          </h2>
          <p className='subheading'>
            These are the stories of our customers who have joined us with great{' '}
            <br /> pleasure when using this crazy feature.
          </p>
        </div>
        <div className='section-testimonial'>
          <Slider ref={arrowRef} {...settings}>
            {clientData}
          </Slider>
          <div className='slider-btn'>
            <div
              className='control-div'
              onClick={() => arrowRef.current.slickPrev()}
            >
              {<ArrowLeftCircleIcon className='control' />}
            </div>
            <div
              className='control-div'
              onClick={() => arrowRef.current.slickNext()}
            >
              {<ArrowRightCircleIcon className='control' />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
