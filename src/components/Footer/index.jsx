import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import {policyLink} from "../../data/data";

const Footer = ({className}) => {
  const classes = classNames('footer', className)
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes}>
      <div className="footer-inner-wrapper container">
        <div className="footer__left-wrapper">
          <p className="left-wrapper__copyright footer-text">&copy;&nbsp;Smart mobile applications, 2022{currentYear > 2022 && `-${currentYear}`}</p>
          <a href="tel:+71334736448" className="left-wrapper__phone footer-text">+7 133 473 64 48</a>
          <a href="mailto:sma@post.com" className="left-wrapper__email footer-text">sma@post.com</a>
        </div>
        <div className="footer__right-wrapper">
          <a href={policyLink} className="right-wrapper__policy footer-text">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
