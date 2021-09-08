import React from "react";
import classNames from "classnames";

import './scss/style.scss';

const SubTitle = ({text, className}) => {
  const classes = classNames('subtitle', className)

  return <h2 className={classes}>{text}</h2>
}

export default SubTitle;
