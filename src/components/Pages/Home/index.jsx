import React from "react";
import Header from "../../Header";

import './scss/style.scss';

import bg from './img/bg-main.jpg';
import bgMobile from './img/bg-mobile.jpg';

import ProductCard from "./-ProductCard";
import PageTitle from "../../PageTitle";
import SubTitle from "./-SubTitle";
import CompetenceCard from "./-CompetenceCard";
import Footer from "../../Footer";
import {brandsArray, competenceCards, productCards} from "../../../data/data";

const Home = props => (
  <>
    <Header/>
    <img src={window.innerWidth <= 834 ? bgMobile : bg} alt='bg' className='bg-image'/>
    <section className="top-section container inner-container">
      <PageTitle
        className="top-section__title"
        text='Разработка и внедрение сложного программного обеспечения'
      />
      <button className="top-section__btn" id='link-with-us'>Связаться с нами</button>
    </section>
    <section className="middle-section container">
      <div className="product-cards-wrapper">
        {productCards.map(card =>
          <ProductCard
            key={card.title}
            title={card.title}
            text={card.text}
            href={card.href}
            className={card.className}
            alternativeText={card.alternativeText}
            img={card.img}
            textPosition={card.textPosition}
          />
        )}
      </div>
      <div className="competencies-wrapper inner-container">
        <SubTitle text='Чем мы занимаемся' className='competencies-wrapper__title'/>
        <div className="competence-card-wrapper">
          {competenceCards.map(card =>
            <CompetenceCard
              key={card.title}
              title={card.title}
              text={card.text}
              linkText={card.linkText}
              href={card.href}
              img={card.img}
              className={card.className}
            />
          )}
        </div>
      </div>
      <div className="clients-wrapper inner-container">
        <SubTitle text='Наши клиенты' className='clients-wrapper__title'/>
        <div className="clients-brands-wrapper">
          {brandsArray.map(brand =>
            <img src={brand.img} alt={brand.tooltip} key={brand.tooltip}/>
          )}
        </div>
      </div>
    </section>
    <Footer/>
  </>
)

export default Home
