import React from "react";

import './scss/style.scss';
import classNames from "classnames";

import phoneIcon from './img/phone-icon.svg';
import emailIcon from './img/email-icon.svg';

const ContactPoint = ({text, className, isPhone, isEmail}) => {
  const classes = classNames('contact-point',
    className,
    {'contact-point-phone': isPhone},
    {'contact-point-email': isEmail})

  const href = str => isPhone
    ? `tel:${str.replaceAll(' ', '').replaceAll('-', '')}`
    : `mailto:${str}`

  const img = isEmail ? emailIcon : phoneIcon

  return (
    <>
      {text instanceof Array
        ? <>
          {text.map(element =>
            <a href={href(element)} className={classes} key={element}>
              <img src={img} alt={element} className="contact-point__img"/>
              <p className="contact-point__text">{element}</p>
            </a>
          )}
        </>
        : <a href={href(text)} className={classes}>
          <img src={img} alt={text} className="contact-point__img"/>
          <p className="contact-point__text">{text}</p>
        </a>
      }
    </>
  )
}

export default ContactPoint;
