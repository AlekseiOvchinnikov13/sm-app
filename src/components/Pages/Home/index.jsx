import React from "react";
import Header from "../../Header";

import './scss/style.scss';
import bg from './img/bg-main.jpg';

import cardMap from './-ProductCard/img/card-map.png';
import cardChart from './-ProductCard/img/card-chart.png';
import cardPhone from './-ProductCard/img/card-phone.png';
import cardArrow from './-ProductCard/img/card-arrow.svg';
import ProductCard from "./-ProductCard";

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
      href: '/products/sbm',
      className: 'empty',
      textPosition: 'none',
      img: cardArrow
    }
  ]

  return (
    <>
      <Header/>
      <img src={bg} alt='bg' className='bg-image'/>

      <section className="top-section inner-container">
        <h1 className="top-section__title">Разработка и внедрение сложного программного обеспечения</h1>
        <button className="top-section__btn" id='link-with-us'>Связаться с нами</button>
      </section>
      <section className="middle-section">
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
      </section>
    </>
  )
}

export default Home
