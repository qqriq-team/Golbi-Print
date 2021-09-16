import React from 'react';
import './articles.scss';
import Article from './Article';

export default function Articles() {
  return (
    <>
      <div className='content-box pb-5'>
        <h1 className='pl-0 py-4'>Proizvodi koje nudimo u našoj štampariji</h1>
        <div className='row m-0'>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </>
  );
}
