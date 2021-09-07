import React from "react";

import './scss/style.scss';
import classNames from "classnames";

const Step = ({title, img}) => {
  const classes = classNames('step-on-background', {'with-images': img})

  return (
    <div className={classes}>
      <p className="step-on-background__text">{title}</p>
      {img && <img src={img} alt={title} className='step-on-background__img'/>}
    </div>
  )
}

export default Step;
