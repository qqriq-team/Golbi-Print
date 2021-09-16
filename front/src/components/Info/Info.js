import React from 'react';
import './info.scss';
import ReadMore from '../../images/icons/read-more.svg';

export default function Info() {
  return (
    <>
      <div className='container-full black-bg'>
        <div className='small-container'>
          <div className='info-heading'>
            <h1 className='font-weight-bold'>
              ISKUSTVO I KVALITET ISPRED SVEGA
            </h1>
          </div>
          <div className='info-content'>
            <h5 className='py-4'>
              Štamparija Golbi Print se bavi kvalitetnom izradom štampanih
              materijala. Zahvaljujući profesionalnom timu ljudi, visokoj
              tehničkoj opremljenosti, godinama iskustva i odličnoj saradnji sa
              podizvođačima, u mogućnosti smo da od dobijenog elektronskog
              zapisa finaliziramo sve vrste papirne galanterije. Na našem sajtu
              se možete informisati o uslugama koje Vam pružamo.
            </h5>
          </div>
          <div className='info-read-more d-flex'>
            <div className='image'>
              <img src={ReadMore} alt='' />
            </div>
            <div className='info-read-more-content'>
              <h2 className='px-3'>Pročitaj još</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
