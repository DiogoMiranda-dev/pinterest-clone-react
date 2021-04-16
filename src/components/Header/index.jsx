import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';

import './style.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-icon">
          <PinterestIcon style={{ fontSize: 40 }} />
        </div>
        <h3>Pinterest</h3>
      </div>

      <nav>
        <ul className="nav-item nav-ul">
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Negócios</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>

        <div className="buttons">
          <button className="login">Entrar</button>
          <button className="signup">Criar conta</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
