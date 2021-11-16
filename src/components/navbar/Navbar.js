import React from 'react';

import logo from '../../assets/logo.svg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from '../home/Home'
import { Documents } from '../documents/Documents'
import { Tramites } from '../tramites/Tramites'

export const NavBar = props => (
  <Router>
    <div className="navbar-bg">
      <Link to="/"><img src={logo} width="auto" height="79px" /></Link>
      <Link to="/documents">
        Mis documentos
      </Link>
      <Link to="/requests">
        Tr&aacute;mites
      </Link>
      {props.children}
    </div>


    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/requests" element={<Tramites />} />
  </Routes>
  </Router>
)