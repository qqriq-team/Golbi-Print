import React from 'react';
import './section6.scss';
import Rokovnik from '../../images/home/rokovnik.png';
import ChatIcon from '../../images/icons/Chat.svg';

export default function Section6() {
  return (
    <>
      <div className='container-full black-bg'>
        <div className='section6 position-relative'>
          <div className='section6-container d-flex'>
            <div className='section6-image'>
              <img src={Rokovnik} alt='' />
            </div>
            <div className='section6-content container-small'>
              <div className='section6-heading'>
                <h1 className='clr-white py-5'>
                  NISTE PRONAŠLI ONO ŠTO STE TRAŽILI?
                </h1>
              </div>
              <div className='section6-text'>
                <h5 className='clr-white'>
                  Ukoliko se na našem sajtu ne nalazi ono zbog čega ste ušli da
                  pogledate isti, čekajte! I dalje vam možemo pomoći.
                  Kontaktirajte nas vezano za projekat koji želite da
                  realizujete i kažite nam šta vam je potrebno. Ovdje smo da vam
                  pomognemo i odgovorimo na sve vaše zahtjeve i potrebe koje
                  ćete baciti na nas.
                </h5>
              </div>
              <div className='section6-btn-container '>
                <div className='section6-btn float-right red-bg p-2 m-5'>
                  <a href='/'>
                    <img src={ChatIcon} alt='' />
                    Recite nam više o vašem projektu
                  </a>
                </div>
                <div className='red-line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
