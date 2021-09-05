import React from "react";
import classNames from "classnames";

import './scss/style.scss';

const PageTitle = ({text, className}) => {
  const classes = classNames('page-title', className)

  return <h1 className={classes}>{text}</h1>
}

export default PageTitle;
