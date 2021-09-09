import React from "react";

import './scss/style.scss';
import Header from "../../../Header";
import Footer from "../../../Footer";
import PageTitle from "../../../PageTitle";
import SectionColorText from "../-SectionColorText";
import {
  madSectionCardsWithIcons as dataSCW,
  madSectionColorText as dataSCT,
  madSectionDoubleList as dataSDL,
  madSectionListBackground as dataSLB,
  madSectionScreens
} from "../../../../data/data";
import SectionListBackground from "../-SectionListBackground/indes";
import SectionCardsWithIcons from "../-SectionCardsWithIcons";
import SectionDoubleList from "../-SectionDoubleList";

import sectionBgGreen from './img/mad-bg-section.png';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MAD = props => {
  const sectionStyle = {background: `center / contain no-repeat url(${sectionBgGreen})`}

  const settingsSlider = {
    showThumbs: false,
    autoPlay: true,
    selectedItem: 1,
    showStatus: false,
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 100,
    showIndicators: false
  };

  const phonesBlock = madSectionScreens.map((pic, index) =>
    <div className='section-pictures-on-background__img-wrapper' key={index}>
      <img src={pic} alt="screenshot" className='section-pictures-on-background__img'/>
    </div>
  )

  return (
    <>
      <Header className='shadow'/>
      <PageTitle text='Мобильное приложение водителя' className='container products-title mad-title'/>
      <SectionColorText
        title={dataSCT.title}
        listOfLinks={dataSCT.listOfLinks}
        price={dataSCT.price}
        listOfText={dataSCT.listOfText}
        className='mad-top-section green-section'
      />
      <SectionListBackground
        title={dataSLB.title}
        arrayItems={dataSLB.arrayItems}
        className='mad-section-list-background section-list-background-green'
      />
      <SectionDoubleList
        title={dataSDL.title}
        firstList={dataSDL.firstList}
        secondList={dataSDL.secondList}
        className='mad-section-double-list'
        colorPoint='green'
      />
      <section className='section-pictures-on-background container' style={sectionStyle}>
        {window.innerWidth > 1100 && phonesBlock}
        {window.innerWidth <= 1100 &&
        <Carousel {...settingsSlider}>
          {phonesBlock}
        </Carousel>}
      </section>
      <SectionCardsWithIcons
        title={dataSCW.title}
        arrayItems={dataSCW.arrayItems}
        className='mad-section-cards-with-icons'
      />
      <Footer/>
    </>
  )
}

export default MAD;
