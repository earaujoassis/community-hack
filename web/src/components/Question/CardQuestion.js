import React from 'react';

import './cardQuestion.css';

const card = ({
  ...rest
}) => {
  return (
    <>
      <div className="question-card-item">
        <h2>O que é?</h2>
      </div>
      <div className="question-card-item">
        <h2>Como funciona?</h2>
      </div>
      <div className="question-card-item">
        <h2>Qual Objetivo?</h2>
      </div>
    </>
    /**
     * Lógica de programação:
            Dê seus primeiros passos de maneira prática!
            Inicie na programação no seu celular e mostre seus programas para seus colegas.

Proxima tela
Perguntas 1 de Lógica de Programação
O que é?

É um treinamento online com um conjunto de pequenos cartões que guiam o você por conteúdo para aprender programação.

Como funciona?

O treinamento pode ser acessado pelo site num PC ou direto no seu celular. É só fazer uma cadastro rápido e começar a aprender e acumular pontos cumprindo tarefas.

Qual Objetivo?

Estimular o aprendizado de programação de forma lúdica, divertida, online e gratuita.

      Crie a sua primeira aplicação móvel
            Entenda o que é plataforma web e aprenda a criar e desenvolver aplicações móveis, entendendo a teoria básica de construção.

      Sua primeira página da Web
            Torne-se um programador Web:
            entenda o básico e desenvolva uma página Web completa
     */
  );
};

export default card;
