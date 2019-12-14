import React from 'react';

import Menu from '@components/Menu';
import Card from './Card';

import './style.css';

const courses = () => {
  return (
    <div className="courses-root">
      <Menu />
      <div className="menu-fix courses-container">
        <Card />
      </div>
    </div>
  );
};

export default courses;
