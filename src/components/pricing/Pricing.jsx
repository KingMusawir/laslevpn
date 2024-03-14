import React from 'react';
import Standard from '../../assets/Illustration/Standard.png';
import Done from '../../assets/Illustration/done.png';
// import ButtonProp from '../button/ButtonProp';
import List from './pricingList/List';

function Pricing() {
  return (
    <div className='price-div'>
      <section className='section-pricing container'>
        <div className='pricing-header'>
          <h2 className='secondary-header'>Choose Your Plan</h2>
          <p className='subheading'>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className='pricing-info'>
          <div>
            <List
              icon={Standard}
              plan='Free Plan'
              done={Done}
              list1='Unlimited Bandwitch'
              list2='Encrypted Connection'
              list3='Yes Traffic Logs'
              list4='Works on All Devices'
              amount='Free'
              value='Select'
              showButton={true}
              margin='13rem'
            />

            {/* <h3 className='price-amount'>Free</h3> */}
            {/* <ButtonProp value='Select' /> */}
          </div>

          <div>
            <List
              icon={Standard}
              plan='Standard Plan'
              done={Done}
              list1='Unlimited Bandwitch'
              list2='Encrypted Connection'
              list3='Yes Traffic Logs'
              list4='Works on All Devices'
              list5='Connect Anyware'
              amount='Free'
              value='Select'
              showButton={true}
              margin='9rem'
            />

            {/* <h3 className='price-amount'>Free</h3> */}
            {/* <ButtonProp value='Select' /> */}
          </div>

          <div>
            <List
              icon={Standard}
              plan='Premium Plan'
              done={Done}
              list1='Unlimited Bandwitch'
              list2='Encrypted Connection'
              list3='Yes Traffic Logs'
              list4='Works on All Devices'
              list5='Connect Anyware'
              list6='Get New Features'
              amount='Free'
              value='Select'
              showButton={true}
              isLast={true}
              margin='4.5rem'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
