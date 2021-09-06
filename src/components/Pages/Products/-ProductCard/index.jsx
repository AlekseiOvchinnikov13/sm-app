import React from "react";
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";

import './scss/style.scss';
import {Link} from "react-router-dom";

const ProductCard = ({title, text, img, href, className}) => {
  const classes = classNames('products-card', className)
  return (
    <Link className={classes} to={href}>
      <img src={img} alt={title} className='products-card__img'/>
      <div className="products-card__text-wrapper">
        <PageSubTitle text={title} className='text-wrapper__title'/>
        <p className="text-wrapper__description">{text}</p>
      </div>
    </Link>
  )
}

export default ProductCard;
