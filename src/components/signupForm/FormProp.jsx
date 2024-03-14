import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FormProp({ inputs, submitValue, showTerms, formType }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (termsAccepted || !showTerms) {
      // Form submission logic
      console.log('Form submitted');
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col 
'
    >
      {inputs.map((input, index) => (
        <div key={index} className=' mb-8'>
          <label
            htmlFor={input.name}
            className='block mb-2 text-lg font-medium text-gray-900 dark:text'
          >
            {input.label}
          </label>
          <input
            id={input.name}
            type={input.type}
            placeholder={input.placeholder}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-3'
            required
          />
        </div>
      ))}

      {showTerms && (
        <label className=' flex gap-4 items-start mb-5 text-lg'>
          <input
            type='checkbox'
            checked={termsAccepted}
            onChange={handleTermsChange}
          />
          I accept the{' '}
          <a href='#' class='text-blue-600 hover:underline dark:text-blue-500'>
            terms and conditions
          </a>
        </label>
      )}

      <button
        type='submit'
        className='text-white bg-primary hover:bg-white hover:shadow-lg hover:text-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center'
      >
        {submitValue}
      </button>
      {/* Conditional rendering of login/signup links based on formType */}
      {formType === 'signup' && (
        <p className='mt-5 text-center'>
          Already have an account?{' '}
          <Link to='/login' className='text-primary'>
            Login
          </Link>
        </p>
      )}
      {formType === 'login' && (
        <p className='mt-5 text-center'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-primary'>
            Sign Up
          </Link>
        </p>
      )}
    </form>
  );
}

export default FormProp;

// // Usage example:

// return (
//   <div>
//     {/* <Form inputs={inputs} submitValue="Login" showTerms={false} /> */}
//     {/* For submitValue "Submit" and including terms checkbox: */}
//     <Form inputs={inputs} submitValue='Submit' showTerms={true} />
//   </div>
// );
