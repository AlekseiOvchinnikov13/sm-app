import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";
import ServiceCard from "./-ServiceCard";

const Services = props => {
  const servicesArray = [
    {
      title: 'Разработка ПО на заказ',
      text: 'Мы осуществляем полный цикл разработки мобильных и веб приложений, начиная от создания софта с нуля, закрывая индивидуальные потребности заказчика, до адаптации при необходимости имеющихся систем',
      points: ['Разработка с нуля мобильных и веб приложений',
        'Внедрение и поддержка',
        'Модернизация и усовершенствование',
        'Интеграция мобильных приложений']
    },
    {
      title: 'Аудит, анализ и внедрение бизнес-процессов',
      text: 'Проведем комплексные мероприятия по IT консалтингу. Определим спектр бизнес-задач, соберем данные, проанализируем конкурентов. Оценим возможности технической реализации, обеспечим внедрение и поддержку',
      points: ['Аудит IT инфраструктуры',
        'Формирование стратегии',
        'Разработка и развитие архитектуры',
        'Подбор оптимальных платформ',
        'Анализ бизнес процессов',
        'Тестирование',
        'Внедрение, поддержка и обеспечение бесперебойной',
        'работы продукта']
    }
  ]

  return (
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
}

export default Services
