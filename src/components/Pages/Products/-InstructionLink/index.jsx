import React from "react";

import './scss/style.scss';
import iconDownload from './img/icon-download.svg';
import {Link} from "react-router-dom";

const InstructionLink = ({text, href}) => (
  <Link className='instruction-download-wrapper' to={href}>
    <img className='instruction-download-wrapper__img' src={iconDownload} alt="Скачать"/>
    <p className='instruction-download-wrapper__text'>{text}</p>
  </Link>
)

export default InstructionLink;
