import React from "react";

import './scss/style.scss';
import classNames from "classnames";
import PageSubTitle from "../../../PageSubTitle";
import InstructionLink from "../-InstructionLink";

const SectionColorText = ({title, listOfLinks, price, listOfText, className}) => {
  const classes = classNames('section-color-text container', className)
  const {0: linksArray} = Object.values(listOfLinks)

  return (
    <section className={classes}>
      <div className="left-block">
        <PageSubTitle text={title} className='left-block__title color-white'/>
        {linksArray.map(link =>
          <InstructionLink
            key={link.text}
            text={link.text}
            href={link.href}
          />
        )}
        <p className="left-block__price">{price}</p>
      </div>
      <div className="right-block">
        {listOfText.map(paragraph =>
          <p key={paragraph} className="right-block__text">{paragraph}</p>
        )}
      </div>
    </section>
  )

}

export default SectionColorText;
