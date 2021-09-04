import React from "react";
import {Link} from "react-router-dom";
import logo from './img/sma-logo.svg';

import './scss/style.scss';


const Header = props => {
  const menuItems = [
    {title: 'Услуги', href: '/services'},
    {title: 'Продукты', href: '/products'},
    {title: 'Контакты', href: '/contacts'}
  ]

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' alt='logo' src={logo}/>
      </Link>
      <ul className="header__menu">
        {menuItems.map(menuItem =>
          <li className="menu-item" key={menuItem.title}>
            <Link className='menu-link' to={menuItem.href}>
              {menuItem.title}
            </Link>
          </li>)}
      </ul>
    </header>
  )
}

export default Header;
