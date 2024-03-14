import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import '../../App.css';
import ButtonProp from '../button/ButtonProp';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Define your navigation items as an array of objects
  const navItems = [
    { text: 'About', to: '/about' },
    { text: 'Features', to: '#' },
    { text: 'Pricing', to: '#' },
    { text: 'Testimonials', to: '#' },
    { text: 'Help', to: '#' },
  ];

  return (
    <div>
      <header className='header container'>
        <nav className='nav-bar'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='LaslesVpn Logo' />
            </Link>
          </div>
          <ul className='nav-list list-none hidden md:flex gap-8 items-center '>
            {/* Map through navItems array and render Link components */}
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <div className='nav-optin'>
            <Link to='/login'>
              <span>Sign In</span>
            </Link>
            <Link to='/signup'>
              <ButtonProp value='Sign Up' />
            </Link>
            <div className=' grid md:block'>
              <GiHamburgerMenu size='40' color='red' onClick={openModal} />
            </div>
            {showModal && (
              <div className='modal fixed top-0 left-0 w-screen h-screen bg-modalsbg z-50 flex justify-center items-center'>
                <div className='modal-content bg-white p-5 rounded-sm shadow-sm shadow-primary w-4/5'>
                  {/* Map through navItems array and render Link components */}
                  <ul className='nav-list-modal'>
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to}>{item.text}</Link>
                      </li>
                    ))}
                    {/* Add sign-in and sign-up links */}
                    <li>
                      <Link to='/signup'>Sign Up</Link>
                    </li>
                    <li>
                      <Link to='/login'>Sign In</Link>
                    </li>
                  </ul>
                  <IoClose
                    className='close absolute top-3 right-3 bg-none border-none cursor-pointer '
                    onClick={closeModal}
                    size='40'
                    color='red'
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
