import React from 'react';

const PonudjenOdgovor = ({ odgovor }) => {
  return (
    <div key={odgovor.id} className="odgovor">
            {odgovor}
    </div>
  );
};

export default PonudjenOdgovor;
