import React from 'react';
import { Link } from 'react-router-dom';

import './conteudo.css';

const conteudo = () => {
  return (
    <div className="conteudo-root">
      <h1>Lógica de programação</h1>
      <h2>1) O que é preciso para acompanhar o treinamento?</h2>
      <form className="conteudo-form">
        <div className="conteudo-form-check">
          <input type="checkbox" id="resp1"></input>
          <label htmlFor="resp1">A - Tenha um celular, PC, Tablet ou notebook;</label>
        </div>
        <div className="conteudo-form-check">
          <input type="checkbox" id="resp2"></input>
          <label htmlFor="resp2">B - Leia os cartões e responda o Quiz;</label>
        </div>
        <div className="conteudo-form-check">
          <input type="checkbox" id="resp3"></input>
          <label htmlFor="resp3">C - Criar um cadastro gratuito no Ah!Garra;</label>
        </div>
        <div className="conteudo-form-check">
          <input type="checkbox" id="resp4"></input>
          <label htmlFor="resp4">D - Aprender inglês;</label>
        </div>
        <div className="conteudo-form-check">
          <input type="checkbox" id="resp5"></input>
          <label htmlFor="resp5">E- Saber matemática;</label>
        </div>
      </form>
    </div>
  );
};

export default conteudo;
