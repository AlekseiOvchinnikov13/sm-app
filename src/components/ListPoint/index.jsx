import React from "react";

import './scss/style.scss';
import classNames from "classnames";

const ListPoint = ({text, className}) => {
  const classes = classNames('list-item', className)
  return (
    <li className={classes}>{text}</li>
  )
}

export default ListPoint;
