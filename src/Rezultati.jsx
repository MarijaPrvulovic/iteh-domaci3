import React, { useState, useEffect } from 'react';

function Rezultati() {
  const [rezultati, setRezultati] = useState([]);
  const [prikaziPrompt, setPrikaziPrompt] = useState(true);
  const [promptPrikazan, setPromptPrikazan] = useState(false);

  const handleUnesiNadimak = (score) => {
    const nadimak = window.sessionStorage.getItem("nadimak")
    if( !nadimak){
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
