import React, { useState } from 'react';

const PonudjenOdgovor = ({ odgovor, tacanOdgovor, setOdgovorKorisnika }) => {
  const [odabrano, setOdabrano] = useState(false);
  
  const handleClick = () => {
    setOdabrano(true);
    setOdgovorKorisnika(odgovor);
  };

  return (
    <div 
      key={odgovor} 
      className={`odgovor ${odabrano ? (odgovor === tacanOdgovor ? 'tacno' : 'netacno') : ''}`}
      onClick={handleClick}
    >
      {odgovor}
    </div>
  );
};

export default PonudjenOdgovor;
