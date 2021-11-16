import React from 'react';

import logo from '../../assets/logo.svg';

export const NavBar = props => (
  <div className="navbar-bg">
    <img src={logo} width="auto" height="79px" />
    <p>
      Mis documentos
    </p>
    <p>
      Tr&aacute;mites
    </p>
    {props.children}
  </div>
)