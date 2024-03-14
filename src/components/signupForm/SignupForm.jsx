import React from 'react';
import FormProp from './FormProp';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function SignupForm() {
  const inputs = [
    {
      name: 'fname',
      label: 'Your First Name',
      type: 'text',
      placeholder: 'Enter your first name',
    },
    {
      name: 'lname',
      label: 'Your Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
    },
    {
      name: 'tel',
      label: 'Your Phone Number',
      type: 'tel',
      placeholder: '555-555-5555',
    },
    {
      name: 'email',
      label: 'Your Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Your Password',
      type: 'password',
      placeholder: 'Create a password',
    },
  ];
  const formType = 'signup';

  return (
    <div className='grid grid-cols-[1fr,1fr] max-w-screen-md mx-auto my-0 shadow-lg shadow-secondary-light rounded-lg mb-24'>
      <div className='form-box p-20  '>
        <h2 className=' text-4xl mb-12'>
          <span className=' underline decoration-primary decoration-4'>Re</span>
          gistration
        </h2>
        <FormProp
          inputs={inputs}
          submitValue={formType === 'login' ? 'Login' : 'Sign Up'}
          showTerms={true}
          formType={formType}
        />
      </div>

      <div className=' p-20 text-center text-gray-700 flex items-center justify-center bg-gray-100'>
        <div className=''>
          <h2 className=' text-4xl mb-5 font-extrabold text-primary'>
            Come join us!
          </h2>
          <p className='text-2xl'>
            We are so excited to have you here. If you haven't already, create
            an account to get access to offers, rewards and discounts.
          </p>
          <div className='logo flex justify-center mt-10'>
            <Link to='/'>
              <img src={Logo} alt='LaslesVpn Logo' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
