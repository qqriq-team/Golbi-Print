import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import './footer.scss';
const urlCategories = 'http://127.0.0.1:8000/api/categories';

export default function FooterMain() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch(urlCategories);
      const categories = await response.json();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <Footer categories={categories}></Footer>
    </div>
  );
}
