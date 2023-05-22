import React, { useState } from 'react';
 

function Rezultati() {

  


  return (
     <div>
        {window.sessionStorage.getItem("score")}
     </div>
  );
}

export default Rezultati;