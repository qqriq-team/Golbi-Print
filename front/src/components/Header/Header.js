import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <>
      <header>
        <div className='container-full'>
          <div className='header-container content-box'>
            <div className='header-left'>
              <ul className='header-list'>
                <li className='header-item'>
                  Dizajn, priprema, štampa, dorada.
                </li>
                <li className='header-item red-bg'>Cjelokupna ponuda </li>
              </ul>
            </div>
            <div className='header-right'>
              <div className='header-list'>
                <ul className='header-list-right'>
                  <div className='header-item-right'>
                    <ul>
                      <li>O štampariji</li>
                      <li>Kontakt</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
