import React from "react";

import './scss/style.scss';
import CardWithIcon from "./-CardWithIcon";

const CardsWithIcons = ({arrayItems}) => (
  <div className='cards-with-icons-wrapper'>
    {arrayItems.map((item) =>
      <CardWithIcon
        key={item.text}
        text={item.text}
        icon={item.icon}
        bg={item.bg}
      />
    )}
  </div>
)


export default CardsWithIcons;
