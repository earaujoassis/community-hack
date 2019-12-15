import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div role="menu" className="menu-root">
      <span onClick={() => setDisplayMenu(!displayMenu)} className="menu-bars">
        <i className="fas fa-bars"></i>
      </span>
      {displayMenu ? (
        <ul className="menu-list">
          <li>
            <Link to="/public">Cursos e módulos</Link>
          </li>
          <li>
            <Link to="/configurations">Configurações</Link>
          </li>
        </ul>
      ) : (null)}
    </div>
  );
};

export default menu;
