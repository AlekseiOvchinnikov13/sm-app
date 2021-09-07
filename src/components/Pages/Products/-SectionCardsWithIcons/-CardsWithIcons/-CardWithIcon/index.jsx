import React from "react";

import './scss/style.scss';

const CardWithIcon = ({text, icon, bg}) => {
  const style = {background: `center / contain no-repeat url(${bg})`}

  return (
    <div className='card-with-icon'>
      <div className="card-with-icon__img" style={style}>
        <img src={icon} alt={text} className="card-with-icon__icon"/>
      </div>
      <p
        className="card-with-icon__text"
        dangerouslySetInnerHTML={{__html: text}}
      />
    </div>
  )
}

export default CardWithIcon;
