import React from "react";
import './scss/style.scss';
import classNames from "classnames";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import arrowImg from './img/card-arrow.svg';

const ProductCard = ({title, text, href, alternativeText, textPosition, img, className}) => {
  const classes = classNames('product-card', className, textPosition)

  return (
    <Link to={href} className={classes}>
      <div className="product-card__inner">
        <h6 className="product-card__title">{title}</h6>
        {text && <p className="product-card__text"
           dangerouslySetInnerHTML={{
             __html: text
           }}
        />}
      </div>
      {img && <img className='product-card__img' src={img} alt={title}/>}
      <div className="product-card__hovered-content">
        <h6 className="alternative-text">{alternativeText}</h6>
        <img src={arrowImg} className='arrow' alt="arrow"/>
      </div>
    </Link>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  href: PropTypes.string,
  alternativeText: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.any,
  textPosition: PropTypes.oneOf(['left', 'center', 'right', 'none'])
}

export default ProductCard;
