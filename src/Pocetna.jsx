import React from 'react';
import { Link } from 'react-router-dom';

const Pocetna = () => {
  return (
    <div className="pocetna">
      <h1>Dobrodošli na kviz!</h1>
      <Link to="/kviz/1" className="pocetna-dugme">
        POČNI KVIZ
      </Link>
    </div>
  );
};

export default Pocetna;
