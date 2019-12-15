import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';

import './styles.css';

const cardThree = () => {
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
          <h2>Qual Objetivo?</h2>
          <p>Estimular o aprendizado de programação de
            forma lúdica, divertida, online e gratuita.
          </p>
        </div>

        <div className="answer-button">
          <Link to="/public/quiz">
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

export default cardThree;
