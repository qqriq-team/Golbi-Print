import React from 'react';
import ArticleImage from '../../images/home/article.png';

export default function Article() {
  return (
    <>
      <div className='col-lg-2 col-md-6 col-sm-6 col-sx-6 px-0 pr-2'>
        <div className='article-box'>
          <div className='image'>
            <img src={ArticleImage} alt='' />
          </div>
          <div className='article-content'>
            <div className='article-heading'>
              <h4 className='font-weight-bold'>OFFSET ŠTAMPA</h4>
              <div className='line'></div>
            </div>
            <div className='article-text'>
              <p className='pb-4'>
                Grafička produkcija od dizajna, preko štampe do gotovog
                proizvoda, sve na jednom mjestu. Od ideje do isporuke na željenu
                adresu vodimo Vas najkraćim putem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
