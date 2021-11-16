import React, { useState } from 'react';

import demoDocs from '../../assets/temp/demo-docs.svg';
import demoQR from '../../assets/temp/demo-qr.svg';
import previewDoc from '../../assets/temp/demo-preview-doc.svg';

const steps = {
  step1: demoDocs,
  step2: demoQR,
  step3: previewDoc
};
export const Documents = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="document-container" onClick={() => setStep(step + 1)}>
      <img className="docs-image" src={steps[`step${step}`]} />
    </div>
  )
}