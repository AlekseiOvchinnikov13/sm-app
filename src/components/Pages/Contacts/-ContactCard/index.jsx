import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import ContactPoint from "./-ContactPoint";

const ContactCard = ({title, phone, email, className}) => {
  const classes = classNames('contact-card', className)

  return (
    <div className={classes}>
      <PageSubTitle className='contact-card__title' text={title}/>
      <div className="contact-card__text-wrapper">
        {phone && <ContactPoint text={phone} isPhone/>}
        {email && <ContactPoint text={email} isEmail/>}
      </div>
    </div>
  )
}

export default ContactCard
