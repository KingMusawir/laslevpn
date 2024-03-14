import React from 'react';
import Navbar from '../../components/nav/Navbar';
import SignupForm from '../../components/signupForm/SignupForm';
import Footer from '../../components/footer/Footer';

function Signup() {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default Signup;
