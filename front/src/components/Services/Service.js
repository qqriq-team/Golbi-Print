import React, { useEffect, useState } from 'react';
import './services.scss';
// import image '../../images/home/services';

export default function Service({ id, name, description, image }) {
  return (
    <>
      <div className='col-lg-3 col-md-6 col-xs-6 col-sm-6 px-0 pr-2'>
        <div className='service-box'>
          <div className='image'>
            <img src={`./images/home/services/${image}`} alt='' />
          </div>
          <div className='service-content'>
            <div className='service-heading'>
              <h4 className='font-weight-bold'>{name}</h4>
              <div className='line'></div>
            </div>
            <div className='service-text'>
              <p className='pb-4'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
