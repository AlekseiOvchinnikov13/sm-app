import React from "react";

import './scss/style.scss';
import classNames from "classnames";

const ListPoint = ({text, className, children}) => {
  const classes = classNames('list-item', className)

  return (
    <li className={classes}>
      {children ? children : text}
    </li>
  )
}

export default ListPoint;
