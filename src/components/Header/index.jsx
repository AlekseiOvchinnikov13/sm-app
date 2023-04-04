import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from './img/sma-logo.svg';

import './scss/style.scss';

import classNames from "classnames";
import {menuItems} from "../../data/data";
import ModalWindow from "../ModalWindow";
import FormOrder from "../Forms/FormOrder";
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'

const Header = ({className}) => {
  const classes = classNames('header', className)
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false)
  const modalOrderHandler = () => setIsModalOrderOpen(!isModalOrderOpen)

  const [isSuccess, setIsSuccess] = useState(false)
  const successHandler = () => setIsSuccess(!isSuccess);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false)
  const modalSuccessHandler = () => setIsModalSuccessOpen(!isModalSuccessOpen)

  useEffect(() => {
    isSuccess && modalSuccessHandler() && successHandler()
  }, [isSuccess])

  return (
    <header className={classes}>
      <div className="header-inner-wrapper container">
        <Link to='/'>
          <img className='header__logo' alt='logo' src={logo}/>
        </Link>
        <ul className="header__menu">
          {menuItems.map(menuItem =>
            <li className="menu-item" key={menuItem.title}>
              {menuItem.isBtn
                ? <button
                  className='menu-link menu-link-button'
                  onClick={modalOrderHandler}
                >
                  {menuItem.title}
                </button>
                : <NavLink className='menu-link' activeClassName='menu-link-active' to={menuItem.href}>
                  {menuItem.title}
                </NavLink>
              }
            </li>)}
        </ul>
      </div>
      {isModalOrderOpen &&
        <ModalWindow
          title={'Оставить заявку'}
          visible={isModalOrderOpen}
          onClose={modalOrderHandler}
          className={'modal-form-order'}
          withClose
        >
          <CustomScroll>
            <FormOrder
              onClose={modalOrderHandler}
              successHandler={successHandler}
            />
          </CustomScroll>
        </ModalWindow>}
      {isModalSuccessOpen &&
        <ModalWindow
          visible={isModalSuccessOpen}
          onClose={modalSuccessHandler}
          title={'Спасибо! Форма отправлена!'}
        >
          <button className={'purple-btn'} style={{width: '100%'}} onClick={modalSuccessHandler}>Отлично</button>
        </ModalWindow>}
    </header>
  )
}

export default Header;
