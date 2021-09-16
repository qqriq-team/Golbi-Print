import React from 'react';
import Work from './Work';
import SideWork from './SideWork';
import './work.scss';

export default function WorkMain() {
  return (
    <>
      <div className='container-full d-flex position-relative'>
        <SideWork />
        <Work />
      </div>
    </>
  );
}
