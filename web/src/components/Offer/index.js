import React from 'react';

import Menu from '@components/Menu';

import './style.css';

const offer = () => {
  return (
    <div className="offer-root">
      <Menu />
      <div className="menu-fix offer-container">
        <span className="offer-trophy"><i className="fas fa-trophy" /></span>
        <div className="offer-text">
          <p>Opa! Temos uma nova oportunidade de mentoria na empresa X para desenvolvedores júnior!</p>
          <button>Clique aqui para saber mais!</button>
        </div>
      </div>
    </div>
  );
};

export default offer;
