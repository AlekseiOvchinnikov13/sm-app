import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import ListBackgroundCards from "./-ListBackgroundCards";

const SectionListBackground = ({title, arrayItems, className}) => {
  const classes = classNames('section-list-background container inner-container', className)

  return (
    <section className={classes}>
      <div className="section-list-background__wrapper">
        <ListBackgroundCards arrayItems={arrayItems}/>
        <PageSubTitle text={title} className='section-list-background__title'/>
      </div>
    </section>
  )
}

export default SectionListBackground;
