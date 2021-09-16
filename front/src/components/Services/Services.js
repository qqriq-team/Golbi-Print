import React, { useState, useEffect } from 'react';
import Service from './Service';
import './services.scss';

export default function Services({ services }) {
  return (
    <>
      <div className='content-box pb-5'>
        <h1 className='py-4'>Usluge koje nudimo u našoj štampariji</h1>
        {/* odje dolaze svi services */}
        <div className='row m-0 '>
          {services.map((service) => {
            return <Service key={service.id} {...service}></Service>;
          })}
        </div>
      </div>
    </>
  );
}
