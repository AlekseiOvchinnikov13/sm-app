import React from "react";

import './scss/style.scss';
import classNames from "classnames";

const Block = ({number, title, icon, arrowIcon, className}) => {
  const classes = classNames('', className)

  return (
    <div className={classes}>
      {icon && <img src={icon} alt={title} className='block__icon'/>}
      {arrowIcon && <img src={arrowIcon} alt={'arrow'} className='block__arrow'/>}
      {!!number && <span className="block__number">{number}</span>}
      {title && <p className="block__title">{title}</p>}
    </div>
  )
}

export default Block;
