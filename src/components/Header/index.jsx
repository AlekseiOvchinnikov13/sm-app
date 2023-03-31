import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from './img/sma-logo.svg';

import './scss/style.scss';

import classNames from "classnames";
import {menuItems} from "../../data/data";
import ModalWindow from "../ModalWindow";
import FormOrder from "../Forms/FormOrder";

const Header = ({className}) => {
  const classes = classNames('header', className)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
                  onClick={() => setIsModalOpen(true)}
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
      {isModalOpen &&
        <ModalWindow
          title={'Оставить заявку'}
          visible={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
          className={'modal-form-order'}
          withClose
        >
          <FormOrder/>
        </ModalWindow>}
    </header>
  )
}

export default Header;
