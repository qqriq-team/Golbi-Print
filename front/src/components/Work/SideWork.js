import React, { useState } from 'react';
import './work.scss';

export default function SideWork() {
  const [sideWork, setSideWork] = useState(false);
  const showSideWork = () => {
    setSideWork(!sideWork);
    console.log(sideWork);
  };
  return (
    <>
      <div className={sideWork ? 'sidework active' : 'sidework'}>
        <div className='sidework-container d-flex'>
          <div className='sidework-hidden '>
            <h1 onClick={showSideWork}>X</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ipsa!
              Possimus magnam facere porro animi officia repellendus minus,
              ratione aliquam placeat maxime perferendis eum qui cumque nesciunt
              mollitia, officiis numquam?
            </p>
          </div>
          <div className='sidework-heading' onClick={showSideWork}>
            <h1>Kontaktiraj nas</h1>
          </div>
        </div>
      </div>
    </>
  );
}
