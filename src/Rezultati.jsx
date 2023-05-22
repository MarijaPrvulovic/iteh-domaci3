import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Rezultati({rezultati,setRezultati}) {

  const [prikaziPrompt, setPrikaziPrompt] = useState(true);
  const [promptPrikazan, setPromptPrikazan] = useState(false);

  const handleUnesiNadimak = (score) => {
    const nadimak = window.sessionStorage.getItem("nadimak")
    if( !nadimak || nadimak=="null"){
        const nadimak = window.prompt('Unesite svoj nadimak:');
        window.sessionStorage.setItem("nadimak",nadimak)
    }
   
    if (nadimak) {
      const noviRezultat = {
        id: Date.now(),
        nadimak,
        score,
      };
      setRezultati((prevRezultati) => [...prevRezultati, noviRezultat]);
 

    }
  };
  function handleClick(){
     window.sessionStorage.clear();

  }
  useEffect(() => {
    if (prikaziPrompt && !promptPrikazan) {
      const score = window.sessionStorage.getItem('score');
      if (score) {
        handleUnesiNadimak(score);
        setPromptPrikazan(true);
      }
      setPrikaziPrompt(false);
    }
  }, [prikaziPrompt, promptPrikazan]);

  const renderTabelaRezultata = () => {
    return (
        <div className="pocetna">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nadimak</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rezultati.map((rezultat) => (
            <tr key={rezultat.id}>
              <td>{rezultat.id}</td>
              <td>{rezultat.nadimak}</td>
              <td>{rezultat.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
         
          <Link to="/kviz/1" className="pocetna-dugme" onClick={handleClick}>
            POČNI KVIZ
          </Link>
        </div>
    );
  };

  return (
    <div>
      <h2>Rezultati</h2>
      {rezultati.length > 0 && renderTabelaRezultata()}
    </div>
  );
}

export default Rezultati;
