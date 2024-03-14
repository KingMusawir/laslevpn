import React from 'react';
import HugeGlobal from '../../assets/HugeGlobal.png';
import Sponsored from '../../assets/Sponsored.png';

function Global() {
  return (
    <div className='global-div'>
      <section className='section-global container'>
        <header className='global-header'>
          <h2 className='secondary-header text-green-900'>
            Huge Global Network <br /> of Fast VPN
          </h2>
          <p className='subheading'>
            See <strong>LaslesVPN</strong> everywhere to make it easier for you
            when you move <br />
            locations.
          </p>
        </header>
        <img src={HugeGlobal} alt='A Globe Map illustration' className='global-map'/>
        <img src={Sponsored} alt="Sponsorers Logo" />
      </section>
    </div>
  );
}

export default Global;
