import React from 'react';
import FooterEl from './FooterEl';
import logo from '../../images/logo/Logo-Golbi@2x.png';
import './footer.scss';

export default function Footer({ categories }) {
  return (
    <footer>
      <div className='footer-container small-container '>
        <div className='footer-image py-4'>
          <img src={logo} alt='' />
        </div>
        <div className='row px-0 mx-0 py-4'>
          <div className='col-lg-2 col-md-4 col-sm-6 col-sx-6 px-0 mx-0  footer-items'>
            {categories.map((category) => {
              console.log(category.parent_id);
              return <FooterEl key={category.id} {...category}></FooterEl>;
            })}
          </div>
          <div className='col-lg-2 col-md-4 col-sm-6 col-sx-6 px-0 mx-0  footer-items'>
            <ul>
              <h4>Kontakt:</h4>
              <li>8. Marta, 55</li>
              <li>81 000 Podgorica</li>
              <li>Crna Gora</li>
              <li>office@golbi.me</li>
              <li>+382 68 814 593</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
