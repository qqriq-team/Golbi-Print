import React from 'react';
import './header.scss';
import Logo from '../../images/logo/Logo-Golbi.png';
export default function Navbar() {
  return (
    <>
      <div className='navbar-container  content-box'>
        <div className='navbar-content'>
          <ul className='navbar-items m-0'>
            <li className='navbar-item'>
              <a href='/'>Naše usluge</a>
            </li>
            <li className='navbar-item'>
              <a href='/'>Naši materijali</a>
            </li>
            <li className='navbar-item'>
              <a href='/'>Naši proizvodi</a>
            </li>
            <li className='navbar-item logo'>
              <img src={Logo} alt='' />
            </li>
            <li className='navbar-item'>
              <a href='/'>Česta pitanja</a>
            </li>
            <li className='navbar-item'>
              <a href='/'>Uslovi poručivanja</a>
            </li>
            <li className='navbar-item'>
              <a href='/'>Podrška / Pomoć</a>
            </li>
          </ul>
          <div className='hr-grey'></div>
        </div>
      </div>
    </>
  );
}
