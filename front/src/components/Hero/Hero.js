import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import './hero.scss';

export default function Hero() {
  return (
    <>
      <div className='hero '>
        <Header />
        <Navbar />
        <div className='hero-background content-box'></div>
      </div>
    </>
  );
}
