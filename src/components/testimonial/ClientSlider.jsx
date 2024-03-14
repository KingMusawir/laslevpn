import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import {ArrowLeftCircleIcon} from "@heroicons/react/24/outline"
import '../../App.css';

function ClientSlider(props) {
  const { name, location, img, review } = props.item;
  return (
    <div className='slider-container'>
      <header className='testimonial-header'>
        <div className='profile display-flex'>
          <div className='profile-details display-flex'>
            <img src={img} alt='' />

            <div className='profile-name display-flex'>
              <p>{name}</p>
              <p>{location}</p>
            </div>
          </div>

          <div className='rating'>
            <p>4.5</p>
            <div>
              <StarIcon className='star-icon' />
            </div>
          </div>
        </div>
      </header>
      <main>
        <p>{review}</p>
      </main>
    </div>
  );
}

export default ClientSlider;
