import React from "react";

import Header from "../../../Header";
import Footer from "../../../Footer";
import PageTitle from "../../../PageTitle";
import {
  azsSectionColorText as dataSCT,
  azsSectionListBackground as dataSLB,
  azsSectionPictureBackground as dataSPB
} from "../../../../data/data";
import SectionColorText from "../-SectionColorText";
import SectionPictureBackground from "../-SectionPictureBackground";
import SectionListBackground from "../-SectionListBackground/indes";

const AZS = props => (
  <>
    <Header className='shadow'/>
    <PageTitle text='Безоператорные АЗС' className='container products-title azs-title'/>
    <SectionColorText
      title={dataSCT.title}
      listOfLinks={dataSCT.listOfLinks}
      price={dataSCT.price}
      listOfText={dataSCT.listOfText}
      className='azs-top-section orange-section'
    />
    <SectionPictureBackground
      title={dataSPB.title}
      arrayText={dataSPB.arrayText}
      arrayTextForSteps={dataSPB.arrayTextForSteps}
      bgImg={dataSPB.bgImg}
      className='azs-section-picture-background'
    />
    <SectionListBackground
      title={dataSLB.title}
      arrayItems={dataSLB.arrayItems}
      className='azs-section-list-background section-list-background-orange'
    />
    <Footer/>
  </>
)

export default AZS;
