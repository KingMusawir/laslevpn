import React from 'react';
import Navbar from '../../components/nav/Navbar';
import SigninForm from '../../components/signinForm/SigninForm';
import Footer from '../../components/footer/Footer';

function SignIn() {
  return (
    <div>
      <Navbar />
      <SigninForm />
      <Footer />
    </div>
  );
}

export default SignIn;
