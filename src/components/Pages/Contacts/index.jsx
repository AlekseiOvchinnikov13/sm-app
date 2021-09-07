import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";
import {contactsArray} from "../../../data/data";
import ContactCard from "./-ContactCard";

const Contacts = props => {

  return (
    <>
      <Header/>
      <section className="contacts-content container">
        <PageTitle text='Контакты' className='contacts-content__title'/>
        <div className="contacts-content__card-wrapper">
          {contactsArray.map(contact =>
            <ContactCard
              key={contact.title}
              title={contact.title}
              phone={contact.phone}
              email={contact.email}
            />
          )}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contacts
