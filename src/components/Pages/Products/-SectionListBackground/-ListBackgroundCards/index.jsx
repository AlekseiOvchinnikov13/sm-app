import React from "react";

import './scss/style.scss';
import Card from "./-Card";

const ListBackgroundCards = ({arrayItems}) => (
  <div className='list-background-cards__wrapper'>
    {arrayItems.map(item =>
      <Card
        key={item.text}
        title={item.title}
        text={item.text}
      />
    )}
  </div>
)

export default ListBackgroundCards;
