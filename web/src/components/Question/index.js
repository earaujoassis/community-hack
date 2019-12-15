import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';
import Card from './CardQuestion';

import './style.css';

const questions = () => {
  return (
    <div className="questions-root">
      <Menu />
      <div className="menu-fix questions-container">
        <div className="questions-logo">
          <Link to="/public/courses" className="logo-link">
            <img src="/public/images/work.svg" width="150" />
          </Link>
          <h1 className="logo-header">Ah!garra</h1>
        </div>
        <Card />
        <div className="question-button">
          <Link to="/public/answer">
            <button className="question-button-proxima">Próximo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default questions;
