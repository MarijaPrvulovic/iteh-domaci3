import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PonudjenOdgovor = ({
  odgovor,
  tacanOdgovor,
  setOdgovorKorisnika,
  id,
  odabraniOdgovor,
  setOdabraniOdgovor,
}) => {
  const [odabrano, setOdabrano] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOdabrano(true);
    setOdgovorKorisnika(odgovor);
    setOdabraniOdgovor(odgovor);
    setTimeout(() => {
      const nextQuestionId = Number(id) + 1;
      navigate(`/kviz/${nextQuestionId}`);
    }, 1000);
  };

  return (
    <div
      key={odgovor}
      className={`odgovor ${
        odabrano || odgovor === odabraniOdgovor ? (odgovor === tacanOdgovor ? 'tacno' : 'netacno') : ''
      }`}
      onClick={handleClick}
    >
      {odgovor}
    </div>
  );
};

export default PonudjenOdgovor;
