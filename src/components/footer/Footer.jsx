import React from 'react';
import '../../App.css';
import Logo from '../../assets/Logo.png';
import Facebook from '../../assets/socials/Facebook.png';
import Twitter from '../../assets/socials/Twitter.png';
import Instagram from '../../assets/socials/Instagram.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-div pt-10'>
      <div className='section-footer container'>
        <div className='footer-logo-div'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='LaslesVpn Logo' />
            </Link>
          </div>
          <p className='subheading'>
            <strong>LaslesVPN</strong> is a private virtual network that <br />{' '}
            has unique features and has high security.
          </p>
          <div className='socials'>
            <a href='#'>
              <img src={Facebook} className='social-icon' />
            </a>
            <a href='#'>
              <img src={Twitter} className='social-icon' />
            </a>
            <a href='#'>
              <img src={Instagram} className='social-icon' />
            </a>
          </div>
          <p className='copy'>
            &copy;2020Lasless<strong>VPN</strong>
          </p>
        </div>
        <div className='footer-list'>
          <h3 className='footer-header'>Product</h3>
          <ul>
            <li>
              <a href='#'>Download</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Locations</a>
            </li>
            <li>
              <a href='#'>Server</a>
            </li>
            <li>
              <a href='#'>Countries</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='footer-list'>
          <h3 className='footer-header'>Engage</h3>
          <ul>
            <li>
              <a href='#'>LaslesVPN ?</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Tutorials</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className='footer-list'>
          <h3 className='footer-header'>Earn Money</h3>
          <ul>
            <li>
              <a href='#'>Affilate</a>
            </li>
            <li>
              <a href='#'>Become a Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
