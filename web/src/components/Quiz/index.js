import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';
import Conteudo from './Conteudo';

import './style.css';

const courses = () => {
  return (
    <div className="quiz-root">
      <Menu />
      <div className="menu-fix quiz-container">
        <div className="quiz-logo">
          <Link to="/public/courses" className="logo-link">
            <img src="/public/images/work.svg" width="150" />
          </Link>
          <h1 className="logo-header">Ah!garra</h1>
        </div>

        <Conteudo />
      </div>
    </div>
  );
};

export default courses;
