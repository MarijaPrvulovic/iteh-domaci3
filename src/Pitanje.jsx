import React from 'react';
import { useParams } from 'react-router-dom';
import PonudjenOdgovor from './PonudjenOdgovor';

const Pitanje = ({ pitanja }) => {
  const { id } = useParams();
    console.log(id)
  const trenutnoPitanje = pitanja.find(pitanje => pitanje.id === Number(id));

  if (!trenutnoPitanje) {
    return <div>Pitanje nije pronađeno.</div>;
  }

  const { pitanje, opcije } = trenutnoPitanje;

  return (
    <div className="pitanje-container">
      <div className="pitanje">
        <h2>{pitanje}</h2>
      </div>
      <div className="odgovori">
        {opcije.map((odgovor, index) => (
           <PonudjenOdgovor odgovor={odgovor}> </PonudjenOdgovor>
        ))}
      </div>
    </div>
  );
};

export default Pitanje;
