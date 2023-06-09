 
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Pocetna';
import Pitanje from './Pitanje';
import Rezultati from './Rezultati';

function App() {

  const [kvizPitanja, setKvizPitanja] = useState([
    {
      id:1,
      pitanje: 'Koja je glavna prestonica Francuske?',
      opcije: ['London', 'Pariz', 'Berlin', 'Rim'],
      tacanOdgovor: 'Pariz'
    },
    {
      id:2,
      pitanje: 'Koja je najduža reka u svetu?',
      opcije: ['Nil', 'Amazona', 'Misisipi', 'Jangce'],
      tacanOdgovor: 'Nil'
    },
    {
      id:3,
      pitanje: 'Koje godine je otkrivena Amerika?',
      opcije: ['1492.', '1521.', '1776.', '1812.'],
      tacanOdgovor: '1492.'
    },
    {
      id:4,
      pitanje: 'Koja planeta je po veličini druga u Sunčevom sistemu?',
      opcije: ['Venera', 'Mars', 'Jupiter', 'Saturn'],
      tacanOdgovor: 'Mars'
    },
    {
      id:5,
      pitanje: 'Ko je autor knjige "Rat i mir"?',
      opcije: ['Charles Dickens', 'Leo Tolstoy', 'Fyodor Dostoevsky', 'Jane Austen'],
      tacanOdgovor: 'Leo Tolstoy'
    }
  ]);
  window.sessionStorage.clear();
  window.sessionStorage.setItem("score","0");

  const [rezultati, setRezultati] = useState([]);

  return (
     <BrowserRouter>
     
      <Routes>
          <Route path='/' element={ <Pocetna></Pocetna>}></Route>
          <Route path='/kviz/:id' element={ <Pitanje pitanja={kvizPitanja} ></Pitanje>}></Route>
          <Route path='/kraj' element={ <Rezultati  rezultati={rezultati} setRezultati={setRezultati}></Rezultati>}></Route>


      </Routes>
     </BrowserRouter>
  );
}

export default App;