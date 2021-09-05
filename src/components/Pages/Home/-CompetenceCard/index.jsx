import React from "react";

import './scss/style.scss';
import {Link} from "react-router-dom";
import arrow from './img/arrow.svg';
import classNames from "classnames";
import PropTypes from "prop-types";

const CompetenceCard = ({title, text, linkText, href, img, className}) => {
  const classes = classNames('competence-card', className)

  return (
    <div className={classes}>
      <img src={img} alt={title} className="competence-card__img"/>
      <div className="competence-card__text-block">
        <div className="text-block__text-wrapper">
          <h6 className="text-block__title">{title}</h6>
          <p className="text-block__text"
             dangerouslySetInnerHTML={{
               __html: text
             }}
          />
        </div>
        <div className="text-block__link-wrapper">
          <Link className='text-block__link' to={href}>{linkText}</Link>
          <img src={arrow} alt="arrow" className='text-block__arrow'/>
        </div>
      </div>
    </div>
  )
}

CompetenceCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default CompetenceCard;
