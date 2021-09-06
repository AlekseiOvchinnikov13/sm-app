import React from "react";

import './scss/style.scss';
import Header from "../../../Header";
import Footer from "../../../Footer";
import PageTitle from "../../../PageTitle";
import SectionColorText from "../-SectionColorText";
import {sbmSectionColorText as dataSCT, sbmSectionPictureBackground as dataSPB} from "../../../../data/data";
import SectionPictureBackground from "../-SectionPictureBackground";


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
          arrayTextForImg={dataSPB.arrayTextForImg}
          arrayImg={dataSPB.arrayImg}
          bgImg={dataSPB.bgImg}
          className='sbm-section-picture-background'
      />
      <Footer/>
    </>
  )
}

export default SBM;
