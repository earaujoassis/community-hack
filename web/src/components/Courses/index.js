import React from 'react';

import Menu from '@components/Menu';
import Card from './Card';

import './style.css';

const courses = () => {
  return (
    <div className="courses-root">
      <Menu />
      <div className="menu-fix courses-container">
        <Card
          title="Lógica de programação"
          description="Dê seus primeiros passos de maneira prática! Inicie na programação no seu celular e mostre seus programas para seus colegas."
        />
        <Card
          title="Crie a sua primeira aplicação móvel"
          description="Entenda o que é plataforma web e aprenda a criar e desenvolver aplicações móveis, entendendo a teoria básica de construção."
        />
        <Card
          title="Sua primeira página da Web"
          description="Torne-se um programador Web: entenda o básico e desenvolva uma página Web completa."
        />
      </div>
    </div>
  );
};

export default courses;
