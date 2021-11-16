import React, { useState } from 'react';

import listaDeTramites from '../../assets/temp/demo-list-tramites.svg';
import tramites1 from '../../assets/temp/demo-tramites0.svg';
import tramites2 from '../../assets/temp/demo-tramites1.svg';
import tramites3 from '../../assets/temp/demo-tramites2.svg';
import demoQR from '../../assets/temp/demo-qr.svg';

const steps = {
  tramites0: listaDeTramites,
  tramites1,
  tramites2,
  tramites3,
  tramites4: demoQR
}

export const Tramites = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="document-container" onClick={() => setCount(count + 1)}>
      <img className="docs-image" src={steps[`tramites${count}`]} />
    </div>
  )
}