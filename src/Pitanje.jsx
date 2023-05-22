import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PonudjenOdgovor from './PonudjenOdgovor';

const Pitanje = ({ pitanja }) => {
  const { id } = useParams();
  const trenutnoPitanje = pitanja.find((pitanje) => pitanje.id === Number(id));
  const [odgovorKorisnika, setOdgovorKorisnika] = useState(null);
  const [odabraniOdgovor, setOdabraniOdgovor] = useState(null);

  if (!trenutnoPitanje) {
    return <div>Pitanje nije pronađeno.</div>;
  }

  const { pitanje, opcije, tacanOdgovor } = trenutnoPitanje;

  return (
    <div className="pitanje-container">
      <div className="pitanje">
        <h2>{pitanje}</h2>
      </div>
      <div className="odgovori">
        {opcije.map((odgovor, index) => (
          <PonudjenOdgovor
            key={odgovor}
            odgovor={odgovor}
            tacanOdgovor={tacanOdgovor}
            setOdgovorKorisnika={setOdgovorKorisnika}
            id={id}
            odabraniOdgovor={odabraniOdgovor}
            setOdabraniOdgovor={setOdabraniOdgovor}
          />
        ))}
      </div>
    </div>
  );
};

export default Pitanje;
