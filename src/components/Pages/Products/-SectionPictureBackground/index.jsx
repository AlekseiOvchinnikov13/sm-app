import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import ListPoint from "../../../ListPoint";

const SectionPictureBackground = ({title, arrayText, arrayTextForImg, arrayImg, className, bgImg}) => {
  const classes = classNames('section-picture-background', className)

  return (
    <div className={classes}>
      <div className="section-picture-background__left-block">
        <PageSubTitle text={title} className='section-picture-background__title'/>
        <ul className='section-picture-background__list'>
          {arrayText.map(point =>
            <ListPoint text={point} color='blue' className=''/>
          )}
        </ul>
      </div>
      <div className="section-picture-background__right-block">

      </div>
    </div>
  )
}

export default SectionPictureBackground;
