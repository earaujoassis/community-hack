import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';

import './styles.css';

const cardOne = () => {
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
        <div className="card-item">
          <h2>O que é?</h2>
          <p>É um treinamento online com um conjunto de
            pequenos cartões que guiam o você por
            conteúdo para aprender programação.
          </p>
        </div>

        <div className="answer-button">
          <Link to="/public/cardTwo">
            <button
              className="answer-button-proxima"
            >
              Próximo
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default cardOne;
