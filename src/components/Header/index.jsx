import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from './img/sma-logo.svg';

import './scss/style.scss';
import classNames from "classnames";


const Header = ({className}) => {
  const menuItems = [
    {title: 'Услуги', href: '/services'},
    {title: 'Продукты', href: '/products'},
    {title: 'Контакты', href: '/contacts'}
  ]
  const classes = classNames('header', className)
  return (
    <header className={classes}>
      <Link to='/'>
        <img className='header__logo' alt='logo' src={logo}/>
      </Link>
      <ul className="header__menu">
        {menuItems.map(menuItem =>
          <li className="menu-item" key={menuItem.title}>
            <NavLink className='menu-link' activeClassName='menu-link-active' to={menuItem.href}>
              {menuItem.title}
            </NavLink>
          </li>)}
      </ul>
    </header>
  )
}

export default Header;
