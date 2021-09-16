import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServicesMain from '../../components/Services/ServicesMain';
import Articles from '../../components/Articles/Articles';
import Info from '../../components/Info/Info';
import WorkMain from '../../components/Work/WorkMain';
import Section6 from '../../components/Section6/Section6';
import FooterMain from '../../components/Footer/FooterMain';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesMain />
      <Articles />
      <Info />
      <WorkMain />
      <Section6 />
      <FooterMain />
    </div>
  );
}
