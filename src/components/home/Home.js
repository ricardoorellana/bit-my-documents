import React from 'react';

import bgLanding from '../../assets/bg-landing.svg';

export const Home = () => (
  <div className="home-container" style={{ backgroundImage: `url(${bgLanding})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundPositionY: "initial" }}>
    <p className="title">¡Bienvenido!</p>
    <p className="description">
      Aquí podrás adquirir tus documentos y hacer tus trámites sin filas y en tiempo récord.
    </p>
  </div>
)