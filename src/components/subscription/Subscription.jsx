import React from 'react';
import '../../App.css';
import ButtonProp from '../button/ButtonProp';

function Subscription() {
  return <div className=' sub-div'>
    <div className="container section-subscription">
        <div className="subscription-text-box">
            <h1 className="secondary-header">Subscribe Now for <br /> Get Special Features!</h1>
            <p className="subheading">Let's subscribe with us and find the fun.</p>
        </div>
        <div className="subscription-btn-box">
            <ButtonProp value="Subscription" isLast= "true"/>
        </div>
    </div>
  </div>;
}

export default Subscription;
