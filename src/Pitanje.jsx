import React from 'react';
import { useParams } from 'react-router-dom';

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
          <div key={index} className="odgovor">
            {odgovor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pitanje;
