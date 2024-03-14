import React from 'react';
import FeaturesImg from '../../assets/features.png';
import DoneIcon from '../../assets/doneIcon.png';

function Features() {
  return (
    <div>
      <section className='features container'>
        <div className='features-img-box'>
          <img src={FeaturesImg} alt='Features image illustration' />
        </div>
        <div className='features-text-box'>
          <h2 className='secondary-header'>
            We Provide Many <br /> Features You Can Use
          </h2>
          <p className='subheading'>
            You can explore the features that we provide with fun and <br />{' '}
            have their own functions each feature.
          </p>
          <ul className='features-list'>
            <li>
              <span>
                <img src={DoneIcon} alt='A done Icon' />
              </span>
              Powerfull online protection.
            </li>
            <li>
              <span>
                <img src={DoneIcon} alt='A done Icon' />
              </span>{' '}
              Internet without borders.
            </li>
            <li>
              <span>
                <img src={DoneIcon} alt='A done Icon' />
              </span>{' '}
              Supercharged VPN
            </li>
            <li>
              <span>
                <img src={DoneIcon} alt='A done Icon' />
              </span>{' '}
              No specific time limits.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Features;
