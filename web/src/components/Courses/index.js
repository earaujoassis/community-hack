import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@components/Menu';
import Card from './Card';

import './style.css';

const courses = () => {
  return (
    <div className="courses-root">
      <Menu />
      <div className="menu-fix courses-container">
        <div className="courses-logo">
          <img src="/public/images/work.svg" width="150" />
          <h1 className="logo-header">Ah!garra</h1>
        </div>
        <Link to="/public/questions">
          <Card />
        </Link>
      </div>
    </div>
  );
};

export default courses;
