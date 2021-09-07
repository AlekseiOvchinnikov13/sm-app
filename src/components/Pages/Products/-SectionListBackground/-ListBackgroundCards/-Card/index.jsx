import React from "react";

import './scss/style.scss';

const Card = ({title, text}) => (
  <div className='list-background-card-item'>
    <h5 className="list-background-card-item__title">{title}</h5>
    <p className="list-background-card-item__text">{text}</p>
  </div>
)

export default Card;
