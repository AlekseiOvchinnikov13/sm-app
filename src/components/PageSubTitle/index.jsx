import React from "react";
import classNames from "classnames";

import './scss/style.scss';

const PageSubTitle = ({text, className}) => {
  const classes = classNames('page-subtitle', className)

  return <h4 className={classes}>{text}</h4>
}

export default PageSubTitle;
