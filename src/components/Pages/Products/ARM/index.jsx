import Header from "../../../Header";
import PageTitle from "../../../PageTitle";
import {
  armSectionColorText as dataSCT,
  armSectionListBackground as dataSLB,
  armSectionDoubleList as dataSDL
} from "../../../../data/data";
import SectionColorText from "../-SectionColorText";
import SectionListBackground from "../-SectionListBackground/indes";
import SectionDoubleList from "../-SectionDoubleList";
import React from "react";
import Footer from "../../../Footer";

const ARM = () => {

  return (
    <>
      <Header className='shadow'/>
      <PageTitle text='Мобильное приложение "АРМ Механика"' className='container products-title arm-title'/>
      <SectionColorText
        title={dataSCT.title}
        listOfLinks={dataSCT.listOfLinks}
        price={dataSCT.price}
        listOfText={dataSCT.listOfText}
        className='arm-top-section darkblue-section'
      />
      <SectionListBackground
        title={dataSLB.title}
        arrayItems={dataSLB.arrayItems}
        className='arm-section-list-background section-list-background-bluegreen'
      />
      <SectionDoubleList
        title={dataSDL.title}
        firstList={dataSDL.firstList}
        className='arm-section-double-list'
        colorPoint='green'
      />
      <Footer/>
    </>
  )
}

export default ARM;