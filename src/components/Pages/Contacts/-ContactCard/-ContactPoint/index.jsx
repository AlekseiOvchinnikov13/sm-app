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

  const href = isPhone
    ? `tel:${text.replaceAll(' ', '').replaceAll('-', '')}`
    : `mailto:${text}`

  const img = isEmail ? emailIcon : phoneIcon

  return (
    <a href={href} className={classes}>
      <img src={img} alt={text} className="contact-point__img"/>
      <p className="contact-point__text">{text}</p>
    </a>
  )
}

export default ContactPoint;
