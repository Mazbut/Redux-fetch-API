import React from 'react';
import './Header.css';
import logo from '../../img/Logo.png';
export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="https://docs.google.com/document/d/1pEuR2hOwps4AQ7vPlxlGBCP4Jbop2MYGCU4aKxfe-Ec/edit">
              <img src={logo} />
            </a>
          </div>
          <div className="links">
            <ul>
              <li>О нас</li>
              <li>Партнеры</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
