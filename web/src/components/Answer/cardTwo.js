import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';

import './styles.css';

const cardTwo = () => {
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
          <h2>Como funciona?</h2>
          <p>O treinamento pode ser acessado pelo site
            num PC ou direto no seu celular. É só fazer
            uma cadastro rápido e começar a aprender e
            acumular pontos cumprindo tarefas.
          </p>
        </div>

        <div className="answer-button">
          <Link to="/public/cardThree">
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

export default cardTwo;
