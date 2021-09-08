import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";

import ProductCard from "./-ProductCard";
import {currentProductsData} from "../../../data/data";

const Products = props => (
  <>
    <Header className='shadow'/>
    <section className="products-content container">
      <PageTitle text='Продукты' className='products-content__title'/>
      <div className="products-content__card-wrapper">
        {currentProductsData.map(card =>
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

export default Products
