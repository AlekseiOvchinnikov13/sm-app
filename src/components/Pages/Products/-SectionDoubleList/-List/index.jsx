import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import ListPoint from "../../../../ListPoint";

const List = ({arrayListItems, className, colorPoint}) => {
  const classes = classNames('list', className)

  return (
    <ul className={classes}>
      {arrayListItems.map(item =>
        <ListPoint className={colorPoint} key={item.text}>
          {item.title && <p className='list-point__title'>{item.title}</p>}
          {item.text && <p className='list-point__text'>{item.text}</p>}
        </ListPoint>
      )}
    </ul>
  )
}

export default List;
