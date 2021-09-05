import React from "react";

import './scss/style.scss';
import classNames from "classnames";

const Footer = ({className}) => {
  const classes = classNames('footer', className)

  return (
    <footer className={classes}>
        <div className="footer__left-wrapper">
          <p className="left-wrapper__copyright footer-text">&copy;&nbsp;Smart mobile applications, 2021</p>
          <a href="tel:+71334736448" className="left-wrapper__phone footer-text">+7 133 473 64 48</a>
          <a href="mailto:sma@post.com" className="left-wrapper__email footer-text">sma@post.com</a>
        </div>
      <div className="footer__right-wrapper">
        <a href="#" className="right-wrapper__policy footer-text">Политика конфиденциальности</a>
      </div>
    </footer>
  )
}

export default Footer;
