import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PonudjenOdgovor from './PonudjenOdgovor';

const Pitanje = ({ pitanja,setSkor }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const trenutnoPitanje = pitanja.find((pitanje) => pitanje.id === Number(id));
  const [odgovorKorisnika, setOdgovorKorisnika] = useState(null);
  const [odabraniOdgovor, setOdabraniOdgovor] = useState(null);

  if (!trenutnoPitanje) {
    return <div>Pitanje nije pronađeno.</div>;
  }

  const { pitanje, opcije, tacanOdgovor } = trenutnoPitanje;

  const jePoslednjePitanje = Number(id) === pitanja.length;

  const handleClick = () => {
    setOdabraniOdgovor(odgovorKorisnika);
    setOdgovorKorisnika(null);

    setTimeout(() => {
      if (jePoslednjePitanje) {
        navigate('/kraj');
      } else {
        const nextQuestionId = Number(id) + 1;
        navigate(`/kviz/${nextQuestionId}`);
      }
    }, 1000);
  };
  if (odgovorKorisnika === tacanOdgovor) {     
    var currentScore = window.sessionStorage.getItem("score");
    var newScore = Number(currentScore)+0.5;
    window.sessionStorage.setItem("score",newScore);
}
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
            brojPitanja={pitanja.length}
          />
        ))}
      </div>
      {jePoslednjePitanje && (
        <div className="kraj-kviza">
          <h2>KRAJ KVIZA</h2>
        </div>
      )}
      {odgovorKorisnika && (
        <div className={odgovorKorisnika === tacanOdgovor ? 'tacno' : 'netacno'} onClick={handleClick}>
          
        </div>
      )}
    </div>
  );
};

export default Pitanje;
