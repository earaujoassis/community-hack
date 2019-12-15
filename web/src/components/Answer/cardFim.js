import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';

import './styles.css';

const cardFim = () => {
  return (
    <div className="courses-root">
      <Menu />
      <div className="menu-fix answer-container">
        <div className="answer-logo">
          <Link to="/public/courses" className="logo-link">
            <img src="/public/images/work.svg" width="150" />
          </Link>
          <h1 className="logo-header">Ah!garra</h1>
        </div>
        <div className="card-item-fim">
          <div className="card-conteudo">
            <div className="texto">
              <h2>Parabéns!!</h2>
              <p>Você concluiu a primeira etapa...</p>

            </div>
            <div className="imagem">
              <img src="/public/images/fim.svg" width="150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardFim;
