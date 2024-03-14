import React from 'react';
import FormProp from '../signupForm/FormProp';

function SigninForm() {
  const inputs = [
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
      placeholder: 'Enter your password',
    },
  ];
  const formType = 'login';
  return (
    <div className=' max-w-xl mx-auto my-0 shadow-lg shadow-secondary-light rounded-lg mb-52'>
      <div className='form-box p-20  '>
        <h2 className=' text-4xl mb-12'>
          <span className=' underline decoration-primary decoration-4'>
            Sign
          </span>
          In
        </h2>
        <FormProp
          inputs={inputs}
          submitValue={formType === 'login' ? 'Login' : 'Sign Up'}
          showTerms={true}
          formType={formType}
        />
      </div>
    </div>
  );
}

export default SigninForm;
