import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PonudjenOdgovor from './PonudjenOdgovor';

const Pitanje = ({ pitanja }) => {
  const { id } = useParams();
  const trenutnoPitanje = pitanja.find(pitanje => pitanje.id === Number(id));
  const [odgovorKorisnika, setOdgovorKorisnika] = useState(null);

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
             odgovor={odgovor} 
             tacanOdgovor={tacanOdgovor}
             setOdgovorKorisnika={setOdgovorKorisnika}
           />
        ))}
      </div>
      {odgovorKorisnika && (
        <div className={odgovorKorisnika === tacanOdgovor ? 'tacno' : 'netacno'}>
          {odgovorKorisnika === tacanOdgovor ? 'Tačan odgovor!' : 'Netačan odgovor.'}
        </div>
      )}
    </div>
  );
};

export default Pitanje;
