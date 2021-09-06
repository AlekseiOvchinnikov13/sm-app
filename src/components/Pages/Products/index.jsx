import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";

import ProductMap from './-ProductCard/img/products-card-map.png';
import ProductChart from './-ProductCard/img/products-card-chart.png';
import ProductPhone from './-ProductCard/img/products-card-phone.png';
import ProductAZS from './-ProductCard/img/products-card-azs.png';
import ProductCard from "./-ProductCard";

const Products = props => {
  const productCards = [
    {
      title: 'Диспетчеризация автобусов',
      text: 'SaaS решение для транспортных компаний, занимающихся перевозкой пассажиров',
      img: ProductMap,
      href: '/products/sbm'
    },
    {
      title: 'Система планирование ресурсов предприятия',
      text: 'Организация взаимодействия всех ресурсов в рамках одной транспортной компании ',
      img: ProductChart,
      href: '/products/erp'
    },
    {
      title: 'Мобильное приложение водителя',
      text: 'Позволяет оптимизировать процесс перевозки, предоставляет водителю информацию по рейсу, помогает быстрому взаимодействию с логистом',
      img: ProductPhone,
      href: '/products/mad'
    },
    {
      title: 'Безоператорные АЗС',
      text: 'компактная автозаправочная установка, защищенная от разливов и возгорания, адаптированная для оперативного перемещения с объекта на объект',
      img: ProductAZS,
      href: '/products/azs'
    },
  ]

  return (
    <>
      <Header className='shadow'/>
      <section className="products-content container">
        <PageTitle text='Продукты' className='products-content__title'/>
        <div className="products-content__card-wrapper">
          {productCards.map(card =>
            <ProductCard
              key={card.title}
              img={card.img}
              text={card.text}
              title={card.title}
              href={card.href}
            />
          )}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Products
