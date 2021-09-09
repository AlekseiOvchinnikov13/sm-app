import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import ListPoint from "../../../ListPoint";
import StepOnBackground from "./-StepsOnBackground";

const SectionPictureBackground = ({title, arrayText, arrayTextForSteps, arrayImg, className, bgImg}) => {
  const classes = classNames('section-picture-background container', className)
  const style = {background: `center / contain no-repeat url(${bgImg})`}

  return (
    <section className={classes}>
      <div className="section-picture-background__left-block">
        <PageSubTitle text={title} className='section-picture-background__title'/>
        <ul className='section-picture-background__list'>
          {arrayText.map(point =>
            <ListPoint key={point} text={point} className='blue'/>
          )}
        </ul>
      </div>
      <div className="section-picture-background__right-block">
        {window.innerWidth > 1100 && <div className="section-picture-background__bg" style={style}/>}
        <StepOnBackground
          arrayTitles={arrayTextForSteps}
          arrayImgs={arrayImg}
        />
      </div>
    </section>
  )
}

export default SectionPictureBackground;
