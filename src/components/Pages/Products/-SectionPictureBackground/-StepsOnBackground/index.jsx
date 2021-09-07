import React from "react";

import './scss/style.scss';
import Step from "./-Step";

const StepsOnBackground = ({arrayTitles, arrayImgs}) => (
  <div className='section-picture-background__cards-wrapper'>
    {arrayTitles.map((stepTitle, index) =>
      <Step
        key={stepTitle}
        title={stepTitle}
        img={arrayImgs && arrayImgs[index]}
      />
    )}
  </div>
)

export default StepsOnBackground;
