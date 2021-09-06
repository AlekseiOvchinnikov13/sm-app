import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";
import ServiceCard from "./-ServiceCard";
import {servicesArray} from "../../../data/data";

const Services = props => (
  <>
    <Header className='shadow'/>
    <section className="services-content container">
      <PageTitle text='Услуги' className='services-content__title'/>
      <div className="services-content__card-wrapper">
        {servicesArray.map(service =>
          <ServiceCard
            key={service.title}
            title={service.title}
            text={service.text}
            arrayPoints={service.points}
          />
        )}
      </div>
    </section>
    <Footer/>
  </>
)

export default Services
