import React from 'react';
import './work.scss';
import SideWork from './SideWork';
import Kvantitet from '../../images/icons/Kvantitet-01.svg';
import Kvantitet2 from '../../images/icons/Kvantitet-02.svg';
import Kvantitet3 from '../../images/icons/Kvantitet-03.svg';
import Kvantitet4 from '../../images/icons/Kvantitet-04.svg';

export default function Work() {
  return (
    <>
      <div className='small-container'>
        <div className='clr-red'>
          <h1>
            Četiri razloga zašto se klijenti odlučuju da štampaju kod nas:
          </h1>
        </div>
        <div className='work-container'>
          <div className='single-work d-lg-flex d-sm-block pt-5'>
            <div className='work-image'>
              <img src={Kvantitet} alt='' />
            </div>
            <div className='work-text m-auto py-4'>
              <p className='clr-grey pl-lg-5 pl-sm-0 f-16'>
                Kvalitet izrade je naš najbolji marketing, a dugogodišnje
                iskustvo nam omogućava da upravo taj kvalitet podignemo na veći
                nivo. Po tome želimo da nas pamtite, te nam je premium kvalitet
                postao standard i podrazuijeva se prilikom štampe bilo koje
                vrste.
              </p>
            </div>
          </div>
          <div className='hr-grey mt-4' />
          <div className='single-work d-lg-flex d-sm-block pt-5'>
            <div className='work-text m-auto py-4'>
              <p className='clr-grey pr-lg-5 pr-sm-0 f-16'>
                Stručni resursi, dugogodišnji rad na mašinama i ozbiljnost prema
                klijentima nas čini tačnim, a često i bržim nego što očekujete.
                U našem je interesu da klijenti budu zadovoljni, ne samo
                kvalitetom izrade, već i rokom dostave dogovorenog posla.
              </p>
            </div>
            <div className='work-image'>
              <img src={Kvantitet2} alt='' />
            </div>
          </div>
          <div className='hr-grey mt-4' />
          <div className='single-work d-lg-flex d-sm-block pt-5'>
            <div className='work-image'>
              <img src={Kvantitet3} alt='' />
            </div>
            <div className='work-text m-auto py-4'>
              <p className='clr-grey pl-lg-5 pl-sm-0 f-16'>
                Naša štamparija je opremljena velikim brojem mašina za sve
                tipove štampe. Na vama je samo da navedete kakvu štampu želite i
                obećavamo da ćemo biti u mogućnosti da ispunimo vaš zahtjev.
                Takođe, veliki broj mašina nam omogućava i mogućnost štampe u
                ogromnim količinama.
              </p>
            </div>
          </div>
          <div className='hr-grey mt-4' />
          <div className='single-work d-lg-flex d-sm-block pt-5'>
            <div className='work-text m-auto py-4'>
              <p className='clr-grey pr-lg-5 pr-sm-0 f-16'>
                Imamo sluha. Otvoreni smo za saradnju i uvijek idemo sa ciljem
                da klijent bude jednako zadovoljan koliko i mi. Od samog početka
                postojanja štamparije, preko 15 godina, saradnja na obostrano
                zadovoljstvo je ideja vodilja naše kompanije čemu svjedoče
                veliki klijenti sa kojima sarađujemo dugi niz godina.
              </p>
            </div>
            <div className='work-image'>
              <img src={Kvantitet4} alt='' />
            </div>
          </div>
          <div className='hr-grey mt-4' />
        </div>
      </div>
    </>
  );
}
