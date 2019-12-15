import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import './style.css';

const login = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="login-root">
      <div className="login-content">
        <img className="login-thumbnail" src="/public/images/work.svg" width="250" />
        <h1 className="login-header">Ah!garra</h1>
        <p className="login-description">
          O Ah!garra é uma plataforma de auto-profissionalização que possibilita a obtenção de
          bolsas para estudantes que se engajam em atividades de curta duração.
        </p>
        <div className="login-form">
          {displayForm ? (
            <div className="login-full-form">
              <form>
                <input type="email" required placeholder="Email" />
                <input type="password" required placeholder="Senha" />
                <Link to="/public/courses">

                  <button type="button" className="button-login">Login</button>
                </Link>
              </form>
            </div>
          ) : (
            <div>
              <button className="login-email" onClick={() => setDisplayForm(true)}>Acessar com e-mail</button>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Acessar com Google"
                onSuccess={null}
                onFailure={null}
                cookiePolicy="single_host_origin"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default login;
