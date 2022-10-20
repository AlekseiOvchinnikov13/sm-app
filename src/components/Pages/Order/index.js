import './scss/style.scss';
import Header from "../../Header";
import PageTitle from "../../PageTitle";
import Footer from "../../Footer";
import React from "react";
import OrderForm from "../../OrderForm";

const Order = () => {
  return (
    <>
      <Header className='shadow'/>
      <section className="order-content container">
        <PageTitle text='Расскажите о своей компании' className='order-content__title'/>
        <OrderForm/>
      </section>
      <Footer/>
    </>
  )
}

export default Order