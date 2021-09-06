import React from "react";
import Header from "../../Header";

import './scss/style.scss';

import bg from './img/bg-main.jpg';
import cardMap from './-ProductCard/img/card-map.png';
import cardChart from './-ProductCard/img/card-chart.png';
import cardPhone from './-ProductCard/img/card-phone.png';
import cardArrow from './-ProductCard/img/card-arrow.svg';
import productsImg from './-CompetenceCard/img/competence-products.svg';
import servicesImg from './-CompetenceCard/img/competence-services.svg';
import garavto from './img/garavto.png';
import tateco from './img/tateco.png';
import gazprom from './img/gazprom.png';

import ProductCard from "./-ProductCard";
import PageTitle from "../../PageTitle";
import SubTitle from "./-SubTitle";
import CompetenceCard from "./-CompetenceCard";
import Footer from "../../Footer";

const Home = props => {
  const productCards = [
    {
      title: 'SaaS решения для перевозчиков',
      text: `<ul><li>Оптимизация процессов</li><li>Снижение расходов</li><li>Помощь во внедрении</li></ul>`,
      alternativeText: 'Узнать больше о SaaS решениях для перевозчиков',
      href: '/products/sbm',
      className: 'sbm',
      textPosition: 'right',
      img: cardMap
    },
    {
      title: 'Система планирование ресурсов предприятия',
      text: 'Комплексная автоматизация процессов транспортной компании',
      alternativeText: 'Узнать больше о система планирование ресурсов предприятия',
      href: '/products/erp',
      className: 'erp',
      textPosition: 'center',
      img: cardChart
    },
    {
      title: 'Мобильное приложение водителя ',
      text: 'Подключается к вашей системе, помогает держать  под контролем все этапы погрузки и транспортировки',
      alternativeText: 'Узнать больше о мобильном приложении водителя',
      href: '/products/mad',
      className: 'mad',
      textPosition: 'left',
      img: cardPhone
    },
    {
      title: 'Увидеть все наши проекты',
      alternativeText: 'Узнать больше о мобильном приложении водителя',
      href: '/products',
      className: 'empty',
      textPosition: 'none',
      img: cardArrow
    }
  ]
  const competenceCards = [
    {
      title: 'Внедрение  и поддержка готовых продуктов',
      text: 'когда готовые решения (модели и программы) адаптируются к условиям конкретного пользователя и его задачам только за счет настройки штатных опций',
      linkText: 'Посмотреть продукты',
      href: '/products',
      img: productsImg,
      className: 'competence-card-products'
    },
    {
      title: 'Услуги по разработке и аналитике',
      text: `<ul><li>Разработка ПО на заказ</li><li>Аудит, анализ и внедрение бизнес-процессов</li></ul>`,
      linkText: 'Посмотреть услуги',
      href: '/services',
      img: servicesImg,
      className: 'competence-card-services'
    }
  ]
  const brandsArray = [
    {img: garavto, tooltip: 'Garavto'},
    {img: tateco, tooltip: 'TatEco'},
    {img: gazprom, tooltip: 'Gazprom'}
  ]

  return (
    <>
      <Header/>
      <img src={bg} alt='bg' className='bg-image'/>

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
}

export default Home
