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
          <p className="left-wrapper__copyright footer-text">
            &copy;&nbsp;ООО "УМНЫЕ МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ", 2022{currentYear > 2022 && `-${currentYear}`}, Казань
            <br/>
            МИНЦИФРЫ в реестре №15640
          </p>
          <a href="#" className="left-wrapper__phone footer-text"></a>
          <a href="mailto:infoit@smartapp.su" className="left-wrapper__email footer-text">infoit@smartapp.su</a>
        </div>
        <div className="footer__right-wrapper">
          <a href={policyLink} className="right-wrapper__policy footer-text">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
