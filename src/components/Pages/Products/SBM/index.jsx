import React from "react";

import Header from "../../../Header";
import Footer from "../../../Footer";
import PageTitle from "../../../PageTitle";

import {
  sbmSectionCardsWithIcons as dataSCW,
  sbmSectionColorText as dataSCT,
  sbmSectionListBackground as dataSLB,
  sbmSectionPictureBackground as dataSPB
} from "../../../../data/data";

import SectionColorText from "../-SectionColorText";
import SectionPictureBackground from "../-SectionPictureBackground";
import SectionListBackground from "../-SectionListBackground/indes";
import SectionCardsWithIcons from "../-SectionCardsWithIcons";


const SBM = props => {

  return (
    <>
      <Header className='shadow'/>
      <PageTitle text='Диспетчеризация автобусов' className='container products-title sbm-title'/>
      <SectionColorText
        title={dataSCT.title}
        listOfLinks={dataSCT.listOfLinks}
        price={dataSCT.price}
        listOfText={dataSCT.listOfText}
        className='smb-top-section blue-section'
      />
      <SectionPictureBackground
        title={dataSPB.title}
        arrayText={dataSPB.arrayText}
        arrayTextForSteps={dataSPB.arrayTextForSteps}
        arrayImg={dataSPB.arrayImg}
        bgImg={dataSPB.bgImg}
        className='sbm-section-picture-background'
      />
      <SectionListBackground
        title={dataSLB.title}
        arrayItems={dataSLB.arrayItems}
        className='sbm-section-list-background section-list-background-blue'
      />
      <SectionCardsWithIcons
        title={dataSCW.title}
        arrayItems={dataSCW.arrayItems}
        className='sbm-section-cards-with-icons'
      />
      <Footer/>
    </>
  )
}

export default SBM;
