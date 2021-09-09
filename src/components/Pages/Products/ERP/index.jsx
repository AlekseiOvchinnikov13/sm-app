import React from "react";

import './scss/style.scss';
import Header from "../../../Header";
import Footer from "../../../Footer";
import PageTitle from "../../../PageTitle";
import SectionColorText from "../-SectionColorText";
import {
  erpSectionAutomation,
  erpSectionAutomationMobile,
  erpSectionColorText as dataSCT,
  erpSectionDoubleList as dataSDL
} from "../../../../data/data";
import SectionDoubleList from "../-SectionDoubleList";
import Block from "./-Block";

const ERP = props => {
  const dataAutomitionBlock = window.innerWidth > 1100 ? erpSectionAutomation : erpSectionAutomationMobile;

  return (
    <>
      <Header className='shadow'/>
      <PageTitle text='Erp для транспортной компании' className='container products-title erp-title'/>
      <SectionColorText
        title={dataSCT.title}
        listOfLinks={dataSCT.listOfLinks}
        price={dataSCT.price}
        listOfText={dataSCT.listOfText}
        className='erp-top-section purple-section'
      />
      <section className='section-attention container inner-container'>
        <div className="section-attention__inner-wrapper">
          <h5 className="section-attention__title">
            Обращаем внимание, что все данные будут храниться на вашем сервере
          </h5>
        </div>
      </section>
      <SectionDoubleList
        title={dataSDL.title}
        firstList={dataSDL.firstList}
        secondList={dataSDL.secondList}
        className='erp-section-double-list'
        colorPoint='yellow'
      />
      <section className="section-automation">
        <div className="section-automation__wrapper container inner-container">
          {dataAutomitionBlock.map((block, index) =>
            <div key={index} className='section-automation__column'>
              {block.map((items, i) =>
                <Block
                  key={i}
                  number={items.number}
                  icon={items.icon}
                  title={items.title}
                  arrowIcon={items.arrowIcon}
                  className={`section-automation__block ${items.className}`}
                />
              )}
            </div>
          )}
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default ERP;
