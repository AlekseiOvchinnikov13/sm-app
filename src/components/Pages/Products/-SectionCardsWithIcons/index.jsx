import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import CardsWithIcons from "./-CardsWithIcons";

const SectionCardsWithIcons = ({title, arrayItems, className}) => {
  const classes = classNames('section-cards-with-icons container', className)

  return (
    <section className={classes}>
      <PageSubTitle text={title} className='section-cards-with-icons__title'/>
      <CardsWithIcons
        arrayItems={arrayItems}
      />
    </section>
  )
}

export default SectionCardsWithIcons;
