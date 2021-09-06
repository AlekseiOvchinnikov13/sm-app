import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import ListPoint from "../../../ListPoint";

const ServiceCard = ({title, text, arrayPoints, className}) => {
  const classes = classNames('service-card', className)

  return (
    <div className={classes}>
      <PageSubTitle className='service-card__title' text={title}/>
      <div className="service-card__text-wrapper">
        <p className="text-wrapper__description">{text}</p>
        <ul className="text-wrapper__points">
          {arrayPoints.map(point =>
            <ListPoint text={point} className='blue'/>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCard
