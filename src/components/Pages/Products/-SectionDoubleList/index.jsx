import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import List from "./-List";

const SectionDoubleList = ({title, firstList, secondList, className, colorPoint}) => {
  const classes = classNames('section-double-list container', className)

  return (
    <section className={classes}>
      <PageSubTitle text={title} className='section-double-list__title'/>
      <div className="section-double-list__wrapper">
        {firstList && <List className='section-double-list__list' arrayListItems={firstList} colorPoint={colorPoint}/>}
        {secondList && <List className='section-double-list__list' arrayListItems={secondList} colorPoint={colorPoint}/>}
      </div>
    </section>
  )
}

export default SectionDoubleList;
