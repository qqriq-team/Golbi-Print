import React, { useState, useEffect } from 'react';
import Services from './Services';
import Service from './Service';
import './services.scss';
const urlServices = 'http://127.0.0.1:8000/api/services';

export default function ServicesMain() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch(urlServices);
      const services = await response.json();
      setServices(services);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <>
      <Services services={services} />
    </>
  );
}
