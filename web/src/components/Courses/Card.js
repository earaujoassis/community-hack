import React from 'react';

import './card.css';

const card = ({ title, description }) => {
  return (
    <div className="card-root">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default card;
