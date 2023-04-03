import React from "react";

import './scss/style.scss';

import Header from "../../Header";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";
import {contactsArray} from "../../../data/data";
import ContactCard from "./-ContactCard";
import PhoneCircle from "../../PhoneCircle";

const Contacts = () => (
  <>
    <Header className='shadow'/>
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
    <PhoneCircle/>
  </>
)

export default Contacts
