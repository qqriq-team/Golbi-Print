import React from 'react';
import './footer.scss';

export default function FooterEl({ id, parent_id, title }) {
  return (
    <>
      <div className='col-lg-12'>
        <ul>
          <p>{parent_id}</p>
          <h4>{id}</h4>
          <li>{title}</li>
        </ul>
      </div>
    </>
  );
}
